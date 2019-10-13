import React from 'react';
import Main from './src/screens/Main';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
  });

export default App = () => (
   <ApolloProvider client={client}>
       <Main/>
   </ApolloProvider>
)