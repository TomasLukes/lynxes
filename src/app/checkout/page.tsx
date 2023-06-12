'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react"
import CheckoutModal from "@/components/Checkout/CheckoutModal"
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary"
import CartItem from "@/components/shared/CartItem"
import { db } from "@/lib/firebase/config"
import { useCartContext } from "@/context/CartContext"

export default function CheckoutPage() {
  const router = useRouter()

  const { cart, cartTotal } = useCartContext();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)
  const [shippingCost, setShippingCost] = useState(null)
  const [vatPrice, setVatPrice] = useState(null)
  const [grandTotal, setGrandTotal] = useState(null)
  
  function handleToggleCheckoutModal(e) {
    e.preventDefault()
    setCheckoutModalOpen(!checkoutModalOpen)
  }

  useEffect(() => {
    const calcVatPrice = Math.round(cartTotal * 0.21)
    const shipping = 50
    setVatPrice(calcVatPrice)
    setShippingCost(shipping)
    const calcGrandTotal = cartTotal + shippingCost + vatPrice
    setGrandTotal(calcGrandTotal)
  }, [cart, grandTotal, shippingCost, vatPrice])
  
  let cartItems = []

  if (cart) {
    cartItems = cart.map((item, index) => <CartItem key={index} product={item} />);
  }

  return (
    <section className="relative container max-width my-12 md:my-24 mx-auto px-6 md:px-9 lg:px-3">
      {/* Go back link */}
      <a href="#" onClick={() => router.back()} className="text-sm font-medium opacity-50 capitalize">
        Go back
      </a>
      {/* Checkout layout*/}
      <form onSubmit={handleToggleCheckoutModal} className="flex flex-col lg:flex-row gap-8 mt-4 ">
        {/* Checkout container */}
        <div className="bg-light-100 p-6 md:p-12 rounded-lg shadow-sm lg:flex-grow">
          <h2 className="heading-3 pb-9">
            Checkout
          </h2>
          {/* Form */}
          <div>
            {/* Billing heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4">
              Billing details
            </h5>
            {/* Billing inputs container */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {/* Name input */}
                <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                  Name
                <input type="text" placeholder="Your Name" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
                </label>
                {/* Email input */}
                <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                  Email Address
                <input type="email" placeholder="Your Email" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
                </label>
                {/* Email input */}
                <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                  Phone Number
                <input type="tel" placeholder="Your Phone Number" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
                </label>
              </div>
            {/* Shipping heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4 pt-6">
              Shipping info
            </h5>
            {/* Shipping inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {/* Address input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Adress
              <input type="text" placeholder="Your Adress" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
              </label>
              {/* City input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                City
              <input type="text" placeholder="Your City" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
              </label>
              {/* Zip code input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                ZIP Code
              <input type="number" placeholder="Your ZIP Code" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
              </label>
              {/* Country input */}
              <label htmlFor="" className="flex flex-col gap-2 subtitle normal-case pb-4">
                Country
              <input type="text" placeholder="Your Country" className="px-4 py-3 text-body text-neutral-700 placeholder-opacity-50 border border-light-400 rounded-lg"/>
              </label>              
            </div>
            {/* Payment details heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4 pt-6">
              Payment details
            </h5>
              {/* Country input */}
              <legend className="flex flex-col gap-2 subtitle normal-case pb-4">
                Payment Method
              </legend>
              {/* Payment options group */}
              <div className="flex flex-col gap-4 md:w-1/2">
                {/* G-Pay input container */}
                <div className="flex gap-2 items-center h-16 px-4 py-3 border border-light-400 rounded-lg">
                  <input type="radio" id="gpay" name="payment" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                      <g id="google-pay-new" transform="translate(-10344 18396)"> <rect id="Rectangle_2623" data-name="Rectangle 2623" width="40" height="40" transform="translate(10344 -18396)" fill="none"/><g id="google-pay-icon-new" transform="translate(10173.3 -18556.639)"><path id="Base_1_" d="M200.062,170H181.338A10.67,10.67,0,0,0,170.7,180.638h0a10.67,10.67,0,0,0,10.638,10.638h18.723A10.67,10.67,0,0,0,210.7,180.638h0A10.67,10.67,0,0,0,200.062,170Z" transform="translate(0 0)" fill="#fff"/><path id="Outline" d="M200.062,170.862a9.651,9.651,0,0,1,3.793.771,9.863,9.863,0,0,1,5.213,5.213,9.71,9.71,0,0,1,0,7.585,9.863,9.863,0,0,1-5.213,5.213,9.651,9.651,0,0,1-3.793.771H181.338a9.651,9.651,0,0,1-3.793-.771,9.863,9.863,0,0,1-5.213-5.213,9.71,9.71,0,0,1,0-7.585,9.863,9.863,0,0,1,5.213-5.213,9.651,9.651,0,0,1,3.793-.771h18.723m0-.862H181.338A10.67,10.67,0,0,0,170.7,180.638h0a10.67,10.67,0,0,0,10.638,10.638h18.723A10.67,10.67,0,0,0,210.7,180.638h0A10.67,10.67,0,0,0,200.062,170Z" transform="translate(0 0)" fill="#3c4043"/><g id="G_Pay_Lockup_1_" transform="translate(176.79 176.085)"><g id="Pay_Typeface_3_" transform="translate(11.963 0.58)"><path id="Letter_p_3_" d="M511.121,300.029v3.218H510.1V295.3h2.707a2.442,2.442,0,0,1,1.75.686,2.291,2.291,0,0,1,0,3.362,2.437,2.437,0,0,1-1.75.676h-1.686Zm0-3.75v2.771h1.707a1.363,1.363,0,0,0,1.011-.41,1.339,1.339,0,0,0,.41-.973,1.417,1.417,0,0,0-1.42-1.383h-1.707Z" transform="translate(-510.1 -295.3)" fill="#3c4043"/><path id="Letter_a_3_" d="M615.672,339.1a2.526,2.526,0,0,1,1.787.606,2.152,2.152,0,0,1,.654,1.66v3.351h-.973v-.755H617.1a1.943,1.943,0,0,1-1.686.931,2.189,2.189,0,0,1-1.505-.532,1.7,1.7,0,0,1-.606-1.33,1.606,1.606,0,0,1,.638-1.34,2.678,2.678,0,0,1,1.7-.5,2.975,2.975,0,0,1,1.495.335v-.234a1.159,1.159,0,0,0-.42-.9,1.441,1.441,0,0,0-.989-.372,1.552,1.552,0,0,0-1.351.723l-.9-.564A2.5,2.5,0,0,1,615.672,339.1Zm-1.319,3.947a.8.8,0,0,0,.341.665,1.25,1.25,0,0,0,.793.266,1.62,1.62,0,0,0,1.149-.479,1.5,1.5,0,0,0,.505-1.122,2.1,2.1,0,0,0-1.33-.378,1.745,1.745,0,0,0-1.037.3A.909.909,0,0,0,614.353,343.047Z" transform="translate(-607.811 -336.77)" fill="#3c4043"/><path id="Letter_y_3_" d="M711.436,342.4l-3.4,7.83h-1.053l1.266-2.739L706,342.4h1.112l1.617,3.9h.021l1.574-3.9Z" transform="translate(-695.58 -339.895)" fill="#3c4043"/></g><g id="G_Mark_1_" transform="translate(0 0)"><path id="Blue_500" d="M375.216,354.948a5.378,5.378,0,0,0-.085-.958H370.85v1.755h2.465a2.112,2.112,0,0,1-.915,1.414V358.3h1.468A4.461,4.461,0,0,0,375.216,354.948Z" transform="translate(-366.294 -350.288)" fill="#4285f4"/><path id="Green_500_1_" d="M299.932,387.874a2.761,2.761,0,0,1-4.109-1.444H294.31V387.6a4.557,4.557,0,0,0,4.072,2.51,4.346,4.346,0,0,0,3.018-1.1Z" transform="translate(-293.825 -381.003)" fill="#34a853"/><path id="Yellow_500_1_" d="M287.056,333.626a2.748,2.748,0,0,1,.143-.872V331.58h-1.514a4.563,4.563,0,0,0,0,4.093L287.2,334.5A2.748,2.748,0,0,1,287.056,333.626Z" transform="translate(-285.2 -329.07)" fill="#fabb05"/><path id="Red_500" d="M298.382,286.2a2.476,2.476,0,0,1,1.748.684l1.3-1.3a4.378,4.378,0,0,0-3.049-1.187,4.558,4.558,0,0,0-4.072,2.51l1.514,1.175A2.726,2.726,0,0,1,298.382,286.2Z" transform="translate(-293.825 -284.4)" fill="#e94235"/></g></g></g></g>
                    </svg>
                  <label htmlFor="gpay" className="subtitle">
                    Google Pay
                  </label> 
                </div>
                {/* Visa/MC input container */}
                <div className="flex gap-2 items-center h-16 px-4 py-3 border border-light-400 rounded-lg">
                  <input type="radio" id="card" name="payment" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 39.997 39.997"><path id="Path_363" data-name="Path 363" d="M0,0H40V40H0Z" fill="rgba(255,255,255,0)" fillRule="evenodd"/><g id="Group_44" data-name="Group 44" transform="translate(5.622 9.83)"><path id="Path_364" data-name="Path 364" d="M8,17H33.948v8.416H8Z" transform="translate(-6.597 -14.195)" fill="#fff"/><path id="Path_365" data-name="Path 365" d="M9.38,13H31.373a3.387,3.387,0,0,1,3.38,3.387V29.95a3.387,3.387,0,0,1-3.38,3.387H9.38A3.387,3.387,0,0,1,6,29.95V16.387A3.387,3.387,0,0,1,9.38,13Zm.842,8.472a.849.849,0,1,0,0,1.7H15.3a.849.849,0,1,0,0-1.7ZM7.7,16.387v3.394H33.063V16.387H7.7Z" transform="translate(-6 -13)" fill="#00b3df"/></g>
                    </svg>
                  <label htmlFor="card" className="flex gap-2 items-center subtitle normal-case">
                    VISA / Mastercard
                  </label> 
                </div>
                {/* Cash input container */}
                <div className="flex gap-2 items-center h-16 px-4 py-3 border border-light-400 rounded-lg">
                  <input type="radio" id="paypal" name="payment" className="text-body text-neutral-700 placeholder-opacity-50 "/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="435" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><path fillRule="nonzero" d="M0 0H40V40H0z"/><g><path fill="#27346A" d="M22.798 2.422C21.336.785 18.691.084 15.308.084H5.492c-.692 0-1.28.494-1.389 1.164L.014 26.689c-.08.502.315.956.833.956h6.061l1.522-9.474-.047.296c.109-.67.692-1.163 1.384-1.163h2.88c5.658 0 10.089-2.255 11.383-8.78.038-.192.071-.38.1-.564-.163-.085-.163-.085 0 0 .386-2.411-.002-4.052-1.332-5.538" transform="translate(6.25 4.375)"/><path fill="#27346A" d="M10.75 7.092c.161-.076.341-.118.53-.118h7.697c.911 0 1.762.058 2.539.181.222.035.438.076.648.122.21.045.413.097.61.153.1.029.197.058.292.089.382.125.737.27 1.064.441.386-2.412-.002-4.052-1.332-5.538C21.335.785 18.691.084 15.308.084H5.49c-.691 0-1.28.494-1.388 1.164L.014 26.688c-.08.503.315.957.832.957h6.062l3.158-19.653c.065-.403.329-.733.684-.9z" transform="translate(6.25 4.375)"/><path fill="#2790C3" d="M24.03 8.525c-1.294 6.523-5.725 8.779-11.383 8.779H9.766c-.692 0-1.275.494-1.383 1.163L6.49 30.248c-.071.439.275.837.728.837h5.109c.605 0 1.12-.432 1.214-1.018l.05-.256.963-5.988.062-.331c.094-.586.609-1.018 1.213-1.018h.765c4.95 0 8.825-1.973 9.958-7.68.472-2.385.228-4.376-1.023-5.775-.379-.423-.85-.773-1.399-1.059-.03.185-.062.372-.1.565z" transform="translate(6.25 4.375)"/><path fill="#1F264F" d="M22.776 7.43c-.198-.056-.401-.108-.611-.153-.21-.046-.427-.086-.649-.121-.777-.124-1.627-.182-2.539-.182h-7.696c-.19 0-.37.042-.53.119-.356.167-.62.496-.684.9L8.431 18.17l-.047.296c.108-.67.691-1.163 1.383-1.163h2.88c5.659 0 10.09-2.255 11.384-8.78.038-.192.07-.38.1-.564-.328-.17-.682-.316-1.064-.44-.096-.031-.193-.061-.291-.09" transform="translate(6.25 4.375)"/></g></g>
                  </svg>
                  <label htmlFor="paypal" className="subtitle">
                    PayPal
                  </label> 
                </div>
              </div>
          </div>

        </div>
        {/* Summary container */}
        <div className="bg-light-100 p-6 md:p-12 mb-auto rounded-lg shadow-sm lg:w-1/3">
          <h3 className="heading-5 pb-9">
            Summary
          </h3>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 my-8">
            {cartItems}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                TOTAL
              </span>
              <p className="heading-6">
                $ {cartTotal?.toLocaleString('en-US')}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                SHIPPING
              </span>
              <p className="heading-6">
                $ {shippingCost?.toLocaleString('en-US')}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="subtitle opacity-50">
                VAT (INCLUDED)
              </span>
              <p className="heading-6">
                $ {vatPrice?.toLocaleString('en-US')}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
              <span className="subtitle opacity-50">
                GRAND TOTAL
              </span>
              <p className="heading-5 text-primary-700 font-black">
                $ {grandTotal?.toLocaleString('en-US')}
              </p>
          </div>
          {/* Subbmit button */}
          <div className="text-white">
            <ButtonPrimary
              label={'CONTINUE & PAY'}
              style={'w-full py-5'}
            />
          </div>
        </div>
      </form>

      {/* CheckoutModal */}
      {checkoutModalOpen && <CheckoutModal cartItems={cartItems} grandTotal={grandTotal} />}
      {/* Modal overlay */}
      {checkoutModalOpen && <div className="fixed inset-0 opacity-30 z-10 bg-dark-900"></div>}

    </section>
  )
}
