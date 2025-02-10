import { model, Schema, Types } from "mongoose";



export const schema = new Schema({
    body: {
        type: String,
        required: true,
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: Types.ObjectId,
        ref: "Post",
        required: true,
    },
    deletedBy: {
        type: Types.ObjectId,
        ref: "User",
    },
    likes: [{
        type: Types.ObjectId,
        ref: "User"
    }],
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            }
        }
    ]
}, {
    timestamps: true,
})

export const commentModel = model('Comment', schema)