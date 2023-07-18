/*
  @slot value: string
*/
function capitalizeFirstWord(value) {
  const wordsArray = value.split(" ");
  const finalResult = wordsArray?.reduce((prev, current, index) => {
    if (index === 0) {
      return current;
    } else {
      const capitalizeFirst =
        current.charAt(0).toLocaleUpperCase() + current.slice(1);
      return prev + capitalizeFirst;
    }
  }, "");
  return finalResult;
}

/*
  @slot value: string
*/
function changeSnakeCaseToCamelCase(name) {
  const wordsArray = name.replace("_", " ");
  return capitalizeFirstWord(wordsArray);
}

module.exports = {
  capitalizeFirstWord,
  changeSnakeCaseToCamelCase,
};
