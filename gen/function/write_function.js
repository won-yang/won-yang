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
exports.tag_name = exports.checkLength = exports.setGate = exports.setData = exports.getindex = void 0;
var db_1 = require("../config/db");
var getindex = function (user_id) { return __awaiter(void 0, void 0, void 0, function () {
    var rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.sendQuery("SELECT post_idx FROM post WHERE user_id = ? AND post_date = (\n                                  SELECT MAX(post_date)\n                                  FROM post\n                                  WHERE user_id = ?\n                                )", [user_id, user_id])];
            case 1:
                rows = _a.sent();
                return [2 /*return*/, rows[0].post_idx];
        }
    });
}); };
exports.getindex = getindex;
var setData = function (req) {
    var send_data = {};
    send_data.title = req.body.title;
    send_data.contact = req.body.contact;
    send_data.deposit = req.body.deposit;
    send_data.monthly_rent = req.body.monthly_rent;
    send_data.contract_period = req.body.contract_period;
    send_data.address = req.body.address;
    send_data.content = req.body.content;
    send_data.refrigerator = check(req.body.refrigerator);
    send_data.desk = check(req.body.desk);
    send_data.wifi = check(req.body.wifi);
    send_data.washing_machine = check(req.body.washing_machine);
    send_data.gas_stove = check(req.body.gas_stove);
    send_data.door_lock = check(req.body.door_lock);
    send_data.microwave = check(req.body.microwave);
    send_data.cctv = check(req.body.cctv);
    send_data.closet = check(req.body.closet);
    send_data.bed = check(req.body.bed);
    send_data.tv = check(req.body.tv);
    send_data.public_washing_machine = check(req.body.public_washing_machine);
    send_data.public_kitchen = check(req.body.public_kitchen);
    send_data.elevator = check(req.body.elevator);
    send_data.air_conditioner = check(req.body.air_conditioner);
    return send_data;
};
exports.setData = setData;
var setGate = function (tag) {
    var gate = {};
    gate.main_gate = '0';
    gate.west_gate = '0';
    gate.east_gate = '0';
    gate.etc_gate = '0';
    if (tag === '창원대 정문')
        gate.main_gate = '1';
    else if (tag === '기숙사 서문')
        gate.west_gate = '1';
    else if (tag === '공대 동문')
        gate.east_gate = '1';
    else if (tag === '기타')
        gate.etc_gate = '1';
    else
        return false;
    return gate;
};
exports.setGate = setGate;
var checkLength = function (send_data, res) {
    if (send_data.title.length == 0) {
        res.json({ 'result:': 'error', message: '제목을 입력해 주세요.' });
        return false;
    }
    if (send_data.contact.length == 0) {
        res.json({ result: 'error', message: '연락처를 입력해 주세요.' });
        return false;
    }
    if (send_data.deposit.length == 0) {
        res.json({ result: 'error', message: '보증금을 입력해 주세요.' });
        return false;
    }
    if (send_data.monthly_rent.length == 0) {
        res.json({ result: 'error', message: '월세를 입력해 주세요.' });
        return false;
    }
    if (send_data.contract_period.length == 0) {
        res.json({ result: 'error', message: '계약기간을 입력해 주세요.' });
        return false;
    }
    if (send_data.address.length == 0) {
        res.json({ result: 'error', message: '위치를 입력해 주세요.' });
        return false;
    }
    return true;
};
exports.checkLength = checkLength;
var tag_name = function (tag_rows) {
    if (tag_rows[0].main_gate == '1')
        return '창원대 정문';
    if (tag_rows[0].west_gate == '1')
        return '기숙사 서문';
    if (tag_rows[0].east_gate == '1')
        return '공대 동문';
    if (tag_rows[0].etc_gate == '1')
        return '기타';
    return 'Error';
};
exports.tag_name = tag_name;
var check = function (parm) {
    return parm == 'true' ? '1' : '0';
};
