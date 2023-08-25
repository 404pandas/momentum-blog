// Global Modules
const path = require("path");

// Third Party Modules
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// Local Modules
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();

const sess = {
  secret: "Donna likes quotes",
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

// Sets handlebars as html to be served
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Defines all folders to be served
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () =>
  console.log(`Now listening at Port: ${PORT} at http://localhost:${PORT}`)
);
