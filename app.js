const express = require('express')
const app = express()
const database = require('./config/connect_database')

const port = 3001

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));




app.get('/', (req, res) => {
  res.render("index")
})
app.get("/home" ,(req,res)=>{
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})