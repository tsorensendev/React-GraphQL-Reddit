import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import mutation from '../../mutations/Login';
import query from '../../queries/CurrentUser';
import AuthForm from './AuthForm';
import { withStyles } from '../../../node_modules/@material-ui/core';

const loginStyles = {
  form: {

  },
};

class LoginForm extends Component {
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
      // redirect to main
      return <Redirect to="/" />;
    }
    return null;
  }

  onSubmit = ({ email, password }) => {
    const { mutate } = this.props;
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  };

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div classNames={classes.form}>
        <h3>Login</h3>
        <AuthForm errors={errors} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

LoginForm.defaultProps = {
  data: {},
};

LoginForm.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

// Lodash's flow util allows easy stacking of HOC's
export default _.flow([
  withStyles(loginStyles),
  graphql(query),
  graphql(mutation),
])(LoginForm);
