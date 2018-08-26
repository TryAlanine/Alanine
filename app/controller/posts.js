'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async index() {
    //
  }

  async get() {
    try {
      const result = await this.ctx.service.posts.getByUrl(this.ctx.params.url);
      this.ctx.status = 200;
      this.ctx.body = result;
    } catch (err) {
      if (err.message === '404') {
        this.ctx.status = 404;
      } else {
        throw err;
      }
    }
  }

  async del() {
    //
  }

  async getComments() {
    //
  }

  async delComments() {
    //
  }
}

module.exports = PostsController;
