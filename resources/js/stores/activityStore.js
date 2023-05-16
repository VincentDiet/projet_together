import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useActivityStore = defineStore("activity", () => {
    const closeActivities = ref();

    const fetchCloseActivities = async () => {
        try {
            const data = await axios.get(`/api/activities/closest`);
            closeActivities.value = data.data;
        } catch (error) {
            return error;
        }
    };

    return { fetchCloseActivities, closeActivities };
});
