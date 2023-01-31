import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";

export default function AccountTransaction() {
  return (
    <div class="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
      <div class="relative flex flex-col h-full min-w-0 mb-6 break-words bg-grey-200 border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border bg-white">
        <div class="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 md:w-1/2 md:flex-none">
              <h6 class="mb-0 text-slate-700">Account Transactions</h6>
            </div>
          </div>
        </div>
        <div class="flex-auto p-4 pt-6">
          <h6 class="mb-4 text-xs font-bold leading-tight uppercase  text-slate-500">
            Newest
          </h6>
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                  <BsArrowDownCircle className="text-2xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                    Withdraw
                  </h6>
                  <span class="text-xs leading-tight text-slate-700">
                    28 January 2008, at 12:30 PM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                  - £ 271,500
                </p>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                  <BsArrowDownCircle className="text-2xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal text-slate-700">
                    Withdraw
                  </h6>
                  <span class="text-xs leading-tight text-slate-700">
                    11 January 2008, at 04:36 PM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                  - £ 90,300
                </p>
              </div>
            </li>
          </ul>
          <h6 class="my-4 text-xs font-bold leading-tight uppercase  text-slate-500">
            Previous
          </h6>
          <ul class="flex flex-col pl-0 mb-0 rounded-lg">
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                  <BsArrowUpCircle className="text-3xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                    Direct Deposit
                  </h6>
                  <span class="text-xs leading-tight">
                    16 September 2007, at 13:45 PM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                  + £ 700,050
                </p>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                  <BsArrowUpCircle className="text-3xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                    Direct Deposit
                  </h6>
                  <span class="text-xs leading-tight ">
                    11 February 2007, at 12:30 PM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                  + £ 1,300,000
                </p>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                  <BsArrowDownCircle className="text-2xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                    Withdrawn
                  </h6>
                  <span class="text-xs leading-tight text-slate-700">
                    01 December 2006, at 08:30 AM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                  - £ 297,500
                </p>
              </div>
            </li>
            <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
              <div class="flex items-center">
                <button class="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center  border-solid border-green-300 border-transparent bg-transparent text-center align-middle font-bold uppercase text-green-200 transition-all hover:opacity-75">
                  <BsArrowUpCircle className="text-3xl" />
                </button>
                <div class="flex flex-col">
                  <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                    Deposit
                  </h6>
                  <span class="text-xs leading-tight text-slate-700">
                    26 April 2006, at 03:15 AM
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center">
                <p class="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                  + £ 297,500
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
