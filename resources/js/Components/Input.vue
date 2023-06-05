<script setup>
defineProps({
  name: String,
  label: String,
  placeholder: String,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="block font-medium text-sm text-gray-700" :for="name">
    <p class="font-bold">{{ label }}</p>
    <div class="flex flex-row items-center justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light">
      <input
        @input="$emit('update:modelValue', $event.target.value)"
        :name="name"
        type="text"
        :placeholder="placeholder"
        class="p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"
        />
      </svg>
    </div>
  </label>
</template>
