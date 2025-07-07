[中文文档](https://github.com/HMYang33/decode-template-string/blob/main/%E8%AF%B4%E6%98%8E%E4%B9%A6.md) | [English Document](https://github.com/HMYang33/decode-template-string/blob/main/README.md)

# Allow your js functions to support implicit template string calls
```
npm i decode-template-string
```
```javascript
import decode from 'decode-template-string';
const decode = require('decode-template-string');

// Support for regular functions
function print(){
  let str = decode(arguments)
  console.log(str)
}

// Support for arrow functions
const print = (...args) => {
  let str = decode(args)
  console.log(str);
}

// Now you can call your function this way👇
let name = "HMYang33";
print`My name is ${name}`;
```

## Sub Functions
```
decode.check_if_calling_with_template_string
Pass Arguments, returns boolean

decode.transform_template_args_to_string
Pass Arguments, returns string
```
