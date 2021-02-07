let TemperatureService = require('../services/TemperatureService')

exports.getReadings = async function (req, res, next) {
    try {
        var readings = await TemperatureService.getTemperatureReadings()
        return res.status(200).json({ status: 200, data: readings, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}