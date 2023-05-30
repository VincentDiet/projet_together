<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,
});
</script>

<template>
  <Head title="Welcome" />

  <div class="bg-gray-100 min-h-screen pt-8">
    <div class="flex flex-col sm:justify-center items-center sm:pt-0">
      <div class="bg-white w-full p-10 shadow-lg">
        <h1 class="text-4xl text-gray-400 font-bold text-center pb-10">Together</h1>
        <div v-if="canLogin" class="text-center z-10">
          <Link
            v-if="$page.props.auth.user"
            :href="route('dashboard')"
            class="font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
            >DASHBOARD</Link
          >

          <template v-else>
            <Link
              :href="route('login')"
              class="font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
              >LOG IN</Link
            >

            <Link
              v-if="canRegister"
              :href="route('register')"
              class="font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
              >REGISTER</Link
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-dots-darker {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
  .dark\:bg-dots-lighter {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
  }
}
</style>
