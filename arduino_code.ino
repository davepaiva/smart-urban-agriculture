#include<DHT.h>

#define DHTPIN 7
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

float hum;
float temp;

void setup() {
  Serial.begin(9600);
  dht.begin();

}

void loop() {
  delay(2000);
  String message = "";

  hum = dht.readHumidity();
  temp = dht.readTemperature();

  message = message + "{\"humidity\": ";
  message = message + hum;
  message = message + ", \"temperature\": ";
  message = message + temp;
  message = message + "}";


  
  
  Serial.println(message);
  
}
