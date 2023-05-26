import ButtonArrow from "../buttons/ButtonArrow"

export default function Categories() {
  return (
    /* Categories section*/
    <section id="categories"
      className="mx-auto">
      {/* Categories cards container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center
        md:gap-8 px-6 py-20 md:py-32">
        {/* Headphones card */}
        <div className="w-full flex flex-col md:w-96 md:h-52 bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-headphones.webp" alt="" 
            className="mx-auto w-40 -mt-20 md:w-48 md:-mt-24"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              HEADPHONES
            </h3>
            <ButtonArrow label={'SHOP'} />
          </div>
        </div>
        {/* Speakers card */}
        <div className="w-full flex flex-col md:w-96 md:h-52 bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-speakers.webp" alt="" 
            className="mx-auto w-40 -mt-20 md:w-48 md:-mt-24"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              SPEAKERS
            </h3>
            <ButtonArrow label={'SHOP'} />
          </div>
        </div>
        {/* Earphones card */}
        <div className="w-full flex flex-col md:w-96 md:h-52 bg-light-300 text-center
          rounded-lg mt-20 md:mt-0 p-6">
          <img src="/images/shared/category/image-category-thumbnail-earphones.webp" alt="" 
            className="mx-auto w-40 -mt-16 md:w-48 md:-mt-20"
          />
          {/* Category name + Btn continer */}
          <div className="mt-auto">
            <h3 className="heading-6">
              EARPHONES
            </h3>
            <ButtonArrow label={'SHOP'} />
          </div>
        </div>
      </div>
    </section>
  )
}