<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, computed, reactive, onMounted } from "vue";
import Input from "@/Components/Input.vue";

const props = defineProps({
  categories: Array,
});
</script>

<template>
  <AppLayout title="Add an activity">
    <Input value="test"></Input>
  </AppLayout>
</template>
