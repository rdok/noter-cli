const fs = require('fs')
const log = require('./log')

const dbPath = 'notes.json'

const getNotes = () => 'Your notes...'

const saveNotes = (notes) => {
  const json = JSON.stringify(notes)
  fs.writeFileSync(dbPath, json)
}

const loadNotes = () => {
  let buffer
  try {
    buffer = fs.readFileSync(dbPath)
    const json = buffer.toString()
    return JSON.parse(json)
  } catch (error) {
    return []
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const titleExists = notes.filter((note) => note.title === title).length !== 0

  if (titleExists) {
    log.error('Note title taken!')
    return
  }

  notes.push({ title, body })
  saveNotes(notes)
}

module.exports = {
  getNotes,
  addNote,
}
