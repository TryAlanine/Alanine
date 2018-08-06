'use strict';

const Controller = require('egg').Controller;

class CommentsController extends Controller {
  async get() {
    const result = await this.ctx.service.comment.getByPostId(this.ctx.params.postId);
    if (result) {
      this.ctx.status = 200;
      this.ctx.body = JSON.stringify(result);
    } else {
      this.ctx.status = 404;
    }
  }

  async del() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return;
    }
    if (this.ctx.query.type === 'post') {
      try {
        await this.ctx.service.comment.delByPostId(this.ctx.params.postId);
        this.ctx.status = 200;
      } catch (err) {
        switch (err.message) {
          case 'not found':
            this.ctx.status = 404;
            break;

          case 'unathorized':
            this.ctx.status = 401;
            break;

          default:
            throw err;
        }
      }
    }
  }
}

module.exports = CommentsController;
