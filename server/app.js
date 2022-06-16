const createError = require('http-errors');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');

var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRoute = require('./routes/posts');
const {upload} = require('./utils/multer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();

//Connect to database
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true})
.then(()=>{
  console.log("Connected to database");
})
.catch(err => console.log(err));

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use('/', indexRouter);
//middlewares

app.post('/api/upload', upload.single("file"), (req, res)=>{
  try{
    return res.status(200).json("File uploaded successfully.");
  }catch(err){
    console.log(err);
  }
});

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
