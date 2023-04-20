//@ts-nocheck
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Container } from './containers/content';
import { GlobalStyle } from './global-styles';

const client = new ApolloClient({
  uri: process.env.ENDPOINT,
});

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Container />
  </ApolloProvider>
);
