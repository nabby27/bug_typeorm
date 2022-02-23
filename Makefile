BACK_CONTAINER_NAME=issue_typeorm_back

install:
	@docker-compose run --rm $(BACK_CONTAINER_NAME) npm install $(ARGS)
	@docker-compose run --rm $(BACK_CONTAINER_NAME) chown -R node:node .

dev:
	@docker-compose run --rm --service-ports $(BACK_CONTAINER_NAME) npm run dev

migrate/generate:
	@docker-compose run --rm $(BACK_CONTAINER_NAME) npm run migrate:generate $(NAME)

migrate/run:
	@docker-compose run --rm $(BACK_CONTAINER_NAME) npm run migrate:run
