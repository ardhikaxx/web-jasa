export const Footer = () => {
  return (
    <footer aria-label="Site footer" className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3 text-center">
        <div className="text-black text-center font-['Inter'] font-bold text-2xl mb-4">
          REXDEV
        </div>
        <p className="text-gray-900 text-sm sm:text-base leading-loose mx-auto max-w-2xl">
          REXDEV menyediakan solusi digital terbaik untuk kebutuhan Anda.
          Kami berkomitmen menghadirkan inovasi berkualitas dan layanan profesional.
        </p>
        <p className="text-gray-800 text-xs mt-6">
          © {new Date().getFullYear()} REXDEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;