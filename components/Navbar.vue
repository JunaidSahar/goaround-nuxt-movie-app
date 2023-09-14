<template>
  <nav
    class="sticky bg-black inset-0 py-6 px-6 z-10 block h-max w-full border-b"
  >
    <div class="flex items-center container mx-auto gap-4 text-white">
      <NuxtLink to="/" class="mr-4"> Go Around </NuxtLink>

      <form @submit.prevent="getUserInput" class="flex-1">
        <div class="relative max-w-xl">
          <div
            class="absolute inset-y-0 left-0 flex min-w-fit items-center pl-3 pointer-events-none"
          >
            <Icon name="octicon:search-16" />
          </div>
          <input
            type="search"
            v-model="searchValue"
            class="block w-full px-4 py-2 pl-10 text-sm text-slate-200 bg-transparent border focus:ring-0 focus:outline-0"
            placeholder="Search Movie, Series etc..."
            required
          />
          <button
            type="submit"
            class="font-semibold absolute right-0 top-0 h-full bg-white text-black focus:outline-none text-sm px-6 py-1.5"
          >
            Search
          </button>
        </div>
      </form>

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

<script setup>
const searchValue = ref("");
function getUserInput() {
  useRouter().push(`/search-results?q=${searchValue.value}`);
}
</script>
