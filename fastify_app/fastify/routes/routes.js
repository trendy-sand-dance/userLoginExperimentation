import {getRoot} from "../controllers/root.controller.js";
import {getLogin} from "../controllers/login.controller.js";
import {getDashboard} from "../controllers/dashboard.controller.js";
import {getRegister} from "../controllers/register.controller.js";
import {registerUser} from "../controllers/registerUser.controller.js";
import {dbChecker} from "../database/dbChecker.js";

async function routes(fastify, options) {
	fastify.get('/', getRoot)
	fastify.get('/login', getLogin)
	fastify.get('/dashboard', getDashboard)
	fastify.get('/register', getRegister)
	fastify.post('/register', registerUser)
	fastify.get('/dbChecker', dbChecker)
};

export default routes;