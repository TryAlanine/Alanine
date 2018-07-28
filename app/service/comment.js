'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
  async getByPostId(postId) {
    return await this.ctx.model.Comment.find({ postId });
  }

  async getById(id) {
    return await this.ctx.model.Comment.findById(id);
  }

  async create(user, body) {
    const comment = {};
    comment.userId = user._id;
    comment.content = body.content;
    comment.ua = body.ua;
    comment.postId = body.postId;
    return await this.ctx.model.Comment.create(comment);
  }
}

module.exports = CommentService;
