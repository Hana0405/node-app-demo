// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Tl1nbrcn0bgl.',
//   database:'mydb'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//     // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     // connection.query(sql, function (err, result) {
//     //   if (err) throw err;
//     //   console.log("Table created");
//     // });
//     // con.query(sql, function (err, result) {
//     //     if (err) throw err;
//     //     console.log("1 record inserted");
//     //   });
//     /*
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//     connection.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });
//     */
//   connection.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//   });
// });

// Create HTTP errors for Express,
// Flash Messages for your Express Application
const express = require('express')
const createError = require('http-errors')
const session = require('express-session')
const flash = require('express-flash')
const path = require('path')
const db = require('./database')
const app = express()
const bodyParser = require('body-parser')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())

// app.use(logger('dev'))
// const logger = require('morgan')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: '123@123abc',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
)
app.use(flash())

app.get('/', function (req, res, next) {
  res.render('index', { title: 'User Form' })
})
app.post('/user_form', function (req, res, next) {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  // var sql = `INSERT INTO users (name, email, message, created_at) VALUES ("${name}", "${email}", "${message}", NOW())`
  const sql = `INSERT INTO users (name, email, message) VALUES ("${name}", "${email}", "${message}")`
  db.query(sql, function (err, result) {
    if (err) throw err
    console.log('Row has been updated')
    req.flash('success', 'Data stored!')
    res.redirect('/')
  })
})
app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})
app.listen(5555, function () {
  console.log('Node server is running on port : 5555')
})
module.exports = app