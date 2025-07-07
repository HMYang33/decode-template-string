const wrap = require('decode-template-string');


const print = (...args) => {
  let warpped = wrap(args)
  console.log(warpped);
}


print`hello ${1}, ${2}, ${3}${''}123`;