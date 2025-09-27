import { createClient } from "@supabase/supabase-js";
import express from 'express';
import bodyParser from "body-parser";
import "dotenv/config";


const app = express();
app.use(bodyParser.json())

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

app.post("/webhook", async(req:express.Request, res:express.Response)=>{
    const {title, description, tags} = req.body || {};
    if (!title){
        return res.status(400).send("Missing title")
    }

     const { error } = await supabase
    .from("ittybit-db")
    .insert([{ title, description, tags }]);


    if (error) {
    console.error(error);
    return res.status(500).send("Insert failed");
  }

  res.status(200).send("Inserted into DB");


})

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/webhook");
});