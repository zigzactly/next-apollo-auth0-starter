import withApollo from '../lib/withApollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import {
    Container, Flex, Box, Panel, Subhead, Row, Column
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
                    <AcceptButton newtab text="NextJS" href="https://github.com/zeit/next.js/" target="_blank" />
                    <AcceptButton text="Apollo" href="https://www.apollographql.com/docs/react/" />
                    <AcceptButton text="Auth0" href="https://auth0.com/" />
                    <AcceptButton text="Style Components" />
                    <AcceptButton text="Rebass" />
                    <AcceptButton text="Storybook" />
                    <Panel color='inherit' bg="transparent" mt={2}>
                        <Panel.Header
                            color='inherit'
                            bg='transparent'>
                            <P children="Instrospection results from the graphql connection" />
                        </Panel.Header>
                        <Box p={3}>
                            <Subhead>
                                <Row>
                                    <Column width={1/2} px={2}><P>Query</P></Column>
                                    <Column width={1/2} px={2}><P>Description</P></Column>
                                </Row>
                                <Query query={introspection}>
                                    {({ loading, error, data }) => {
                                        if (loading) return <p>Loading...</p>
                                        if (error) return <p>{`${error}`}</p>

                                        return data.__schema.queryType.fields.map((val, i) => (
                                            <Row key= {i}>
                                                <Column width={1/2} px={2} mb={1}><P>{`${val.name}`}</P></Column>
                                                <Column width={1/2} px={2}><P>{`${val.description}`}</P></Column>
                                            </Row>
                                        ))
                                    }}
                                </Query>
                            </Subhead>
                        </Box>
                    </Panel>
                </Box>
            </Flex>
            
        </Container>
    )
}

const introspection = gql`
    query IntrospectionQuery {
        __schema {
        queryType {
            name
            fields {
            name
            description
            }
        }
        mutationType {
            name
            fields {
            name
            description
            }
        }
        subscriptionType {
            name
            fields {
            name
            description
            }
        }
        }
    }
`

export default withApollo(props => (
    <Index />
))