'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    content: { type: String },
    ua: { type: String },
    postId: { type: Schema.Types.ObjectId },
    user: {
      _id: { type: Schema.Types.ObjectId },
      nickname: { type: String },
      email: { type: String },
      link: { type: String },
    },
  });

  return mongoose.model('Comment', CommentSchema);
};
