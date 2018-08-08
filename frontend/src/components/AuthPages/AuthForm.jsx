import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

const authFormStyles = theme => ({
  textField: {
    width: '500px',
  },
  rightIcon: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;

    onSubmit({ email, password });
  }

  render() {
    const { email, password } = this.state;
    const { errors, classes } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col s4">
          <div className="input-field">
            <TextField
              className={classes.textField}
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })
              }
              value={email}
            />
          </div>
          <div className="input-field">
            <TextField
              className={classes.textField}
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
          <div className="errors">
            {errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Submit
            <Send className={classes.rightIcon} />
          </Button>
        </form>
      </div>
    );
  }
}

AuthForm.defaultProps = {
  errors: [],
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default withStyles(authFormStyles)(AuthForm);
