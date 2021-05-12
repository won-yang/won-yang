require('dotenv').config();
const AWS = require('aws-sdk');
const ID = process.env.S3_ID;
const SECRET = process.env.S3_SECRET;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
  region: 'ap-northeast-2',
});
const schedule = require('node-schedule');

const sundayInit = new schedule.RecurrenceRule();
sundayInit.tz = 'Etc/UTC';
// sundayInit.dayOfWeek = 0;
// sundayInit.hour = 0;
// sundayInit.minute = 0;
sundayInit.second = 5;

exports.nodeSchedule = schedule.scheduleJob(sundayInit, async () => {
  // 	const notice_rows = await sendQuery(`SELECT post_idx FROM post WHERE DATE(post_date) < DATE_SUB(NOW(), INTERVAL 1 DAY);`);
  // 	const notice_rows = await sendQuery(`DELETE FROM image WHERE DATE(post_date) < DATE_SUB(NOW(), INTERVAL 31 DAY);`);
  // 	notice_rows.forEach(async (row) => {
  //         sendQuery(`DELETE FROM options WHERE post_idx = ?`, [row.post_idx]);
  //         sendQuery(`DELETE FROM post WHERE post_idx = ?`, [row.post_idx]);
  //         sendQuery(`DELETE FROM post_content WHERE post_idx = ?`, [row.post_idx]);
  //         sendQuery(`DELETE FROM tag WHERE post_idx = ?`, [row.post_idx]);
  //         sendQuery(`DELETE FROM thumbnail WHERE post_idx = ?`, [row.post_idx]);
  // 	})
  //s3_image_delete('7c15da07-af36-4313-9fad-f6ad4daa1b17.jpg');
});

const s3_image_delete = async (image_path: any) => {
  s3.upload(
    {
      Bucket: BUCKET_NAME,
      Key: image_path,
    },
    async (err: any, data: any) => {
      if (err) {
        console.log('aws delete error');
      } else console.log('s3 deleteObject ', data);
    },
  );
};