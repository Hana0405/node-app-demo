const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tl1nbrcn0bgl.",
  database:"mydata"
});
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydata", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});*/
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     const sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
// });

// ****************Insert a record in the "customers" table:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
// });


// ************************Insert Multiple Records
//INSERT INTO customers (name, address) VALUES ?
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "INSERT INTO customers (name, address) VALUES ?";
    const values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
  */

//   Insert a record in the "customers" table, and return the ID:
/*
con.connect(function(err) {
    if (err) throw err;
    const sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });
});
*/


//Select all records from the "customers" table, and display the result object:

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
  
// });


//Select name and address from the "customers" table, and display the return object:
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
      if (err) throw err;
    //   console.log(result);
    //   console.log(result[2].address);
    console.log(fields);
    });
});
*/
// Select record(s) with the address "Park Lane 38":
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});
*/
// Select records where the address starts with the letter 'S':
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});
*/

// Sort the result alphabetically by name:
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
// });


//Delete any record with the address "Mountain 21":
// con.connect(function(err) {
//     if (err) throw err;
//     const sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });

// Delete a table
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE customers";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table deleted");
//     });
//   });

//Update table
// Overwrite the address column from "Valley 345" to "Canyon 123":
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//       console.log(result.affectedRows)
//     });
// });

//Limit the result
// Select the 5 first records in the "customers" table:
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});