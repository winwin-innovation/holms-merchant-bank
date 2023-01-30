import Navbar from "../../components/Navbar";
import { AiOutlineCheck } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import AddsOn from "../../components/AddsOn";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <Navbar />
      <div class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center h-screen">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h2 class="text-7xl font-bold text-white md:text-3xl">
              Our Services
            </h2>
            <h2 class="text-9xl font-bold text-white md:text-3xl">
              ranges from the below.
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              We provide the below professional services and provide tailored
              solutions to our customer&quot;s needs
            </p>

            <div class="mt-4 md:mt-8">
              <Link
                href="login"
                class="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt="creditcards"
          src="/../public/img07-cards.jpeg"
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          height={900}
          width={900}
        />
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12 h-screen">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our competitive advantage
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Bank Accounts
                </h3>
                <div class="text-gray-500 ">
                  <p>See which accounts best suits you. Be it</p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Savings Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Current Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Fixed Deposit Account
                  </p>
                </div>
              </div>
            </div>

            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Credit Cards
                </h3>
                <div class="text-gray-500">
                  <p>Explore Our Wide Range of Credit Cards</p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Gold Visa Credit Card
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Silver Visa Credit Card
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Platinum Visa Credit Card
                  </p>
                </div>
              </div>
            </div>

            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Savings and Investments
                </h3>
                <div class="text-gray-500">
                  <p>Explore Our Wide Range of Credit Cards</p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Savings Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Fixed Deposit Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Bonus Investment Account
                  </p>
                </div>
              </div>
            </div>

            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Prepaid Cards
                </h3>
                <div class="text-gray-500">
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Silver Visa Credit Card
                  </p>
                </div>
              </div>
            </div>

            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Diaspora Banking
                </h3>
                <div class="text-gray-500">
                  <p>Explore Our Wide Range of Credit Cards</p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Diaspora Savings Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Diaspora Fixed Deposit Account
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Diaspora Bonus Investment Account
                  </p>
                </div>
              </div>
            </div>

            <div class="flex bg-gray-50 border rounded-lg divide-x">
              <div class="flex items-center text-indigo-500 p-2 md:p-4">
                <AiOutlineCheck className="w-6 md:w-8 h-6 md:h-8" />
              </div>

              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-semibold mb-2">
                  Electronic Banking
                </h3>
                <div class="text-gray-500">
                  <p>Explore Our Wide Range of Credit Cards</p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    Online Banking
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    USSD Mobile Banking
                  </p>
                  <p className="inline-bloc items-center  flex">
                    <GoPrimitiveDot className="mr-4" />
                    ATM Banking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddsOn />
    </div>
  );
}
