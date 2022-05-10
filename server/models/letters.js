import mongoose from "mongoose";

const letterSchema = mongoose.Schema({
    sender: String,
    from: String,
    dateCreated: {
        type: Date,
        default: new Date(),
    },
    title: String,
    body: String,
    to: String,
    receiver: String,
});

export default mongoose.model('Letters', letterSchema);