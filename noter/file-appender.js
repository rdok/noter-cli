const fs = require('fs')
const db = 'noter.db'

fs.writeFileSync(db, 'Updated: This file was created by Node.js!\n')

fs.appendFileSync(
    db,
    'Appended: This message was appended to the existing contents.\n'
)
