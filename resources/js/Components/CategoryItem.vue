<script setup>
defineProps({
  id: Number,
  name: String,
  photo: String,
});
</script>

<template>
  <li class="flex-shrink-0 w-16 mr-3">
    <a href="#" class="rounded-full shadow-lg bg-slate-900"
      ><img :src="photo" alt="Image 1" class="rounded-full shadow-lg"
    /></a>
    <p class="text-center mt-2">{{ name }}</p>
  </li>
</template>