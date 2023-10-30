import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = (): ReactElement => (
  <Link href="/">
    <div className="flex flex-col items-center">
      <Image
        src="/assets/images/components/Logo/lynxes-logo.png"
        width={150}
        height={150}
        className="-mb-1 w-9 md:w-12 lg:w-14"
        alt="Logo of Lynxes"
      />
      <h3 className="heading-6 hidden lg:block">Lynxes</h3>
    </div>
  </Link>
);

export default Logo;
