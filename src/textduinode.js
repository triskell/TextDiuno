/*
This software is under "DO NOT FORGET US" License (Revision 1) :

Thomas Abot wrote the original software.
As long as you retain this notice and you add your name and the address of your project in the list below, you can do whatever you want with this stuff.
If you meet one (or more) of the authors some day, and you think this stuff is worth it, you can buy him (or them) a coffee (or what you want) in return.

- ORIGINAL PROJECT : 
		Thomas 'Trysk' Abot, 31/01/2014
		https://github.com/triskell/TextDiuno.git
		Personal website : http://trysk.net

This software is provided as-is, without any warranty. You are the only responsible with your use of this software, and author(s) can not be liable for any claim.

*/
var params = require('./params');
var SerialPort = require("node-serialport").SerialPort;
var twilio = require('twilio');

var exctractData = '';

console.log('started on port : ' + params.port);
serialListener();


function serialListener()
{
    var receivedData = "";
    serialPort = new SerialPort(params.port, {
        //Set up the default serial communication for Arduino :
        //(Read node-serialport documentation to modify)
        baudrate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 'none',
        flowControl: false
    });
 
    serialPort.on("open", function () {
      console.log('[INFO] Serial communication started.');
        serialPort.on('data', function(data) {
            receivedData += data.toString();
            /*
				Start character : {
				End character : }
            */
          	if (receivedData.indexOf('{') >= 0 && receivedData.indexOf('}') >= 0) {
           		exctractData = receivedData.substring(receivedData.indexOf('{') + 1, receivedData.indexOf('}'));
           		receivedData = '';
           		console.log('[DEBUG] Extracted data :' + exctractData);
           		sendTextMessage();
         	}
      	});  
    });  
}


function sendTextMessage(){

	var client = new twilio.RestClient(params.twilio.account_sid, params.twilio.auth_token);

	client.sms.messages.create({
	    to: params.twilio.recipient,
	    from: params.twilio.number,
	    body: params.twilio.content
	}, function(error, message) {
	    
	    if (!error) {
	        console.log('[INFO] Message sent at ' +  message.dateCreated + ' with SID :' + message.sid);
	    } else {
	        console.log('[ERR] Error while sending message.');
	    }
	});
	
}