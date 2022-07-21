// Environment variables
require("dotenv").config();

const app = require("express")();
const bodyParser = require("body-parser");
require('./config/database');

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const apiRoutes = require("./routes");
const middleware = require("./src/middlewares");
require("./config/database.js");

// CORS-Handeling
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  } else {
    next();
  }
});

app.use(bodyParser.json());
app.set("port", process.env.SERVER_PORT);
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Transaction Reader API",
      version: "1.0.0",
      description: "Transaction Reader API documentation",
    },

    servers: [
      {
        url: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
        description: "Test",
      },
    ],
  },
  apis: ["docs/*.yaml"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

apiRoutes(app);

app.use(middleware.appResponse.success);
app.use(middleware.appResponse.error);

// Express Settings
app.set("port", process.env.SERVER_PORT);

// Start server
app.listen(process.env.SERVER_PORT, "0.0.0.0", () => {
  console.log(
    `Express server listening on port ${process.env.SERVER_PORT} CONNECTED TO ${process.env.ENV}`
  );
});
