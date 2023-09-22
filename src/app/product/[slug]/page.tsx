import { ReactElement } from 'react';

import ProductDetails from '@/components/Product/ProductDetails';
import ProductGallery from '@/components/Product/ProductGallery';
import ProductHero from '@/components/Product/ProductHero';
import About from '@/components/shared/About';
import Categories from '@/components/shared/Categories';
import Loader from '@/components/ui/navigation/loader';
import { db } from '@/lib/firebase/config';
import { getProduct } from '@/lib/firebase/getDB/getProduct';
import { Params, ProductType } from '@/types/global';

const ProductPage = async ({
  params,
}: {
  params: Params;
}): Promise<ReactElement> => {
  const productId = params.slug;
  const productData = await getProduct(db, productId);

  return (
    <main className='max-width mx-auto px-6 py-24 md:px-9 lg:px-6'>
      {/* 
      <a href='#' onClick={() => router.back()} className=''>
        <p className='mb-6 text-sm font-medium capitalize opacity-50'>
          Go back
        </p>
      </a>
 */}
      {productData ? (
        <section id='product'>
          <ProductHero product={productData} />
          <ProductDetails product={productData} />
          <ProductGallery slug={productId} />
        </section>
      ) : (
        <Loader />
      )}
      <Categories />
      <About />
    </main>
  );
};

export default ProductPage;
