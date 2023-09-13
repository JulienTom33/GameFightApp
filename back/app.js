const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const user = require("./routes/user");
const { initDatabase } = require("./config/db");

// Initiate Mongo Server
initDatabase();

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

app.use(cors());
const corsOptions = {
    origin: '*', // Remplacez par l'URL de votre application front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Autorise les cookies et les en-têtes d'autorisation
    optionsSuccessStatus: 204, // Répond avec un 204 No Content pour les requêtes OPTIONS
  };
  
  app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});