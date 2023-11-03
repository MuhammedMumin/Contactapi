const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();

const port = process.env.PORT;


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));
app.use("/users", require("./routes/userRoutes"));
// app.use(errorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});