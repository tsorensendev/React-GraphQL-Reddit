import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ApolloProvider from 'react-apollo';
import { ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index';

const hist = createBrowserHistory();
const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
});
const middleWareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    },
  });
  return forward(operation);
});
const link = middleWareLink.concat(httpLink);
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
});
const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  console.log(ApolloProvider);
  return (
    <div>
      App
    </div>
  );
};

export default App;
