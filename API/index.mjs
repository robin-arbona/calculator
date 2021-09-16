import express from "express";
import rs from "rocket-store";
const app = express();
const port = process.env.PORT || 3001;
import cors from "cors";

const allowedOrigins = ['http://localhost:3000','undefined']
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS' + origin))
    }
  }
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));
app.use(express.json()) /

app.get("/result", async (req, res) => {
    let result = await rs.get("results", "*");
    console.log('GET',result);
    res.send(JSON.stringify(result));
});

app.post("/result",async (req, res) => {
    if(!req.body.result){
        console.error('No key result found',req.body);
        res.json({'success': false, "message":"No result to store"});
    } else {
        let date = new Date().toUTCString();
        let result = await rs.post("results",date, req.body.result);
        res.json({'success': true, "message":"Result stored", result});
        console.log('POST',result);
    }
})

app.delete("/result",async (req, res) => {
    let result = await rs.delete("results", "*");
    console.log('Delete: ',result);
    res.send(JSON.stringify(result));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});