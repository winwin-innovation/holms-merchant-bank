export default function CreditCard() {
  return (
    <div class="bg-white text-gray-600">
      <div class="mx-auto container  py-8 pl-16">
        <div class="flex flex-col space-y-8 w-full px-16 max-w-xl">
          <div class="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-56 w-96 p-6 rounded-xl shadow-md">
            <div class="h-full flex flex-col justify-between">
              <div class="flex items-start justify-between space-x-4">
                <div class=" text-xl font-semibold tracking-tigh">
                  HOLMS MERCHANT BANK
                </div>

                <div class="inline-flex flex-col items-center justify-center">
                  <div class="font-semibold text-white">wallet</div>
                </div>
              </div>

              <div class="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                <div class="relative w-full h-full grid grid-cols-2 gap-1">
                  <div class="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                  <div class="border-b border-r border-gray-900 rounded-br"></div>
                  <div class="border-b border-l border-gray-900 rounded-bl"></div>
                  <div class=""></div>
                  <div class=""></div>
                  <div class="border-t border-r border-gray-900 rounded-tr"></div>
                  <div class="border-t border-l border-gray-900 rounded-tl"></div>
                </div>
              </div>

              <div class="">
                <div class="text-xs font-semibold tracking-tight">Balance</div>

                <div class="text-2xl font-semibold">£8.5 Million</div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-16 w-72 px-2 py-3 rounded-lg">
              <div class="flex-initial">
                <div class="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                  <div class="p-2">
                    <svg
                      class="h-4 w-4 text-white opacity-90"
                      width="24"
                      height="24"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="flex-1 inline-flex items-start justify-between">
                <div>
                  <h2 class="text-xs font-semibold tracking-tight">
                    Holms Loyal Credit
                  </h2>
                  <p class="text-xs text-gray-500 font-light">
                    Thanks for banking with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
