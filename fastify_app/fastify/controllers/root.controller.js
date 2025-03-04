export function getRoot(request, reply) {
	
	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const userTable = db.prepare(query).all();

	return reply.view("index", { title: "Home", userTable });
};