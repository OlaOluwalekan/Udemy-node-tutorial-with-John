const { readFile } = require("fs");
const { first } = require("lodash");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

getText("./content/first.txt")
  .then((res) => {
    console.log(res);
    let first = res;
    return first;
  })
  .catch((err) => {
    console.log(err);
  });
