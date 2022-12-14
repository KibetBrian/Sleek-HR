seedDb:
	npx sequelize-cli db:seed:all
undoSeed: 
	npx sequelize-cli db:seed:undo
undoAllSeeds:
	npx sequelize-cli db:seed:undo:all
migrateUp:
	npx sequelize-cli db:migrate
migrateDown:
	npx sequelize-cli db:migrate:undo
