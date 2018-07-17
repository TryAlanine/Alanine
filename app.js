'use strict';

module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    if (user.provider === 'local') {
      return ctx.service.user.localVerify(user);
    }
  });
};
