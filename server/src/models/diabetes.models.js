import mongoose, { Schema } from "mongoose";

const diabetesSchema = new mongoose.Schema(
    {
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        polyuria: {
            type: Number,
            required: true,
        },
        polydipsia: {
            type: Number,
            required: true,
        },
        suddenWeightLoss: {
            type: Number,
            required: true,
        },
        weakness: {
            type: Number,
            required: true,
        },
        polyphagia: {
            type: Number,
            required: true
        },
        genitalThrush: {
            type: Number,
            required: true
        },
        visualBlurring: {
            type: Number,
            required: true
        },
        itching: {
            type: Number,
            required: true
        },
        irritability: {
            type: Number,
            required: true
        },
        delayedHealing: {
            type: Number,
            required: true
        },
        partialParesis: {
            type: Number,
            required: true
        },
        muscleStiffness: {
            type: Number,
            required: true
        },
        alopecia: {
            type: Number,
            required: true
        },
        obesity: {
            type: Number,
            required: true
        },
        // classDiabetes: {
        //     type: String,
        //     required: true,
        // },
    }, 
    { timestamps: true }
);

const Diabetes = mongoose.model("Diabetes", diabetesSchema);

export default Diabetes;