const express = require("express");
const router = require("./routes/exercise");
const dbConnection = require("./configuration/dbconfig");
const cors = require("cors");

const app = express();
const PORT = 5000;

//dbConnection
dbConnection.connection();
//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/exercise", router);

//connecting a server
app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
