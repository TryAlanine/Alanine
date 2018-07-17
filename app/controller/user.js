'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async logout() {
    this.ctx.logout();
  }
}

module.exports = UserController;
