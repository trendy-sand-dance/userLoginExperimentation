FROM node:latest
# 22

# working directory inside container
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon \
	&& npm install better-sqlite3 \
	&& npm install @fastify/formbody
	
#&& npm install fastify@latest \

EXPOSE 3000

CMD ["npm", "start", "dev"]
