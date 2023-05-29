import Link from "next/link"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function CheckoutModal({}) {
  return (
    /* Cart */
    <div className="absolute top-0 mt-6 z-50 inset-x-1/2">
      {/* Cart container */}
      <div className="flex justify-end">
        <div className="bg-light-100 text-dark-900 p-6 mt-4 w-64 mr-6 md:mr-9 lg:mr-0
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
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
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