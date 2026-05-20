const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const notesRoutes = require("./routes/notes");

app.use("/notes", notesRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});