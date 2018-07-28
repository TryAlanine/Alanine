'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getByPost() {
    const result = await this.ctx.service.comment.getByPostId(this.ctx.params.postId);
    this.ctx.status = 200;
    this.ctx.body = JSON.stringify(result);
  }

  async get() {
    const result = await this.ctx.service.comment.getById(this.ctx.params.commentId);
    this.ctx.status = 200;
    this.ctx.body = JSON.stringify(result);
  }

  async create() {
    if (!this.ctx.isAuthenticated()) {
      // access denied
    }
    return await this.ctx.service.comment.create(this.ctx.user, this.ctx.request.body);
  }
  // async update() {}
  // async delete() {}
}

module.exports = CommentController;
