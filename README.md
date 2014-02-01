TextDuino
=========

An open-source hack with Arduino and NodeJS. Send text messages from your Arduino.


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
