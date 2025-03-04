export async function getDashboard(request, reply) {
	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const userTable = db.prepare(query).all();
	return reply.view("dashboard", { title: "Dashboard", userTable });
};