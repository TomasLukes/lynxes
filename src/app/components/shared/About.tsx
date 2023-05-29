
export default function About() {
  return (
    <section id="about"
      className="container px-6 md:px-9 lg:px-3 mx-auto flex flex-col-reverse lg:flex-row items-center 
      gap:8 my-9 md:my-24">
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
        <img src="/images/shared/image-best-gear.webp" alt="" className="lg:ml-auto rounded-lg " />
      </div>
    </section>
  )
}