import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function CheckoutModal({}) {
  return (
    /* Checkout Modal */
    <div className="absolute top-0 mt-6 z-50 left-1/2 transform -translate-x-1/2">
      {/* Checkout Modal container */}
      <div className="container flex flex-col gap-4 md:gap-8 bg-light-100 text-dark-900 p-6 md:p-9 mt-4 rounded-lg w-72 md:w-96 lg:w-96">
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
        <div className="flex flex-col md:flex-row">
          {/* First/Left item */}
          <div className="md:w-1/2 bg-light-300 p-4 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
            <p>Item 1</p>
            <p>Item 2</p>
          </div>
          {/* Second/Right item */}
          <div className="md:w-1/2 bg-dark-800 p-4 rounded-b-lg md:rounded-r-lg md:rounded-b-none text-light-200">
            <span className="subtitle opacity-50">
              TOTAL
            </span>
            <p className="heading-6">
              $ 5,396
            </p>
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
