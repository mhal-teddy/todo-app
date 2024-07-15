# todo-app
## Build
### Prerequisites
- Docker
- Docker Compose (V2)
- `.env` file with the following environment variables:
  - `MYSQL_ROOT_PASSWORD`: The root password for the MySQL database.
  - `MYSQL_DATABASE`: The name of database to create.

### Steps
1. Clone the Repository  
Clone the repository to your local machine:
    ```git
    git clone https://github.com/mhal-teddy/todo-app.git
    cd todo-app
    ```
2. Create the .env file  
    Create the `.env` file in the root directory of the project and add the required environment variables:
    ```
    MYSQL_ROOT_PASSWORD=<your_root_password>
    MYSQL_DATABASE=<your_database_name>
    ```
3. Build and Start the Services  
    Use Docker Compose to build and start the services:
    ```docker
    docker compose up --build -d
    ```
4. Access the application  
    Once the container is running, you can access the Todo App by navigating to the following URL in your web browser:

    http://127.0.0.1:3000

5. Stopping the Services  
    To stop the running services, use:
    ```docker
    docker compose down
    ```

### Notes
- The MySQL data is stored in a Docker volume names `db_data`.
- The Node.js application source code is copied from the `./src` directory to `/usr/src/app` in the container.