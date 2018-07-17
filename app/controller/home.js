'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg' + this.ctx.user;
    // this.ctx.model.User.create({ username: 'asd', password: 'asd' });
    // this.ctx.service.user.localVerify({ username: 'ad' });
  }
}

module.exports = HomeController;
