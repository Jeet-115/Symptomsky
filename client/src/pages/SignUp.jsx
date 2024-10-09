// src/pages/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', { name, password });
      alert(response.data.message);
      navigate('/diabetes')
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className='bg-[#e5e5e5] w-full flex flex-col items-center p-4'>
      <div className='flex flex-wrap justify-around w-full max-w-6xl'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-[48%] mb-4 md:mb-0'>
          <div className='flex justify-center items-center m-5 text-[#005F73]'>
            <p className='font-bold text-3xl'>Sign Up</p>
          </div>
          <form className='grid grid-cols-1 gap-4' onSubmit={handleSignUp}>
            <div className='mb-4'>
              <label htmlFor='name' className='block mb-1 text-[#005F73] font-semibold'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block mb-1 text-[#005F73] font-semibold'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                className='rounded-md border border-3 bg-[#C2E3EB] border-[#005F73] px-3 py-2 w-full'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='bg-[#005F73] text-white px-4 py-2 rounded-md'>Sign Up</button>
          </form>
          <div className='flex items-center justify-center mt-4'>
            <p className='text-[#005F73]'>Have an account!! 
                <Link to='/' className='text-[#005F73] font-medium'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;