import router from "./router";
import con from "./db";

const Express = require("express");

con.connect((err) => {
  if (err) throw err;
  console.log("DB Successfully connected!");
});

const app = Express();

app.use("/", router);

export default app;
