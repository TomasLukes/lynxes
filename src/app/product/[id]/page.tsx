import Link from "next/link";
import ProductHero from "@/app/components/Product/ProductHero";
import ProductDetails from "@/app/components/Product/ProductDetails";
import ProductGallery from "@/app/components/Product/ProductGallery";
import Categories from "@/app/components/shared/Categories";
import About from "@/app/components/shared/About";

export default function ProductPage({ params }) {
  const { id } = params;

  return (
      <main className="max-width mx-auto px-6 md:px-9 lg:px-3 py-24">
        {/* Go back link */}
        <Link href="/">
          <p className="text-sm font-medium opacity-50 capitalize mb-6">
            Go back
          </p> 
        </Link>
        <ProductHero />
        <ProductDetails />
        <ProductGallery />
        <Categories />
        <About />
      </main>
    )
}

