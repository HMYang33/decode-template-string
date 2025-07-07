import decode from 'decode-template-string'


function print() {
  let str = decode(arguments)
  console.log(str);
}


print`hello ${1}, ${2}, ${3}${''}123`;