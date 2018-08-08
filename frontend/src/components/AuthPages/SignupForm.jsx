import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../../mutations/Signup';
import query from '../../queries/CurrentUser';
import { hashHistory } from 'react-router-dom';

import AuthForm from './AuthForm';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    // this.props // the old, current set of props
    // nextProps // the next set of props that will be
    // in place when the component rerenders
    if (!prevProps.data.currentUser && data.currentUser) {
      // redirect to dashboard
      hashHistory.push('/dashboard');
    }
  }

  onSubmit = (mutate, { email, password }) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    })
      .catch((res) => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    const { mutate } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          errors={errors}
          onSubmit={() => this.onSubmit(mutate)}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
