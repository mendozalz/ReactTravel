import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white bottom-0 w-full p-4 lg:absolute">
        <div class="mx-auto  px-4 py-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start">
              <img className="w-full h-10" src="/logo_horizontal_siza_1024.png" alt="logotipo" />
            </div>

            <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
