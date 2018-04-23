import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

export default withApollo({
  client: new ApolloClient({ uri: "http://localhost:60000/simple/v1/cjg8g4g97000401667te1u4be" })
})