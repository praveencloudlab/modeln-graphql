// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/', // Ensure this URL is correct
  }),
  cache: new InMemoryCache(),
});

export default client;
