import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/components/Logo/lynxes-logo.png"
            width={150}
            height={150}
            className="w-9 md:w-12 lg:w-14 -mb-1" 
            alt="Logo of Lynxes" 
          />
          <h3 className="heading-6 hidden lg:block">
            Lynxes
          </h3>
        </div>
      </Link>
  )
}