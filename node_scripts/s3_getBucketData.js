module.exports = {
  getAllData: getData,
};

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
