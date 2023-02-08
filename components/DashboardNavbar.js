import { useState } from "react";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";
import { AiFillCreditCard } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

export default function DashboardNavbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header aria-label="Site Header" className=" bg-gray-800 w-full py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-white" href="/">
              <span className="text-xl uppercase font-extrabold">Welcome </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <>
                  <Link
                    className="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="/"
                  >
                    <MdComputer class="mr-2" />
                    Dashboard
                  </Link>
                </>

                <>
                  <Link
                    className="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="transfer"
                  >
                    <BiTransfer class="mr-2" />
                    Transfer
                  </Link>
                </>

                <>
                  <Link
                    className="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="activity"
                  >
                    <FiActivity class="mr-2" />
                    Activity
                  </Link>
                </>

                <>
                  <Link
                    className="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="settings"
                  >
                    <AiFillCreditCard class="mr-2" />
                    Change CVV
                  </Link>
                </>
              </ul>
            </nav>
          </div>

          <div>
            <SignOutButton />
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
              <Link href="services"> Services</Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full p-4">
              <Link href="testimonials"> Testimonials</Link>
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
