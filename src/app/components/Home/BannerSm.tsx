import Link from "next/link"
import ButtonSecondary from "../buttons/ButtonSecondary"

export default function BannerSm() {
  return (
    /* BannerSm */
    <div className="w-full lg:container mx-auto px-6">
      {/* BannerSm container */}
      <div id="bannerSm" className="flex gap-8 text-dark-900 h-96 p-6 lg:p-16 rounded-lg">
          {/* Heading + button container */}
          <div className="my-auto mr-auto">
              {/* Heading */}
              <h3 className="heading-4 pb-4">
                  ZX7 SPEAKER
              </h3>
              {/* Button */}
              <ButtonSecondary
                  label={'SEE PRODUCT'}
              />
          </div>
      </div>
    </div>
  )
}