import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  function shareOnSocial(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className="border-t mt-auto bg-gray-100 py-4">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center py-8">
        <a className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </a>

        <p className="text-gray-600 text-center md:text-right">
          © 2024 Eventify. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
