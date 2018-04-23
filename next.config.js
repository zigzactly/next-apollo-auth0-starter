require('dotenv').config()

module.exports = {
    publicRuntimeConfig: {
        apolloConfig: {
            uri: process.env.APOLLO_URI
        }
    }
}