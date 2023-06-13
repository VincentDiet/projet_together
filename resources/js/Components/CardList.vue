<script setup>
import CardItem from "@/Components/CardItem.vue";

defineProps({
  activities: Array,
});
</script>
<template>
  <ul class="flex overflow-x-auto scrollbar-none -mx-8 px-8 text-xs">
    <template v-for="activity of activities" :key="activity.id">
      <CardItem :activity="activity" />
    </template>
  </ul>

  <div
    class="absolute -right-7 top-28 text-slate-900 bg-gray-50 p-1 rounded-full opacity-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-16 w-16"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"
      />
    </svg>
  </div>
</template>
