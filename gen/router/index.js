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
// const sendQuery = require('../config/db');
var db_1 = require("../config/db");
var permission = require('../function/permission_verify');
var getTag = function (post) {
    if (post.main_gate == '1')
        return '#창원대 정문';
    else if (post.west_gate == '1')
        return '#기숙사 서문';
    else if (post.east_gate == '1')
        return '#공대 동문';
    else if (post.etc_gate == '1')
        return '#기타';
    else
        return '#기타';
};
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var notice_rows, page, send_img, login_check;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.sendQuery("SELECT title, post_idx FROM notice ORDER BY post_date DESC")];
            case 1:
                notice_rows = _a.sent();
                return [4 /*yield*/, getPageInfo(req)];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, getThumbNail(page.post_rows)];
            case 3:
                send_img = _a.sent();
                login_check = loginCheck(req);
                res.render('index', {
                    post: page.post_rows,
                    notice: notice_rows,
                    image: send_img,
                    login_check: login_check,
                    page_info: page.page_info,
                    getTag: getTag,
                });
                return [2 /*return*/];
        }
    });
}); });
var getPageInfo = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var pageNum, contentSize, pnSize, skipSize, totalCount, pnTotal, pnStart, pnEnd, post_rows, page_info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pageNum = Number(req.query.pageNum) || 1;
                contentSize = 12;
                pnSize = 10;
                skipSize = (pageNum - 1) * contentSize;
                return [4 /*yield*/, db_1.sendQuery('SELECT count(*) as `count` FROM post')];
            case 1:
                totalCount = _a.sent();
                pnTotal = Math.ceil(totalCount[0].count / contentSize);
                pnStart = (Math.ceil(pageNum / pnSize) - 1) * pnSize + 1;
                pnEnd = pnStart + pnSize - 1;
                return [4 /*yield*/, db_1.sendQuery("SELECT post_idx, title, DATE_FORMAT(post_date, '%Y\uB144 %m\uC6D4 %d\uC77C %H:%i') as post_date, address, deposit, monthly_rent, main_gate, west_gate, east_gate, etc_gate FROM post NATURAl JOIN post_content NATURAl JOIN tag ORDER BY post_date DESC LIMIT " + skipSize + ", " + contentSize)];
            case 2:
                post_rows = _a.sent();
                if (pnEnd > pnTotal)
                    pnEnd = pnTotal;
                page_info = {
                    pageNum: pageNum,
                    pnStart: pnStart,
                    pnEnd: pnEnd,
                    pnTotal: pnTotal,
                };
                return [2 /*return*/, { page_info: page_info, post_rows: post_rows }];
        }
    });
}); };
var getThumbNail = function (post_rows) { return __awaiter(void 0, void 0, void 0, function () {
    var images, _i, post_rows_1, row, image, send_img;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                images = new Array();
                _i = 0, post_rows_1 = post_rows;
                _a.label = 1;
            case 1:
                if (!(_i < post_rows_1.length)) return [3 /*break*/, 4];
                row = post_rows_1[_i];
                return [4 /*yield*/, db_1.sendQuery('SELECT image_path FROM thumbnail WHERE post_idx = ?', [row.post_idx])];
            case 2:
                image = _a.sent();
                images.push(image);
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                send_img = images.map(function (image) {
                    if (image[0])
                        return image[0].image_path;
                    else
                        return '/image/image_thumbnail.png';
                });
                return [2 /*return*/, send_img];
        }
    });
}); };
var loginCheck = function (req) {
    if (permission.isLogin(req.session.passport))
        return true;
    return false;
};
module.exports = router;
