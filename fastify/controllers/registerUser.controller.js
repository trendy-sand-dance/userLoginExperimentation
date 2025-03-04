export function registerUser(request, reply) {
	const { name, email, username, password } = request.body;
	if (!name || !email || !username || !password) {
		return reply.send({error: "All fields are required"});
	}
	try {
		console.log("name: " + name);
		console.log("email: " + email);
		console.log("username: " + username);
		console.log("password: " + password);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("INSERT INTO userTable (name, email, username, password) VALUES (?, ?, ?, ?)");
		const result = stmt.run(name, email, username, password);
		return reply.send({ message: `New user added: ${username}`, id: result.lastInsertRowid });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
	}
};