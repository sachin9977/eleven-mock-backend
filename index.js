const express = require("express");
const cors = require("cors");
const { userController } = require("./routes/user.routes");
const { connection } = require("./config/db");
const { authentication } = require("./middlewares/authentication");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { bugController } = require("./routes/bug.routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());

app.use("/user", userController);
app.use("/bug", bugController);
// app.use(authentication);



app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${PORT}`);
});
