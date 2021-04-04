const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const sendQuery = require('../../config/db');
const permission = require("../../function/permission_verify");

router.get("/admin", async (req, res) => {
    // if(!(await permission.isAdmin(req.session.passport))){
    //     res.send("<script type='text/javascript'> alert('잘못된 접근 입니다.'); location.href='/'; </script>");
    //     return;
    // }
    
    const notice_rows = await sendQuery(`SELECT title, post_idx FROM notice ORDER BY post_date DESC`);
    const post_rows = await sendQuery(`SELECT post_idx, title, post_date, address, deposit, monthly_rent FROM post NATURAl JOIN post_content ORDER BY post_date DESC`);

    res.render("admin/index", {notice : notice_rows, post : post_rows});
})

module.exports = router;