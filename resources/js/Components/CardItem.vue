<script setup>
import { computed } from "vue";
import moment from "moment";
import "moment/dist/locale/fr";
import StarRating from "vue-star-rating";

const props = defineProps({
  activity: Object,
});

const formatedDate = computed(() => {
  const date = moment(props.activity.start_datetime);
  date.locale("fr");
  return date.format("DD MMMM");
});

const renderImage = computed(() => {
  if (props.activity.images.length === 0) {
    return "https://via.placeholder.com/400";
  } else {
    return props.activity.images[0].url;
  }
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
  <li
    class="flex-shrink-0 mr-3 w-56 max-w-sm rounded-xl overflow-hidden shadow-lg mb-4"
  >
    <!-- Partie supérieure de la carte -->
    <div class="relative">
      <!-- Image -->
      <img :src="renderImage" alt="Image" class="w-full h-32 object-cover" />
      <!-- Catégorie -->
      <div class="absolute top-3 left-3 bg-white py-1 px-2 rounded-lg">
        <span class="text-together-cyan-dark font-extrabold">{{
          activity.category.name
        }}</span>
      </div>
      <!-- Icône -->
      <div class="absolute top-3 right-3 bg-white rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-slate-900"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"
          />
        </svg>
      </div>
      <!-- Date -->
      <div class="absolute bottom-3 font-bold right-3 text-white">
        <span class="capitalize">{{ formatedDate }}</span>
      </div>
    </div>
    <!-- Partie inférieure de la carte -->
    <div class="bg-together-blue py-4 px-3">
      <!-- Titre -->
      <h2 class="text-white text-lg font-bold mb-2 truncate">
        {{ activity.title }}
      </h2>
      <!-- Icônes avec texte -->
      <ul>
        <li
          class="flex items-center flex-row text-together-green font-bold mb-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
            />
          </svg>
          {{ activity.city }}, {{ activity.distance.toFixed(1) }} Km
        </li>
        <li class="flex items-center flex-row font-bold mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
            />
          </svg>
          <span class="truncate block">{{
            activity.author.firstname + " " + activity.author.lastname
          }}</span>
          <div class="flex ml-2 mb-1 items-center block">
            <StarRating
              :rating="rating"
              :star-size="15"
              :show-rating="false"
            ></StarRating>
          </div>
        </li>
        <li class="flex items-center flex-row font-bold mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"
            />
          </svg>
          {{ activity.participations.length }}/{{ activity.max_participants }}
          Participants
        </li>
      </ul>
      <!-- Bouton -->
      <div class="flex justify-center items-center">
        <a
          :href="route('activities.show', { id: activity.id })"
          class="bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8"
        >
          Infos
        </a>
      </div>
    </div>
  </li>
</template>
