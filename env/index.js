const env = process.env.NODE_ENV || 'env.qa'

const config = require(`./${env}`)

const defaults = {}
const response = Object.assign(defaults, config)

export default response