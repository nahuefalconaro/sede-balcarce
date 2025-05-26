import express  from "express";
import cors from "cors";
import axios from "axios";
const app = express();

app.use(cors());
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.route("/test").get((req, res) => {
    res.send("Hello World!");
});

app.route("/clients").get(async (req, res) => {
    try{
        const response = await axios.get("https://rickandmortyapi.com/api/character/2")
        res.json(response.data)
    } catch (error) {
        res.status(500).send(error)
    }
});

app.route("/character/:id").get(async (req, res) => {
   try{
     const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
     res.json(response.data)
   } catch (error) {
       res.status(500).send(error)
   } 
});
