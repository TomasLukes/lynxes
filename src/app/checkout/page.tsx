'use client'
import { useRouter } from 'next/navigation';
import { useState } from "react"
import CheckoutModal from "@/components/Checkout/CheckoutModal"
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary"
import CartItem from "@/components/shared/CartItem"
import { useCartContext } from "@/context/CartContext"
import { useAuthContext } from "@/context/AuthContext";
import FormInput from "@/components/ui/forms/FormInput";
import RadioInput from "@/components/ui/forms/RadioInput";

export default function CheckoutPage() {
  const router = useRouter()

  const { user } = useAuthContext()
  const { cart, cartQ, cartTotal, shippingCost, vatPrice, grandTotal } = useCartContext();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  
  const formData = {
    user: user?.uid || 'guest',
    creationDate: null,
    name,
    email,
    phoneNumber,
    address,
    city,
    zipCode,
    country,
    paymentMethod,
    orderedItems: cart,
  }

  function handleToggleCheckoutModal(e) {
    e.preventDefault()
    window.scrollTo(0, 0);
    setCheckoutModalOpen(!checkoutModalOpen)
  }

  let cartItems = []
  if (cart) {
    cartItems = cart.map((item, index) => <CartItem key={index} product={item} />);
  }

  return (
    <section className="relative container max-width my-12 md:my-24 mx-auto px-6 md:px-9 lg:px-6">
      {/* Go back link */}
      <a href="#" onClick={() => router.back()} className="text-sm font-medium opacity-50 capitalize">
        Go back
      </a>
      {/* Checkout layout*/}
      <form onSubmit={handleToggleCheckoutModal} className="flex flex-col lg:flex-row gap-8 mt-4 ">
        {/* Checkout container */}
        <div className="bg-light-100 p-6 md:p-12 rounded-lg shadow-md lg:flex-grow">
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
              <FormInput label='Name' id='name' value={name} type='text' onChange={e => setName(e.target.value)} />
              {/* Email input */}
              <FormInput label='Email Address' id='email' value={email} type='email' onChange={e => setEmail(e.target.value)} />
              {/* Phone number input */}
              <FormInput label='Phone Number' id='phoneNumber' value={phoneNumber} type='tel' onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            {/* Shipping heading */}
            <h5 className="text-primary-700 text-sm font-bold uppercase pb-4 pt-6">
              Shipping info
            </h5>
            {/* Shipping inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {/* Address input */}
              <FormInput label='Address' id='address' value={address} type='text' onChange={e => setAddress(e.target.value)} />
              {/* City input */}
              <FormInput label='City' id='city' value={city} type='text' onChange={e => setCity(e.target.value)} />
              {/* Zip code input */}
              <FormInput label='ZIP Code' id='zipCode' value={zipCode} type='text' onChange={e => setZipCode(e.target.value)} />
              {/* Country input */}
              <FormInput label='Country' id='country' value={country} type='text' onChange={e => setCountry(e.target.value)} />           
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
                <RadioInput label='Google Pay' id='gpay' name='payment' checked={paymentMethod === "gpay"} onChange={e => setPaymentMethod(e.target.value)} />
                {/* Visa/MC input container */}
                <RadioInput label='VISA / Mastercard' id='card' name='payment' checked={paymentMethod === "card"} onChange={e => setPaymentMethod(e.target.value)} />
                {/* Cash input container */}
                <RadioInput label='PayPal' id='paypal' name='payment' checked={paymentMethod === "paypal"} onChange={e => setPaymentMethod(e.target.value)} />
              </div>
          </div>

        </div>
        {/* Summary container */}
        <div className="bg-light-100 p-6 md:p-12 mb-auto rounded-lg shadow-md lg:w-1/3">
          <h3 className="heading-5 pb-9">
            Summary <span>{`(${cartQ})`}</span>
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
          {/* Submit button */}
          <div>
            <ButtonPrimary
              type="submit"
              label={'CONTINUE & PAY'}
              style={'w-full py-4 button-text-white'}
            />
          </div>
        </div>
      </form>

      {/* CheckoutModal */}
      {checkoutModalOpen && <CheckoutModal cartItems={cartItems} grandTotal={grandTotal} formData={formData} />}
      {/* Modal overlay */}
      {checkoutModalOpen && <div className="fixed inset-0 opacity-30 z-10 bg-dark-900"></div>}

    </section>
  )
}
