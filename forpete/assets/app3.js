import express from 'express'
import Router from 'express-promise-router'

const app = express()
const routes = Router();
app.use(routes);

routes.get('/', async (req, res) => {
  // set this to true to test our new
  // cow-based greeting system
  const withCow = true
  if(withCow){
    res.send(cowsay.say({text:'Hello, world!'}))
  }else{
    res.send("Hello, world!")
  }
})

app.listen(3333)