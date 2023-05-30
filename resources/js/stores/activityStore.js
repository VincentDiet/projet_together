import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useLocationStore } from "@/stores/locationStore.js";

export const useActivityStore = defineStore("activity", () => {
    const activities = ref([]);

    const fetchActivities = async () => {
        try {
            const locationStore = useLocationStore();
            const { latitude, longitude } = locationStore.coords;
            const data = await axios.get(`/api/activities/`, {
                params: { longitude, latitude },
            });
            activities.value = data.data;
        } catch (error) {
            return error;
        }
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

    return {
        fetchActivities,
        getActivitiesSortedByDistance,
        getActivitiesSortedByDate,
    };
});
