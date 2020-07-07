const chalk = require('chalk')

const error = (message) => {
  console.log(chalk.white.bold.bgRed(message))
}

const success = (message) => {
  console.log(chalk.white.bgGreen(message))
}

module.exports = { error, success }
