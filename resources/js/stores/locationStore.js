import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useLocationStore = defineStore("location", () => {
    const coords = ref({ latitude: null, longitude: null });

    const fetchCoords = async () => {
        await new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition((pos) => {
                coords.value.latitude = pos.coords.latitude;
                coords.value.longitude = pos.coords.longitude;
                resolve();
            })
        );
    };

    return { fetchCoords, coords };
});
