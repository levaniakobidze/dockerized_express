import express from "express";

const app = express();
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Hello, Dockerized Express App!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
