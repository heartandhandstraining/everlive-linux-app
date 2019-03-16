const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.send("Hello from Linux!");
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
