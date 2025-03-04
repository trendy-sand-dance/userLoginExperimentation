import fp from "fastify-plugin";

async function dbChecker(fastify, options)  {

	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const users = db.prepare(query).all();

	console.log(users);

};

export default fp(dbChecker);