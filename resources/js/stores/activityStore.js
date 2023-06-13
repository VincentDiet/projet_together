import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import moment from "moment";
import { useLocationStore } from "@/stores/locationStore.js";

export const useActivityStore = defineStore("activity", () => {
    const activities = ref([]);

    const fetchActivities = async () => {
        const locationStore = useLocationStore();
        const { latitude, longitude } = locationStore.coords;
        const data = await axios.get(`/api/activities/`, {
            params: { longitude, latitude },
        });
        activities.value = data.data;
    };

    const getActivitiesSortedByDistance = () => {
        return activities.value.slice().sort((a, b) => a.distance - b.distance);
    };
    const getActivitiesSortedByDate = () => {
        return activities.value
            .slice()
            .sort(
                (a, b) =>
                    new Date(a.start_datetime) - new Date(b.start_datetime)
            );
    };

    const addActivities = async (data) => {
        // Calcul de la longitude et latitude
        const coords = await axios.get(`https://geocode.maps.co/search`, {
            params: {
                q: data.adress + " " + data.city + " " + data.country,
            },
        });
        data.longitude = coords.data[0].lon;
        data.latitude = coords.data[0].lat;

        // Convertion en DateTime SQL
        const dateTime = data.date + " " + data.time;
        data.start_datetime = moment(dateTime, "DD/MM/YYYY HH:mm").format(
            "YYYY-MM-DD HH:mm:ss"
        );

        const test = await axios.post(`/api/activities`, {
            data,
        });

        console.log(test);
    };

    return {
        fetchActivities,
        getActivitiesSortedByDistance,
        getActivitiesSortedByDate,
        addActivities,
    };
});
