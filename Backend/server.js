import express from 'express';

const app = express();

app.get("/products", (req,res) => {
    res.send("Server is Ready ");
});

app.listen(3000, () => {
console.log("Server started at http://localhost:3000");
});

