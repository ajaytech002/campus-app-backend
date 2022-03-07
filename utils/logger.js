const moment = require("moment-timezone");
const t = moment.tz("Asia/Kolkata").format();

function logger(msg, options = { fullStack: false }) {
  console.log(`---START--- ${t}`);
  let stack = new Error().stack;
  let line = stack.split("\n")[2];
  let file = line.split("(")[1].split(")")[0];
  if (options.fullStack) {
    console.log("STACK - ", stack);
  }
  console.log("FILE -", file);
  console.log("MSG  -");
  console.dir(msg, { depth: Infinity });
  console.log("--- END --- ");
}

module.exports = logger;
