'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react"
import ProductHero from "@/components/Product/ProductHero";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductGallery from "@/components/Product/ProductGallery";
import Categories from "@/components/shared/Categories";
import About from "@/components/shared/About";
import { db } from "@/lib/firebase/config";
import getProduct from "@/lib/firebase/getDB/getProduct";

export default function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter()

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    getProduct(db, id)
      .then(product => setProductData(product))
      .catch(error => console.error('Error getting document:', error));
  }, [id]);

  if (productData === null) {
    return <div>Loading...</div>;
  }

  return (
      <main className="max-width mx-auto px-6 md:px-9 lg:px-6 py-24">
        {/* Go back link */}
        <a href="#" onClick={() => router.back()} className="">
          <p className="text-sm font-medium opacity-50 capitalize mb-6">
            Go back
          </p> 
        </a>
        <ProductHero product={productData} />
        <ProductDetails product={productData} />
        <ProductGallery slug={id}/>
        <Categories />
        <About />
      </main>
    )
}