const moment = require('moment-timezone');

exports.convertTime = async(event) => {
    console.log('TimeConvertFunction run!');

    const tz = event.queryStringParameters && event.queryStringParameters.tz;

    let formattedDate = moment().format();

    if (tz !== null) {
        console.log(`Received timezone via tz=${tz}`);
        formattedDate = moment.tz(tz).format();
    } else {
        tz = "GMT 0";
    }

    const message = "The time in " + tz + " is " + formattedDate;

    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };

    return response;

}