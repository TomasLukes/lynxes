'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { signIn } from '@/lib/firebase/auth/signIn';
import { useState } from 'react';

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { result, error } = await signIn(email, password)
      if (error) {
        console.log(error)
      } else {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="signInPage" className="mx-auto px-6 md:px-9 lg:px-6">
      <form onSubmit={handleLoginSubmit} className="md:w-1/2 lg:w-1/4 md:mx-auto flex flex-col gap-4 bg-light-100 text-dark-900 p-9 mt-12 md:mt-16
         rounded-lg shadow-lg">
        <h2 className='text-center heading-6 mb-6'>
          Log in to your Lynxes account
        </h2>
        <label htmlFor="username" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Username
          <input id='username' name='username' onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Your Name" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Password
          <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your Password" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <ButtonPrimary
          type={'submit'}
          label={'Log In'}
          style={'uppercase button-text-white'} 
        />
        <p className="mx-auto text-sm font-medium opacity-75 mb-6">
          <span className='opacity-50'>{`Don't have account? `}</span>
          <Link href="signup" className='hover:text-primary-700'>
            Sign up
          </Link>
        </p> 
      </form>
    </section>
  );
}
