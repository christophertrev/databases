var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows, fields){
        var passbackObject = {};
        passbackObject.results = rows;
        res.end(JSON.stringify(passbackObject));
        // for ( var i in rows){
        //   console.log(rows[i].text);
        // }
      });
      console.log('messages passed');

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users passed');
    },

    post: function (req, res) {}
  }

};

