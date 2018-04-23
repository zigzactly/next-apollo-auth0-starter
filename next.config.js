require('dotenv').config()

module.exports = {
    publicRuntimeConfig: {
        appConfig: {
            appName: process.env.APP_NAME
        },
        apolloConfig: {
            uri: process.env.APOLLO_URI
        }
    }
}