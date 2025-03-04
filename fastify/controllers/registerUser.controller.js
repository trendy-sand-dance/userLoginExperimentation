
export function registerUser(request, reply) {
	const { username, password } = request.body;
	if (!username || !password) {
		return reply.send({error: "All fields are required"});
	}
	try {
		console.log("username: " + username);
		console.log("password: " + password);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("INSERT INTO userTable (username, password) VALUES (?, ?)");
		const result = stmt.run(username, password);
		return reply.send({ message: `New user added: ${username}`, id: result.lastInsertRowid });

		//return "New user: " + username + " password: " + password;
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
	}
};


//app.post("/add-data", async (request, reply) => {
//	const { username, password } = request.body;
	
//	try {
//	  const stmt = request.server.db.prepare("INSERT INTO posts (username, password) VALUES (?, ?)");
//	  const result = stmt.run(title, content);
	  
//	  reply.code(201).send({ id: result.lastInsertRowid });
//	} catch (error) {
//	  reply.code(500).send({ error: "Failed to add data to the database" });
//	}
//  });