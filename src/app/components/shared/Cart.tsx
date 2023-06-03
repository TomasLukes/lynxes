import Link from "next/link"
import CartItem from "./CartItem"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function Cart({ handleOpenCart }) {
  const cartArr = [
    {'quantity': 1, 'slug': 'xx59-headphones', 'name': 'XX59', 'price': 899},
    {'quantity': 3, 'slug': 'xx99-mark-two-headphones', 'name': 'XX99 MK II', 'price': 2999}, 
    {'quantity': 2, 'slug': 'zx9-speaker', 'name': 'ZX9', 'price': 3500}
  ]

  return (
    /* Cart */
    <div className="">
      {/* Cart container */}
      <div className="flex justify-end z-50">
        <div className="bg-light-100 text-dark-900 p-6 mt-4 mr-6 md:mr-9 lg:mr-0
         rounded-lg"> 
          <div className="flex items-center justify-between">
            <h5 className="">
              {'Cart (5)'}
            </h5>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"
              onClick={() => handleOpenCart()}>
              <path d="m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z"
              />
            </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 my-8">
            <CartItem product={cartArr[0]}/>
            <CartItem product={cartArr[1]}/>
            <CartItem product={cartArr[2]}/>
          </div>
          <div className="flex items-center justify-between my-4">
            <span className="subtitle opacity-50">
              TOTAL
            </span>
            <p className="heading-6">
              $ 5,396
            </p>
          </div>
          <Link href="/checkout" className="text-light-100" onClick={() => handleOpenCart()}>
            <ButtonPrimary
              label={'Checkout'}
              style={'w-full'}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}