'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api/metadata', controller.metadata.index);

  router.get('/api/comments/:postId', controller.comments.get);
  router.del('/api/comments/:postId', controller.comments.del);

  router.get('/api/comment/:commentId', controller.comment.get);
  router.post('/api/comment/', controller.comment.create);
  router.put('/api/comment/:commentId', controller.comment.update);
  router.del('/api/comment/:commentId', controller.comment.del);

  router.post('/api/user/login', app.passport.authenticate('local'));
  router.post('/api/user/register', controller.user.register);
  router.get('/api/user/logout', controller.user.logout);
  router.get('/api/user/status', controller.user.status);

  // const github = app.passport.authenticate('github');
  // router.get('/api/user/passport/github', github);
  // router.get('/api/user/passport/github/callback', github);
};
