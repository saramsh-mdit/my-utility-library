const stringUtils = require("../stringUtils");

const changeSnakeCaseToCamelCase = stringUtils.changeSnakeCaseToCamelCase;

function copyObject(obj) {
  const newObject = {};
  const properties = Object.getOwnPropertyNames(obj);
  properties?.forEach((property) => {
    if (typeof obj[property] === "object") {
      const data = copyObject(obj[property]);
      newObject[`${changeSnakeCaseToCamelCase(property)}`] = data;
    } else newObject[`${changeSnakeCaseToCamelCase(property)}`] = obj[property];
  });
  return newObject;
}

module.exports = copyObject;
