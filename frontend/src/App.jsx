import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, HttpLink } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index';
// import allThreads from './queries/allThreads';
// import newThread from './mutations/newThread';
// import logout from './mutations/Logout';

// Apollo Client Setup
const hist = createBrowserHistory();
const httpLink = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
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
// client.initQueryManager();
// client.mutate({ mutation: logout }).then(res => console.log(res));
// client.mutate({ mutation: newThread, variables: { title: 'New Title Bitch Ass', body: 'New Thread Body Bitch Ass' } })
//   .then(() => client.query({ query: allThreads }).then(queryResult => console.log(queryResult)));


const App = () => (
  <ApolloProvider client={client}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((route) => {
          return route.redirect ? <Redirect from={route.path} to={route.pathTo} key={route.pathTo} /> : (
            <Route
              path={route.path}
              key={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
