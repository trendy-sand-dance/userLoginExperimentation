export async function getLogin(request, reply) {
	const { username, password } = request.body;
	if (!username || !password) {
		return reply.view("login", { title: "Login" });	}
	try {
		console.log("username: " + username);
		console.log("password: " + password);

		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error"});
		}
		// check login details against database table
		//const stmt = db.prepare("")
	}
	catch (err) {
		console.log(err);
		return reply.view("login", { title: "Login" });
	}
};


{/*<div class="div-register">
	<h2>Login</h2>
	<form action="/dashboard" method="post">
	<label for="username">Username:</label>
	<input type="input" id="username" name="username" required />
	<label for="password">Password:</label>
	<input type="password" id="password" name="password" required />
	<input type="submit" value="Login">
	</form>
	</div>*/}