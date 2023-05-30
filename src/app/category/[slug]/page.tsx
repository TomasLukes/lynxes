import Link from "next/link"
import About from "@/app/components/shared/About"
import Categories from "@/app/components/shared/Categories"
import ProductItem from "@/app/components/Category/ProductItem"

export default function CategoryPage({ params }) {

  return (
    <main className="mx-auto">
        <div className="flex items-center justify-center h-32 md:h-40 lg:h-48 bg-dark-850 text-center text-light-200">
            <h2 className="heading-4 uppercase">
                {params.slug}
            </h2>
        </div>
        <div className="max-width mx-auto">
            <section id='products' 
                className="flex flex-col gap-8 px-6 md:px-9 lg:px-3 
                my-9 md:my-24"
            >
                <ProductItem
                    reversed={false}
                 />
                <ProductItem 
                    reversed={true}/>
                <ProductItem 
                    reversed={false}/>
            </section>
            <Categories />
            <About />
        </div>

      
    </main>
  )
}
