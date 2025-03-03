// imports
import Fastify from 'fastify';
//import routes from "./routes/routes.js";
//import formbody from "@fastify/formbody";

// static fastify
//import fastifyStatic from "@fastify/static";

// database
// import dataBase from "./database/db.js";


// initialisation
const fastify = Fastify({
		logger: { level: 'error' }
})
const PORT = '8080'
const HOST = 'localhost'

// declare route - standard '/'
//fastify.get('/', function handler (request, reply) {
//	reply.send ({ hello: 'fastify server up and running '})
//})

// run the server
fastify.listen({ port:PORT, host:HOST }, (err) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${HOST, PORT}`)
})

