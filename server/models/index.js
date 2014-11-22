var db = require('../db');

var queryDB = function (queryString, callback){
  db.connect();
  db.query(queryString, function(err, rows, fields){
    if (err) {throw err;}
    callback(rows, fields);
    db.end();
  });
};


module.exports = {
  messages: {
    get: function(callback){
      var queryString = 'SELECT * FROM messages;';
      queryDB(queryString, callback);
    },
    post: function (message, callback) {
      console.log("message");
      console.log(typeof message);
      message = JSON.parse(message);
      console.log(typeof message);

      var queryString = 'insert into messages (text, username, roomname)'+
      ' values ('+message.text+', '+message.username+','+message.roomname+');';
      console.log(queryString);
      queryDB(queryString, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};






    // get: function (function(){
    //  end database connection
    // }) {
    //   connection.query(queryString, function(err, rows, fields) {
    //       if (err) throw err;

    //       for (var i in rows) {
    //           console.log('Post Titles: ', rows[i]);
    //       }
    //       for (var i in fields) {
    //         console.log('fields: ');
    //         console.log(fields[i]);
    //       }
    //       console.log('Fields ' + Object.keys(fields));
    //        callback()
    //   });

var queryString = 'select u.username, r.roomname, m.text, m.datecreated from users u '+
      'JOIN messages m on u.id = m.user_id JOIN rooms r on r.id = m.room_id;'      // var queryString = 'select u.username, r.roomname, m.text, m.datecreated' +
