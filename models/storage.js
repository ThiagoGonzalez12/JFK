import mongoose from 'mongoose'

const StorageSchema = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default mongoose.model("storage", StorageSchema)