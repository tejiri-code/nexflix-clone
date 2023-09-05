import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const { user, login } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
try {
    await login(email, password);
    
    navigate("/");
} catch (error) {
    console.log(error);
    setError(error.message)
}
  }

  return (
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/e480152b-ee6f-47a4-822c-62a016ed4c8c/NG-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix'/>
<div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
<div className='fixed w-full px-4 py-24  z-50'>
<div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
<div className='max-w-[320px] mx-auto py-16'>
<h1 className='text-3xl font-bold'>Sign In</h1>
{error ? <p className='bg-red-400 p-3 my-3'>{error}</p> : null}
<form onSubmit={handleSubmit}>
    <input onChange={(e) => setEmail(e.target.value)} className='w-full px-4 py-2 my-4 bg-gray-800 rounded-md ' type='text' placeholder='Email' autoComplete='email'/>
    <input onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 my-4 bg-gray-800 rounded-md ' type='password' placeholder='Password' autoComplete='current-password'/>
    <button className='w-full px-4 py-3 my-6 bg-red-600 rounded-md font-bold'>Sign In</button>
    <div className='flex justify-between items-center text:sm text-gray-600'>
        <p className=''><input type='checkbox'/> Remember me?</p>
        <p>Need Help?</p>
    </div>
    <p className='py-8 text-gray-600'>Don't have an account? <a className='text-red-600 font-bold' href='/signup'>Sign Up</a></p>
</form>
</div>
</div>

</div>
</div>
  )
}

export default Login