import wrap from 'decode-template-string'


function print() {
  let warpped = wrap(arguments)
  console.log(warpped);
}


print`hello ${1}, ${2}, ${3}${''}123`;