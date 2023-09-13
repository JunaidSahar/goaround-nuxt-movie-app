<template>
  <nav
    class="inset-0 py-6 px-6 z-10 block h-max w-full"
  >
    <div class="flex items-center container mx-auto text-white">
      <NuxtLink to="/" class="mr-4">
        Go Around
      </NuxtLink>
      <ul class="ml-auto mr-8 hidden items-center gap-6 lg:flex text-white">
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Pages </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Account </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Blocks </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Docs </a>
        </li>
      </ul>
      <button
        class="px-6 py-2 text-bgDarkColor font-semibold"
        style="background: linear-gradient(229deg, #edc9f5 3.3%, #217ace 96.7%)"
      >
        Sign in
      </button>
      <button
        class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        data-collapse-target="sticky-navar"
      >
        <span
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div
      class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
      data-collapse="sticky-navar"
    >
      <ul class="mt-2 mb-4 flex flex-col gap-2 pb-2">
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Pages </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Account </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Blocks </a>
        </li>
        <li
          class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
        >
          <a class="flex items-center" href="#"> Docs </a>
        </li>
        <button
          class="px-6 py-2"
          style="
            background: linear-gradient(229deg, #edc9f5 3.3%, #217ace 96.7%);
          "
        >
          Buy Now
        </button>
      </ul>
    </div>
  </nav>
</template>
