import Link from "next/link"
import ButtonPrimary from "./components/buttons/ButtonPrimary"
import ButtonSecondary from "./components/buttons/ButtonSecondary"
import ButtonArrow from "./components/buttons/ButtonArrow"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl pt-12 pb-6">Main page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis voluptatibus consequatur dicta, 
        necessitatibus reiciendis cumque laudantium commodi sint mollitia unde est beatae aut optio atque molestiae
        cum eligendi exercitationem.
      </p>
    </div>
  )
}