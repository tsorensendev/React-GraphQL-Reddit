import ThreadList from '../components/ThreadList/ThreadList';
import SignupForm from '../components/AuthPages/SignupForm';
import LoginForm from '../components/AuthPages/LoginForm';

const mainRoutes = [
  { exact: true, path: '/main', component: ThreadList },
  { path: '/main/signup', component: SignupForm },
  { path: '/main/login', component: LoginForm },
];

export default mainRoutes;
