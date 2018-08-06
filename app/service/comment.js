'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
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

  async update(user, id, content) {
    const comment = await this.ctx.model.Comment.findById(id);
    if (!comment || !user._id === comment.userId) {
      return false;
    }
    comment.content = content;
    await comment.save();
    return true;
  }

  async del(user, id) {
    const comment = await this.ctx.model.Comment.findById(id);
    if (!comment) {
      throw new Error('not found');
    }
    if (!user._id === comment.userId) {
      throw new Error('unathorized');
    }
    await comment.remove();
    return true;
  }

  async getByPostUrl(postUrl) {
    return await this.ctx.model.Comment.find({ postUrl });
  }
}

module.exports = CommentService;
