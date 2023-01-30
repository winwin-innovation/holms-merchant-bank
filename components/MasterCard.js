export default function MasterCard() {
  return (
    <div class="flex-auto p-4">
      <div class="flex flex-wrap -mx-3">
        <div class="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
          <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-700 bg-clip-border">
            <img
              class="mb-0 mr-4 w-1/10"
              priority
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358"
              alt="mastercard"
              width="50"
              height="50"
            />
            <h6 class="mb-0 text-gray-700 font-bold text-lg">
              **** **** **** 7852
            </h6>
            <div
              data-target="tooltip"
              class="px-2 py-1 text-sm text-white bg-gray-900 rounded-lg"
            >
              Card 1
              <div
                class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                data-popper-arrow
              ></div>
            </div>
          </div>
        </div>
        <div class="max-w-full px-3 md:w-1/2 md:flex-none">
          <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-700 bg-clip-border text-gray-700 text-lg">
            <img
              class="mb-0 mr-4 w-1/10"
              priority
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358"
              alt="mastercard"
              width="50"
              height="50"
            />
            <h6 class="mb-0 font-bold">**** **** **** 5248</h6>
            <div
              data-target="tooltip"
              class="px-2 py-1 text-sm text-white bg-gray-900 rounded-lg"
            >
              Card 2
              <div
                class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                data-popper-arrow
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
