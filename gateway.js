'use strict'

const http = require('http')
var Router = require('router')
var request = require('request');

const port = 3000

var router = Router()

const requestHandler = (req, res) => {
  try {
    const { method, url } = req;

    console.log('method', method)
    request({
      url: 'http://localhost:5005/lol',
      method
    }).pipe(res)
  }
  catch (e) {
    console.log(e.name, e.message);
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
