import React, { useState } from 'react';
import axios from 'axios';

const ChatbotMonkey = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/monkeyBot', { question }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = res.data.response || res.data.error;
      setChatHistory([...chatHistory, { question, response }]);
      setQuestion('');
    } catch (error) {
      setChatHistory([...chatHistory, { question, response: 'Error: ' + error.message }]);
      setQuestion('');
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 w-full h-full'>
      <div className='flex justify-center items-center mb-5 text-[#005F73]'>
        <p className='font-bold text-3xl'>Chatbot</p>
      </div>
      <div className='flex flex-col h-96 bg-[#C2E3EB] border border-[#005F73] rounded overflow-y-scroll p-4'>
        {chatHistory.map((chat, index) => (
          <div key={index} className='mb-4'>
            <div className='text-right'>
              <div className='inline-block bg-blue-500 text-white p-2 rounded-lg'>
                {chat.question}
              </div>
            </div>
            <div className='text-left mt-2'>
              <div className='inline-block bg-gray-200 p-2 rounded-lg'>
                {chat.response}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='mt-4 flex'>
        <input
          type='text'
          id='question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className='flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Type your question...'
        />
        <button
          type='submit'
          className='ml-2 bg-[#005F73] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotMonkey;