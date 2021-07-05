# Haufe technical challenge
 
## Work environment

For my local environement I used the following versions:

 - MySQL 8.0.23
 - npm 7.19.0
 - NodeJS 16.4.1

For the development I was working with MySQL Workbench, Visual Studio Code, Postman and Mozilla Firefox.
I also tested the website with Microsoft Edge and Google Chrome. I assume that the final result should work with Safari or Opera, but it shouldn't with Internet Explorer.

## System setup
The steps that should be followed are:

 1. Check the installation of MySQL, NodeJS and npm.
 2. Clone the repo in your local system
 3. Navigate inside the "backend" folder and run `npm install`.
 4. Create a .env file in the folder. You can find an example just below ot this list.
 5. Create a MySQL username with the values that you used in the .env file.
 6. Execute the SQL script in `backend/db_schema.sql`
 7. Run the command `node server.js` and check that the server is able to connect to the database.
 8. Navigate inside the "frontend" and run `npm install`.
 9. Create a .env file in the folder. You can find an example just below ot this list.
 10. Run the command `npm start`. 
 11. Navigate to the URL and port of your frontend an create a user in the signup screen

**Backend env file example** <br>
`PORT = 3001`<br>
`DB_HOST = localhost` <br>
`DB_NAME = haufe` <br>
`DB_USER = haufe` <br>
`DB_PASS = haufe1234` <br>
`SECRET = mostsecurekeyintheworld` <br>

**Frontend env file example** <br>
`REACT_APP_API_HOST = localhost`<br>
`REACT_APP_API_PORT = 3001`<br>
`REACT_APP_API_PROTOCOL = http`<br>
`PORT = 3000`<br>

## Database
Event thought in the interview I was told that the organization works with MERN stack, in my opinion the given requirements are most easy to fullfill with an SQL database. 

In fact, NoSQL means ["not only SQL"](https://www.couchbase.com/resources/why-nosql), and in our case, the data is clearly relational and if we need to extend some functionality it will be the easiest way to go. Algo, if sometimes we need something that doesn't fits in a SQL database we can add a new DBMS based on another paradigm.

Once I decided that I was going to use an **SQL database**, I choosed **MySQL 8.0** as my DBMS for time reasons, as I already had it installed in my environement.


## Authentication
The first decision that I made was to choose a token-based authentication system, which allowed me to work with a restful API.
I think that it was the best option as it allows to build a simple system that uses just a few amount of resources, without the need to manage sessions. 

On the other hand, I assumed that the security wouldn't be the best. For simplicity reasons, I stored the token in the localStorage and I didn't put an expiration date to the token. I think that both things are not critical as it's just a challenge. Also, I didn't want to spend time fixing that, as I was aware of it.


## Frontend organization
Inside the "src" folder of the frontend, we can find the following folders:

 - **Assets:** contains a general CSS file and a folder with some images used for the development.
 - **Components:** contains the components organized by folders. Each component has its own CSS file.
 - **Helpers:** contains a file with some UI helper methods.
 - **Pages:** contains the pages available in the system.
 - **Services:** contains some HTTP services, the API config.
 - **State:** contains the files related with Redux.



## Frontend libraries
I only added two libraries during the development. The first one was [**axios**](https://www.npmjs.com/package/axios) to be able to make HTTP calls in a simple way. The other one was [**Redux Toolkit**](https://www.npmjs.com/package/@reduxjs/toolkit) to simplify the development process.
  

## Backend organization

In this case, the organization is the typical one of a Backend project. We can find the following folders:

 - **Controllers:** containing the business logic of the backend.
 - **Routes:** containing the available endpoints configuration.
 - **Models:** containing my database models.
 - **Utilities:** containing several files with helper methods.

## Backend libraries
The libraries used for the backend development are:

 - [**Axios**](https://www.npmjs.com/package/axios): the same library as on the frontend, to be able to access the Rick and Morty API.
 - [**Cors**](https://www.npmjs.com/package/cors): to configure CORS headers in the server.
 - [**Dotenv**](https://www.npmjs.com/package/dotenv): to parse the .env file
 - [**Joi**](https://www.npmjs.com/package/joi): to validate the data received in the API calls.
 - [**Jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken): to create and validate the JWT.
 - [**Sequelize**](https://www.npmjs.com/package/sequelize): SQL ORM to connect to my database

  
## Time spent
The approximate time spent to develop the entire system was:

 - **June 25th | 4 hours:** check the requirements, make some design decisions, configure the environment and start defining the style.
 - **June 26th | 2 hours:** development of the signup and login form.
 - **July 1st | 4 hours:** development of the rest of the views (characters list, not found and character detail)
 - **July 2nd | 8 hours:** creation of the Github repo, development of the API calls, add favourite indicators and pagination to the frontend. Finally, add the business logic to the frontend.
 - **July 4th | 5 hours**: add responsiveness, apply Redux, fix some bugs and improve the interaction with the favourite button.

**Total time spent: 23 hours** 

## Known limitations
The limitations that I found are:

 - Horizontal responsiveness
 - Missing alerts on conflict/authorization/other errors in Characters list/detail
 - Missing loading on signup/login
 - Token storage system
 - Refresh token system
 - Testing is not implemented
 - Deployment not done
 - CI / CD not configured

## Future work
Some of the improvements that can be made are related to the known limitations already listed. Some proposals to improve the system are:

 - Improve de UI to alert user on authentication, conflict or not found errors in the API
 - Improve de JWT system security
 - Implement a loading for the signup/login process.
 - Implement backend testing with Mocha or some similar framework.
 - Implement frontend testing with Cypress or some similar framework.
 - Store the data in our database and create a scheduled process that retrieves and updates the characters data.
 - Create a password recovery system.
 - Deploy the system in some production environment
 - Configure CI/CD process

