// const mongoose = require("mongoose");
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
    collegepublication: {
      type: String,
      
    },
    createdby: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const Post= mongoose.model("Post", PostSchema);