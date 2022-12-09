const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  let first = res;
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    let second = res;
    writeFile(
      "./content/async-result.txt",
      `The async result is: ${first} and ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
