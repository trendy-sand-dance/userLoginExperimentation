(outside container installation for only a database)

npm install
npm init -y
(edit package.json to include types: module)
(include also in script - start: file)
npm install better-sqlite3


< db file created > when db.js is :
{

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

}

*run*
npm run start

then fill with data:
{

	const data = [
		{name: "someone", username: "myuser"},
		{name: "person2", username: "user2"},
		{name: "moredata", username: "me456"}
	];

	const insertData = db.prepare("INSERT INTO testTable (name, username) VALUES (?, ?)");

	data.forEach((element) => {
		insertData.run(element.name, element.username);
	});

	// conventional + best practice to close when using for an application
	db.close(); 

}

if run twice, error since user info is unique and can't be created twice:
SqliteError: UNIQUE constraint failed: testTable.username

**TESTING**

manually check / access database like running mysql:
sqlite3 app.db // sqlite3 <database name (check file if needed)>

select * from <table>;
-> returns list of data inside db table

exit with CTRL+C x2


! once table created, data inserted, all is stored in database file so can comment out/remove code if we want, change the file to
	do other things with the database, everything stays intact till db file is deleted