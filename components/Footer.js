import { MdMarkEmailUnread, MdAddCall } from "react-icons/md";

export default function Footer() {
  return (
    // <footer class="bg-white dark:bg-gray-800">
    //   <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
    //     <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"></div>
    //     <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //     <div class="text-center">
    //       <a
    //         href="#"
    //         class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white cursor-pointer"
    //       >
    //         Holms Merchant Bank
    //       </a>
    //       <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
    //         © 2021-2022 Holms. All Rights Reserved.
    //       </span>
    //     </div>
    //   </div>
    // </footer>

    <div class="bg-gray-800 pt-4 sm:pt-10 lg:pt-12">
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div class="col-span-full lg:col-span-2">
            <div class="lg:-mt-2 mb-4">
              <a
                href="/"
                class="inline-flex items-center text-xl md:text-2xl font-bold gap-2 text-white tracking-tighter"
                aria-label="logo "
              >
                Holms Merchant Banks
              </a>
            </div>

            <p class="text-gray-500 sm:pr-8 mb-6">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your assets.
            </p>

            <div class="flex gap-4">
              <a
                href="contact"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <MdMarkEmailUnread className="w-5 h-5" />
              </a>

              <a
                href="contact"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <MdAddCall className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <div class="text-white font-medium tracking-widest uppercase mb-4">
              company
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <a
                  href="/"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Home
                </a>
              </div>

              <div>
                <a
                  href="services"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Sevices
                </a>
              </div>

              <div>
                <a
                  href="contact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  About us
                </a>
              </div>

              <div>
                <a
                  href="testimoies"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Testimonials
                </a>
              </div>

              <div>
                <a
                  href="contact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact us
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              features
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Security
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Convenience
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Online banking
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Competitive interest Rate
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Custom Service
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              Support
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <a
                  href="login"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Log in
                </a>
              </div>

              <div>
                <a
                  href="sontact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact us
                </a>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              address
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Email: support@holmsmerchantbank.co.uk
                </a>
              </div>

              <div>
                <a
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Phone: +44 020 8133 6340
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div class="text-gray-400 text-sm text-center border-t py-8">
          © 2023 -Holms Merchant Banks. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
