export function dbChecker(request, reply)  {

	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const userTable = db.prepare(query).all();

	console.log(userTable);
	return reply.send({ message: "Someone is checking out the db..." });
};
