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
    <section id="loginPage" className="grid place-content-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-light-100 text-dark-900 px-20 py-12  mt-16 mx-4 md:mx-0 md:mr-9 lg:mr-0
         rounded-lg">
        <h2 className='text-center heading-5'>
          Create Your Lynxes Account
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
        <Link href="signup">
          <p className="mx-auto text-sm font-medium opacity-50 mb-6">
            Already have account? Sign in
          </p> 
        </Link>
      </form>
    </section>
  );
}
