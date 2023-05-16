<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
import Card from "@/Components/Card.vue";
</script>

<template>
  <AppLayout title="Dashboard">
    <h1 class="text-4xl font-extrabold">Together</h1>

    <!-- // RECHERCHE -->
    <section class="flex justify-between items-center my-2">
      <div class="relative my-8 w-3/4">
        <input
          type="text"
          placeholder="Chercher des activités"
          class="pl-8 pr-4 py-1 w-full rounded-xl bg-together-blue text-slate-300 border-0 outline-none font-bold placeholder-together-cyan-light"
        />
        <div
          class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-slate-300"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
            />
          </svg>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M14 13v7h-4v-7L2.95 4h18.1L14 13Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.113T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.188.575t-.512.375L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Z"
        />
      </svg>
    </section>

    <!-- // CATEGORIES -->
    <section class="relative">
      <div class="flex overflow-x-auto -mx-8 px-8 text-xs">
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 1"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 1</p>
        </div>
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 2"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 2</p>
        </div>
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 3"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 3</p>
        </div>
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 4"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 4</p>
        </div>
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 5"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 5</p>
        </div>
        <div class="flex-shrink-0 w-1/6 mr-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Image 5"
            class="rounded-full shadow-lg"
          />
          <p class="text-center mt-2">Élément 5</p>
        </div>
      </div>
      <div
        class="absolute -right-7 top-2 text-slate-900 bg-gray-50 p-1 rounded-full opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"
          />
        </svg>
      </div>
    </section>

    <!-- ACTIVITE A PROXIMITE -->
    <section class="my-12">
      <h2 class="mb-6 font-bold text-lg">Activités à proximité</h2>
      <div class="relative">
        <Card />
      </div>
    </section>
  </AppLayout>
</template>
