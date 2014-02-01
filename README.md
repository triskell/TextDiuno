TextDuino
=========

An open-source hack with Arduino and NodeJS. Send text messages from your Arduino.

Note
----

I had to leave this project since Twilio free (trial) SMS service is not available in France. I could not test this part.  
However, the serial part with [serialport](https://github.com/JayBeavers/Reflecta) works fine, so I want to keep it. That is why this project will not go further, but will not be deleted.
I would like to hear from you if you managed to use it in a country were the Twilio service is available, or if you have any solution.


To Install
----------

I assume NodeJS and NPM are already installed on your computer.  
I have only tested it on Ubuntu, so if you succeeded on others platforms, I will be glad to credit your help.

#### (Debian/Ubuntu) Linux :

* Install [serialport](https://github.com/JayBeavers/Reflecta) module :  
```
	sudo apt-get install build-essential  
	npm install serialport
```
* Install [twilio](http://twilioinc.wpengine.com/2013/03/introducing-the-twilio-module-for-node-js.html) module :  
```
	npm install twilio
```
* Get TextDuino on your computer :  
```
	git clone https://github.com/triskell/TextDiuno.git
```
* Configure ```src/params.js``` to your preferences and twilio account
* Mount a button on port 7 of your Arduino
* Load .ino part on your Arduino using Arduino IDE
* Launch the NodeJS part :   
```
	cd src/ 
	node textduinode.js
```	
* Have fun !
