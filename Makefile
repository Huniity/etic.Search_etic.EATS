bash:
	docker run -it nginx bash

build:
	docker build -t custom-nginx -f ops/Dockerfile .

run2:
	docker run \
	--name my-nginx-container \
	-d \
	-p 8080:80 \
	custom-nginx

run: build
	docker run -p 8080:80 custom-
	
up:
	docker compose up
