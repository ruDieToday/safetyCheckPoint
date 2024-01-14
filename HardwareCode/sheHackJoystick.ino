/*
 * Created by ArduinoGetStarted.com
 *
 * This example code is in the public domain
 *
 * Tutorial page: https://arduinogetstarted.com/tutorials/arduino-joystick
 */


const int xAxisPin = A0;
const int yAxisPin = A1;
const int buttonPin = 2;  // Change to the actual pin number where your button is connected

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  int xAxisValue = analogRead(xAxisPin);
  int yAxisValue = analogRead(yAxisPin);
  int buttonState = digitalRead(buttonPin);

  Serial.print(xAxisValue);
  Serial.print(",");
  Serial.print(yAxisValue);
  Serial.print(",");
  Serial.println(buttonState);

  delay(100);  // Adjust delay as needed
}
