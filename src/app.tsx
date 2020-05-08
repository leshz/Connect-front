import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Container } from './containers/content';
import { GlobalStyle } from './global-styles';


const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
});

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Container />
  </ApolloProvider>
);