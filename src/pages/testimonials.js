import Navbar from "../../components/Navbar";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <div>
      <Navbar />
      <div class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Read trusted reviews from our customers
            </h2>

            <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg text-gray-300">
              These are testimonials from the our satisfied clients who have
              worked with us. In time we rise together.
            </p>
          </div>

          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
            <div>
              <Image
                alt="Woman-testimonial"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">Sephina Blake</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Savings Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  I love you guys at Holms. Everything is authentic. Thank me
                  for trusting you guys very much.
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>

            <div>
              <Image
                alt="Woman2"
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">Julie May</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Current Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  I have the smoothiest banking experience with Holms.
                  There&rsquo;s no word worthy to be used as a praise for your
                  guys. Thank you
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>

            <div>
              <Image
                alt="man3"
                src="https://images.unsplash.com/photo-1633079527517-a43fd76cb142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">John Mosse</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Fixed Deposit Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  If there&rsquo;s another world for perfect then it is Holms.
                  The fixed deposit transformed me better version of me.
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>

            <div>
              <Image
                alt="man4"
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">Samuel Blankson</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Current Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Their services and designs are so peculiar and unique. I have
                  the best banking experience with Holms Merchant Bank.
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>

            <div>
              <Image
                alt="woman5"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">Sophie Lennon</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Savings Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Do you have doubt about banks? Guess you haven&rsquo;t saved
                  with Holms Merchant Bank yet.
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>

            <div>
              <Image
                alt="Woman6"
                src="https://images.unsplash.com/photo-1600273759837-a4d4abb62142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
                width={300}
                height={300}
              />

              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="text-lg font-bold text-gray-300">April Kissin</p>
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Current Account Holder
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  I have been working with Holms for the past years and i really
                  have the best of experience. In time do we all rise up.
                </p>

                <div class="mt-8 flex justify-center gap-0.5 text-green-500 text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
