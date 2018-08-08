import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import mutation from '../../mutations/Signup';
import query from '../../queries/CurrentUser';
import AuthForm from './AuthForm';

const formStyles = {
  form: {
    color: 'pink',
  },
};

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
    })
      .catch((res) => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <h3>Signup</h3>
        <AuthForm
          errors={errors}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

SignupForm.defaultProps = {
  data: {},
};

SignupForm.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default _.flow([
  graphql(query),
  graphql(mutation),
  withStyles(formStyles),
])(SignupForm);
