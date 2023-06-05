<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, computed, reactive, onMounted } from "vue";
import Input from "@/Components/Input.vue";

const props = defineProps({
  categories: Array,
});

const title = ref("Jo");

const onInput = (e) => {
  title.value = e.target.value;
};

const selected = ref(0);

const select = (id) => {
  selected.value = id;
};
</script>

<template>
  <AppLayout title="Add an activity" class="bg-gray-100">
    <form class="flex flex-col gap-4 text-gray-700">
      <Input @input="onInput" label="Titre" name="title" placeholder="Nom de l'activité"></Input>
      {{ title }}
      <div>
        <p class="font-bold text-gray-700 text-sm">Catégorie</p>
        <div class="flex gap-2 flex-wrap">
          <template v-for="category in categories" :key="category.id">
            <input type="radio" :id="category.id" name="category" class="hidden" />
            <label :for="category.id">
              <div
                class="bg-together-green-light px-1.5 rounded-lg text-gray-600 border border-green-600 text-sm"
                :class="selected === category.id ? 'bg-green-600 text-white' : ''"
                @click="select(category.id)"
              >
                {{ category.name }}
              </div>
            </label>
          </template>
        </div>
      </div>
      <Input label="Date de l'activité" name="date" placeholder="01/01/2023"></Input>
      <Input label="Heure de l'activité" name="time" placeholder="10:00"></Input>
      <Input label="Nombre de participants" name="participants_max" placeholder="5"></Input>
      <Input label="Adresse" name="address" placeholder="Adresse de l'activité"></Input>
      <Input label="Ville" name="city" placeholder="Ville"></Input>
      <Input label="Pays" name="country" placeholder="Pays"></Input>
    </form>
  </AppLayout>
</template>
