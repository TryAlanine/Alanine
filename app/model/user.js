'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    email: { type: String },
    emailVerified: { type: Boolean },
    password: { type: String },
    nickname: { type: String },
    mobile: { type: String },
    mobileVerified: { type: Boolean },
    link: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
  });

  return mongoose.model('User', UserSchema);
};
