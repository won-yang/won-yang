import * as express from 'express';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CALLBACK_URL = process.env.KAKAO_CALLBACK_URL;
const KakaoStrategy = require('passport-kakao').Strategy;

router.get('/', passport.authenticate('kakao', { session: false }));
router.get(
  '/kakao/callback',
  passport.authenticate('kakao', { session: false, successRedirect: '/api/hello', failureRedirect: '/api/hello' }),
);

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
