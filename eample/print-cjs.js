const decode = require('decode-template-string');


const print = (...args) => {
  let str = decode(args)
  console.log(str);
}


print`hello ${1}, ${2}, ${3}${''}123`;