var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows, fields){
        var passbackObject = {};
        passbackObject.results = rows;
        res.end(JSON.stringify(passbackObject));
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('req.body')
      // console.log(req.body)
      models.messages.post(req.body, function(rows){

        res.status(201).end(JSON.stringify(rows));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {}
  }

};

