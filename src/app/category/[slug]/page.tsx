'use client'
import { useState, useEffect } from "react"
import About from "@/components/shared/About"
import Categories from "@/components/shared/Categories"
import ProductItem from "@/components/Category/ProductItem"
import { db } from "@/lib/firebase/config"
import { getProductsByCategory } from "@/lib/firebase/get/getProductByCategory"


export default function CategoryPage({ params }) {
    const { slug } = params;

    const [productsData, setProductsData] = useState(null)

    useEffect(() => {
        console.log(slug)
        getProductsByCategory(db, slug)
        .then(products => setProductsData(products))
        .catch(error => console.error('Error getting document:', error));
    }, [slug])

    
    if (productsData === null) {
        return <div>Loading...</div>;
    }

    const ProductItems = productsData.map((product, index) => 
        <ProductItem key={index} product={product} />
    )

  return (
    <main className="mx-auto">
        <div className="flex items-center justify-center h-32 md:h-40 lg:h-48 bg-dark-850 text-center text-light-200">
            <h2 className="heading-4 uppercase">
                {params.slug}
            </h2>
        </div>
        <div className="max-width mx-auto">
            <section id='products' 
                className="flex flex-col gap-20 md:gap-24 lg:gap-32 px-6 md:px-9 lg:px-3 
                my-20 md:my-40 lg:my-48"
            >
                {ProductItems}
            </section>
            <Categories />
            <About />
        </div>

      
    </main>
  )
}
