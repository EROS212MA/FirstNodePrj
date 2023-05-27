const express = require('express')
const app = express()
const port = 3001


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.render("index")
})
app.get("/home" ,(req,res)=>{
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})