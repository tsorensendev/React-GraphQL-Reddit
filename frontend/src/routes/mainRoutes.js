import ThreadList from '../components/ThreadList/ThreadList';
import SignupForm from '../components/AuthPages/SignupForm';
import LoginForm from '../components/AuthPages/LoginForm';

const mainRoutes = [
  { path: '/main', component: ThreadList },
  { path: '/signup', component: SignupForm },
  { path: '/login', component: LoginForm },
];

export default mainRoutes;
