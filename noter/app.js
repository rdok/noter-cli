const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',

  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
  },
})

yargs.command({
  command: 'list',
  describe: 'List notes.',
  handler() {
  },
})

yargs.command({
  command: 'read',
  describe: 'Read notes.',
  handler() {
  },
})
console.log(yargs.argv)
