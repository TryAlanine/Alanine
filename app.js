'use strict';

module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    if (user.provider === 'local') {
      user.email = user.username;
      return ctx.service.user.localVerify(user);
    }
  });
};
