'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/posts', controller.posts);
  router.get('/api/posts/:url', controller.posts);
  router.del('/api/posts/:url', controller.posts);
  router.get('/api/posts/:url/comments', controller.posts);
  router.del('/api/posts/:url/comments', controller.posts);

  router.get('/api/comments/:id', controller.comment.get);
  router.post('/api/comments/', controller.comment.create);
  router.put('/api/comments/:id', controller.comment.update);
  router.del('/api/comments/:id', controller.comment.del);

  router.get('/api/users', controller.users);
  router.get('/api/users/:email', controller.users);
  router.post('/api/users', controller.users.register);

  router.post('/api/user/login', app.passport.authenticate('local'));
  router.get('/api/user/logout', controller.user.logout);
  router.get('/api/user/status', controller.user.status);

  // const github = app.passport.authenticate('github');
  // router.get('/api/user/passport/github', github);
  // router.get('/api/user/passport/github/callback', github);
};
