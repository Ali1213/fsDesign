var express = require('express')

var app = express()


app.use(express.static('./front'))

app.listen(8080)