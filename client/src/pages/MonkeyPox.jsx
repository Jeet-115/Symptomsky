import React, { useState } from 'react';
import axios from 'axios';
import ChatbotMonkey from '../components/ChatbotMonkey';

function MonkeyPox() {
  const [photo, setPhoto] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predictMonkey', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      if (response.data.prediction) {
        setPrediction(response.data.prediction);
      } else {
        alert('Error uploading photo');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Error uploading photo');
    }
  };

  return (
    <div className='bg-[#e5e5e5] w-full flex flex-col items-center p-4'>
      <div className='flex flex-wrap justify-around w-full max-w-6xl'>
        {/* Parameters */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-[48%] mb-4 md:mb-0'>
          <div className='flex justify-center items-center m-5 text-[#005F73]'>
            <p className='font-bold text-3xl'>MonkeyPox</p>
          </div>
          <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
            <div className='mb-4 col-span-2'>
              <label htmlFor='photo' className='block mb-1 text-[#005F73] font-semibold'>Photo</label>
              <input type='file' id='photo' name='photo' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full' onChange={handleChange} />
            </div>
            <div className='mb-4 col-span-2'>
              <label htmlFor='fever' className='block mb-1 text-[#005F73] font-semibold'>Fever</label>
              <input type='text' id='fever' name='fever' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full' />
            </div>
            <div className='mb-4 col-span-2'>
              <label htmlFor='headAche' className='block mb-1 text-[#005F73] font-semibold'>Head ache/ muscle ache</label>
              <input type='text' id='headAche' name='headAche' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full' />
            </div>
            <div className='mb-4 col-span-2'>
              <label htmlFor='swollenLymphNodes' className='block mb-1 text-[#005F73] font-semibold'>Swollen lymph nodes (Lump like structure in neck / armpits)</label>
              <input type='text' id='swollenLymphNodes' name='swollenLymphNodes' className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full' />
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
            <ChatbotMonkey />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonkeyPox;