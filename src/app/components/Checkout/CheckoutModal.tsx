import Link from "next/link"
import Image from "next/image"
import CartItem from "../shared/CartItem"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function CheckoutModal({ cartItems, grandTotal}) {
  return (
    /* Checkout Modal */
    <div className="absolute top-0 w-full md:w-auto mt-6 z-50 left-1/2 transform -translate-x-1/2 mx-auto px-6 md:px-9 lg:px-3">
      {/* Checkout Modal container */}
      <div className="container flex flex-col gap-4 md:gap-8 bg-light-100 text-dark-900 p-6 md:p-9 mt-4 rounded-lg">
        {/* Modal heading */}
          <div className="flex items-center gap-3">
            <h5 className="heading-5 uppercase flex-grow">
              Thank you for your order
            </h5>
            <Image 
              src="/assets/icons/pages/Checkout/icon-order-confirmation.svg"
              alt="Succesfull order icon"
              className="w-12"
              width={50}
              height={50}
            />
          </div>
          <p className="text-body opacity-50">
            You will receive an email confirmation shortly.
          </p>
        {/* Order summary */}
        <div className="flex flex-col">
          {/* First/Left item */}
          <div className="flex-grow bg-light-300 p-4 rounded-t-lg md:rounded-l-lg md:rounded-b-none">
            {cartItems}
          </div>
          {/* Second/Right item */}
          <div className="flex items-center lg:w-auto bg-dark-800 p-4 rounded-b-lg md:rounded-r-lg md:rounded-t-none md:rounded-b-lg text-light-200">
            <div className="flex flex-col items-center w-full ">
              <p className="subtitle opacity-50 mt-auto">
                GRAND TOTAL
              </p>
              <p className="heading-6">
                $ {grandTotal.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
        <Link href="/" className="text-light-100">
            <ButtonPrimary
              label={'Back to home'}
              style={'w-full uppercase'}
            />
        </Link>
      </div>
    </div>
  )
}
