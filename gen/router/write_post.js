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
var JSSoup = require('jssoup').default;
var permission = require('../common/permission_verify');
var write_func = require('../common/write_function');
router.get('/write', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin_check;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!permission.isLogin(req.session.passport)) {
                    res.send("<script>alert('로그인이 필요합니다.'); location.href='/login'; </script>");
                    return [2 /*return*/];
                }
                admin_check = false;
                return [4 /*yield*/, permission.isAdmin(req.session.passport)];
            case 1:
                if (_a.sent()) {
                    admin_check = true;
                }
                res.render('write_post', { admin_check: admin_check });
                return [2 /*return*/];
        }
    });
}); });
router.post('/write_ok', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var send_data, gate, user_id, index, soup, image_path;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!permission.isLogin(req.session.passport)) {
                    res.json({ result: 'error', message: '로그인이 필요합니다.', redirect: '/' });
                    return [2 /*return*/];
                }
                send_data = write_func.setData(req);
                if (write_func.checkLength(send_data, res) == false)
                    return [2 /*return*/];
                gate = write_func.setGate(req.body.tag);
                if (gate == false)
                    res.json({ result: 'error', message: '태그를 선택하세요' });
                user_id = req.session.passport.user.id;
                return [4 /*yield*/, db_1.sendQuery("INSERT INTO post (user_id, title, post_date) VALUES(?, ?, SYSDATE())", [user_id, send_data.title])];
            case 1:
                _a.sent();
                return [4 /*yield*/, write_func.getindex(user_id)];
            case 2:
                index = _a.sent();
                soup = new JSSoup(send_data.content);
                image_path = soup.find('img');
                if (!(image_path != undefined)) return [3 /*break*/, 4];
                return [4 /*yield*/, db_1.sendQuery("INSERT INTO thumbnail (post_idx, image_path)  VALUES(?, ?)", [index, image_path.attrs.src])];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, db_1.sendQuery("INSERT INTO tag VALUES(?, ?, ?, ?, ?)", [index, gate.main_gate, gate.west_gate, gate.east_gate, gate.etc_gate])];
            case 5:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("INSERT INTO options VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                        index,
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
                    ])];
            case 6:
                _a.sent();
                return [4 /*yield*/, db_1.sendQuery("INSERT INTO post_content VALUES(?, ?, ?, ?, ?, ?, ?)", [
                        index,
                        send_data.contact,
                        send_data.contract_period,
                        send_data.address,
                        send_data.deposit,
                        send_data.monthly_rent,
                        send_data.content,
                    ])];
            case 7:
                _a.sent();
                res.json({ result: 'success', message: '글이 작성되었습니다.', redirect: "/posts/" + index });
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
