const path = require('path');

function getMessages(req, res) {
    // res.send("<ul><li>Hello Albert!</li></ul>");
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'microsoft.jpg'))
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Elon Musk'
    })
  };

function postMessage(req, res) {
    console.log("Updating messages...");
  }

  module.exports = {
      getMessages,
      postMessage
  }