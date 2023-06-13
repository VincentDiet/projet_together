<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
import CardList from "@/Components/CardList.vue";
import CategoryList from "@/Components/CategoryList.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useActivityStore } from "@/stores/activityStore.js";
import { useLocationStore } from "@/stores/locationStore.js";
import { getFormatedDate } from "@/helpers.js";
import StarRating from "vue-star-rating";
import Loader from "@/Components/Loader.vue";

const loader = ref(true);

const locationStore = useLocationStore();
const coords = ref({ latitude: null, longitude: null });
onMounted(async () => {
  await locationStore.fetchCoords();
  coords.value.latitude = locationStore.coords.latitude;
  coords.value.longitude = locationStore.coords.longitude;
  loader.value = false;
});

const props = defineProps({
  activity: Object,
});

const renderImage = computed(() => {
  if (props.activity.images.length === 0) {
    return "https://via.placeholder.com/400";
  } else {
    return props.activity.images[0].url;
  }
});

const date = computed(() => {
  return getFormatedDate(props.activity.start_datetime, "DD MMMM");
});

const dateTime = computed(() => {
  return getFormatedDate(props.activity.start_datetime, "DD MMMM, à HH[h]MM");
});

const getDistance = computed(() => {
  const earthRadius = 6371; // Rayon moyen de la Terre en kilomètres

  // Convertir les degrés en radians
  const userLatRad = Number(coords.value.latitude) * (Math.PI / 180);
  const userLonRad = Number(coords.value.longitude) * (Math.PI / 180);
  const activityLatRad = Number(props.activity.latitude) * (Math.PI / 180);
  const activityLonRad = Number(props.activity.longitude) * (Math.PI / 180);

  // Calcul des différences de latitude et de longitude
  const deltaLat = activityLatRad - userLatRad;
  const deltaLon = activityLonRad - userLonRad;

  // Formule de la distance entre deux points sur une sphère
  const distance =
    2 *
    earthRadius *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(deltaLat / 2), 2) +
          Math.cos(userLatRad) *
            Math.cos(activityLatRad) *
            Math.pow(Math.sin(deltaLon / 2), 2)
      )
    );
  2 *
    earthRadius *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(deltaLat / 2), 2) +
          Math.cos(userLatRad) *
            Math.cos(activityLatRad) *
            Math.pow(Math.sin(deltaLon / 2), 2)
      )
    );
  return distance.toFixed(1);
});

const rating = computed(() => {
  const notes = props.activity.author.activities.flatMap((activity) =>
    activity.participations
      .filter((participation) => participation.organizator_note)
      .map((participation) => participation.organizator_note)
  );

  const average = notes.length
    ? notes.reduce((a, b) => a + b) / notes.length
    : 0;

  return average;
});
</script>

<template>
  <AppLayout
    :title="activity.title"
    class="bg-gradient-to-b from-together-cyan-light to-together-cyan-dark"
  >
    <template v-if="loader">
      <div
        class="fixed w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-together-cyan-light to-together-cyan-dark z-50"
      >
        <Loader></Loader>
      </div>
    </template>
    <section class="relative -mx-8 -mt-10 bg-black h-96 w-screen">
      <div
        class="z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"
      >
        <div>
          <a :href="route('dashboard')"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-white"
              viewBox="0 0 24 24"
            >
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
      <div class="absolute z-10 bottom-0 mx-6 my-4">
        <h1 class="font-bold text-xl pl-2 mb-1">{{ activity.title }}</h1>
        <div
          class="py-1 px-2 bg-white text-together-green font-bold w-auto rounded-lg text-sm inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 mr-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
            />
          </svg>
          {{ activity.city }}, à {{ getDistance }} Km
        </div>
      </div>
      <img
        :src="renderImage"
        alt=""
        class="absolute object-cover h-96 w-screen"
      />
    </section>
    <div
      class="w-screen h-16 bg-together-blue -mx-8 px-8 flex items-center justify-between"
    >
      <div class="capitalize font-bold">{{ date }}</div>
      <div
        class="font-bold text-together-blue bg-white py-0.5 px-3 rounded-lg text-sm"
      >
        {{ activity.category.name }}
      </div>
    </div>
    <section class="mt-12">
      <h2 class="text-xl font-bold">{{ activity.title }}</h2>
      <p class="py-4">{{ dateTime }}</p>
      <p>{{ activity.description }}</p>
      <div class="flex items-center text-sm mt-10 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mr-2 text-together-green"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
          />
        </svg>
        <div>
          <p>{{ activity.adress }}</p>
          <p>{{ activity.city }}</p>
        </div>
      </div>
      <div
        class="w-full h-36 bg-white flex items-center justify-center text-gray-900 rounded-xl uppercase"
      >
        Map here
      </div>

      <section class="my-12">
        <p>Organisé par :</p>

        <img
          :src="activity.author.profile_photo_path"
          alt=""
          class="rounded-full w-14 h-14 ml-2 m-4 object-cover"
        />
        <span class="font-bold"
          >{{ activity.author.firstname }} {{ activity.author.lastname }}</span
        >
        <StarRating
          :rating="rating"
          :star-size="15"
          :show-rating="false"
        ></StarRating>
      </section>
      <section>
        {{ activity.participations.length }}/{{ activity.max_participants }}
        participants
        <div class="flex flex-wrap">
          <template
            v-for="participation of activity.participations"
            :key="participation.id"
          >
            <img
              :src="participation.participant.profile_photo_path"
              alt=""
              class="rounded-full w-10 h-10 m-2 shadow-lg object-cover"
            />
          </template>
        </div>
      </section>

      <div
        class="bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8 inline-block mt-8"
      >
        S'inscrire
      </div>
    </section>
  </AppLayout>
</template>
