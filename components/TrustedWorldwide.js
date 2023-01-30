import { BsArrowRight, BsFlagFill } from "react-icons/bs";
import { FaGlobeAfrica, FaUsers } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export default function TrustedWorldwide() {
  return (
    <section className=" bg-gray-900 pb-20">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-2xl font-medium  dark:text-indigo-500">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight  md:text-3xl text-white">
            Trusted by over 600 thousand users and 3,000 teams
          </h2>
          <p className="font-light sm:text-xl text-gray-300">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your assets.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-700">
            <div>
              <a
                href="testimonials"
                className="inline-flex items-center text-base font-medium   text-indigo-500 hover:text-indigo-700"
              >
                Explore testimonies from our clients
                <BsArrowRight className="text-xl ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <MdSecurity className="w-10 h-10 mb-2 text-indigo-500 md:w-12 md:h-12" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              99.99% Security
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Work with Holms, with zero security breach
            </p>
          </div>
          <div>
            <FaGlobeAfrica className="w-10 h-10 mb-2 text-indigo-500 md:w-12 md:h-12" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              600M+ Users
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Trusted by over 600 milion users around the world
            </p>
          </div>
          <div>
            <BsFlagFill className="w-10 h-10 mb-2 text-indigo-500 md:w-12 md:h-12" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              25+ countries
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Have used our services to tailor their needs
            </p>
          </div>
          <div>
            <FaUsers className="w-10 h-10 mb-2 text-indigo-500 md:w-12 md:h-12" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              5+ Million
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Transactions per day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
