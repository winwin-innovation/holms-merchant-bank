export default function AddsOn() {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto w-full max-w-screen-xl px-4 py-4 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto w-full text-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-bold text-transparent sm:text-4xl ">
            Top Security
          </h1>
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-bold text-transparent sm:text-4xl">
            Guaranteed for all clients.
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Know your money is safe when making payments in-store, online or
            anywhere on this planet.
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="login"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
