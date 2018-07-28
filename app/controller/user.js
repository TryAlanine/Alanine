'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async logout() {
    this.ctx.logout();
  }

  async register() {
    return await this.ctx.service.user.create(this.ctx.request.body);
  }
}

module.exports = UserController;
