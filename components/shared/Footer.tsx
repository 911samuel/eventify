import Image from "next/image";
import Link from "next/link";

const Footer = () => {
<<<<<<< HEAD
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
=======
  function shareOnSocial(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className="border-t mt-auto bg-gray-100 py-4">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center py-8">
        <a className="flex items-center gap-2">
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
<<<<<<< HEAD
        </Link>

        <p>2024 Eventify. All Rights reserved.</p>
=======
        </a>

        <p className="text-gray-600 text-center md:text-right">
          © 2024 Eventify. All Rights Reserved.
        </p>
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
      </div>
    </footer>
  );
};

export default Footer;
