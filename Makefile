export EAL_FRONTEND_VERSION=$$(git rev-parse --short HEAD)
export EAL_FRONTEND_IMAGE="eal-front:${EAL_FRONTEND_VERSION}"

build:
	rm -rf docker/target
	mkdir -p docker/target
	cp -r .env package.json src *.js docker/target
	cd docker && docker build --rm -t ${EAL_FRONTEND_IMAGE} .
	docker tag ${EAL_FRONTEND_IMAGE} eal-front:latest
