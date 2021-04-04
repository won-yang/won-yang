const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const sendQuery = require('../config/db');

router.get("/posts/:idx", async (req, res) => {
    const rows = await sendQuery(`SELECT * FROM post NATURAL JOIN post_content NATURAL JOIN options WHERE post_idx=?`, [req.params.idx]);
    
    if(rows.length == 0){
        res.send('<script type="text/javascript">alert("찾으시는 글이 존재하지 않습니다."); history.back();</script>');
        return;
    }
    const image_rows = await sendQuery("SELECT image_path FROM thumbnail WHERE post_idx = ?", [req.params.idx]);

    const auth_check = await authCheck(req);

    
    res.render("post", {result : rows, image: image_rows, auth_check : auth_check});
})

async function authCheck(req) {
    const auth_check = {};

    auth_check.login = false;
    auth_check.post_owner = false;
    auth_check.admin = false;
    if(req.session.passport == undefined) 
       return auth_check;
    
    auth_check.login = true;
    
    const post_idx = req.params.idx;
    const user_id = req.session.passport.user.id;
    const my_post = await sendQuery(`SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?`, [post_idx, user_id]);
    const admin_rows = await sendQuery(`SELECT user_id FROM admin WHERE user_id = ?`, [req.session.passport.user.id]);
    
    if (my_post.length != 0)
        auth_check.post_owner = true;
    
    if(admin_rows.length == 1)
        auth_check.admin = true;
    return auth_check;
}

module.exports = router;