const chalk = require('chalk')

const header = (message) => {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bold.bgBlue('=============================='))
  // eslint-disable-next-line no-console
  console.log(chalk.white.bold.bgBlue(`${message}`))
  // eslint-disable-next-line no-console
  console.log(chalk.white.bold.bgBlue('=============================='))
}

const closeHeader = () => {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bold.bgBlue('=============================='))
}

const info = (message) => {
  // eslint-disable-next-line no-console
  console.log(chalk.white.blue(message))
}

const error = (message) => {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bold.bgRed(message))
}

const success = (message) => {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bgGreen(message))
}

module.exports = {
  error, success, header, info, closeHeader,
}
