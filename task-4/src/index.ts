import express from "express";
import * as console from "node:console";
import musicals from "../data/musicals.json"

const port : number = 3001;
const app = express()
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  if(musicals === undefined) {
    res.status(404).send("No musicals found");
  }
  res.send(musicals);
})

app.get("/:id", (req: express.Request, res: express.Response) => {
  if(musicals[Number(req.params.id)] === undefined) {
    res.status(404).send("Musical not found");
  }
    res.send(musicals[Number(req.params.id)]);
})




