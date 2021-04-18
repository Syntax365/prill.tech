module.exports = {
  getAllData: getData,
  getDailyFact: getFactData,
};

function getFactData(req) {
  return new Promise((resolve) => {
    var AWS = require("aws-sdk");
    AWS.config.update({ region: "us-east-2" });
    var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

    var getParams = {
      Bucket: "prilltech-s3-storage",
      Key: "prilltech-s3-test.json",
    };

    s3.getObject(getParams, function (err, data) {
      if (err) {
        resolve(err.toString());
      } else {
        var dateObj = new Date();
        //returns 0-6 based starting on Sunday == 0;
        var dayOfWeekNumber = dateObj.getDay();
        //query param override date
        var incDays = req.query.incDays ? parseInt(req.query.incDays) : 0;
        dayOfWeekNumber = dayOfWeekNumber + incDays;

        var fact_count = Object.keys(JSON.parse(data.Body).dailyfacts.items)
          .length;

        //What if we dont have enough facts?
        if (dayOfWeekNumber >= fact_count) {
          var dayOfWeekNumber = parseInt(dayOfWeekNumber % fact_count);
        }

        var undelimitedData = JSON.parse(data.Body).dailyfacts.items[
          dayOfWeekNumber
        ];

        resolve(undelimitedData);
      }
    });
  });
}

function getData() {
  return new Promise((resolve) => {
    var AWS = require("aws-sdk");
    AWS.config.update({ region: "us-east-2" });
    var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

    var getParams = {
      Bucket: "prilltech-s3-storage",
      Key: "prilltech-s3-test.json",
    };

    s3.getObject(getParams, function (err, data) {
      if (err) {
        resolve(err.toString());
      } else {
        resolve(JSON.parse(data.Body));
      }
    });
  });
}
