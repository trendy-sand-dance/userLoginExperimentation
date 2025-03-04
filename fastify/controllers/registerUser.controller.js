
export function registerUser(request, reply) {
	const { username, password } = request.body;
	if (!username || !password) {
		return reply.send({error: "All fields are required"})
	}
	try {
		const { dataBase } = request.server.dataBase
		if (!dataBase) {
			console.error("Database is not initialized")
			return reply.send({ error: "Database connection error" })
		}
		console.log("username: " + username)
		console.log("password: " + password)
		const stmt = dataBase.prepare("INSERT INTO users (username, password) VALUES (?, ?)")
		stmt.run(username, password)
		return "New user: " + username + " password: " + password
	}
	catch (err) {
		console.log(err)
		return reply.send({ error: "Registration failed" })
	}
}