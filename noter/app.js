const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

console.log(process.argv)


const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('remove a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes.',
    handler: function() {
        console.log('list all the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes.',
    handler: function() {
        console.log('read a note')
    }
})


console.log(yargs.argv)
