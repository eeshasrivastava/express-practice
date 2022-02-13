const express = require("express");

let app = express();

app.get("/", (req, res)=>{
    const newLocal = "something";
    console.log(newLocal);
    let dob = new Date(
        parseInt(req.query.year),
        parseInt(req.query.month-1),
        parseInt(req.query.date)
    );
    let now = new Date();

    let differenceInYears = Math.floor((now - dob) / 1000 / 60 / 60 / 24 / 365);

    res.json(differenceInYears);
});

app.listen(3000);