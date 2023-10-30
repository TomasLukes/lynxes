import { ReactElement } from "react";
import Link from "next/link";

import { IClassName } from "@/types/global";

import FacebookIcon from "../../icons/socials/FacebookIcon";
import InstagramIcon from "../../icons/socials/InstagramIcon";
import TwitterIcon from "../../icons/socials/TwitterIcon";

const footerLinkIconsConfig = [
  {
    href: "https://www.facebook.com/lynxes",
    imgSrc: "./assets/icons/shared/socials/icon-facebook.svg",
    alt: "See our Facebook page",
    icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/lynxes",
    imgSrc: InstagramIcon,
    alt: "Follow us on Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.twitter.com/lynxes",
    imgSrc: TwitterIcon,
    alt: "Follow us on Twitter",
    icon: TwitterIcon,
  },
];

const SocialIcons = ({ className }: IClassName): ReactElement => {
  return (
    <div className={className}>
      {footerLinkIconsConfig.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Link key={index} href={item.href}>
            <IconComponent className="cursor-pointer fill-neutral-100 hover:fill-primary-700 focus:fill-primary-700" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
