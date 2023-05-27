import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"

export default function BannerLg() {
  return (
    /* BannerLg */
    <div className="lg:container mx-auto px-6 overflow-hidden">
        {/* BannerLg container */}
        <div id="bannerLg" className="flex flex-col lg:flex-row gap-8 text-center lg:text-left text-light-100 bg-primary-700 p-9 pt-16 lg:pb-0
            rounded-lg">
            {/* Image container */}
            <div className="lg:w-1/2">
                <img src="/images/home/image-speaker-zx9.webp" alt=""
                    className="w-24 lg:w-80 lg:mt-auto mx-auto lg:-mb-2" 
                />
            </div>
            {/* Info container */}
            <div className="lg:w-1/2">
                {/* Heading */}
                <h3 className="heading-1">
                    ZX9 SPEAKER
                </h3>
                {/* Description */}
                <p className="text-body opacity-75 py-9 lg:w-1/2">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                {/* Button */}
                <ButtonSecondary
                    label={'SEE PRODUCT'}
                />
            </div>
        </div>
    </div>
  )
}