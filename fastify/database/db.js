import fp from "fastify-plugin";
import Database from 'better-sqlite3';
import fs from "fs";
import path from "node:path";

// use to check whether database (file) already exists
const databasePath = path.join(import.meta.dirname, "/db.db");

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
				email STRING NOT NULL UNIQUE
			)
		`;

		db.exec(query);
		console.log("Database created successfully!");
	}
	
	// -----------------------------------------------//
	// insert data
	// -----------------------------------------------//
	async function dbDataInsert(fastify, options) {
		// add data to db...
		if ()
	}
	const data = [
			{name: "someone", username: "myuser"},
			{name: "person2", username: "user2"},
			{name: "moredata", username: "me456"}
		];
		
	const insertData = db.prepare("INSERT INTO testTable (name, username) VALUES (?, ?)");
	
	data.forEach((element) => {
		insertData.run(element.name, element.username);
	});
	
	
	// -----------------------------------------------//
	// query the database | console log all the data (can send this info as API)
	// -----------------------------------------------//
	
	//const query = `SELECT * FROM testTable`;
	//const users = db.prepare(query).all();
	
	//console.log(users);
	
	fastify.decorate("db", db);
	fastify.addHook("onClose", (fastify, done) => {
	db.close();
	done();
	});
};

export default fp(dbConnector);
