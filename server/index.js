require('dotenv').config()
var app = require('./app')
var port = process.env.PORT || '3000'

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`listening to port ${port}`)
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
