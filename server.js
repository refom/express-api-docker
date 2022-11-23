const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello user!! <br /> Add /api to the url to get simple data")
})

app.get("/api", (req, res) => {
    res.json({ user: { name: "Repom", nim: "11191052" } })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})