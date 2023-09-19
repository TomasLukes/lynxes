import { ReactElement } from 'react';

import BannerLg from '@/components/Home/BannerLg';
import BannerSm from '@/components/Home/BannerSm';
import BannerSplit from '@/components/Home/BannerSplit';
import Hero from '@/components/Home/Hero';
import About from '@/components/shared/About';
import Categories from '@/components/shared/Categories';

const HomePage = (): ReactElement => (
  <div className=''>
    <Hero />
    <Categories />
    <section
      id='banners'
      className='container mx-auto my-12 flex flex-col gap-8 px-6 md:px-9 lg:px-6'
    >
      <BannerLg />
      <BannerSm />
      <BannerSplit />
    </section>
    <About />
  </div>
);

export default HomePage;
