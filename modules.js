const simple_function = () => {
  console.log("simple function export");
};

const simple_function_params = param => {
  console.log("simple function export with params " + param);
};

module.exports = {
  simple_function,
  simple_function_params
};
