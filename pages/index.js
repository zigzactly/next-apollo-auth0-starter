import withApollo from '../lib/withApollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Index = props => {
    return (
        <Query query={query}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error...</p>

                return data.allUsers.map((val, i) => (
                    <div key = {i}>
                        <p>{`${val.id} : ${val.email}`}</p>
                    </div>
                ))
            }}
        </Query>
    )
}


const query = gql`
    query {
        allUsers {
            id
            email
        }
    }
`

export default withApollo(props => (
    <Index />
))