
const express = require("express");
const app = express();

const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) { }
};

app.get("/", (req, res, next) => {
    crypto.pbkdf2("secret", "salt", 100000, 512, "sha512", (err, derivedKey) => {
        if (err) throw err;
        res.status(200).json({ msg: "Done!" });
    });
});

app.get("/fast", (req, res, next) => {
    res.status(200).json({ msg: "Fast!" });
});

app.listen(5000, () => {
    console.log("Running!");
});
