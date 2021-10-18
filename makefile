mongo: explain
	@echo "Running server using MONGO based services"
	@DB=mongo npm run start

mysql: explain
	@echo "Running server using MYSQL based services"
	@DB=mysql npm run start

build: explain clean
	@echo "I'm building!"
	@npm run build
	@echo "All done!"

test:
	@echo "Running tests"
	@npm test

clean:
	@echo "Ok, first let's clean some stuff up..."
	@rm -rf dist
	@echo "Done. Back to your regularly scheduled program.\n"
	
explain:
	@echo "Yes, this is an over-engineered example of using make, to run simple npm scripts. It's just for fun. Leave me alone.\n"