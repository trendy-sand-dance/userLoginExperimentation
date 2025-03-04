import fp from "fastify-plugin";
import Database from 'better-sqlite3';
import fs from "fs";
import path from "node:path";

// use to check whether database (file) already exists
const databasePath = path.join(import.meta.dirname, "/database.db");

// -----------------------------------------------//
// build new database table if not already exists
// -----------------------------------------------//
async function dbConnector(fastify, options) {
	if (fs.existsSync(databasePath)) {
		console.log("Database already exists at: ", databasePath);
	}
	else {
		console.log("Creating new database at: ", databasePath);
		const db = new Database(databasePath);

		const query = `
			CREATE TABLE userTable (
				id INTEGER PRIMARY KEY,
				name STRING NOT NULL,
				username STRING NOT NULL UNIQUE,
				email STRING UNIQUE
			)
		`;

		db.exec(query);
		console.log("Database created successfully!");
		fastify.decorate("db", db);
		fastify.addHook("onClose", (fastify, done) => {
		db.close();
		done();
		});
	}
};
// default allows for custom name for importing
export default fp(dbConnector);
