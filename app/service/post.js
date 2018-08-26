'use strict';

const Service = require('egg').Service;

class PostService extends Service {
  async getPostByUrl(url) {
    const post = this.model.Posts.findOne({ url });
  }
}

module.exports = PostService;
