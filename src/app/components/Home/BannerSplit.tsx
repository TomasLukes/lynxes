import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"

export default function BannerSm() {
  return (
    /* BannerSplit */
    <div className="w-full lg:container mx-auto flex flex-col md:flex-row gap-8 px-6">
      {/* Left item */}
      <div className="w-1/2 rounded-lg overflow-hidden">
        <img src="/images/home/image-earphones-yx1.webp" alt="" className="w-full"/>
      </div>
      {/* Right item */}
      <div className="w-1/2 flex flex-col items-start justify-center bg-light-300 p-12 px-24 rounded-lg">
        {/* Heading */}
        <h3 className="heading-4 pb-4">
            YX1 EARPHONES
        </h3>
        {/* Button */}
        <ButtonSecondary
            label={'SEE PRODUCT'}
        />
      </div>
    </div>

  )
}