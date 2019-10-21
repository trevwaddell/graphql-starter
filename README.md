# GraphQL Server

This repository is a starting point to get up and running with a graphql server that connects to mongoDB.

## Getting Started

clone the repo

```
$ git clone [git url]
```

cd into the root directory

```
$ cd [repo name]
```

install dependencies

```
$ yarn
```

### Adding your environment variables

Inorder to start the application, you will need add your Mongo DB connection string to a `dotenv` file.

1. In root directory create file named .env

2. Add the following line to it: `MONGO_CONNECTION_URI=[your connection url]`

### Start the application

start the app

```
$ yarn start:local
```
