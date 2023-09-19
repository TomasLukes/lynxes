import { ReactElement } from 'react';

import ProductItem from '@/components/Category/ProductItem';
import About from '@/components/shared/About';
import Categories from '@/components/shared/Categories';
import Loader from '@/components/ui/navigation/loader';
import { db } from '@/lib/firebase/config';
import { getProductByCategory } from '@/lib/firebase/getDB/getProductByCategory';
import { Params, ProductType } from '@/types/global';

const CategoryPage = async ({
  params,
}: {
  params: Params;
}): Promise<ReactElement> => {
  const productsData = await getProductByCategory(db, params.slug);

  const ProductItems = productsData.map(
    (product: ProductType, index: number) => (
      <ProductItem key={index} product={product} />
    )
  );

  return (
    <main className='mx-auto'>
      <div className='flex h-32 items-center justify-center bg-dark-850 text-center text-light-200 md:h-40 lg:h-48'>
        <h2 className='heading-4 uppercase'>{params.slug}</h2>
      </div>
      <div className='max-width mx-auto'>
        <section
          id='products'
          className='my-20 flex flex-col gap-20 px-6 md:my-40 md:gap-24 md:px-9 lg:my-48 lg:gap-32 lg:px-6'
        >
          {productsData ? ProductItems : <Loader />}
        </section>
        <Categories />
        <About />
      </div>
    </main>
  );
};

export default CategoryPage;
