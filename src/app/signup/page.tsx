'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/ui/forms/FormInput';
import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { useState } from 'react';
import { signUp } from '@/lib/firebase/auth/signUp';

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { result, signUpError } = await signUp(email, password)
      setError(signUpError)
      if(!signUpError) {
        router.push('/');
      }
    } catch (error: any) {
        setError(error)
    }
  }

  return (
    <section id="signUpPage" className="mx-auto px-6 md:px-9 lg:px-6">
      <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-1/3 md:mx-auto flex flex-col gap-4 bg-light-100 text-dark-900 p-9 mt-12 md:mt-16
         rounded-lg shadow-lg">
        <h2 className='text-center heading-6 mb-6'>
          Create your Lynxes account
        </h2>
        { error &&
          <p className='border-2 border-red-500 bg-red-300 rounded-lg px-4 py-2'>
            {error}
          </p>
        }
        <FormInput label='Email Address' id='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        <FormInput label='Password' id='password' value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
        <ButtonPrimary 
          type={'submit'} 
          label={'Sign Up'} 
          style={'uppercase button-text-white'} 
        />
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
