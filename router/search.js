const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const sendQuery = require('../config/db');
const permission = require("../function/permission_verify");

router.get("/search", async (req, res) => {
    const main_gate = check(req.query.main_gate);
    const east_gate = check(req.query.east_gate);
    const west_gate = check(req.query.west_gate);
    const etc_gate = check(req.query.etc_gate);
    const monthly_rent = req.query.monthly_rent;
    
    if(main_gate == "1" && east_gate == "1" && west_gate == "1" && etc_gate == "1" && req.query.search.length == 0 && !Number(monthly_rent)){
        res.redirect("/");
        return;
    }

    const page = await getPageInfo(req);
    const login_check = loginCheck(req);
    let images = new Array();
    
    for (const row of page.post_rows) {
        const image = await sendQuery('SELECT image_path FROM thumbnail WHERE post_idx = ?', [row.post_idx]);
        images.push(image);
    }
    
    const send_img = images.map(image => {
        if (image[0])
            return image[0].image_path;
        else
            return '/image/image_thumbnail.png';
    });
    
    res.render("search", {
            post : page.post_rows, 
            image : send_img, 
            login_check: login_check, 
            page_info : page.page_info,
            main_gate : main_gate,
            east_gate : east_gate,
            west_gate : west_gate,
            etc_gate : etc_gate,
            monthly_rent : monthly_rent
    });
})

router.get("/my_post", async (req, res) => {
    if (!req.session.passport){
        res.json({"result" : "error", "message" : "로그인이 되어 있지 않습니다."});
        return;
    }
    
    const search = req.query.my_post;
    const user_id = req.session.passport.user.id;
    
    const search_rows = await sendQuery(`SELECT post_idx, title, post_date, address, deposit, monthly_rent
                                        FROM post NATURAl JOIN post_content
                                        WHERE post_idx IN
                                        	(SELECT post_idx FROM post NATURAL JOIN users WHERE user_id = ?)
                                        ORDER BY post_date DESC`, [user_id]);
        
    let images = new Array();
    
    for (const row of search_rows) {
        const image = await sendQuery('SELECT image_path FROM thumbnail WHERE post_idx = ?', [row.post_idx]);
        images.push(image);
    }
    
    const send_img = images.map(image => {
        if (image[0])
            return image[0].image_path;
        else
            return '/image/image_thumbnail.png';
    });
    
    
    res.json({"result" : "success", "rows" : search_rows, "image" : send_img});
})

function check(val){
    return (val == "true" ? "1" : "-1");
}

async function getPageInfo(req) {
    const search = (req.query.search != undefined) ? `%${req.query.search}%` : '%%';
    const main_gate = check(req.query.main_gate);
    const east_gate = check(req.query.east_gate);
    const west_gate = check(req.query.west_gate);
    const etc_gate = check(req.query.etc_gate);
    const monthly_rent = Number(req.query.monthly_rent) ? Number(req.query.monthly_rent) : 9999999999;

    const pageNum = Number(req.query.pageNum) || 1;
    const contentSize = 12; 
    const pnSize = 10;           //페이지 사이즈
    const skipSize = (pageNum - 1) * contentSize; 
    
    const totalCount = await sendQuery(`SELECT count(*) as count
                                            FROM post NATURAl JOIN post_content
                                            WHERE post_idx IN
                                            	(SELECT post_idx FROM post NATURAL JOIN tag WHERE main_gate = ? OR west_gate = ? OR east_gate = ? OR etc_gate = ?)
                                            	AND
                                            	title LIKE ?
                                                AND
                                                monthly_rent <= ?
                                            ORDER BY post_date DESC;`, [main_gate, west_gate, east_gate, etc_gate, search, monthly_rent]);
    const pnTotal = Math.ceil(totalCount[0].count / contentSize); // NOTE: 페이지네이션의 전체 카운트
    const pnStart = ((Math.ceil(pageNum / pnSize) - 1) * pnSize) + 1; // NOTE: 현재 페이지의 페이지네이션 시작 번호.
    let pnEnd = (pnStart + pnSize) - 1;

    const post_rows = await sendQuery(`SELECT post_idx, title, post_date, address, deposit, monthly_rent
                                    FROM post NATURAl JOIN post_content
                                    WHERE post_idx IN
                                    	(SELECT post_idx FROM post NATURAL JOIN tag WHERE main_gate = ? OR west_gate = ? OR east_gate = ? OR etc_gate = ?)
                                    	AND
                                    	title LIKE ?
                                        AND
                                        monthly_rent <= ?
                                    ORDER BY post_date DESC LIMIT ${skipSize}, ${contentSize};`, [main_gate, west_gate, east_gate, etc_gate, search, monthly_rent]);
    if (pnEnd > pnTotal) pnEnd = pnTotal;
    
    const page_info = {
        pageNum,
        pnStart,
        pnEnd,
        pnTotal
    };
    
    return {"page_info" : page_info, "post_rows" : post_rows};
}

function loginCheck(req) {
    if(permission.isLogin(req.session.passport))
       return true;
    return false;
}

module.exports = router;