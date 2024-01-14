import serial

ser = serial.Serial('COM3', 9600)  # Change 'COM3' to the port where your Arduino is connected

try:
    while True:
        line = ser.readline().decode('utf-8').strip()
        if line:
            values = line.split(',')
            xAxisValue = int(values[0])
            yAxisValue = int(values[1])
            buttonState = int(values[2])

            #rint(f'X: {xAxisValue}, Y: {yAxisValue}, Button: {buttonState}')
            if buttonState == 0:
                print(1)

except KeyboardInterrupt:
    ser.close()