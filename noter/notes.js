const fs = require('fs')

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
  notes.push({ title, body })

  saveNotes(notes)
}

module.exports = {
  getNotes,
  addNote,
}
