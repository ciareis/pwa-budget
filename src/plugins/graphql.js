import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import gql from 'graphql-tag'
const uri = import.meta.env.VITE_GRAPHQL_ENDPOINT
const httpLink = new HttpLink({
  uri,
})

const cache = new InMemoryCache()

export const aplloClient = new ApolloClient({
  cache,
  link: httpLink,
  connectToDevTools: true,
})

const query = gql`
  query {
    health_check {
      app_name
      database
    }
  }
`

aplloClient.query({ query })
  .then((data) => {
    console.log({ data })
  })
  .catch((error)=> {
    console.log({ error })
  })
