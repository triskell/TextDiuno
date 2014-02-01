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

int inPin = 7;   // choose the input pin (for a pushbutton)
int val = 0;     // variable for reading the pin status
 
void setup() {
  // initialize serial:
  Serial.begin(9600);
  //Initialize input button
  pinMode(inPin, INPUT);
}
 
void loop() {

	val = digitalRead(inPin);  // read input value
	if (val == HIGH) {         // check if the input is HIGH (button released)
		//do nothing
	} else {
		Serial.print("{"); // begin character
		Serial.print("Signal !");  
		Serial.print("}"); // end character
	}

	delay(100); // give the Arduino some breathing room.
}
 
