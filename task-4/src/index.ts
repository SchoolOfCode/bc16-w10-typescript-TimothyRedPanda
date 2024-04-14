import express from "express";
import * as console from "node:console";
import * as musicals from "../data/musicals.json"

const port : number = 3000;
const app = express()
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

