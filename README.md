# todo-app
## Build
To build the Docker image for the Todo App, run the following command. This command passes the current user's UID and GID as build arguments to ensure that the container runs with the correct permissions.
```docker
docker compose build --build-arg UID="$(id -u)" --build-arg GID="$(id -g)"
```

## Start container
To start the Docker container in detached mode, use the following command. This will launch the Todo App container in the background.
```docker
docker compose up -d
```

## Shutdown
To stop and remove the Docker container, use the following command. This will gracefully shut down the running container and clean up any associated resources.
```docker
docker compose down
```

## Access
Once the container is running, you can access the Todo App by navigating to the following URL in your web browser:

http://127.0.0.1:3000