import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("category", () => {
    const categories = ref();

    const fetchCategories = async () => {
        try {
            const data = await axios.get(`/api/categories`);
            categories.value = data.data;
        } catch (error) {
            return error;
        }
    };

    return { fetchCategories, categories };
});
