const _ = require("lodash");

const meeteek = input => {
  console.log(_.reduce(input, (result, value, key) => {
    result[value.firstname] = filterSex(value, input);
    return result;
  }, {}));
}

filterSex = (element, input) => {
  return input.filter(x => {
    return _.includes(element.sexPartnerApproved, x.sex) && (element.firstname !== x.firstname);
  });
}

module.exports = {
  title: "Exercise 3",
  run: meeteek
};