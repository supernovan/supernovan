let SerialPort = require('serialport');

let celsius = "20.0"
let humidity = "40.0"
let serialPort = new SerialPort('/dev/ttyUSB0', {
    baudRate: 9600
});

serialPort.on('data', function (data) {
    let parsedData = data.toString('utf8')
    let splitedLines = parsedData.split("\n")
    splitedLines.forEach(line => {
        let splitedData = line.split(":")
        if (splitedData.length > 1 && splitedData[0] == "celsius") {
            celsius = splitedData[1].replace("\r", "")
        } else if (splitedData.length > 1 && splitedData[0] == "humidity") {
            humidity = splitedData[1].replace("\r", "")
        }
    })

});

exports.getTemperatureReadings = async function() {
    return {
        "celsius": celsius,
        "humidity": humidity
    }
}