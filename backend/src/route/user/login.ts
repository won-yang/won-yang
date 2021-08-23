import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import * as util from '../../util';
import * as user_logic from '../../logic/user';

dotenv.config();

const router = express.Router();
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.KAKAO_CALLBACK_URL;
const KakaoStrategy = require('passport-kakao').Strategy;
const cookieMaxAge: number = 1000 * 60 * 60;

const successLogin = (req, res) => {
  const tokenData = {
    id: req.user.id,
    data: 'hihihi',
  };

  const token = util.createToken(tokenData);

  res.cookie('token', token, { maxAge: cookieMaxAge, httpOnly: true });
  res.redirect('/api/main');
};

router.get('/', passport.authenticate('kakao', { session: false }));
router.get('/kakao/callback', passport.authenticate('kakao', { session: false, failureRedirect: '/api/user/login' }), successLogin);

passport.use(
  'kakao',
  new KakaoStrategy(
    {
      clientID: KAKAO_CLIENT_ID,
      callbackURL: KAKAO_CALLBACK_URL, // 위에서 설정한 Redirect URI
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        const user = await user_logic.getOrCreate(profile.id);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

export default router;
