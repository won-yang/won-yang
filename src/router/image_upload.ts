import * as express from 'express';
const router = express.Router();
const AWS = require('aws-sdk');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const permission = require('../function/permission_verify');
import { sendQuery } from '../config/db';

require('dotenv').config();

const S3_ID = process.env.S3_ID;
const S3_SECRET = process.env.S3_SECRET;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: S3_ID,
  secretAccessKey: S3_SECRET,
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
    Bucket: S3_BUCKET_NAME,
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
