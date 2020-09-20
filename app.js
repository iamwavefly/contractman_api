const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const session = require("express-session")
const userRoutes = require("./routes/User")
//--> initialize express
const app = express()

// --> express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: ""
}))

app.set("view engine", "ejs")

// --> connect mongodb database
mongoose.connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.tqqou.mongodb.net/ContractMan?retryWrites=true&w=majority`,
    { useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true },
    (err, res) => {
        if (err) throw err
        console.log("connect to DB")
    })

// --> Routes middleware
app.use("/api/", userRoutes)
// -> set up the listener
const PORT = 5000
app.listen(PORT, function (err) {
    if (err) throw err
    console.log(`Listening to PORT:${PORT}`)
})