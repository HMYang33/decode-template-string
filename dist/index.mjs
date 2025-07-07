function check_if_calling_with_template_string(args) {
  if (!args[0] instanceof Array) return false;
  if (!args[0]?.raw instanceof Array) return false;
  for (let i = 0; i < args[0].raw.length; i++) {
    if (args[0].raw[i] !== args[0][i]) {
      return false;
    }
  }
  return true;
}

function transform_template_args_to_string(args) {
  let tempalte = args[0];
  let result = [];
  for (let i = 0; i < tempalte.raw.length; i++) {
    result.push(tempalte.raw[i]);
    result.push(args[i + 1]);
  }
  result = result.join("")
  return result;
}



function main(args) {
  if (check_if_calling_with_template_string(args)) {
    return transform_template_args_to_string(args);
  } else {
    throw new Error("It seems like you are not calling with a template string");
  }
}
main.check_if_calling_with_template_string = check_if_calling_with_template_string
main.transform_template_args_to_string = transform_template_args_to_string

export default main