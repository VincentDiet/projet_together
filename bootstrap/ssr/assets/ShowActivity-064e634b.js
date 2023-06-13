import { ref, onMounted, computed, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { a as useLocationStore, _ as _sfc_main$1 } from "./activityStore-d2f53eb5.js";
import { L as Loader } from "./Loader-c6fe560a.js";
import moment from "moment";
import "moment/dist/locale/fr.js";
import StarRating from "vue-star-rating";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-3dc51459.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
const getFormatedDate = (date, format) => {
  const date_ = moment(date);
  date_.locale("fr");
  return date_.format(format);
};
const _sfc_main = {
  __name: "ShowActivity",
  __ssrInlineRender: true,
  props: {
    activity: Object
  },
  setup(__props) {
    const props = __props;
    const loader = ref(true);
    const locationStore = useLocationStore();
    const coords = ref({ latitude: null, longitude: null });
    onMounted(async () => {
      await locationStore.fetchCoords();
      coords.value.latitude = locationStore.coords.latitude;
      coords.value.longitude = locationStore.coords.longitude;
      loader.value = false;
    });
    const renderImage = computed(() => {
      if (props.activity.images.length === 0) {
        return "https://via.placeholder.com/400";
      } else {
        return props.activity.images[0].url;
      }
    });
    const date = computed(() => {
      return getFormatedDate(props.activity.start_datetime, "DD MMMM");
    });
    const dateTime = computed(() => {
      return getFormatedDate(props.activity.start_datetime, "DD MMMM, à HH[h]MM");
    });
    const getDistance = computed(() => {
      const earthRadius = 6371;
      const userLatRad = Number(coords.value.latitude) * (Math.PI / 180);
      const userLonRad = Number(coords.value.longitude) * (Math.PI / 180);
      const activityLatRad = Number(props.activity.latitude) * (Math.PI / 180);
      const activityLonRad = Number(props.activity.longitude) * (Math.PI / 180);
      const deltaLat = activityLatRad - userLatRad;
      const deltaLon = activityLonRad - userLonRad;
      const distance = 2 * earthRadius * Math.asin(
        Math.sqrt(
          Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(userLatRad) * Math.cos(activityLatRad) * Math.pow(Math.sin(deltaLon / 2), 2)
        )
      );
      return distance.toFixed(1);
    });
    const rating = computed(() => {
      const notes = props.activity.author.activities.flatMap(
        (activity) => activity.participations.filter((participation) => participation.organizator_note).map((participation) => participation.organizator_note)
      );
      const average = notes.length ? notes.reduce((a, b) => a + b) / notes.length : 0;
      return average;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.activity.title,
        class: "bg-gradient-to-b from-together-cyan-light to-together-cyan-dark"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loader.value) {
              _push2(`<div class="fixed w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-together-cyan-light to-together-cyan-dark z-50"${_scopeId}>`);
              _push2(ssrRenderComponent(Loader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="relative -mx-8 -mt-10 bg-black h-96 w-screen"${_scopeId}><div class="z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"${_scopeId}><div${_scopeId}><a${ssrRenderAttr("href", _ctx.route("dashboard"))}${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" viewBox="0 0 24 24"${_scopeId}> &gt; <path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"${_scopeId}></path></svg></a></div><div class="flex items-center"${_scopeId}><div class="bg-white p-2 rounded-full"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"${_scopeId}></path></svg></div><div class="bg-white p-2 rounded-full m-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"${_scopeId}></path></svg></div></div></div><div class="absolute z-10 bottom-0 mx-6 my-4"${_scopeId}><h1 class="font-bold text-xl pl-2 mb-1"${_scopeId}>${ssrInterpolate(__props.activity.title)}</h1><div class="py-1 px-2 bg-white text-together-green font-bold w-auto rounded-lg text-sm inline-flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"${_scopeId}></path></svg> ${ssrInterpolate(__props.activity.city)}, à ${ssrInterpolate(getDistance.value)} Km </div></div><img${ssrRenderAttr("src", renderImage.value)} alt="" class="absolute object-cover h-96 w-screen"${_scopeId}></section><div class="w-screen h-16 bg-together-blue -mx-8 px-8 flex items-center justify-between"${_scopeId}><div class="capitalize font-bold"${_scopeId}>${ssrInterpolate(date.value)}</div><div class="font-bold text-together-blue bg-white py-0.5 px-3 rounded-lg text-sm"${_scopeId}>${ssrInterpolate(__props.activity.category.name)}</div></div><section class="mt-12"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(__props.activity.title)}</h2><p class="py-4"${_scopeId}>${ssrInterpolate(dateTime.value)}</p><p${_scopeId}>${ssrInterpolate(__props.activity.description)}</p><div class="flex items-center text-sm mt-10 mb-5"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2 text-together-green" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"${_scopeId}></path></svg><div${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.activity.adress)}</p><p${_scopeId}>${ssrInterpolate(__props.activity.city)}</p></div></div><div class="w-full h-36 bg-white flex items-center justify-center text-gray-900 rounded-xl uppercase"${_scopeId}> Map here </div><section class="my-12"${_scopeId}><p${_scopeId}>Organisé par :</p><img${ssrRenderAttr("src", __props.activity.author.profile_photo_path)} alt="" class="rounded-full w-14 h-14 ml-2 m-4 object-cover"${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(__props.activity.author.firstname)} ${ssrInterpolate(__props.activity.author.lastname)}</span>`);
            _push2(ssrRenderComponent(unref(StarRating), {
              rating: rating.value,
              "star-size": 15,
              "show-rating": false
            }, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>${ssrInterpolate(__props.activity.participations.length)}/${ssrInterpolate(__props.activity.max_participants)} participants <div class="flex flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(__props.activity.participations, (participation) => {
              _push2(`<img${ssrRenderAttr("src", participation.participant.profile_photo_path)} alt="" class="rounded-full w-10 h-10 m-2 shadow-lg object-cover"${_scopeId}>`);
            });
            _push2(`<!--]--></div></section><div class="bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8 inline-block mt-8"${_scopeId}> S&#39;inscrire </div></section>`);
          } else {
            return [
              loader.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-together-cyan-light to-together-cyan-dark z-50"
              }, [
                createVNode(Loader)
              ])) : createCommentVNode("", true),
              createVNode("section", { class: "relative -mx-8 -mt-10 bg-black h-96 w-screen" }, [
                createVNode("div", { class: "z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4" }, [
                  createVNode("div", null, [
                    createVNode("a", {
                      href: _ctx.route("dashboard")
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-7 h-7 text-white",
                        viewBox: "0 0 24 24"
                      }, [
                        createTextVNode(" > "),
                        createVNode("path", {
                          fill: "currentColor",
                          d: "m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"
                        })
                      ]))
                    ], 8, ["href"])
                  ]),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "bg-white p-2 rounded-full" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "bg-white p-2 rounded-full m-3" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          fill: "currentColor",
                          d: "M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode("div", { class: "absolute z-10 bottom-0 mx-6 my-4" }, [
                  createVNode("h1", { class: "font-bold text-xl pl-2 mb-1" }, toDisplayString(__props.activity.title), 1),
                  createVNode("div", { class: "py-1 px-2 bg-white text-together-green font-bold w-auto rounded-lg text-sm inline-flex items-center" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-3 w-3 mr-1",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
                      })
                    ])),
                    createTextVNode(" " + toDisplayString(__props.activity.city) + ", à " + toDisplayString(getDistance.value) + " Km ", 1)
                  ])
                ]),
                createVNode("img", {
                  src: renderImage.value,
                  alt: "",
                  class: "absolute object-cover h-96 w-screen"
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "w-screen h-16 bg-together-blue -mx-8 px-8 flex items-center justify-between" }, [
                createVNode("div", { class: "capitalize font-bold" }, toDisplayString(date.value), 1),
                createVNode("div", { class: "font-bold text-together-blue bg-white py-0.5 px-3 rounded-lg text-sm" }, toDisplayString(__props.activity.category.name), 1)
              ]),
              createVNode("section", { class: "mt-12" }, [
                createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(__props.activity.title), 1),
                createVNode("p", { class: "py-4" }, toDisplayString(dateTime.value), 1),
                createVNode("p", null, toDisplayString(__props.activity.description), 1),
                createVNode("div", { class: "flex items-center text-sm mt-10 mb-5" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-8 w-8 mr-2 text-together-green",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "currentColor",
                      d: "M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"
                    })
                  ])),
                  createVNode("div", null, [
                    createVNode("p", null, toDisplayString(__props.activity.adress), 1),
                    createVNode("p", null, toDisplayString(__props.activity.city), 1)
                  ])
                ]),
                createVNode("div", { class: "w-full h-36 bg-white flex items-center justify-center text-gray-900 rounded-xl uppercase" }, " Map here "),
                createVNode("section", { class: "my-12" }, [
                  createVNode("p", null, "Organisé par :"),
                  createVNode("img", {
                    src: __props.activity.author.profile_photo_path,
                    alt: "",
                    class: "rounded-full w-14 h-14 ml-2 m-4 object-cover"
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "font-bold" }, toDisplayString(__props.activity.author.firstname) + " " + toDisplayString(__props.activity.author.lastname), 1),
                  createVNode(unref(StarRating), {
                    rating: rating.value,
                    "star-size": 15,
                    "show-rating": false
                  }, null, 8, ["rating"])
                ]),
                createVNode("section", null, [
                  createTextVNode(toDisplayString(__props.activity.participations.length) + "/" + toDisplayString(__props.activity.max_participants) + " participants ", 1),
                  createVNode("div", { class: "flex flex-wrap" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.activity.participations, (participation) => {
                      return openBlock(), createBlock("img", {
                        key: participation.id,
                        src: participation.participant.profile_photo_path,
                        alt: "",
                        class: "rounded-full w-10 h-10 m-2 shadow-lg object-cover"
                      }, null, 8, ["src"]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "bg-together-green text-white font-bold rounded-full py-1.5 mt-3 px-8 inline-block mt-8" }, " S'inscrire ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ShowActivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
