import { onMounted, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as useLocationStore, u as useActivityStore, _ as _sfc_main$1 } from "./activityStore-ea9bab34.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./CategoryList-4e91ae77.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-3dc51459.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
import "moment";
import "moment/dist/locale/fr.js";
import "vue-star-rating";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const locationStore = useLocationStore();
    const activityStore = useActivityStore();
    onMounted(async () => {
      await locationStore.fetchCoords();
      await activityStore.fetchActivities();
    });
    const nearestActivities = computed(() => {
      return activityStore.getActivitiesSortedByDistance();
    });
    const nextActivities = computed(() => {
      return activityStore.getActivitiesSortedByDate();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Dashboard",
        class: "bg-gradient-to-b from-together-cyan-light to-together-cyan-dark"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl font-extrabold"${_scopeId}>Together</h1><section class="flex justify-between items-center my-2"${_scopeId}><div class="relative my-8 w-3/4"${_scopeId}><input type="text" placeholder="Chercher des activités" class="pl-8 pr-4 py-1 w-full rounded-xl bg-together-blue text-slate-300 border-0 outline-none font-bold placeholder-together-cyan-light"${_scopeId}><div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-300" viewBox="0 0 1024 1024"${_scopeId}><path fill="currentColor" d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"${_scopeId}></path></svg><div class="flex items-center"${_scopeId}></div></div></div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M14 13v7h-4v-7L2.95 4h18.1L14 13Z"${_scopeId}></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.113T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.188.575t-.512.375L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Z"${_scopeId}></path></svg></section>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<section class="mt-12 h-96"${_scopeId}><h2 class="mb-6 font-bold text-lg"${_scopeId}>Activités à proximité</h2><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { activities: nearestActivities.value }, null, _parent2, _scopeId));
            _push2(`</div></section><section class="my-12 h-96"${_scopeId}><h2 class="mb-6 font-bold text-lg"${_scopeId}>Prochaines activités</h2><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { activities: nextActivities.value }, null, _parent2, _scopeId));
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl font-extrabold" }, "Together"),
              createVNode("section", { class: "flex justify-between items-center my-2" }, [
                createVNode("div", { class: "relative my-8 w-3/4" }, [
                  createVNode("input", {
                    type: "text",
                    placeholder: "Chercher des activités",
                    class: "pl-8 pr-4 py-1 w-full rounded-xl bg-together-blue text-slate-300 border-0 outline-none font-bold placeholder-together-cyan-light"
                  }),
                  createVNode("div", { class: "absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 text-slate-300",
                      viewBox: "0 0 1024 1024"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                      })
                    ])),
                    createVNode("div", { class: "flex items-center" })
                  ])
                ]),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    d: "M14 13v7h-4v-7L2.95 4h18.1L14 13Z"
                  })
                ])),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "currentColor",
                    d: "m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.113T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.188.575t-.512.375L15 21Zm-1-2.45V6.85l-4-1.4v11.7l4 1.4Z"
                  })
                ]))
              ]),
              createVNode(_sfc_main$2),
              createVNode("section", { class: "mt-12 h-96" }, [
                createVNode("h2", { class: "mb-6 font-bold text-lg" }, "Activités à proximité"),
                createVNode("div", { class: "relative" }, [
                  createVNode(_sfc_main$3, { activities: nearestActivities.value }, null, 8, ["activities"])
                ])
              ]),
              createVNode("section", { class: "my-12 h-96" }, [
                createVNode("h2", { class: "mb-6 font-bold text-lg" }, "Prochaines activités"),
                createVNode("div", { class: "relative" }, [
                  createVNode(_sfc_main$3, { activities: nextActivities.value }, null, 8, ["activities"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
