'use client'
import { useParams } from 'next/navigation'
import ProductItem from "@/components/Category/ProductItem"
import Categories from "@/components/shared/Categories"
import About from "@/components/shared/About"
import Loader from "@/components/ui/navigation/loader"
import { useState, useEffect } from "react"
import { db } from "@/lib/firebase/config"
import getProductsByCategory from "@/lib/firebase/getDB/getProductByCategory"
import { ProductType } from "@/types/global"

export default function CategoryPage() {
    const params = useParams()
    const { slug } = params;
    const [productsData, setProductsData] = useState<ProductType[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProductsByCategory(db, slug)
                setProductsData(products);
            } catch (error) {
                console.error('Error getting document:', error)
            }
        }
        fetchData()
    }, [slug])

    let ProductItems = null;
    if (productsData) {
        ProductItems = productsData.map((product: ProductType, index: number) => 
        <ProductItem key={index} product={product} />
    )
    }

  return (
    <main className="mx-auto">
        <div className="flex items-center justify-center h-32 md:h-40 lg:h-48 bg-dark-850 text-center text-light-200">
            <h2 className="heading-4 uppercase">
                {params.slug}
            </h2>
        </div>
        <div className="max-width mx-auto">
            <section id='products' 
                className="flex flex-col gap-20 md:gap-24 lg:gap-32 px-6 md:px-9 lg:px-6 my-20 md:my-40 lg:my-48"
            >
                {productsData? ProductItems : <Loader />}
            </section>
            <Categories />
            <About />
        </div>
    </main>
  )
}
