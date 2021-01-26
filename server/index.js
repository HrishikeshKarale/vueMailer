// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// eslint-disable-next-line no-unused-vars
const dataBase = require("./config/db")(app);
// eslint-disable-next-line no-unused-vars
const routeHandler = require("./api/routerHandler")(app);

app.get("/", (req, res) => {
  res.json({
    message: "Vue Mailer Application ?? "
  });
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
