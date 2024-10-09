import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from '../components/Chatbot';

function Diabetes() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    polyuria: '',
    polydipsia: '',
    suddenWeightLoss: '',
    weakness: '',
    polyphagia: '',
    genitalThrush: '',
    visualBlurring: '',
    itching: '',
    irritability: '',
    delayedHealing: '',
    partialParesis: '',
    muscleStiffness: '',
    alopecia: '',
    obesity: '',
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predictDiabetes', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.prediction) {
        setPrediction(response.data.prediction);
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
            <p className='font-bold text-3xl'>Diabetes</p>
          </div>
          <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='age' className='block mb-1 text-[#005F73] font-semibold'>Age</label>
              <input type='number' id='age' name='age' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.age} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='gender' className='block mb-1 text-[#005F73] font-semibold'>Gender</label>
              <input type='text' id='gender' name='gender' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.gender} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='polyuria' className='block mb-1 text-[#005F73] font-semibold'>Polyuria</label>
              <input type='text' id='polyuria' name='polyuria' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.polyuria} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='polydipsia' className='block mb-1 text-[#005F73] font-semibold'>Polydipsia</label>
              <input type='text' id='polydipsia' name='polydipsia' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.polydipsia} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='suddenWeightLoss' className='block mb-1 text-[#005F73] font-semibold'>Sudden Weight Loss</label>
              <input type='text' id='suddenWeightLoss' name='suddenWeightLoss' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.suddenWeightLoss} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='weakness' className='block mb-1 text-[#005F73] font-semibold'>Weakness</label>
              <input type='text' id='weakness' name='weakness' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.weakness} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='polyphagia' className='block mb-1 text-[#005F73] font-semibold'>Polyphagia</label>
              <input type='text' id='polyphagia' name='polyphagia' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.polyphagia} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='genitalThrush' className='block mb-1 text-[#005F73] font-semibold'>Genital Thrush</label>
              <input type='text' id='genitalThrush' name='genitalThrush' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.genitalThrush} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='visualBlurring' className='block mb-1 text-[#005F73] font-semibold'>Visual Blurring</label>
              <input type='text' id='visualBlurring' name='visualBlurring' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.visualBlurring} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='itching' className='block mb-1 text-[#005F73] font-semibold'>Itching</label>
              <input type='text' id='itching' name='itching' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.itching} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='irritability' className='block mb-1 text-[#005F73] font-semibold'>Irritability</label>
              <input type='text' id='irritability' name='irritability' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.irritability} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='delayedHealing' className='block mb-1 text-[#005F73] font-semibold'>Delayed Healing</label>
              <input type='text' id='delayedHealing' name='delayedHealing' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.delayedHealing} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='partialParesis' className='block mb-1 text-[#005F73] font-semibold'>Partial Paresis</label>
              <input type='text' id='partialParesis' name='partialParesis' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.partialParesis} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='muscleStiffness' className='block mb-1 text-[#005F73] font-semibold'>Muscle Stiffness</label>
              <input type='text' id='muscleStiffness' name='muscleStiffness' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.muscleStiffness} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='alopecia' className='block mb-1 text-[#005F73] font-semibold'>Alopecia</label>
              <input type='text' id='alopecia' name='alopecia' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.alopecia} onChange={handleChange} />
            </div>
            <div className='mb-4'>
              <label htmlFor='obesity' className='block mb-1 text-[#005F73] font-semibold'>Obesity</label>
              <input type='text' id='obesity' name='obesity' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2' value={formData.obesity} onChange={handleChange} />
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
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diabetes;