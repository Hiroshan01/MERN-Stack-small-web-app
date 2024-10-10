const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute"); // Corrected path

const app = express();
const cors=require("cors");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);


mongoose.connect("mongodb+srv://admin:1234@project.rm6md.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.log(err));
