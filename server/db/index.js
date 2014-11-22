var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat',
});
// connection.connect();

// var queryString = 'SELECT * FROM messages';

// var openDB = function(){
// };

// var closeDB = function(){
//   connection.end();
// };

    // get: function (function(){
    //  end database connection
    // }) {
// connection.query(queryString, function(err, rows, fields) {
//     if (err) throw err;

//     for (var i in rows) {
//         console.log('Post Titles: ', rows[i]);
//     }
//     for (var i in fields) {
//       console.log('fields: ');
//       console.log(fields[i]);
//     }
//     console.log('Fields ' + Object.keys(fields));
//      // callback()
// });

module.exports = connection;
