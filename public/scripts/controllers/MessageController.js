myApp.controller('MessageController', function($http) {
  var mc = this;
  mc.newMessage = {};

  getMessages();

  mc.addMessage = function() {
    console.log('add message', mc.newMessage);
    $http.post('/message', mc.newMessage)
    .then(function(response) {
      console.log('added message', response);
      getMessages();
    });
  }

  function getMessages() {
    $http.get('/message')
    .then(function(result) {
      console.log(result.data);
      mc.messageData = result.data;
    })

  }

});
