'use client';
import { useEffect,useState } from 'react';
import { useParams,useRouter } from 'next/navigation';

import ProductDetails from '@/components/Product/ProductDetails';
import ProductGallery from '@/components/Product/ProductGallery';
import ProductHero from '@/components/Product/ProductHero';
import About from '@/components/shared/About';
import Categories from '@/components/shared/Categories';
import Loader from '@/components/ui/navigation/loader';
import { db } from '@/lib/firebase/config';
import getProduct from '@/lib/firebase/getDB/getProduct';
import { ProductType } from '@/types/global';

export default () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [productData, setProductData] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getProduct(db, id);
        setProductData(product);
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className='max-width mx-auto px-6 py-24 md:px-9 lg:px-6'>
      {/* Go back link */}
      <a href='#' onClick={() => router.back()} className=''>
        <p className='mb-6 text-sm font-medium capitalize opacity-50'>
          Go back
        </p>
      </a>
      {productData ? (
        <section id='product'>
          <ProductHero product={productData} />
          <ProductDetails product={productData} />
          <ProductGallery slug={id} />
        </section>
      ) : (
        <Loader />
      )}
      <Categories />
      <About />
    </main>
  );
};
