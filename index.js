const chalk = require('chalk');

const exercise = 'exercise3';

const program = require(`./src/${exercise}`);

console.log(
  chalk.yellow(`\n${program.title} is running\n`)
);

const input = [{
    firstname: "roger",
    sex: 1,
    interests: ["soccer", "beer"],
    sexPartnerApproved: [2]
  },
  {
    firstname: "john",
    sex: 1,
    interests: ["soccer", "cinema"],
    sexPartnerApproved: [2, 1]
  },
  {
    firstname: "Lady",
    sex: 2,
    interests: ["soccer", "cinema"],
    sexPartnerApproved: [2, 1]
  }
];

const output = program.run(input);

console.log(
  chalk.green(`\n${program.title} finished with value ${chalk.cyan.bold(output)}\n`)
);