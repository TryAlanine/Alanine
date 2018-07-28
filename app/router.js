'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/passport/local', app.passport.authenticate('local'));
  // router.get('/logout', controller.user.logout);

  router.get('/api/comments/:postId', controller.comment.getByPost);

  router.get('/api/comment/:commentId', controller.comment.get);
  router.post('/api/comment/', controller.comment.create);
  // router.put('/api/comment/:commentId', controller.comment.update);
  // router.del('/api/comment/:commentId', controller.comment.delete);

  router.post('/api/user/login', app.passport.authenticate('local'));
  router.post('/api/user/register', controller.user.register);

  // const github = app.passport.authenticate('github');
  // router.get('/api/user/passport/github', github);
  // router.get('/api/user/passport/github/callback', github);
};
