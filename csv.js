const csv = require("csv-parser");
const fs = require("fs");

const results = [];
const csvFile = "xpg.csv";
fs.createReadStream(csvFile)
  .pipe(csv({}))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    // console.log(results);
    results.map((result, index) => {
      setTimeout(() => {
        console.log(result);
      }, index * 300);
    });
  });
