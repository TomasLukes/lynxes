import Link from "next/link"
import Image from "next/image"
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary"

export default function BannerLg() {
  return (
    /* BannerLg */
    <div className="container mx-auto overflow-hidden">
        {/* BannerLg container */}
        <div id="bannerLg" className="flex flex-col lg:flex-row gap-8 text-center lg:text-left text-light-100 bg-primary-700 p-9 pt-16 lg:pb-0
            rounded-lg">
            {/* Image container */}
            <div className="lg:w-1/2">
                <Image
                    src="/assets/images/pages/Home/desktop/image-speaker-zx9.png"
                    alt="Product photo of ZX9 speaker"
                    className="w-32 lg:w-80 lg:mt-auto mx-auto lg:-mb-2"
                    width={756}
                    height={918}
                />
            </div>
            {/* Info container */}
            <div className="lg:w-1/2">
                {/* Heading */}
                <h3 className="heading-1">
                    ZX9 SPEAKER
                </h3>
                {/* Description */}
                <p className="text-body opacity-75 pt-6 pb-9 max-w-prose md:w-2/3 lg:w-3/4 text-center mx-auto lg:text-left lg:mx-0">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                {/* Button */}
                <Link href='product/zx9-speaker'>
                    <ButtonSecondary
                        label={'SEE PRODUCT'}
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}