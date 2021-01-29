list-notes:
	node src/app.js list

read-note:
	node src/app.js read --title="Cyberpunk2077"

add-note:
	node src/app.js add --title="Cyberpunk2077" --body="Lorem Ipsum"

add-note.validate:
	node src/app.js add

remove-note:
	node src/app.js remove --title="Cyberpunk2077"

lint:
	npm run lint

lint-watch:
	npx nodemon ./node_modules/eslint/bin/eslint.js -- ./ --fix
