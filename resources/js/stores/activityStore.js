import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
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
        const test2 = await axios.get(
            `http://api.positionstack.com/v1/forward`,
            {
                params: {
                    access_key: "bdd5cfd74b5f9ea8f10dfba7e953249a",
                    query: "1600 Pennsylvania Ave NW, Washington DC",
                },
            }
        );
        console.log(test2);
        // const test = await axios.post(`/api/activities`, {
        //     data,
        // });
        // console.log(test);
    };

    return {
        fetchActivities,
        getActivitiesSortedByDistance,
        getActivitiesSortedByDate,
        addActivities,
    };
});
