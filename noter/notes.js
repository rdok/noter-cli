const fs = require('fs')
const log = require('./log')

const dbPath = 'notes.json'
let db = null

const getNotes = () => 'Your notes...'

const saveNotes = (notes) => {
  const json = JSON.stringify(notes)
  fs.writeFileSync(dbPath, json)
  db = json
}

const loadNotes = () => {
  if (db !== null) { return db }

  let buffer
  try {
    buffer = fs.readFileSync(dbPath)
    const json = buffer.toString()
    db = JSON.parse(json)
    return db
  } catch (error) {
    return []
  }
}

const noteTitleExists = (title) => {
  const notes = loadNotes()

  return notes.filter((note) => note.title === title).length !== 0
}

const add = (title, body) => {
  const notes = loadNotes()

  if (noteTitleExists(title)) {
    log.error('Note title taken!')
    return
  }

  notes.push({ title, body })
  saveNotes(notes)
  log.success('Note saved!')
}

const list = () => {
  const notes = loadNotes()

  log.header('==============================')
  log.header('          Notes               ')
  log.header('==============================')
  notes.forEach((note) => {
    log.info(`- ${note.title}`)
  })
  log.header('==============================')
}

const removeByTitle = (title) => {
  const notes = loadNotes()

  if (!noteTitleExists(title)) {
    log.error('Note title does not exists!')
    return
  }

  const reducedNotes = notes.filter((note) => note.title !== title)
  saveNotes(reducedNotes)
  log.success('Note removed!')
}

module.exports = {
  getNotes,
  add,
  removeByTitle,
  list,
}
