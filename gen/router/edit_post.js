"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var sendQuery = require('../config/db');
var JSSoup = require('jssoup').default;
var permission = require('../function/permission_verify');
var write_func = require('../function/write_function');
router.get('/edit/:idx', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_idx, user_id, my_post, rows, tag_rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!permission.isLogin(req.session.passport)) {
                    res.send("<script>alert('로그인이 필요합니다.'); location.href='/login'; </script>");
                    return [2 /*return*/];
                }
                post_idx = req.params.idx;
                user_id = req.session.passport.user.id;
                return [4 /*yield*/, sendQuery("SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?", [post_idx, user_id])];
            case 1:
                my_post = _a.sent();
                return [4 /*yield*/, permission.isAdmin(req.session.passport)];
            case 2:
                if (!(_a.sent())) {
                    if (my_post.length == 0) {
                        res.send("<script>alert('글 작성자가 아닙니다.'); location.href='/'; </script>");
                        return [2 /*return*/];
                    }
                }
                return [4 /*yield*/, sendQuery("SELECT * FROM post NATURAL JOIN post_content NATURAL JOIN options WHERE post_idx=?", [post_idx])];
            case 3:
                rows = _a.sent();
                return [4 /*yield*/, sendQuery("SELECT main_gate, west_gate, east_gate, etc_gate FROM tag WHERE post_idx = ?", [post_idx])];
            case 4:
                tag_rows = _a.sent();
                res.render('edit_post', { result: rows, tag: write_func.tag_name(tag_rows) });
                return [2 /*return*/];
        }
    });
}); });
router.post('/edit_ok', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_idx, user_id, my_post, admin_rows, send_data, gate, soup, image_path, date_row;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!permission.isLogin(req.session.passport)) {
                    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/login' });
                    return [2 /*return*/];
                }
                post_idx = req.body.idx;
                user_id = req.session.passport.user.id;
                return [4 /*yield*/, sendQuery("SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?", [post_idx, user_id])];
            case 1:
                my_post = _a.sent();
                return [4 /*yield*/, sendQuery("SELECT user_id FROM admin WHERE user_id = ?", [req.session.passport.user.id])];
            case 2:
                admin_rows = _a.sent();
                if (admin_rows.length == 0 && my_post.length == 0) {
                    res.json({ result: 'error', message: '글 작성자가 아닙니다.', redirect: '/login' });
                    return [2 /*return*/, false];
                }
                send_data = write_func.setData(req);
                if (write_func.checkLength(send_data, res) == false)
                    return [2 /*return*/];
                gate = write_func.setGate(req.body.tag);
                if (gate == false)
                    res.json({ result: 'error', message: '태그를 선택하세요' });
                soup = new JSSoup(send_data.content);
                image_path = soup.find('img');
                return [4 /*yield*/, sendQuery('SELECT post_date FROM post WHERE post_idx = ?', [post_idx])];
            case 3:
                date_row = _a.sent();
                if (!(admin_rows.length == 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, sendQuery("UPDATE post SET title = ?, post_date = SYSDATE() WHERE post_idx = ?", [send_data.title, post_idx])];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, sendQuery("UPDATE post SET title = ?, post_date = ? WHERE post_idx = ?", [send_data.title, date_row[0].post_date, post_idx])];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                if (!(image_path != undefined)) return [3 /*break*/, 9];
                return [4 /*yield*/, sendQuery("UPDATE thumbnail SET image_path = ? WHERE post_idx = ?", [image_path.attrs.src, post_idx])];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [4 /*yield*/, sendQuery("UPDATE tag SET main_gate = ?, west_gate = ?, east_gate = ?, etc_gate = ? WHERE post_idx = ?", [
                    gate.main_gate,
                    gate.west_gate,
                    gate.east_gate,
                    gate.etc_gate,
                    post_idx,
                ])];
            case 10:
                _a.sent();
                return [4 /*yield*/, sendQuery("UPDATE options SET refrigerator = ?, desk = ?, wifi = ?, washing_machine = ?,\n                    gas_stove = ?, microwave = ?, cctv = ?, closet = ?, bed = ?, tv = ?,\n                    public_washing_machine = ?, public_kitchen = ?, elevator = ?, air_conditioner = ?, door_lock = ?  WHERE post_idx = ?", [
                        send_data.refrigerator,
                        send_data.desk,
                        send_data.wifi,
                        send_data.washing_machine,
                        send_data.gas_stove,
                        send_data.microwave,
                        send_data.cctv,
                        send_data.closet,
                        send_data.bed,
                        send_data.tv,
                        send_data.public_washing_machine,
                        send_data.public_kitchen,
                        send_data.elevator,
                        send_data.air_conditioner,
                        send_data.door_lock,
                        post_idx,
                    ])];
            case 11:
                _a.sent();
                return [4 /*yield*/, sendQuery("UPDATE post_content SET contact = ?, contract_period = ?, address = ?, monthly_rent = ?, content = ?, deposit = ? WHERE post_idx = ?", [
                        send_data.contact,
                        send_data.contract_period,
                        send_data.address,
                        send_data.monthly_rent,
                        send_data.content,
                        send_data.deposit,
                        post_idx,
                    ])];
            case 12:
                _a.sent();
                res.json({ result: 'success', message: '글 수정이 완료 되었습니다.', redirect: '/posts/' + post_idx });
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
