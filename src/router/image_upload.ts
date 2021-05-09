import * as express from 'express';
const router = express.Router();
const AWS = require('aws-sdk');
import {secret} from '../config/secret_keys';

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const permission = require('../function/permission_verify');
import { sendQuery } from '../config/db';

const ID = secret.s3.ID;
const SECRET = secret.s3.SECRET;
const BUCKET_NAME = secret.s3.BUCKET_NAME;
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/api/image/upload', upload.array('upload'), (req: any, res: any) => {
  if (!permission.isLogin(req.session.passport)) {
    res.send("<script>alert('로그인이 필요합니다.'); location.href='/'; </script>");
    return;
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: uuidv4() + path.extname(req.files[0].originalname), // File name you want to save as in S3
    Body: req.files[0].buffer, // i
    ACL: 'public-read',
  };
  s3.upload(params, async (err: any, data: any) => {
    if (err) throw err;

    await sendQuery(`INSERT INTO image (image_path, image_date) VALUES (?, now())`, [data.Location]);

    res.json({ url: data.Location });
  });
});

module.exports = router;
