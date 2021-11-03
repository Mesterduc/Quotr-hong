import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    minLength: 1,
    required: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: String
}]
  
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
