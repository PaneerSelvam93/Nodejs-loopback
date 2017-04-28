'use strict';

	module.exports = function(Student){

   Student.greet = function(msg1,msg2,msg3,  cb) {
      cb(null, msg1+' and '+msg2 +' are friends since from '+msg3);
      
    }

    Student.remoteMethod('greet', {
          accepts: [
          				{arg: 'msg1', type: 'string'},
          				{arg: 'msg2', type: 'string'},
          				{arg: 'msg3', type: 'number'}
          			],
          returns: {arg: 'greet', type: 'string'}
    });



};


