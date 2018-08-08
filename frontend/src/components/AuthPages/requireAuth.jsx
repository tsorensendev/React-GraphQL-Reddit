import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import query from '../../queries/CurrentUser';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      // if loading is completed & there is no user, redirect to login
      if (!nextProps.data.loading && !nextProps.data.currentUser) {
        return <Redirect to="/" />;
      }
      return null;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(RequireAuth);
};
