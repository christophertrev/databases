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
    post: function (req, res) {
      console.log(req.json);
       // models.messages.post();
       //
       //
      var data = '';
      req.on('data', function(chunk){
        data += chunk;
      });
      req.on('end', function(){
        // console.log(JSON.parse(data))
        // data = JSON.parse(data)
        console.log(typeof data)
        models.messages.post(data, function(){
          // console.log(arguments);
        });
      });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users passed');
    },

    post: function (req, res) {}
  }

};

