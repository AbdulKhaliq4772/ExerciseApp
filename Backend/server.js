const express = require("express");
const router = require("./routes/exercise");
const dbConnection = require("./configuration/dbconfig");

const app = express();
const PORT = 4000;

//dbConnection
dbConnection.connection();
//middleware
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
