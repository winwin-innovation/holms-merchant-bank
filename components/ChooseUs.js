import Image from "next/image";
import { MdSecurity, MdSavings } from "react-icons/md";
import { BsFillPhoneFill, BsArrowRight } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { RiMoneyPoundCircleFill, RiCustomerService2Fill } from "react-icons/ri";

export default function ChooseUs() {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-5xl font-bold sm:text-4xl">Choose us now</h2>

          <p class="mt-4 text-gray-300 text-xl">
            Holms Merchant Bank provides tailored solutions to every client.
            This makes our services peculiar and distinct us against our
            competitors
          </p>
        </div>

        <div className="items-center flex justify-center py-10 rounded-lg">
          <Image
            src="/../public/assets/banker.jpg"
            width="700"
            height="600"
            alt="#"
            className="rounded-2xl"
          />
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <MdSecurity className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">Security</h2>

            <p class="mt-1 text-sm text-gray-300">
              Our bank uses advanced security measures to protect our clients'
              personal and financial information.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <BsFillPhoneFill className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">Convenience</h2>

            <p class="mt-1 text-sm text-gray-300">
              Our website is designed to be user-friendly and easy to navigate,
              allowing clients to manage their accounts and conduct transactions
              quickly and efficiently.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <CgWebsite className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">Online banking</h2>

            <p class="mt-1 text-sm text-gray-300">
              Our online banking platform allows clients to view account
              balances, transaction history, and manage their accounts from the
              comfort of their own home or office.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <RiMoneyPoundCircleFill className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">
              Competitive interest rates
            </h2>

            <p class="mt-1 text-sm text-gray-300">
              We offer competitive interest rates on savings and investment
              accounts to help our clients grow their money.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <MdSavings className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">
              {" "}
              Financial products and services
            </h2>

            <p class="mt-1 text-sm text-gray-300">
              Our bank offers a variety of financial products and services,
              including checking and savings accounts, credit cards, and
              investment options.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8  transition hover:border-indigo-500/10 hover:shadow-indigo-500/10 shadow-lg"
            href="/services/digital-campaigns"
          >
            <RiCustomerService2Fill className="text-3xl text-indigo-500" />

            <h2 class="mt-4 text-xl font-bold text-white">
              Personalized customer service
            </h2>

            <p class="mt-1 text-sm text-gray-300">
              We provide personalized service to our clients, offering support
              and guidance to help them make informed financial decisions.
            </p>
          </a>
        </div>

        <div class="mt-12 text-center">
          <a
            href="#"
            class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-indigo-500"
          >
            <span class="text-sm font-medium"> Get Started </span>

            <BsArrowRight className="text-2xl text-white ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
