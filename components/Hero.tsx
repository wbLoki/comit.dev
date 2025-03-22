import styles from "@/styles/style";
import { terminal } from "@/public/assets";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          New way to
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Comit</span>{" "}
        </h1>
      </div>
      <h1 className="w-full capitalize font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        changes.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Automate commit messages, branch naming, and AI assistance for your
        workflow.
      </p>
      <Link href="/docs#supported-platforms">
        <Button text="Comit" animated className="mt-10 ml-auto" />
      </Link>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image src={terminal} alt="billings" className="relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
