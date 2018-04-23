import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

import config from 'next/config'
const { publicRuntimeConfig } = config()

export default withApollo({
  client: new ApolloClient({ uri: publicRuntimeConfig.apolloConfig.uri }) // retrieve from next.config.js
})