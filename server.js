const express = require('express');
const methodOverride = require("method-override");
const morgan = require('morgan')

const authorization = require('./utils/authorization');
const port = process.env.PORT || '3000';

const session = require('express-session');
require('dotenv').config();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const plantsRouter = require('./routes/plants');
// const newRouter = require('./routes/new')



const app = express ();

// Connect to DB(mongoose)
require('./config/database');


app.set('view engine', 'ejs');


// mount middleware with app.use
app.use(morgan('dev'));
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret: 'chucknorris',
    resave: false,
    saveUninitialized: false
}));

app.use(authorization.addUserToRequest);


//  mount routes with app.use
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plants', plantsRouter);
// app.use('/new', newRouter);

// tell app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
})