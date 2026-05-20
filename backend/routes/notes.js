const express = require("express");

const router = express.Router();

const db = require("../db");

router.get("/", (req, res) => {

    db.query("SELECT * FROM notes", (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });

});

router.post("/", (req, res) => {

    const { title, subject, author } = req.body;

    const sql =
        "INSERT INTO notes(title, subject, author) VALUES (?, ?, ?)";

    db.query(sql, [title, subject, author], (err, result) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                message: "Note uploaded successfully"
            });
        }

    });

});

module.exports = router;