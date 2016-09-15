﻿const express = require("express");
const app = express();
const lessMiddleware = require("less-middleware");

app.set("views", __dirname + "\\views");
app.set("view engine", "pug");
app.use(lessMiddleware(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

app.get("/",
    function (req, res) {
        res.render("index", { page: "home" });
    });

app.get("/about",
    function (req, res) {
        res.render("index", { page: "about" });
    });

app.get("/projects",
    function (req, res) {
        res.render("index", { page: "projects" });
    });

app.listen(3000,
    function () {
        console.log("Express listening on port 3000.");
    });