'use client'
import Link from 'next/link';
import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { signUp } from '@/lib/firebase/auth/signUp';
import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const { result, error } = await signUp(email, password)

    if (error) {
      return console.log(error)
    }

    console.log(result)
  }

  return (
    <section id="signUpPage" className="mx-auto px-6 md:px-9 lg:px-3">
      <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-1/4 md:mx-auto flex flex-col gap-4 bg-light-100 text-dark-900 p-9 mt-12 md:mt-16
         rounded-lg shadow-lg">
        <h2 className='text-center heading-6 mb-6'>
          Create your Lynxes account
        </h2>
        <label htmlFor="username" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Username
          <input name='username' onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Your Name" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Password
          <input name='password' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your Password" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <ButtonPrimary label={'Sign Up'} style={''} />
        <p className="mx-auto text-sm font-medium opacity-75 mb-6">
          <span className='opacity-50'>{`Already have account? `}</span>
          <Link href="signin" className='hover:text-primary-700'>
            Log in
          </Link>
        </p> 
      </form>
    </section>
  );
}
