'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    content: { type: String },
    ua: {
      browser: { type: String },
      os: { type: String },
    },
    postId: { type: Schema.Types.ObjectId },
    userId: { type: Schema.Types.ObjectId },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  });

  return mongoose.model('Comment', CommentSchema);
};
