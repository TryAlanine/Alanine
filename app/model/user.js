'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    email: { type: String },
    emailVerified: { type: Boolean },
    password: { type: String },
    nickname: { type: String },
    mobile: { type: String },
    mobileVerified: { type: Boolean },
    link: { type: String },
  });

  return mongoose.model('User', UserSchema);
};
