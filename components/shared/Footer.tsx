import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  function shareOnSocial(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className="border-t mt-auto bg-gray-100 py-4">
      <div>
        <div className="wrapper flex justify-center items-center gap-6">
          <a className="text-gray-600 hover:text-primary-500">About Us</a>
          <a className="text-gray-600 hover:text-primary-500">Contact Us</a>
          <a className="text-gray-600 hover:text-primary-500">
            Terms of Service
          </a>
          <a className="text-gray-600 hover:text-primary-500">Privacy Policy</a>
        </div>
      </div>
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
