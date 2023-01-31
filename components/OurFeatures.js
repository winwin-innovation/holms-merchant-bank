import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";

export default function OurFeatures() {
  return (
    <div class="relative p-4 bg-gray-800 pb-20">
      <div className="py-5">
        <h1 className="text-white text-5xl text-center font-bold">
          Our Features
        </h1>
        <p className="text-gray-300 text-xl text-center py-3">
          Holms Merchant Bank brings to you the simplest ways to bank
        </p>
      </div>
      <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="lg:col-start-2 md:pl-20">
          <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
            Manage everything
          </h4>
          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <AiOutlineCheck className="text-2xl" />
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg font-bold leading-6 text-white">
                    Online Banking
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-300">
                    Online banking is a user-friendly platform that allows you
                    to access
                    <br /> and transact on your accounts online
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <AiOutlineCheck className="text-2xl" />
                  </div>
                </div>
                <div class="ml-4 hover:text-white">
                  <h5 class="text-lg font-bold leading-6 text-white">
                    ATM Banking
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-300">
                    Our ATMs allow you to access your funds, transfer and make
                    cash <br /> deposits into your accounts
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <AiOutlineCheck className="text-2xl" />
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg font-bold leading-6 text-white">
                    Instant Cash
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-300">
                    Send cash quickly and safely to anyone in just click.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-5 lg:col-start-1 hover:scale-110 transition-transform duration-200 ease-in-out">
          <Image
            src="https://images.unsplash.com/photo-1533421644343-45b606745fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="banker"
            class="relative w-auto mx-auto shadow-lg rounded-2xl"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
