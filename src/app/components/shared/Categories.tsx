import Link from "next/link"
import ButtonArrow from "../buttons/ButtonArrow"

export default function Categories() {
  return (
    /* Categories section*/
    <section id="categories"
      className="max-width mx-auto px-6 md:px-9 lg:px-3">
      {/* Categories cards container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center
        md:gap-8 mt-9 md:mt-32 lg:mt-36 mb-9 md:mb-20 lg:mb-32">
        {/* Headphones card */}
        <div className="w-full flex flex-col bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-headphones.webp" alt="" 
            className="mx-auto w-40 -mt-20 md:-mt-24"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              HEADPHONES
            </h3>
            <Link href="/category/headphones" >
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
        {/* Speakers card */}
        <div className="w-full flex flex-col bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-speakers.webp" alt="" 
            className="mx-auto w-40 -mt-20 md:w-48 md:-mt-24"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              SPEAKERS
            </h3>
            <Link href="/category/speakers" >
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
        {/* Earphones card */}
        <div className="w-full flex flex-col bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-earphones.webp" alt="" 
            className="mx-auto w-40 -mt-16 md:w-48 md:-mt-20"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              EARPHONES
            </h3>
            <Link href="/category/earphones" >
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}