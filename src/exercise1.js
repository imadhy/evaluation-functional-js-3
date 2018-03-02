const moment = require("moment");

const sortProduct = input => {
  console.log(input
      .filter(x => moment(x.dateAdded).year() > 2000))
    .redue((accumulator, currentValue, currentIndex, array) => {
      return
    }, {});
  // .map(v => {
  //   name : v.name,
  //   year: moment(v.dateAdded).year(),
  //   monthOfYear: moment(v.dateAdded).month(),
  //   quantity: v.quantity
  // });
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};