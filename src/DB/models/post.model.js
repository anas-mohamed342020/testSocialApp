import { Schema, Types, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    isDeleted:{
        type:Boolean,
        default: false
    },
    likes: [{
        type: Types.ObjectId,
        ref: "User"
    }]
}, {
    timestamps: true
})

export const postModel = model('Post', schema)