import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white bottom-0 md:w-full flex md:block p-4 lg:absolute ">
        <div className="md:mx-auto  px-4 py-4 sm:px-6 lg:px-8 w-full">
          <div className="flex sm:items-center justify-between">
            <div>
              <img className="w-full h-10" src="/logo_horizontal_siza_1024.png" alt="marca" />
            </div>

            <p className="mt-2 md:mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
