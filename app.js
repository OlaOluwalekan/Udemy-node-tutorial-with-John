const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(res);
      }
    });
  });
};
