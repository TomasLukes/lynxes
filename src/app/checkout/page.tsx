import Link from "next/link"
import ButtonPrimary from "../components/buttons/ButtonPrimary"
export default function Checkout() {
  return (
    <section className="container max-width my-12 mx-auto px-6 md:px-9 lg:px-0">
      {/* Go back link */}
      <Link href="/" className="text-sm font-medium opacity-50 capitalize">
        Go back
      </Link>
      {/* Checkout layout*/}
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* Checkout container */}
        <div className="bg-light-100 p-6 rounded-lg">
          <h2 className="heading-3 pb-9">
            Checkout
          </h2>
          {/* Form */}
          <form action="" className="">
            {/* Billing heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4">
              Billing details
            </h5>
              {/* Name input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Name
              <input type="text" placeholder="Your Name" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
              {/* Email input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Email Address
              <input type="email" placeholder="Your Email" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
              {/* Email input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Phone Number
              <input type="tel" placeholder="Your Phone Number" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
            {/* Shipping heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4 pt-6">
              Shipping info
            </h5>
              {/* Address input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Adress
              <input type="text" placeholder="Your Adress" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
              {/* Zip code input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                ZIP Code
              <input type="number" placeholder="Your ZIP Code" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
              {/* City input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                City
              <input type="text" placeholder="Your City" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>
              {/* Country input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Country
              <input type="text" placeholder="Your Country" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-300 rounded-lg"/>
              </label>              
            {/* Payment details heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4">
              Payment details
            </h5>
              {/* Country input */}
              <legend className="flex flex-col gap-2 subtitle normal-case pb-4">
                Payment Method
              </legend>
              {/* Payment options group */}
              <div className="flex flex-col gap-4">
                {/* PayPal input container */}
                <div className="flex gap-2 items-center px-4 py-3 border border-light-300 rounded-lg">
                  <input type="radio" placeholder="Your Country" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                  <label htmlFor="" className="flex gap-2 subtitle normal-case">
                    PayPal
                  </label> 
                </div>
                {/* Stripe input container */}
                <div className="flex gap-2 items-center px-4 py-3 border border-light-300 rounded-lg">
                  <input type="radio" placeholder="Your Country" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                  <label htmlFor="" className="flex gap-2 subtitle normal-case">
                    Stripe
                  </label> 
                </div>
                {/* Cash input container */}
                <div className="flex gap-2 items-center px-4 py-3 border border-light-300 rounded-lg">
                  <input type="radio" placeholder="Your Country" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                  <label htmlFor="" className="flex gap-2 subtitle normal-case">
                    Cash on Delivery
                  </label> 
                </div>

              </div>


          </form>

        </div>
        {/* Summary container */}
        <div className="bg-light-100 p-6 rounded-lg">
          <h3 className="heading-5 pb-9">
            Summary
          </h3>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                TOTAL
              </span>
              <p className="heading-6">
                $ 5,396
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                SHIPPING
              </span>
              <p className="heading-6">
                $ 50
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                VAT (INCLUDED)
              </span>
              <p className="heading-6">
                $ 1,079
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
              <span className="subtitle opacity-50">
                GRAND TOTAL
              </span>
              <p className="heading-5 text-primary-700 font-black">
                $ 5,446
              </p>
          </div>
          {/* Subbmit button */}
          <Link href="/" className="text-white">
            <ButtonPrimary 
            label={'CONTINUE & PAY'}
            style={'w-full py-5'}
            />
          </Link>

        </div>
      </div>

    </section>
  )
}
