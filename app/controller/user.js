'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async logout() {
    this.ctx.logout();
  }

  async register() {
    try {
      await this.ctx.service.user.create(this.ctx.request.body);
      this.ctx.status = 200;
    } catch (err) {
      if (err.message === 'email repeated') {
        this.ctx.status = 400;
        this.ctx.body = 'email repeated';
      } else {
        throw err;
      }
    }
  }

  async status() {
    this.ctx.status = 200;
    this.ctx.body = {
      isLogedIn: this.ctx.isAuthenticated(),
      user: this.ctx.user,
    };
  }
}

module.exports = UserController;
