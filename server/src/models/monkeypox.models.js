import mongoose from "mongoose";

const monkeyPoxSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    }
}, { timestamps: true });

const MonkeyPox = mongoose.model('MonkeyPox', monkeyPoxSchema);

export default MonkeyPox;