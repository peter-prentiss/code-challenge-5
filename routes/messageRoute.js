var router = require('express').Router();
var Message = require('../models/messages');

// router.get('/', function(req, res) {
//   console.log('inside the listing get');
//   Message.find().then(function(messageRoute) {
//     res.send(messageRoute);
//   });
// });

router.get('/', function(req, res) {
  console.log('calling get');
  Message.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// Post route
router.post('/', function(req, res) {
  console.log('log the data: ', req.body);
  var addMessage = new Message(req.body);
  addMessage.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});


module.exports = router;
