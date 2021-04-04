const mysql = require("mysql2/promise");
const sendQuery = require('../config/db');

const isLogin = function (passport) {
    if (!passport){
        return false;
    }
    
    return true;
};


exports.isLogin = isLogin;

exports.isAdmin =  async function (passport) {
    if (!isLogin(passport))
        return false;
        
    const admin_rows = await sendQuery(`SELECT user_id FROM admin WHERE user_id = ?`, [passport.user.id]);
    if(admin_rows.length == 0) {
        return false;
    }
    return true;
}