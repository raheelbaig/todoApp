const express = require("express")
const cors = require("cors")


const app = express()
const port = process.env.PORT || 3000

let users = []
app.use(express.json())
app.use(cors())

// GET Request
app.get("/users", (req, res) => {
    res.send(users)
})
app.get("/users/:id",(req,res) => {
    if (users[req.params.id]) {
        res.send(users[req.params.id])
    } else {
        res.send("user ID invalid")
    }
})
// -----------------------------------

// POST Request
app.post("/users",(req,res) => {
    if (!req.body.name || !req.body.email || !req.body.pass) {
        res.send("Invalid data")
    } else {
        users.push({
            name :req.body.name,
            email :req.body.email,
            pass :req.body.pass
        })
    }
    res.send("User Created")
})
// -----------------------------------





app.listen(port, (req, res) => {
    console.log(`https://localhost:${port}`);
})