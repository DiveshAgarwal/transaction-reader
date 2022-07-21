## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Folder structure](#folder-structure)

## General info
This project contains REST APIs: 
* Add user transaction from ethereum to DB.
* Gets eth balance of user and current ETH value in INR.
* Updates value of INR against ETH in DB every 10 mins.

## Technologies
Project is created with:
* Node.js: v16.13.0
* MongoDB: 5.0
* Mongoose
* nodemon
* node-cron
	
## Setup
To run this project, kindly make sure that:
* You have compatible Node version.
* Ypu have an account on mongoDB atlas as the project uses MongoDB atlas.
* Please create .env file from .env.sample and fill values as per system config.

To run it in development mode install it locally using npm:

```
$ cd transaction-reader
$ npm install
$ npm run dev 
```

To run it in production mode install it locally using npm:

```
$ cd transaction-reader
$ npm install --production
$ npm start 
```

## Folder Structure
* app.js - entry point in the project
* .env - enviroment file
* config - configuration related files
* routes - all the routes in the application
* docs - swagger documentation for APIs in .yaml format
* src - actual source code
  * controllers - controller of the route
  * cronJobs - cron calling functions
  * helpers - common functions used in the application
  * middlewares - middleware functions like auth, validation etc.
  * models - DB tables / entities
  * repositories - DB queries. To communicate to models.
  * services - service layer for the controllers (business logic)
  * scripts - scripts with business logic for example cron body