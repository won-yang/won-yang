const express = require('express');
// import * as express from 'express';
const session = require('express-session');
const app = express();
const passport = require('passport');

/*******  Router file list *********/
const index_router = require('./router/index');
const login_router = require('./router/login');
const post_router = require('./router/post');
const write_router = require('./router/write_post');
const search_router = require('./router/search');
const delete_router = require('./router/delete_post');
const edit_router = require('./router/edit_post');
const image_router = require('./router/image_upload');
const write_notice_router = require('./router/write_notice');
const notice_router = require('./router/notice');

const admin_index_router = require('./router/admin/index');
const admin_delete_router = require('./router/admin/delete_notice.js');
const admin_edit_router = require('./router/admin/edit_notice.js');

const address = require('./router/api/address');
/***********************************/

app.use(
  session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true,
  }),
);

app.set('views', '../src/views');
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

app.get('*', (req: any, res: any) => {
  res.render('error/404');
});

app.listen(8080, () => {
  console.log('Running...');
});
