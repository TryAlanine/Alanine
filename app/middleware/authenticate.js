'use strict';

module.exports = () => {
  return async function authenticate(ctx, next) {
    if (ctx.isAuthenticated()) {
      await next();
    } else if (ctx.app.oAuth2Server) {
      await ctx.app.oAuth2Server.authenticate()(ctx, next);
    } else {
      ctx.status = 401;
    }
  };
};
