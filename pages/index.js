import withApollo from '../lib/withApollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import {
    Container, Flex, Box
} from 'rebass'

import { 
    AcceptButton, CancelButton,
    H1, P 
} from '../components/styled' 

const Index = props => {
    return (
        <Container w={1} px={[3, 4, null, 2]} mt={[4, 5]}>
            <Flex flexWrap="wrap">
                <Box p={3}>
                    <H1 children="next-apollo-auth0-starter" />
                    <AcceptButton children="NextJS" />
                    <AcceptButton children="Apollo" />
                    <AcceptButton children="Auth0" />
                    <AcceptButton children="Style Components" />
                    <AcceptButton children="Rebass" />
                    <P children="Here is some user data from graph.cool:" />
                    <Query query={query}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error...</p>

                            return data.allUsers.map((val, i) => (
                                <div key = {i}>
                                    <P children={`${val.id} : ${val.email}`} />
                                </div>
                            ))
                        }}
                    </Query>
                </Box>
            </Flex>
            
        </Container>
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