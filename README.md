TextDuino
=========

An open-source hack with Arduino and NodeJS. Send text messages from your Arduino.


To Install
----------

I assume NodeJS and NPM are already installed on your computer.  
I have only tested it on Ubuntu, so if you succeeded on others platforms, I will be glad to credit your help.

#### (Debian/Ubuntu) Linux :

* Install [serialport](https://github.com/JayBeavers/Reflecta) module : 
	```bash
	sudo apt-get install build-essential
	npm install serialport
	```
* Get TextDuino on your computer :  
	```bash
	git clone https://github.com/triskell/TextDiuno.git
	```
* Load .ino part on your Arduino
* Launch the NodeJS part :   
	```bash
	node textduinode.js
	```	
* Have fun !
