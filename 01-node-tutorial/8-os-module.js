const os = require("os");

console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  "Total Memory": os.totalmem(),
  "Free Memory": os.freemem(),
};

console.log(currentOS);
