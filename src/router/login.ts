import * as express from 'express';
const router = express.Router();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
import { sendQuery } from '../config/db';

require('dotenv').config();

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.KAKAO_CALLBACK_URL;


passport.use(
  'kakao',
  new KakaoStrategy(
    {
      clientID: KAKAO_CLIENT_ID,
      callbackURL: KAKAO_CALLBACK_URL, // 위에서 설정한 Redirect URI
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      const rows = await sendQuery(`SELECT user_id FROM users WHERE user_id = ?`, [profile.id]);

      if (rows.length == 0) sendQuery(`INSERT INTO users (user_id, social) VALUES(?, ?)`, [profile.id, profile.provider]);

      return done(null, profile);
    },
  ),
);

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

router.get('/', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', { successRedirect: '/', failureRedirect: '/login' }));

router.get('/logout', (req: any, res: any) => {
  req.session.destroy();
  res.send("<script type='text/javascript'>alert('로그아웃 되었습니다'); location.href='/';</script>");
});

module.exports = router;