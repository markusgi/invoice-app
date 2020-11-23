# invoice-app

Screenshots
add gifs

Project Pinocchio
add purpose

Setup Guide
Prerequisites and Frontend

Install node: https://nodejs.org/en/download/

Update npm: $ sudo npm install -g npm@latest

Install Docker: https://docs.docker.com/get-docker/

Clone the repository: $ git clone

Install all dependencies: $ cd frontend/ $ npm i

Start the frontend React app: $ cd frontend/ $ npm start

Test if the React app is running correctly by accessing "http://localhost:3000/"

Docker and Backend

Build the docker image: $ docker build -t registry_name .

Troubleshoot dockerify: $ docker builder prune -a  Repeat step 8.


Setup PyCharm with a remote interpreter for the docker container:

PyCharm settings > Build, Execution, Deployment > Docker > virtual path "/backend" and local path "C:\Users\MyUser\PycharmProjects\project-name\backend"
PyCharm settings > Project > Add Interpreter > Docker Compose > Service: "backend" + Python interpreter path "/opt/conda/envs/backend/bin/python"
Make PyCharm Run/Debug configurations >

Script path: "C:\Users\MyUser\PycharmProjects\project-name\backend\manage.py"
Command: runserver 0.0.0.0:8000

Path mapping: "C:/Users/alex_/PycharmProjects/project-name/backend=/backend"


Make PyCharm Run/Debug configurations > Same as above with command makemigrations

Make PyCharm Run/Debug configurations > Same as above with command migrate



Test if the server is running correctly by accessing "http://localhost:8000/backend/api/admin/"
Start the frontend React app $ cd frontend/ $ npm start and access it on "https://localhost:3000/"


Architecture
add

Endpoints
Registration
api/auth/registration/ POST: Register a new user by asking for an email (send email validation code)

Auth
api/auth/token/ POST: Get a new JWT by passing username and password.
