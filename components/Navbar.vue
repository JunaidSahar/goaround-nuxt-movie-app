<template>
  <nav
    class="sticky inset-0 py-5 z-10 block h-max w-full max-w-full backdrop-blur-2xl backdrop-saturate-200"
  >
    <div class="flex items-center text-gray-900">
      <NuxtLink to="/" class="mr-4">
        <img src="/logo.png" />
      </NuxtLink>
      <ul class="ml-auto mr-8 hidden items-center gap-6 lg:flex">
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
        class="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button"
        data-ripple-light="true"
      >
        <span>Buy Now</span>
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
          class="mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          <span>Buy Now</span>
        </button>
      </ul>
    </div>
  </nav>
</template>
