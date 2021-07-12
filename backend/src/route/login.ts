import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import * as util from '../util';
dotenv.config();

const router = express.Router();
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.KAKAO_CALLBACK_URL;
const KakaoStrategy = require('passport-kakao').Strategy;

const successLogin = (req, res) => {
  const tokenData = {
    id: 'iddd',
    data: 'hihihi',
  };
  const token = util.createToken(tokenData);
  res.cookie('token', token, { httpOnly: true });

  res.redirect('/api/hello');
};

router.get('/', passport.authenticate('kakao', { session: false }));
router.get('/kakao/callback', passport.authenticate('kakao', { session: false, failureRedirect: '/api/hello' }), successLogin);

router.get('/logout', (req: any, res: any) => {
  req.session.destroy();
  res.send("<script type='text/javascript'>alert('로그아웃 되었습니다'); location.href='/';</script>");
});

passport.use(
  'kakao',
  new KakaoStrategy(
    {
      clientID: KAKAO_CLIENT_ID,
      callbackURL: KAKAO_CALLBACK_URL, // 위에서 설정한 Redirect URI
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      return done(null, profile);
    },
  ),
);

export default router;
