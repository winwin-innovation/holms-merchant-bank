import { BsFillAwardFill } from "react-icons/bs";

export default function Testimonials() {
  return (
    <section class="bg-gray-50 dark:bg-gray-800 py-24">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-12 lg:pb-8 lg:px-6">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Read trusted reviews from our customers
          </h2>

          <p class="text-gring-offset-warm-gray-500 mx-auto my-6 max-w-lg text-gray-300">
            These are testimonies from our satisfied clients who have worked
            with us. In time we rise together.
          </p>
        </div>
        <figure class="max-w-screen-md mx-auto">
          <BsFillAwardFill className="h-12 mx-auto mb-3 text-gray-400 text-3xl" />
          <blockquote>
            <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              "I love you guys at Holms. Everything is authentic. Thank me for
              trusting you guys very much."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img
              class="w-6 h-6 rounded-full"
              src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="profile picture"
            />
            <div class="flex items-center divide-x-2 divide-gray-500 ">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                Sephina Blake
              </div>
              <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                Savings Account Holder
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-6 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
          <BsFillAwardFill className="h-12 mx-auto mb-3 text-gray-400 text-3xl" />
          <blockquote>
            <p class="text-xl font-medium  md:text-2xl text-white">
              "Their services and designs are so peculiar and unique. I have the
              best banking experience with Holms Merchant Bank"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img
              class="w-6 h-6 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="profile picture"
            />
            <div class="flex items-center divide-x-2 divide-gray-500 ">
              <div class="pr-3 font-medium text-white">Samuel Blankson</div>
              <div class="pl-3 text-sm font-light text-gray-400 ">
                Current Account Holder
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="py-6">
          <a href="testimonials">
            <button className="bg-indigo-500 px-8 rounded-xl py-2 text-white">
              Read more
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
