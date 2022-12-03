const config = {}

const isDevelopment = process.env.NODE_ENV === 'development' ? true : false

config.NODE_ENV = process.env.NODE_ENV
config.VERSION = 'v1'

config.API_END_POINT = isDevelopment ? 'http://localhost:5000/' : ''

export default config