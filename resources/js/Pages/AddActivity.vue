<script setup>
import AppLayout from "@/Layouts/AppLayout_new.vue";
import { ref, computed, reactive, onMounted } from "vue";
import Input from "@/Components/Input.vue";
import { useActivityStore } from "@/stores/activityStore.js";

const props = defineProps({
  categories: Array,
  user: Object,
});

const activityStore = useActivityStore();

const formData = reactive({
  author_id: props.user.id,
});

const onInput = (e) => {
  formData[e.target.name] = e.target.value;
};

const select = (id) => {
  formData.category_id = id;
};

const submitForm = async (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.disabled = true;
  await activityStore.addActivities(formData);
  e.target.disabled = false;
};
</script>

<template>
  <AppLayout title="Add an activity" class="bg-gray-100">
    <section class="relative -mx-8 -mt-10 h-16 bg-black/25 w-screen">
      <div
        class="z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"
      >
        <div class="">
          <a :href="route('dashboard')"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-white"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"
              />
            </svg>
          </a>
        </div>
        <div class="flex items-center">
          <div class="bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"
              />
            </svg>
          </div>
          <div class="bg-white p-2 rounded-full m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <form class="flex flex-col gap-4 text-gray-700 pt-8">
      <div class="h-96 overflow-hidden">
        <img
          :src="formData.photo"
          alt=""
          class="object-cover h-96"
          :class="!formData.photo ? 'hidden' : ''"
        />
        <img
          src="https://www.likeminds.fr/wp-content/uploads/2015/12/Point-dinterrogation-Gris-1.png"
          alt=""
          class="object-cover h-96"
        />
      </div>
      <Input
        @input="onInput"
        label="Image URL"
        name="photo"
        placeholder="url"
      ></Input>
      <Input
        @input="onInput"
        label="Titre"
        name="title"
        placeholder="Nom de l'activité"
      ></Input>
      <div>
        <p class="font-bold text-gray-700 text-sm">Catégorie</p>
        <div class="flex gap-2 flex-wrap">
          <template v-for="category in categories" :key="category.id">
            <input
              type="radio"
              :id="category.id"
              name="category"
              class="hidden"
            />
            <label :for="category.id">
              <div
                class="bg-together-green-light px-1.5 rounded-lg text-gray-600 border border-green-600 text-sm"
                :class="
                  formData.category_id === category.id
                    ? 'bg-green-500 text-white'
                    : ''
                "
                @click="select(category.id)"
              >
                {{ category.name }}
              </div>
            </label>
          </template>
        </div>
      </div>
      <Input
        @input="onInput"
        label="Date de l'activité"
        name="date"
        placeholder="01/01/2023"
      ></Input>
      <Input
        @input="onInput"
        label="Heure de l'activité"
        name="time"
        placeholder="10:00"
      ></Input>
      <Input
        @input="onInput"
        label="Durée de l'activité"
        name="duration"
        placeholder="1"
      ></Input>
      <Input
        @input="onInput"
        label="Nombre de participants"
        name="max_participants"
        placeholder="5"
      ></Input>
      <Input
        @input="onInput"
        label="Adresse"
        name="adress"
        placeholder="Adresse de l'activité"
      ></Input>
      <Input
        @input="onInput"
        label="Ville"
        name="city"
        placeholder="Ville"
      ></Input>
      <Input
        @input="onInput"
        label="Pays"
        name="country"
        placeholder="Pays"
      ></Input>
      <label class="block font-medium text-sm text-gray-700" :for="name">
        <p class="font-bold">{{ label }}</p>
        <p class="font-bold">Description</p>
        <div
          class="flex flex-row justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light"
        >
          <textarea
            v-model="formData.description"
            name="descrition"
            placeholder="Description"
            class="p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0"
            rows="7"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 mx-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"
            />
          </svg>
        </div>
      </label>
      <input
        type="button"
        value="Envoyer"
        class="bg-green-500 py-2 font-bold text-white rounded-full my-4 disabled:bg-gray-300 disabled:text-gray-200"
        @click="submitForm"
      />
    </form>
  </AppLayout>
</template>
