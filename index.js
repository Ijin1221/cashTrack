import { configDotenv } from "dotenv";
import express from "express";
import { router } from "./routes/indexRoutes.js";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/cashTrack', router)

app.listen(port, () => {
  console.log(`server running on ${port}`);
});