[中文文档](./说明书.md) | [English Document](./README.md)

# Allow your js functions to support implicit template string calls

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
  let wrapped = wrap(args)
  console.log(wrapped);
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
