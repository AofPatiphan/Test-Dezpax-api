import express from "express";
const productRoute = require("./routes/productRoute");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/product", productRoute);

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello" });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "resource not found on this server" });
});

const http = require("http");
const server = http.createServer(app);

server.listen(8000, () => console.log(`server run on port 8000`));

module.exports = app;
