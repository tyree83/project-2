const express = require('express');
const morgan = require('morgan');
const port = 3000;

const indexRouter = require('./routes/index');

const app = express();

// TODO: connect to DB(mongoose)


// view engine setup
app.set('view engine', 'ejs');

app.use(morgan('dev'));
// We need this middleware to accept incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



// mount routers with app.use
app.use('/', indexRouter);




app.listen(3000, function() {
  console.log(`Express is listening on port:${port}`);
});
