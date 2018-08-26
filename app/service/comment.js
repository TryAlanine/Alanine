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
    await this.ctx.model.Comment.create(comment);
    return {
      status: 200,
      msg: 'Operation Succeed',
    };
  }

  async update(user, id, content) {
    const comment = await this.ctx.model.Comment.findById(id);
    if (!comment) {
      return {
        status: 404,
        msg: 'Comment Not Found',
      };
    }
    if (!user._id === comment.userId) {
      return {
        status: 401,
        msg: 'Access Denied',
      };
    }
    comment.content = content;
    await comment.save();
    return {
      status: 200,
      msg: 'Operation Succeed',
    };
  }

  async del(user, id) {
    const comment = await this.ctx.model.Comment.findById(id);
    if (!comment) {
      return {
        status: 404,
        msg: 'Comment Not Found',
      };
    }
    if (!user._id === comment.userId) {
      return {
        status: 401,
        msg: 'Access Denied',
      };
    }
    await comment.remove();
    return {
      status: 200,
      msg: 'Operation Succeed',
    };
  }

  async getByPostUrl(postUrl) {
    return await this.ctx.model.Comment.find({ postUrl });
  }
}

module.exports = CommentService;
