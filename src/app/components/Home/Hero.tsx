import Link from "next/link"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function Hero() {
  return (
    /* Hero section */
    <section id="hero"  className="bg-neutral-900 text-white
        mb-12 px-6 lg:px-0">
        {/* Hero container */}
        <div className="container max-width flex mx-auto text-center lg:text-left
            ">
            {/* Info container */}
            <div className="mx-auto lg:mx-0 lg:mr-auto lg:w-1/2 py-32 px-6 lg:px-0">
                <span className="overline-text opacity-25">
                    NEW PRODUCT
                </span>
                <h1 className="heading-1 pt-2 max-w-prose">
                    XX99 MARK II HEADPHONES
                </h1>
                <p className="max-w-prose md:w-1/2 lg:w-2/3 text-body opacity-75 pt-6 pb-9 mx-auto lg:mx-0">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.    
                </p>
                <Link href='/product/xx99-mark-two-headphones'>
                    <ButtonPrimary label={'SEE PRODUCT'} />
                </Link>
            </div>
        </div>
    </section>
  )
}