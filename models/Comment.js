import { model, Schema } from "mongoose";

let CommentSchema = new Schema({
  url: {type: String, required: true},
  text: {type: String, required: true},
  username: String,
}, {
  timestamps: true
})

export default model('comment', CommentSchema);