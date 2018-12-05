'use strict'

const { send, json } = require('micro')
const httpHash = require('http-hash')
// const url = require('url')

// import { send, json } from 'micro'
// import httpHash from 'http-hash'

const hash = httpHash()

hash.set('GET /lol', async req => {

    try {
        const data = {
            response: true,
            data: 'Hola mundo'
        }

        return data
    } catch (err) {
        throw new Error('something wrong happend')
    }
})

// export default async function main(req, res) {
//     try{
//         req.body = await json(req)
//         const data = await match.handler(req, res)
//         const response = success(data, 'Query succesfull executed', req)

//         return send(res, 200, response)
//     } catch (err) {
//         console.log('error')

//         return send(res, '404', response)
//     }
// }

module.exports = async (req, res) => {
    const { method, url } = req
    console.log('url in test', url)
    // console.log('method', method)
    const { pathname, query } = require('url').parse(url, true)
    console.log('pathname', pathname)
    // console.log('query', query)
    const match = hash.get(`${method.toUpperCase()} ${pathname}`)

    try {
        if (method.toUpperCase() !== 'GET' && method.toUpperCase() !== 'DELETE') {
            req.body = await json(req)
        }

        // req.params = await match.params

        // req.query = query

        const data = await match.handler(req, res)

        console.log('data', data)

        return send(res, 200, data)
    } catch (err) {
        console.log('error', err)

        return send(res, '404', response)
    }
}
