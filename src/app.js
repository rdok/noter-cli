const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: { describe: 'Note title', demandOption: true, type: 'string' },
    body: { describe: 'Note body', demandOption: true, type: 'string' },
  },
  handler(argv) { notes.add(argv.title, argv.body) },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: { describe: 'Note title', demandOption: true, type: 'string' },
  },
  handler(argv) { notes.removeByTitle(argv.title) },
})

yargs.command({
  command: 'list',
  describe: 'List notes.',
  handler() { notes.list() },
})

yargs.command({
  command: 'read',
  describe: 'Read a note.',
  builder: {
    title: { describe: 'Note title', demandOption: true, type: 'string' },
  },
  handler(argv) { notes.read(argv.title) },
})

yargs.parse()
