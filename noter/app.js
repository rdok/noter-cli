const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes');

const command = process.argv[2];

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
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
    console.log('remove a note');
  },
});

yargs.command({
  command: 'list',
  describe: 'List notes.',
  handler() {
    console.log('list all the notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read notes.',
  handler() {
    console.log('read a note');
  },
});

console.log(yargs.argv);
