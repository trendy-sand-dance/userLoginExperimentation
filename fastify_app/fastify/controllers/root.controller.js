export function getRoot(request, reply) {
	
	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const userTable = db.prepare(query).all();

	console.log("users: " + userTable);
	return reply.view("index", { title: "Home", userTable });
	return ("Root");
};