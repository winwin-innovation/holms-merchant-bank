import { BsFillAwardFill } from "react-icons/bs";
import Image from "next/image";

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
              &quot;I love you guys at Holms. Everything is authentic. Thank me
              for trusting you guys very much.&quot;
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <Image
              alt="woman"
              class="w-6 h-6 rounded-full"
              src="/../public/img05-girl.png"
              width={10}
              height={10}
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
              &quot;Their services and designs are so peculiar and unique. I
              have the best banking experience with Holms Merchant Bank&quot;
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <Image
              class="w-6 h-6 rounded-full"
              src="/../public/img06-man.jpg"
              width={50}
              height={50}
              alt="man-picture"
            />{" "}
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
