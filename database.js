var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //
  password: 'Tl1nbrcn0bgl.', //
  database: 'mydata',
})
connection.connect((err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
    if (err) throw err;
        // console.log("Connected!");
        // const sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), message VARCHAR(255))";
        // connection.query(sql, function (err, result) {
        // if (err) throw err;
        // console.log("Table created");
        // });
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    console.log('Database connected')
})
module.exports = connection


// CREATE TABLE `users` (
//     `id` int(11) NOT NULL,
//     `name` varchar(150) NOT NULL,
//     `email` varchar(150) NOT NULL,
//     `message` text NOT NULL,
//     `created_at` timestamp NOT NULL DEFAULT current_timestamp()
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;