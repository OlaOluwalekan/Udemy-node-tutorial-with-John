const ash = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = ash.flattenDeep(items);

console.log(newItems);
console.log("common church");
