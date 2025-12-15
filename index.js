import { configDotenv } from "dotenv";
import express from "express";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`server running on ${port}`);
});