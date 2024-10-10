import React, { useState } from 'react';
import axios from 'axios';
import ChatbotHeart from '../components/ChatbotHeart'; // Assuming you have a ChatbotHeart component

function Heart() {
  const [formData, setFormData] = useState({
    age: '',
    resting_blood_pressure: '',
    cholesterol: '',
    fasting_blood_sugar: '',
    max_heart_rate_achieved: '',
    exercise_induced_angina: '',
    st_depression: '',
    sex_male: '',
    chest_pain_type_atypical_angina: '',
    chest_pain_type_non_anginal_pain: '',
    chest_pain_type_typical_angina: '',
    rest_ecg_left_ventricular_hypertrophy: '',
    rest_ecg_normal: '',
    st_slope_flat: '',
    st_slope_upsloping: ''
  });

  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predictHeart', formData, {
        headers: {
          'Content-Type': 'application/json',
          
        }
      });
      if (response.data.success) {
        setPrediction(response.data.prediction);
        // alert(`Prediction: ${response.data.prediction}`);
      } else {
        alert('Error submitting data');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Error submitting data');
    }
  };

  return (
    <div className='bg-[#e5e5e5] w-full h-full flex flex-col items-center p-4'>
      <div className='flex flex-wrap justify-around w-full max-w-6xl'>
        {/* Parameters */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-[48%] mb-4 md:mb-0'>
          <div className='flex justify-center items-center m-5 text-[#005F73]'>
            <p className='font-bold text-3xl'>Heart Disease</p>
          </div>
          <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='age' className='block mb-1 text-[#005F73] font-semibold'>Age</label>
              <input type='number' id='age' name='age' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.age} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='resting_blood_pressure' className='block mb-1 text-[#005F73] font-semibold'>Resting Blood Pressure</label>
              <input type='number' id='resting_blood_pressure' name='resting_blood_pressure' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.resting_blood_pressure} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='cholesterol' className='block mb-1 text-[#005F73] font-semibold'>Cholesterol</label>
              <input type='number' id='cholesterol' name='cholesterol' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.cholesterol} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='fasting_blood_sugar' className='block mb-1 text-[#005F73] font-semibold'>Fasting Blood Sugar</label>
              <input type='number' id='fasting_blood_sugar' name='fasting_blood_sugar' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.fasting_blood_sugar} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='max_heart_rate_achieved' className='block mb-1 text-[#005F73] font-semibold'>Max Heart Rate Achieved</label>
              <input type='number' id='max_heart_rate_achieved' name='max_heart_rate_achieved' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.max_heart_rate_achieved} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='exercise_induced_angina' className='block mb-1 text-[#005F73] font-semibold'>Exercise Induced Angina</label>
              <input type='number' id='exercise_induced_angina' name='exercise_induced_angina' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.exercise_induced_angina} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='st_depression' className='block mb-1 text-[#005F73] font-semibold'>ST Depression</label>
              <input type='number' id='st_depression' name='st_depression' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.st_depression} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='sex_male' className='block mb-1 text-[#005F73] font-semibold'>Sex</label>
              <input type='number' id='sex_male' name='sex_male' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.sex_male} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='chest_pain_type_atypical_angina' className='block mb-1 text-[#005F73] font-semibold'>Chest Pain Type Atypical Angina</label>
              <input type='number' id='chest_pain_type_atypical_angina' name='chest_pain_type_atypical_angina' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.chest_pain_type_atypical_angina} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='chest_pain_type_non_anginal_pain' className='block mb-1 text-[#005F73] font-semibold'>Chest Pain Type Non Anginal Pain</label>
              <input type='number' id='chest_pain_type_non_anginal_pain' name='chest_pain_type_non_anginal_pain' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.chest_pain_type_non_anginal_pain} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='chest_pain_type_typical_angina' className='block mb-1 text-[#005F73] font-semibold'>Chest Pain Type Typical Angina</label>
              <input type='number' id='chest_pain_type_typical_angina' name='chest_pain_type_typical_angina' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.chest_pain_type_typical_angina} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='rest_ecg_left_ventricular_hypertrophy' className='block mb-1 text-[#005F73] font-semibold'>Rest ECG Left Ventricular Hypertrophy</label>
              <input type='number' id='rest_ecg_left_ventricular_hypertrophy' name='rest_ecg_left_ventricular_hypertrophy' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.rest_ecg_left_ventricular_hypertrophy} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='rest_ecg_normal' className='block mb-1 text-[#005F73] font-semibold'>Rest ECG Normal</label>
              <input type='number' id='rest_ecg_normal' name='rest_ecg_normal' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.rest_ecg_normal} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='st_slope_flat' className='block mb-1 text-[#005F73] font-semibold'>ST Slope Flat</label>
              <input type='number' id='st_slope_flat' name='st_slope_flat' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.st_slope_flat} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='st_slope_upsloping' className='block mb-1 text-[#005F73] font-semibold'>ST Slope Upsloping</label>
              <input type='number' id='st_slope_upsloping' name='st_slope_upsloping' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.st_slope_upsloping} onChange={handleChange} />
            </div>
            <button type='submit' className='bg-[#005F73] text-white px-4 py-2 rounded-md col-span-2'>Submit</button>
          </form>
          {prediction && (
            <div className='mt-4'>
              <p className='text-[#005F73] font-semibold'>Prediction: {prediction}</p>
            </div>
          )}
        </div>

        {/* Chatbot */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-[48%]'>
          <div className='flex justify-center items-center mb-5 text-[#005F73]'>
            <ChatbotHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heart;