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
var AWS = require('aws-sdk');
var secret = require('../config/secret_keys');
var multer = require('multer');
var uuidv4 = require('uuid').v4;
var path = require('path');
var permission = require('../function/permission_verify');
var sendQuery = require('../config/db');
var ID = secret.s3.ID;
var SECRET = secret.s3.SECRET;
var BUCKET_NAME = secret.s3.BUCKET_NAME;
var s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
});
var upload = multer({
    storage: multer.memoryStorage(),
});
router.post('/api/image/upload', upload.array('upload'), function (req, res) {
    if (!permission.isLogin(req.session.passport)) {
        res.send("<script>alert('로그인이 필요합니다.'); location.href='/'; </script>");
        return;
    }
    var params = {
        Bucket: BUCKET_NAME,
        Key: uuidv4() + path.extname(req.files[0].originalname),
        Body: req.files[0].buffer,
        ACL: 'public-read',
    };
    s3.upload(params, function (err, data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err)
                        throw err;
                    return [4 /*yield*/, sendQuery("INSERT INTO image (image_path, image_date) VALUES (?, now())", [data.Location])];
                case 1:
                    _a.sent();
                    res.json({ url: data.Location });
                    return [2 /*return*/];
            }
        });
    }); });
});
module.exports = router;
