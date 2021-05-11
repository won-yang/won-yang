"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
// import * as express from 'express';
require('dotenv').config();
var express = require("express");
var session = require('express-session');
var app = express();
var passport = require('passport');
/*******  Router file list *********/
var index_router = require('./router/index');
var login_router = require('./router/login');
var post_router = require('./router/post');
var write_router = require('./router/write_post');
var search_router = require('./router/search');
var delete_router = require('./router/delete_post');
var edit_router = require('./router/edit_post');
var image_router = require('./router/image_upload');
var write_notice_router = require('./router/write_notice');
var notice_router = require('./router/notice');
var admin_index_router = require('./router/admin/index');
var admin_delete_router = require('./router/admin/delete_notice.js');
var admin_edit_router = require('./router/admin/edit_notice.js');
var address = require('./router/api/address');
/***********************************/
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true,
}));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(passport.initialize());
app.use(passport.session());
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(express.static('public'));
//////
app.get('/', index_router);
app.use('/login', login_router);
app.get('/logout', login_router);
app.get('/posts/:idx', post_router);
app.get('/write', write_router);
app.post('/write_ok', write_router);
app.delete('/posts/:idx', delete_router);
app.get('/edit/:idx', edit_router);
app.post('/edit_ok', edit_router);
app.post('/api/image/upload', image_router);
app.get('/search', search_router);
app.get('/my_post', search_router);
app.get('/notices/:idx', notice_router);
app.post('/admin/notice_ok', write_notice_router);
app.get('/admin', admin_index_router);
app.get('/admin/edit/:idx', admin_edit_router);
app.post('/admin/edit_ok', admin_edit_router);
app.delete('/notices/:idx', admin_delete_router);
app.get('/api/address', address);
app.get('*', function (req, res) {
    res.render('error/404');
});
app.listen(8080, function () {
    console.log('Running...');
});
