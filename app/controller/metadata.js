'use strict';

const Controller = require('egg').Controller;

class MetadataController extends Controller {
  async index() {
    this.ctx.status = 200;
    this.ctx.body = this.config;
  }
}

module.exports = MetadataController;
