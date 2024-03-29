const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const todoRoute = require('./todo.route');
const productRoute = require('./product.route');
const transactionRoute = require('./transaction.route');
const historyRoute = require('./history.route');
const profileRoute = require('./profile.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/todos',
    route: todoRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/transactions',
    route: transactionRoute,
  },
  {
    path: '/history',
    route: historyRoute,
  },
  {
    path: '/profiles',
    route: profileRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
