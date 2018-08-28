// import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import _ from 'lodash';

// import mutation from '../../mutations/Signup';
// import currentUserQuery from '../../queries/CurrentUser';
// import AuthForm from './AuthForm';

// const formStyles = {
//   form: {
//     color: 'pink',
//   },
// };

// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { errors: [], signupSuccess: false };
//   }

//   componentDidUpdate(prevProps) {
//     const { data } = this.props;
//     console.log('Data', data);
//     console.log('New', this.props);
//     console.log('Previous', prevProps);
//     // this.props // the old, current set of props
//     // nextProps // the next set of props that will be
//     // in place when the component rerenders
//     if (!prevProps.data.currentUser && data.currentUser) {
//       console.log('IF')
//       // redirect to main
//       return <Redirect to="/main" />;
//     }
//     return null;
//   }

  // componentWillUpdate(nextProps) {
  //   console.log('Component Updated', this.props, nextProps)
  //   // this.props // the old, current set of props
  //   // nextProps // the next set of props that will be
  //   // in place when the component rerenders
  //   if (!this.props.data.currentUser && nextProps.data.currentUser) {
  //     console.log("IFFFFF")
  //     // redirect to dashboard
  //     return <Redirect to="/main" />;
  //   }
  //   return null;
  // }

  // onSubmit = async ({ email, password }) => {
  //   const { mutate, data } = this.props;
  //   let awaitResponse;
  //   try {
  //     awaitResponse = await mutate({
  //       variables: { email, password },
  //       refetchQueries: [{ query: currentUserQuery }],
  //     }).catch((res) => {
  //       const errors = res.graphQLErrors.map(error => error.message);
  //       this.setState({ errors });
  //     });
  //   } catch (err) {
  //     awaitResponse = err;
  //   }
  //   console.log(awaitResponse);
  //   this.setState({ signupSuccess: true });
  //   // mutate({
  //   //   variables: { email, password },
  //   //   refetchQueries: [{ query: currentUserQuery }],
  //   // }).catch((res) => {
  //   //   const errors = res.graphQLErrors.map(error => error.message);
  //   //   this.setState({ errors });
  //   // });
  // }

//   render() {
//     const { errors } = this.state;
//     const { classes } = this.props;
//     return (
//       <div className={classes.form}>
//         <h3>Signup</h3>
//         <AuthForm
//           errors={errors}
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     );
//   }
// }

// SignupForm.defaultProps = {
//   data: {},
// };

// SignupForm.propTypes = {
//   mutate: PropTypes.func.isRequired,
//   data: PropTypes.object,
//   classes: PropTypes.object.isRequired,
// };

// export default _.flow([
//   graphql(currentUserQuery),
//   graphql(mutation),
//   withStyles(formStyles),
// ])(SignupForm);

// import React from 'react';
// import { Mutation } from 'react-apollo';
// import AuthForm from './AuthForm';
// import SIGNUP from '../../mutations/Signup';

// const SignupForm = () => {
//   let input;

//   return (
//     <Mutation mutation={SIGNUP}>
//       {(signup, { data }) => (
//         <div>
//           <AuthForm
//             onSubmit={(e) => {
//               e.preventDefault();
//               signup({ variables: { type: input.value } });
//               input.value = '';
//             }}
//           >
//             <input
//               ref={node => {
//                 input = node;
//               }}
//             />
//             <button type="submit">Add Todo</button>
//           </AuthForm>
//         </div>
//       )}
//     </Mutation>
//   );
// };

// export default SignupForm;


import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import AuthForm from './AuthForm';
import currentUser from '../../queries/CurrentUser';
import signup from '../../mutations/Signup';

const signupStyles = {
  form: {},
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = async ({ email, password }) => {
    const { mutate, data } = this.props;
    let awaitResponse;
    try {
      awaitResponse = await mutate({
        variables: { email, password },
        refetchQueries: [{ query: currentUser }],
      }).catch((res) => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
    } catch (err) {
      awaitResponse = err;
    }
  }

  render() {
    return (
      <div>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default _.flow([
  withStyles(signupStyles),
  graphql(currentUser),
  graphql(signup),
])(SignupForm);
