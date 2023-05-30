import Link from "next/link"
import About from "@/app/components/shared/About"
import Categories from "@/app/components/shared/Categories"

export default function CategoryPage({ params }) {


  return (
    <main>
      <h1>{params.slug}</h1>
      <Categories />
      <About />
    </main>
  )
}
