//Require external tools
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//Configure environment variables
dotenv.config();

//Create server
const app = express();

//Add external tools to the server
app.use(express.json());
app.use(cors());

//Import available routes
let user_routes = require("./routes/user.js");
let character_routes = require("./routes/character.js");

//Add routes to the server
const API_PATH = process.env.API_PATH || "";
app.use(API_PATH, user_routes);
app.use(API_PATH, character_routes);

//Import database
const db = require('./utilities/database');

//Launch the server
if (!process.env.PORT) throw "Unable to run server. A port must be provided!";

app.listen(process.env.PORT, async () => {
  try {
    await db.authenticate();
    console.log(`Server is running on port ${process.env.PORT}.`);
  }
  catch (error) {
    console.log("Unable to connect to the database: ", error);
  }
});