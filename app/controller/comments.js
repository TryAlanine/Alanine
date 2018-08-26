'use strict';

const Controller = require('egg').Controller;

class CommentsController extends Controller {
  async get() {
    const result = await this.ctx.service.comment.getById(this.ctx.params.id);
    if (result) {
      this.ctx.status = 200;
      this.ctx.body = JSON.stringify(result);
    } else {
      this.ctx.status = 404;
    }
  }

  async create() {
    const { status, msg } = await this.ctx.service.comment.create(this.ctx.user, this.ctx.request.body);
    this.ctx.status = status;
    this.ctx.body = { msg };
  }

  async update() {
    const { status, msg } = await this.ctx.service.comment.update(this.ctx.user, this.ctx.params.id, this.ctx.request.body.content);
    this.ctx.status = status;
    this.ctx.body = { msg };
  }

  async del() {
    const { status, msg } = await this.ctx.service.comment.del(this.ctx.user, this.ctx.params.id);
    this.ctx.status = status;
    this.ctx.body = { msg };
  }
}

module.exports = CommentsController;
