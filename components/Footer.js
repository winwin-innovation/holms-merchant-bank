import { MdMarkEmailUnread, MdAddCall } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <div class="bg-gray-800 pt-4 sm:pt-10 lg:pt-12">
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div class="col-span-full lg:col-span-2">
            <div class="lg:-mt-2 mb-4">
              <Link
                href="/"
                class="inline-flex items-center text-xl md:text-2xl font-bold gap-2 text-white tracking-tighter"
                aria-label="logo "
              >
                Holms Merchant Banks
              </Link>
            </div>

            <p class="text-gray-500 sm:pr-8 mb-6">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your assets.
            </p>

            <div class="flex gap-4">
              <Link
                href="contact"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <MdMarkEmailUnread className="w-5 h-5" />
              </Link>

              <Link
                href="contact"
                target="_blank"
                class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <MdAddCall className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <div class="text-white font-medium tracking-widest uppercase mb-4">
              company
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <Link
                  href="/"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Home
                </Link>
              </div>

              <div>
                <Link
                  href="services"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Services
                </Link>
              </div>

              <div>
                <Link
                  href="contact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  About us
                </Link>
              </div>

              <div>
                <Link
                  href="testimoies"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Testimonials
                </Link>
              </div>

              <div>
                <Link
                  href="contact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              features
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Security
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Convenience
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Online banking
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Competitive interest Rate
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Custom Service
                </Link>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              Support
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <Link
                  href="login"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Log in
                </Link>
              </div>

              <div>
                <Link
                  href="contact"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact us
                </Link>
              </div>

              <div>
                <Link
                  href="powerofattorney"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Power of Attorney
                </Link>
              </div>
            </nav>
          </div>

          <div>
            <div class="text-white font-bold tracking-widest uppercase mb-4">
              address
            </div>

            <nav class="flex flex-col gap-4">
              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Email: support@holmsmerchantbank.co.uk
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Phone: +44 020 8133 6340
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div class="text-gray-400 text-sm text-center border-t py-8">
          © 2023 - Holms Merchant Banks. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
