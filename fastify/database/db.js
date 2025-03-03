import fp from "fastify-plugin"
import Database from "better-sqlite3"
import fs from "fs"
import path from "node:path"

const databasePath = path.join(import.meta.dirname, "/data.db")

async function dataBase(fastify, options) {
	if (!fs.existsSync(databasePath)) {
		console.log("CReating new database at: ", databasePath)
	}
	else {
		console.log("Database already exists at: ", databasePath)
	}
	const db = new Database(databasePath, { verbose: console.log })

	db.exec(`
			CREATE TABLE IF NOT EXISTS users (
				id INTEGER PRIMARY KET AUTOINCREMENT,
				username TEXT NOT NULL,
				password TEXT NOT NULL,
			)
			`)
	
	console.log("Database initialized successfully")
	fastify.decorate("db", db)
	console.log("Fastify DB instance decorated")
	fastify.addHook("onClose", (fastify, done) => {
		console.log("closing database connection...")
		db.close()
		done()
	})

	console.log("Database and posts table created successfully")
}

export default fp(dataBase)