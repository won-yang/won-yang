const express = require("express");
const router = express.Router();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const mysql = require("mysql2/promise");
const sendQuery = require('../config/db');
const config = require("../config/secret_keys.json");

passport.use('kakao', new KakaoStrategy({
    clientID: config.kakao.clientID,
    callbackURL: config.kakao.callbackURL,     // 위에서 설정한 Redirect URI
  }, async (accessToken, refreshToken, profile, done) => {
  	
    const rows = await sendQuery(`SELECT user_id FROM users WHERE user_id = ?`, [profile.id]);

    if (rows.length == 0)
    	sendQuery(`INSERT INTO users (user_id, social) VALUES(?, ?)`, [profile.id, profile.provider]);
    
    return done(null, profile);
}))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


router.get('/', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {successRedirect: "/",failureRedirect: '/login' }))

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("<script type='text/javascript'>alert('로그아웃 되었습니다'); location.href='/';</script>");
})


module.exports = router;