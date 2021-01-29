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

  return notes.find((note) => note.title === title)
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

  log.header('Notes')
  notes.forEach((note) => {
    log.info(`- ${note.title}`)
  })
  log.closeHeader()
}

const read = (title) => {
  const notes = loadNotes()
  const noteFound = notes.find((note) => note.title === title)

  if (!noteFound) {
    log.error(`Unable to find note with title: ${title}`)
    return
  }

  log.header(`${title}`)
  log.info(`${noteFound.body}`)
  log.closeHeader()
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
  getNotes, add, removeByTitle, list, read,
}
