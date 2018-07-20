'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async logout() {
    this.ctx.logout();
  }

  async register() {
    return await this.ctx.service.user.register(this.request.body);
  }
}

module.exports = UserController;
