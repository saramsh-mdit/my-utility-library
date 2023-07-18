const objectUtils = require("./objectUtils");

const person = {
  full_name: "Name",
  age: 21,
  address_des: {
    country_des: {
      name_full: "Nepal",
    },
    province: 5,
  },
};

const data = objectUtils.copyObject(person);

console.log(person);
console.log(data);
