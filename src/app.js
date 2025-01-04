import express from 'express';
import path from "path";
import { title } from 'process';

const __dirname = path.resolve();
const app = express();
const port = 5001

app.use("/static", express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set("views", __dirname + "/src/view")

app.get('/index', (req, res) => {
  res.render("pages/index",{
    title:"Index"
  })
})
app.get('/components', (req, res) => {
  res.render("pages/components",{
    title:"Components"
  })
})
app.get('/forms', (req, res) => {
  res.render("pages/forms",{
    title:"Components"
  })
})
app.get('/icons', (req, res) => {
  res.render("pages/icons",{
    title:"Components"
  })
})
app.get('/tables', (req, res) => {
  res.render("pages/tables",{
    title:"Tables"
  })
})
app.get('/notifications', (req, res) => {
  res.render("pages/notifications",{
    title:"Notifications"
  })
})
app.get('/typography', (req, res) => {
  res.render("pages/typography",{
    title:"Typography"
  })
})
app.listen(port, function() {
  console.log("http://localhost:" + port)
})