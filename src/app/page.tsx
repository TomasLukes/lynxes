import Link from "next/link"
import Hero from "./components/Home/Hero"
import Categories from "./components/shared/Categories"
import About from "./components/shared/About"
import BannerLg from "./components/Home/BannerLg"
import BannerSm from "./components/Home/BannerSm"
import BannerSplit from "./components/Home/BannerSplit"

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <section id="banners" className="flex flex-col gap-8 mx-auto py-12">
        <BannerLg />
        <BannerSm />
        <BannerSplit />
      </section>
      <About />
    </div>
  )
}