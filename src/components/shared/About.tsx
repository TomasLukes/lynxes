import Image from "next/image"

export default function About() {
  return (
    <section id="about"
      className="container px-6 md:px-9 lg:px-6 mx-auto flex flex-col-reverse lg:flex-row items-center 
      gap:8 my-24 md:my-28">
      {/* Text container */}
      <div className="lg:w-1/2">
        <h3 className="w-3/4 mx-auto lg:mx-0 heading-2 text-center lg:text-left pb-6 pt-6">
          Bringing you the <span className="text-primary-700">best</span> audio gear
        </h3>
        <p className="text-body opacity-60 text-center lg:text-left max-w-prose lg:w-3/4 mx-auto lg:mx-0">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
          rooms available for you to browse and experience a wide range of our products. Stop by our store 
          to meet some of the fantastic people who make Audiophile the best place to buy your portable 
          audio equipment.
        </p>
      </div>
      {/* Image container */}
      <div className="lg:w-1/2">
        <Image 
          src="/assets/images/components/About/desktop/image-best-gear.jpg" 
          alt="Product image of ZX7 speaker" 
          className="hidden lg:block lg:ml-auto w-3/4 rounded-lg"
          width={540} 
          height={588}
        />
        <Image 
          src="/assets/images/components/About/tablet/image-best-gear.jpg" 
          alt="Product image of ZX7 speaker" 
          className="hidden md:block lg:hidden rounded-lg"
          width={1378} 
          height={600}
        />
        <Image 
          src="/assets/images/components/About/mobile/image-best-gear.jpg" 
          alt="Product image of ZX7 speaker" 
          className="md:hidden rounded-lg"
          width={654} 
          height={600}
        />
      </div>
    </section>
  )
}