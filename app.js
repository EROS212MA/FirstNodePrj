const express = require('express')
const app = express()
const database = require('./config/connect_database')

const port = 3000

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const events = require('./routes/eventsRouter')



app.use(events)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

