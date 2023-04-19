//@ts-nocheck
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Container } from './containers/content';
import { GlobalStyle } from './global-styles';

const client = new ApolloClient({
  uri: 'https://connect-back-leshz.vercel.app/api',
  fetchOptions: {
    mode: 'no-cors',
  },
});

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Container />
  </ApolloProvider>
);
