COMPOSE_FILE = ./docker-compose.yml
DB_FILE = ./fastify/database/data.db
ENV_FILE = .env

all: build

build:
	docker-compose build

run: 
	docker-compose up -d

status:
	docker-compose ps -a

logs:
	docker-compose logs

clean:
	@if [ -f $(DB_FILE) ]; then \
		rm $(DB_FILE); \
	fi
	@docker stop $$(docker ps -qa) || true
	@docker rm $$(docker ps -qa) || true

re: clean all

.PHONY: all build run status logs clean re
