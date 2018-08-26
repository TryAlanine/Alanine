'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const auth = app.middleware.authenticate();

  router.get('/', controller.home.index);

  // router.get('/api/posts', controller.posts);
  // router.get('/api/posts/:url', controller.posts);
  // router.del('/api/posts/:url', controller.posts);
  // router.get('/api/posts/:url/comments', controller.posts);
  // router.del('/api/posts/:url/comments', controller.posts);

  router.get('/api/comments/:id', controller.comments.get);
  router.post('/api/comments', auth, controller.comments.create);
  router.patch('/api/comments/:id', auth, controller.comments.update);
  router.del('/api/comments/:id', auth, controller.comments.del);

  // router.get('/api/users', controller.users);
  // router.get('/api/users/:email', controller.users);
  // router.post('/api/users', controller.users.register);

  router.get('/api/user', controller.user.status);
  router.post('/api/user/login', app.passport.authenticate('local'));
  router.get('/api/user/logout', controller.user.logout);

  // const github = app.passport.authenticate('github');
  // router.get('/api/user/passport/github', github);
  // router.get('/api/user/passport/github/callback', github);
};
