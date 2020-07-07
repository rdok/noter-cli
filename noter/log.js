const chalk = require('chalk')

const error = (message) => {
  console.log(chalk.bold.red(message))
}

module.exports = { error }
