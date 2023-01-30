import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header aria-label="Site Header" className=" dark:bg-gray-800 w-full py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-white" href="/">
              <span className="text-xl uppercase font-extrabold">
                Holms Merchant Bank{" "}
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white text-md font-medium transition hover:text-gray-300/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-md font-medium transition hover:text-gray-300/75"
                    href="services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-md font-medium transition hover:text-gray-300/75"
                    href="testimonials"
                  >
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-md font-medium transition hover:text-gray-300/75"
                    href="contact"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-indigo-600 px-8 py-2.5 text-md font-medium text-white shadow hover:bg-indigo-700"
                href="login"
              >
                Login
              </Link>
            </div>

            <div className=" md:hidden" onClick={handleClick}>
              {!nav ? (
                <AiOutlineMenu className="h-5 w-5 text-white" />
              ) : (
                <AiOutlineClose className="h-5 w-5 text-white" />
              )}
            </div>
          </div>
        </div>

        <div>
          <ul
            className={
              !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 z-50"
            }
          >
            <li className="border-b-2 border-zinc-300 w-full p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full p-4 cursor-pointer">
              <Link href=""> Services</Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full p-4">
              <Link href="testomials"> Testimonials</Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full p-4">
              <Link href="contact"> Contact us</Link>
            </li>
            <li className="flex flex-col my-4">
              <Link
                className="px-8 py-3 bg-indigo-500 rounded-lg text-white"
                href="login"
              >
                <button>Log in</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
