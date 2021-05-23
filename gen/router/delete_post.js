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
var db_1 = require("../config/db");
var permission = require('../common/permission_verify');
router.delete('/posts/:idx', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_idx, user_id, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!permission.isLogin(req.session.passport)) {
                    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/login' });
                    return [2 /*return*/];
                }
                post_idx = req.params.idx;
                user_id = req.session.passport.user.id;
                return [4 /*yield*/, db_1.sendQuery("SELECT post_idx FROM post WHERE post_idx = ? AND user_id = ?", [post_idx, user_id])];
            case 1:
                rows = _a.sent();
                return [4 /*yield*/, permission.isAdmin(req.session.passport)];
            case 2:
                if (!(_a.sent())) {
                    if (rows.length == 0) {
                        res.json({ result: 'error', message: '글 작성자가 아닙니다.' });
                        return [2 /*return*/];
                    }
                }
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM thumbnail WHERE post_idx = ?", [post_idx])];
            case 3:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM tag WHERE post_idx = ?", [post_idx])];
            case 4:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM options WHERE post_idx = ?", [post_idx])];
            case 5:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM post_content WHERE post_idx = ?", [post_idx])];
            case 6:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM post WHERE post_idx = ?", [post_idx])];
            case 7:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("DELETE FROM thumbnail WHERE post_idx = ?", [post_idx])];
            case 8:
                _a.sent();
                res.json({ result: 'success', message: '게시글이 삭제 되었습니다.', redirect: '/' });
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
