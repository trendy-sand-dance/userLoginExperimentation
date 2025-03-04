import Database from 'better-sqlite3';
const db = new Database('app.db');

// build new database table
//const query = `
//	CREATE TABLE testTable (
//		id INTEGER PRIMARY KEY,
//		name STRING NOT NULL,
//		username STRING NOT NULL UNIQUE
//	)
//`;

//db.exec(query);

const data = [
	{name: "someone", username: "myuser"},
	{name: "person2", username: "user2"},
	{name: "moredata", username: "me456"}
];

const insertData = db.prepare("INSERT INTO testTable (name, username) VALUES (?, ?)")