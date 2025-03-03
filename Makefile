
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
	@docker stop $$(docker ps -qa) || true
	@docker rm $$(docker ps -qa) || true

re: clean all

.PHONY: all build run status logs clean re
