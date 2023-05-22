<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
import CardList from "@/Components/CardList.vue";
import CategoryList from "@/Components/CategoryList.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useActivityStore } from "@/stores/activityStore.js";
import { useLocationStore } from "@/stores/locationStore.js";

const locationStore = useLocationStore();
const coords = ref({ latitude: null, longitude: null });
onMounted(async () => {
  await locationStore.fetchCoords();
  coords.value.latitude = locationStore.coords.latitude;
  coords.value.longitude = locationStore.coords.longitude;
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
    2 * earthRadius * Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(userLatRad) * Math.cos(activityLatRad) * Math.pow(Math.sin(deltaLon / 2), 2)));
  return distance.toFixed(1);
});
</script>

<template>
  <AppLayout title="Dashboard">
    <section class="relative -mx-8 -mt-10 bg-black h-96 w-screen">
      <div class="z-10 w-screen absolute h-12 opacity-25 bg-black flex"></div>
      <div class="absolute z-10 bottom-0 mx-6 my-4">
        <h1 class="font-bold text-xl pl-2 mb-1">{{ activity.title }}</h1>
        <div class="py-1 px-2 bg-white text-together-green font-bold w-auto rounded-lg text-xs inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
            /></svg
          >{{ activity.city }}, à {{ getDistance }} Km
        </div>
      </div>
      <img :src="renderImage" alt="" class="absolute object-cover h-96 w-screen" />
    </section>
  </AppLayout>
</template>
