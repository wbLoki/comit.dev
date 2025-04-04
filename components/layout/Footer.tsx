import styles from "@/styles/style";
import { darkLogo } from "@/public/assets";
import { footerLink, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "@node_modules/next/link";
const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={darkLogo}
          alt="comit.dev"
          className="w-min h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          New way to Comit changes.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 mix-w-[150px">
          <h4
            className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}
          >
            {footerLink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerLink.links.map((link, index) => (
              <Link href={link.link} key={link.name} target="_blank">
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2025 Comit. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Link href={social.link} key={social.id} target="_blank">
            <Image
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
