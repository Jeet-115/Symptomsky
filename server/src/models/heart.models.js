import mongoose, { Schema } from "mongoose";

const heartSchema = new mongoose.Schema(
    {
        age: {
            type: Number,
            required: true,
        },
        resting_blood_pressure: {
            type: Number,
            required: true,
        },
        cholesterol: {
            type: Number,
            required: true,
        },
        fasting_blood_sugar: {
            type: Number,
            required: true,
        },
        max_heart_rate_achieved: {
            type: Number,
            required: true,
        },
        exercise_induced_angina: {
            type: Number,
            required: true,
        },
        st_depression: {
            type: Number,
            required: true,
        },
        sex_male: {
            type: Number,
            required: true,
        },
        chest_pain_type_atypical_angina: {   //_angina
            type: Number,
            required: true,
        },
        chest_pain_type_non_anginal_pain: {   //_anginal_pain
            type: Number,
            required: true,
        },
        chest_pain_type_typical_angina: {   //_angina
            type: Number,
            required: true,
        },
        rest_ecg_left_ventricular_hypertrophy: {   //_ventricular hypertrophy
            type: Number,
            required: true,
        },
        rest_ecg_normal: {
            type: Number,
            required: true,
        },
        st_slope_flat: {
            type: Number,
            required: true,
        },
        st_slope_upsloping: {
            type: Number,
            required: true,
        },
    }, 
    { timestamps: true }
);

const Heart = mongoose.model("Heart", heartSchema);
export default Heart;