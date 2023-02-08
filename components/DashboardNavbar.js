import { useState } from "react";
import Link from "next/link";
import SignOutButton from "../components/SignOutButton";
import { AiFillCreditCard } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Profile from "../components/Profile";

export default function DashboardNavbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header aria-label="Site Header" className=" bg-gray-800 w-full py-2">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12 flex items-center justify-center">
            <Profile />
            <Link class="block text-white" href="/">
              <span class="text-xl uppercase font-extrabold ">Welcome</span>
            </Link>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Site Nav">
              <ul class="flex items-center gap-6 text-sm">
                <>
                  <Link
                    class="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="dashboard"
                  >
                    <MdComputer class="mr-2" />
                    Dashboard
                  </Link>
                </>

                <>
                  <Link
                    class="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="transfer"
                  >
                    <BiTransfer class="mr-2" />
                    Transfer
                  </Link>
                </>

                <>
                  <Link
                    class="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
                    href="activity"
                  >
                    <FiActivity class="mr-2" />
                    Activity
                  </Link>
                </>

                <>
                  <Link
                    class="text-white text-lg font-medium transition hover:text-gray-300/75 flex items-center"
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
      </div>
    </header>
  );
}
