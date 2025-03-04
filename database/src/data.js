import Database from 'better-sqlite3';
const db = new Database('app.db');

// -----------------------------------------------//
// build new database table
// -----------------------------------------------//

//const query = `
//	CREATE TABLE testTable (
	//		id INTEGER PRIMARY KEY,
	//		name STRING NOT NULL,
	//		username STRING NOT NULL UNIQUE
	//	)
//`;

//db.exec(query);


// -----------------------------------------------//
// insert data
// -----------------------------------------------//

//const data = [
	//	{name: "someone", username: "myuser"},
	//	{name: "person2", username: "user2"},
	//	{name: "moredata", username: "me456"}
	//];
	
	//const insertData = db.prepare("INSERT INTO testTable (name, username) VALUES (?, ?)");
	
	//data.forEach((element) => {
		//	insertData.run(element.name, element.username);
		//});

		
// -----------------------------------------------//
// query the database | console log all the data (can send this info as API)
// -----------------------------------------------//

//const query = `SELECT * FROM testTable`;
//const users = db.prepare(query).all();

//console.log(users);


// -----------------------------------------------//
// query the database | console log a singleusers data
// -----------------------------------------------//

// '?' for not yet provided data, give <id> in the get() call | searching db for id - 2 
const user = db.prepare('SELECT * FROM testTable WHERE id = ?').get(2);
console.log(user);

// conventional + best practice to close when using for an application
// doesnt delete/remove anything, just dont keep it open unnecessarily
db.close();