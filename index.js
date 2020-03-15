const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/data", (req, res) => {
    res.send("Le data");
});

app.listen("3000", () => console.log("Listening on 3000"));