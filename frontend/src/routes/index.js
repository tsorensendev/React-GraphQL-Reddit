import MainView from '../views/Main';

const indexRoutes = [
  {
    path: '/main',
    component: MainView,
  },
  {
    redirect: true,
    path: '/',
    pathTo: '/main',
    name: 'Main',
  },
];

export default indexRoutes;
