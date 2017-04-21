module.exports = function(Message) {
  Message.greetings = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'Hello';
      cb(null, 'Panner says ' + msg + ' to you');
    });
  };
};
