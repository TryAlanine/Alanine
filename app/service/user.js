'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async localVerify(user) {
    const { password } = user;
    const result = await this.ctx.service.user.findByEmail(user.email);
    if (!result) {
      return false;
      // throw new Error('user not found');
    }
    // password = ...
    if (password !== result.password) {
      return false;
      // throw new Error('password incorrect');
    }
    return result.email; /* result.username */
  }

  async create(user) {
    const result = await this.ctx.service.user.findByEmail(user.email);
    if (result) {
      throw new Error('email repeated');
    }
    const newUser = await this.ctx.model.User.create(user);
    return newUser;
  }

  async findByEmail(email) {
    return await this.ctx.model.User.findOne({ email });
  }
}

module.exports = UserService;
