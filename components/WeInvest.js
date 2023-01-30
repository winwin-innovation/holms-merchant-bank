import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function WeInvest() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            width={500}
            height={500}
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="/../public/assets/feature-2.png"
            alt="feature image 2"
          />
          <div className=" sm:text-lg text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional banking queue system. Accelerate critical
              transactions, eliminate toil, and make transactions with ease.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <BsFillCheckCircleFill className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                <span className="text-base font-medium leading-tight text-white">
                  Dynamic user interface
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                <span className="text-base font-medium leading-tight text-white">
                  Accesible all over the globe
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Quick transactions
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Used by many satisfied clients
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional banking queue system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
