// imports
import Fastify from 'fastify'
import routes from "./routes/routes.js"
import formbody from "@fastify/formbody"

// view and EJS stuff
import path from "node:path"
import fastifyView from "@fastify/view"
import ejs from "ejs"
const __dirname = import.meta.dirname

// static fastify
import fastifyStatic from "@fastify/static"

// database
import dataBase from "./database/dbCreation.js"

// initialisation
const fastify = Fastify({
		logger: { level: 'error' }
})

const PORT = 3000
const HOST = '0.0.0.0'

fastify.register(dataBase)
fastify.register(formbody)

fastify.register(fastifyView, {
	engine: {
		ejs,
	},
	root: path.join(__dirname, "views"),
	viewExt: "ejs",
})

fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public-css"),
	prefix: "/public-css",
})

fastify.register(routes)

// run the server
fastify.listen({ port:PORT, host:HOST }, (err) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at host: ${HOST} port: ${PORT}`)
})

