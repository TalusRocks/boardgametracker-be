const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

const playsRouter = require('./src/routes/play-routes')
app.use('/plays', playsRouter)

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || "Sorry, something went wrong."
  res.status(status).json({error: {message}})
})

app.use((req, res, next) => {
  const status = 404
  const message = `Could not ${req.method}${req.path}`
  res.status(404).json({status, message})
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
