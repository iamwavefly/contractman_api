const express = require("express")
const User = require("../model/UserSchema")

const router = express.Router()

User.plugin()

router.get("/", (req, res) => {
    res.status(200).json({
        status: "ok"
    })
})

router.post("/", function (req, res) {
    User.create(req.body)
    res.json({
        data: "user added"
    })
})

module.exports = router