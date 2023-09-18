import { ReactElement } from 'react';
import Link from 'next/link';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { useCartContext } from '@/context/CartContext';
import { ProductType } from '@/types/global';

import CartItem from '../../../shared/CartItem';

type CartProps = {
  handleOpenCart: () => void;
};

const Cart = ({ handleOpenCart }: CartProps): ReactElement => {
  const { cart, cartQ, cartTotal, handleClearCart } = useCartContext();

  let cartItems;
  if (cart) {
    cartItems = cart.map((item: ProductType, index: number) => (
      <CartItem key={index} product={item} />
    ));
  }

  return (
    <div className='lg:w-90'>
      {/* Cart container */}
      <div className='z-50 flex justify-end'>
        <div className='mx-4 mt-4 w-72 rounded-lg bg-light-100 p-8 text-dark-900 md:mx-0 md:mr-9 md:w-80 lg:mr-0 lg:w-96'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <h5 className='subtitle uppercase'>{`Cart (${cartQ})`}</h5>
              {!!cartQ && (
                <div>
                  <button
                    onClick={handleClearCart}
                    className='text-xs opacity-75'
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
            <button type='button' onClick={() => handleOpenCart()}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 -960 960 960'
                width='20'
              >
                <path d='m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z' />
              </svg>
            </button>
          </div>
          <div className='my-8 flex flex-col gap-4 md:gap-6 lg:gap-8'>
            {cartItems}
          </div>
          {cartQ !== null && cartQ < 1 && (
            <p className='text-body mb-16 block text-center opacity-50'>
              Your cart looks little bit empty..
            </p>
          )}
          <div className='my-4 flex items-center justify-between'>
            <span className='subtitle opacity-50'>TOTAL</span>
            <p className='heading-6'>$ {cartTotal?.toLocaleString('en-US')}</p>
          </div>
          {!!cartQ && (
            <Link
              href='/checkout'
              className='text-light-100'
              onClick={() => handleOpenCart()}
            >
              <ButtonPrimary
                type={'button'}
                label={'Checkout'}
                style={'w-full'}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
