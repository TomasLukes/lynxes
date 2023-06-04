import Link from 'next/link';
import ButtonPrimary from '../components/buttons/ButtonPrimary';

export default function LoginPage() {
  return (
    <section id="loginPage" className="grid place-content-center">
      <form action="" className="flex flex-col gap-4 bg-light-100 text-dark-900 px-20 py-12  mt-16 mx-4 md:mx-0 md:mr-9 lg:mr-0
         rounded-lg">
        <h2 className='text-center heading-5'>Login</h2>
        <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Name
          <input type="text" placeholder="Your Name" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
          Password
          <input type="password" placeholder="Your Password" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
        </label>
        <Link href={'/'} className='text-white'>
          <ButtonPrimary style={'w-full uppercase'} label={'Login'}/>
        </Link>
      </form>
    </section>
  );
}
