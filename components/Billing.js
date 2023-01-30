import Image from "next/image";
import SignOutButton from "./SignOutButton";
import mastercardlogo from "../public/assets/Mastercard_2019_logo.svg";
import { AiFillCreditCard } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import Invoice from "../components/Invoice";
import AccountTransaction from "../components/AccountTransaction";
import BillInformation from "../components/BillInformation";
import PaymentMethod from "../components/PaymentMethod";
import Profile from "../components/Profile";

export default function Billing() {
  return (
    <body class="m-0 font-sans text-base antialiased font-normal bg-slate-900 leading-default  text-slate-500">
      <main class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <nav
          class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start "
          navbar-main
          navbar-scroll="false"
        >
          <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit ">
            <nav>
              <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <Profile />
                <li class="text-sm leading-normal flex items-center">
                  <MdComputer class="ml-5 mr-2 text-xl" />
                  <a href="#">
                    <h1 class="text-gray-300  font-medium text-xl">
                      Dashboard
                    </h1>
                  </a>
                </li>
                <li class="text-sm leading-normal flex items-center">
                  <AiFillCreditCard class="ml-5 mr-2 text-xl" />
                  <a href="settings">
                    <h1 class="text-gray-300  font-medium text-xl">
                      Change Card CVV
                    </h1>
                  </a>
                </li>
              </ol>
            </nav>

            <div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <div class="flex items-center md:ml-auto md:pr-4">
                <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                  <span class="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-gray-500 transition-all">
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
              <div>
                <SignOutButton />
              </div>
            </div>
          </div>
        </nav>

        <div class="w-full px-6 py-6 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 lg:w-2/3 lg:flex-none">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
                  <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                    <div class="relative overflow-hidden rounded-2xl">
                      <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 opacity-80"></span>
                      <div class="relative z-10 flex-auto p-4">
                        <i class="p-2 text-red-500 fas fa-wifi"></i>
                        <h5 class="pb-2 mt-6 mb-12 text-white">
                          4562 1122 4594 7852
                        </h5>
                        <div class="flex">
                          <div class="flex">
                            <div class="mr-6">
                              <p class="mb-0 text-sm leading-normal text-white opacity-80">
                                Card Holder
                              </p>
                              <h6 class="mb-0 text-white">Shawn G. Glaude</h6>
                            </div>

                            <div>
                              <p class="mb-0 text-sm leading-normal text-white opacity-80">
                                Expires
                              </p>
                              <h6 class="mb-0 text-white">11/26</h6>
                            </div>
                            <Image
                              class="mx-4 w-24 h-24 inset-0"
                              priority
                              src={mastercardlogo}
                              alt="mastercard"
                              width="50"
                              height="50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                  <div class="flex flex-wrap -mx-3">
                    <div class="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                      <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border items-center text-center justify-center">
                        <div class="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                          <div class="w-16 h-16 text-center flex justify-center items-center bg-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                            <AiFillCreditCard className="flex justify-center w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div class="flex-auto p-4 pt-0 text-center">
                          <h6 class="mb-0 text-center text-gray-700">
                            Balance
                          </h6>
                          <span class="text-xs leading-tight text-gray-700 opacity-80">
                            Current Account Balance
                          </span>
                          <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
                          <h5 class="mb-0 text-gray-700 font-bold text-lg">
                            £8.5 Million
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div class="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                      <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border items-center text-center justify-center">
                        <div class="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                          <div class="w-16 h-16 text-center flex justify-center items-center bg-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl ">
                            <FaPaypal className="text-white z-50 flex justify-center w-8 h-8" />
                          </div>
                        </div>
                        <div class="flex-auto p-4 pt-0 text-center">
                          <h6 class="mb-0 text-center text-gray-700">Paypal</h6>
                          <span class="text-xs leading-tight text-gray-700 opacity-80">
                            External Payment
                          </span>
                          <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent  " />
                          <h5 class="mb-0 text-gray-700 font-bold text-lg">
                            £781,255.00
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PaymentMethod />
              </div>
            </div>
            <Invoice />
          </div>

          <div class="flex flex-wrap -mx-3">
            <BillInformation />
            <AccountTransaction />
          </div>
        </div>
      </main>
    </body>
  );
}
