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
      <section id="banners">
        <BannerLg />
        <BannerSm />
        <BannerSplit >/</BannerSplit>
      </section>

      <About />
    </div>
  )
}