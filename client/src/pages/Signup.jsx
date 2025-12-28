import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6'>
        {/* left side */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
                  <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Dev</span>
                  Scripter
                </Link>
                <p className='text-sm mt-5'>This is a Blogging Website made for my personal use.You can sign up with your email and password or with Google.</p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form>
            <div>
              <Label value='Your Username' />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value='Your Email' />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className='mt-4 w-full'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account? 
            </span>
              <Link to="/sign-in" className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
