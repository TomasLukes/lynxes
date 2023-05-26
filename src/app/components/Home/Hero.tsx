import Link from "next/link"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function Hero() {
  return (
    /* Hero section */
    <section id="hero" className="bg-neutral-900 text-white
        h-96 pb-12 px-6">
        {/* Hero container */}
        <div className="container flex mx-auto 
            border-t border-white border-opacity-20">
            {/* Info container */}
            <div className="w-1/2 py-32 px-6">
                <span className="overline-text opacity-25">
                    NEW PRODUCT
                </span>
                <h1 className="heading-1">
                    XX99 MARK II HEADPHONES
                </h1>
                <p className="w-1/2 text-body opacity-75 pt-6 pb-9">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.    
                </p>
                <ButtonPrimary label={'SEE PRODUCT'} />

            </div>
            {/* Image container */}
            <div className="w-1/2">
            </div>
            
        </div>
    </section>
  )
}