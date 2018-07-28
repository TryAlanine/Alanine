'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async get() {
    const result = await this.ctx.service.comment.getById(this.ctx.params.commentId);
    if (result) {
      this.ctx.status = 200;
      this.ctx.body = JSON.stringify(result);
    } else {
      this.ctx.status = 404;
    }
  }

  async create() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return;
    }
    await this.ctx.service.comment.create(this.ctx.user, this.ctx.request.body);
    this.ctx.status = 200;
  }

  async update() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return;
    }
    await this.ctx.service.comment.update(this.ctx.user, this.ctx.params.commentId, this.ctx.request.body.content);
    this.ctx.status = 200;
  }

  async del() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return;
    }
    try {
      await this.ctx.service.comment.del(this.ctx.user, this.ctx.params.commentId);
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

module.exports = CommentController;
