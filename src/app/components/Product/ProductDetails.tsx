import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function ProductDetails() {
  return (
    /* ProductDetails container */
    <div className='mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 pb-12'>
      {/* Left/First item */}
      <div className="flex flex-col gap-4 md:gap-8 lg:w-2/3">
        <h5 className="heading-5 uppercase">
          Features
        </h5>
        {/* Product description */}
        <p className="text-body opacity-50">
          Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 
          <br /><br />
          The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
        </p>
      </div>
      {/* Right/Second item */}
      <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/3 md:gap-24">
        <h5 className="heading-5 uppercase pb-6">
          In the box
        </h5>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              2x
            </span>
            <p className="text-body opacity-50">
              Speaker unit
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              6x
            </span>
            <p className="text-body opacity-50">
              Speaker Cloth Panel
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              1x
            </span>
            <p className="text-body opacity-50">
              User Manual
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}