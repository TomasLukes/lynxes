import Link from "next/link"
import Image from "next/image"

export default function ProductGallery() {
  return (
    /* Product image gallery section */
    <section id="productGallery" className="max-width mb-12 px-6 lg:px-0">
        {/* Gallery container */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-6 gap-8">
            {/* Small image first */}
            <Image
                className="row-start-0 border-8 border-yellow-500"
                src="/images/home/image-hero-tablet.jpg"
                alt=""
                width={200}
                height={200}
            />
            {/* Small image second */}
            <Image 
            className="row-start-1 border-8 border-teal-500"
                src="/images/home/image-hero-tablet.jpg"
                alt=""
                width={200}
                height={200}
            />
            {/* Large image */}
            <div className="border-8 border-red-500 md:row-start-1 md:row-span-2">

            </div>
{/*             <Image 
                className=""
                src="/images/home/image-hero-tablet.jpg"
                alt=""
                width={200}
                height={400}
            /> */}
        </div>
    </section>
  )
}