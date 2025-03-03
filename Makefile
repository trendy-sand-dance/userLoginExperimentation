#COMPOSE = ./src/docker-compose.yml

#all: build run

#run:
#	docker-compose -f $(COMPOSE) up

#build:
#	docker-compose -f $(COMPOSE) up --build -d

#clean:
#	@docker stop $$(docker ps -qa) || true
#	@docker rm $$(docker ps -qa) || true

#re: clean all

#.PHONY: all run build clean re

COMPOSE = ./src/docker-compose.yml

all: build

build:
	docker-compose -f $(COMPOSE) build

run: 
	docker-compose -f $(COMPOSE) up -d

status:
	docker-compose -f $(COMPOSE) ps -a

logs:
	docker-compose -f $(COMPOSE) logs

clean:
	@docker stop $$(docker ps -qa) || true
	@docker rm $$(docker ps -qa) || true

re: clean all

.PHONY: all build run status logs clean re