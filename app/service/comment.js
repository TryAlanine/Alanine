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
    const { _id, nickname, email, link } = user;
    comment.user = { _id, nickname, email, link };
    comment.content = body.content;
    comment.ua = body.ua;
    comment.postId = body.postId;
    return await this.ctx.model.Comment.create(comment);
  }
}

module.exports = CommentService;
