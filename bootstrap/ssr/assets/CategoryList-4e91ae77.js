import { useSSRContext, computed, mergeProps, unref, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import moment from "moment";
import "moment/dist/locale/fr.js";
import StarRating from "vue-star-rating";
import { defineStore } from "pinia";
import axios from "axios";
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CardItem",
  __ssrInlineRender: true,
  props: {
    activity: Object
  },
  setup(__props) {
    const props = __props;
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
      const notes = props.activity.author.activities.flatMap(
        (activity) => activity.participations.filter((participation) => participation.organizator_note).map((participation) => participation.organizator_note)
      );
      const average = notes.length ? notes.reduce((a, b) => a + b) / notes.length : 0;
      return average;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "flex-shrink-0 mr-3 w-56 max-w-sm rounded-xl overflow-hidden shadow-lg mb-4" }, _attrs))}><div class="relative"><img${ssrRenderAttr("src", renderImage.value)} alt="Image" class="w-full h-32 object-cover"><div class="absolute top-3 left-3 bg-white py-1 px-2 rounded-lg"><span class="text-together-cyan-dark font-extrabold">${ssrInterpolate(__props.activity.category.name)}</span></div><div class="absolute top-3 right-3 bg-white rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-900" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"></path></svg></div><div class="absolute bottom-3 font-bold right-3 text-white"><span class="capitalize">${ssrInterpolate(formatedDate.value)}</span></div></div><div class="bg-together-blue py-4 px-3"><h2 class="text-white text-lg font-bold mb-2 truncate">${ssrInterpolate(__props.activity.title)}</h2><ul><li class="flex items-center flex-row text-together-green font-bold mb-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"></path></svg> ${ssrInterpolate(__props.activity.city)}, ${ssrInterpolate(__props.activity.distance.toFixed(1))} Km </li><li class="flex items-center flex-row font-bold mb-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"></path></svg><span class="truncate block">${ssrInterpolate(__props.activity.author.firstname + " " + __props.activity.author.lastname)}</span><div class="flex ml-2 mb-1 items-center block">`);
      _push(ssrRenderComponent(unref(StarRating), {
        rating: rating.value,
        "star-size": 15,
        "show-rating": false
      }, null, _parent));
      _push(`</div></li><li class="flex items-center flex-row font-bold mb-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z"></path></svg> ${ssrInterpolate(__props.activity.participations.length)}/${ssrInterpolate(__props.activity.max_participants)} Participants </li></ul><div class="flex justify-center items-center"><a${ssrRenderAttr("href", _ctx.route("activities.show", { id: __props.activity.id }))} class="bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8"> Infos </a></div></div></li>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CardItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardList",
  __ssrInlineRender: true,
  props: {
    activities: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><ul class="flex overflow-x-auto scrollbar-none -mx-8 px-8 text-xs"><!--[-->`);
      ssrRenderList(__props.activities, (activity) => {
        _push(ssrRenderComponent(_sfc_main$3, { activity }, null, _parent));
      });
      _push(`<!--]--></ul><div class="absolute -right-7 top-28 text-slate-900 bg-gray-50 p-1 rounded-full opacity-50"><svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"></path></svg></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CardList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CategoryItem",
  __ssrInlineRender: true,
  props: {
    id: Number,
    name: String,
    photo: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "flex-shrink-0 w-16 mr-3" }, _attrs))}><a href="#" class="rounded-full shadow-lg bg-slate-900"><img${ssrRenderAttr("src", __props.photo)} alt="Image 1" class="rounded-full shadow-lg"></a><p class="text-center mt-2">${ssrInterpolate(__props.name)}</p></li>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CategoryItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useCategoryStore = defineStore("category", () => {
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
const _sfc_main = {
  __name: "CategoryList",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryStore = useCategoryStore();
    categoryStore.fetchCategories();
    const categories = computed(() => {
      return categoryStore.categories;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><ul class="flex overflow-x-auto scrollbar-none -mx-8 px-8 text-xs"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          name: category.name,
          photo: category.photo
        }, null, _parent));
      });
      _push(`<!--]--></ul><div class="absolute -right-7 top-2 text-slate-900 bg-gray-50 p-1 rounded-full opacity-50"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CategoryList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a
};
