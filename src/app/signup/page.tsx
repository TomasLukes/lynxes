'use client';
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import FormInput from '@/components/ui/forms/FormInput';
import { signUp } from '@/lib/firebase/auth/signUp';

const SignupPage = (): ReactElement => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { result, signUpError } = await signUp(email, password);
      setError(signUpError);
      if (!signUpError) {
        router.push('/');
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <section id='signUpPage' className='mx-auto px-6 md:px-9 lg:px-6'>
      <form
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-4 rounded-lg bg-light-100 p-9 text-dark-900 shadow-lg md:mx-auto md:mt-16
         md:w-1/2 lg:w-1/3'
      >
        <h2 className='heading-6 mb-6 text-center'>
          Create your Lynxes account
        </h2>
        {error && (
          <p className='rounded-lg border-2 border-red-500 bg-red-300 px-4 py-2'>
            {error}
          </p>
        )}
        <FormInput
          label='Email Address'
          id='email'
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label='Password'
          id='password'
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonPrimary
          type={'submit'}
          label={'Sign Up'}
          style={'uppercase button-text-white'}
        />
        <p className='mx-auto mb-6 text-sm font-medium opacity-75'>
          <span className='opacity-50'>{`Already have account? `}</span>
          <Link href='signin' className='hover:text-primary-700'>
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignupPage;
