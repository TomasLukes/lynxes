import Image from "next/image"

export default function ProductGallery({ slug }) {
  return (
    /* Product image gallery section */
    <section id="productGallery" className="max-width mb-12 px-6 lg:px-6">
        {/* Gallery container */}
        <div className="flex flex-col md:flex-row md:gap-6 gap-8">
            <div className="flex flex-col md:gap-6 gap-8">
                {/* Small image first */}
                <Image
                    className="hidden lg:block rounded-lg"
                    src={`/assets/images/products/${slug}/desktop/image-gallery-1.jpg`}
                    alt=""
                    width={900}
                    height={560}
                />
                <Image
                    className="hidden md:block lg:hidden rounded-lg"
                    src={`/assets/images/products/${slug}/tablet/image-gallery-1.jpg`}
                    alt=""
                    width={900}
                    height={560}
                />
                <Image
                    className="md:hidden rounded-lg"
                    src={`/assets/images/products/${slug}/mobile/image-gallery-1.jpg`}
                    alt=""
                    width={900}
                    height={560}
                />
                {/* Small image second */}
                <Image 
                    className="hidden lg:block rounded-lg"
                    src={`/assets/images/products/${slug}/desktop/image-gallery-2.jpg`}
                    alt=""
                    width={900}
                    height={560}
                    />
                <Image
                    className="hidden md:block lg:hidden rounded-lg"
                    src={`/assets/images/products/${slug}/tablet/image-gallery-2.jpg`}
                    alt=""
                    width={900}
                    height={560}
                />
                <Image
                    className="md:hidden rounded-lg"
                    src={`/assets/images/products/${slug}/mobile/image-gallery-2.jpg`}
                    alt=""
                    width={900}
                    height={560}
                />
            </div>
            {/* Large image */}
            <Image 
                className="hidden lg:block rounded-lg"
                src={`/assets/images/products/${slug}/desktop/image-gallery-3.jpg`}
                alt=""
                width={1270}
                height={1184}
            /> 
            <Image 
                className="hidden md:block lg:hidden rounded-lg"
                src={`/assets/images/products/${slug}/tablet/image-gallery-3.jpg`}
                alt=""
                width={1270}
                height={1184}
            /> 
            <Image 
                className="md:hidden rounded-lg"
                src={`/assets/images/products/${slug}/mobile/image-gallery-3.jpg`}
                alt=""
                width={1270}
                height={1184}
            /> 
        </div>
    </section>
  )
}
