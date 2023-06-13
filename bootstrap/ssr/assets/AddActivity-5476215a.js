import { mergeProps, useSSRContext, reactive, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { u as useActivityStore, _ as _sfc_main$2 } from "./activityStore-ea9bab34.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-3dc51459.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
import "moment";
const _sfc_main$1 = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    name: String,
    label: String,
    placeholder: String
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: "block font-medium text-sm text-gray-700",
        for: __props.name
      }, _attrs))}><p class="font-bold">${ssrInterpolate(__props.label)}</p><div class="flex flex-row items-center justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light"><input${ssrRenderAttr("name", __props.name)} type="text"${ssrRenderAttr("placeholder", __props.placeholder)} class="p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"></path></svg></div></label>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AddActivity",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    user: Object
  },
  setup(__props) {
    const props = __props;
    const activityStore = useActivityStore();
    const formData = reactive({
      author_id: props.user.id
    });
    const onInput = (e) => {
      formData[e.target.name] = e.target.value;
    };
    const select = (id) => {
      formData.category_id = id;
    };
    const submitForm = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.target.disabled = true;
      await activityStore.addActivities(formData);
      e.target.disabled = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        title: "Add an activity",
        class: "bg-gray-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="relative -mx-8 -mt-10 h-16 bg-black/25 w-screen"${_scopeId}><div class="z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4"${_scopeId}><div class=""${_scopeId}><a${ssrRenderAttr("href", _ctx.route("dashboard"))}${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"${_scopeId}></path></svg></a></div><div class="flex items-center"${_scopeId}><div class="bg-white p-2 rounded-full"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"${_scopeId}></path></svg></div><div class="bg-white p-2 rounded-full m-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v4h-2V9h-5V4H6v16h6v2H6Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14v-3.175l4.3-4.3Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.45 1.45Z"${_scopeId}></path></svg></div></div></div></section><form class="flex flex-col gap-4 text-gray-700 pt-8"${_scopeId}><div class="h-96 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", formData.photo)} alt="" class="${ssrRenderClass([!formData.photo ? "hidden" : "", "object-cover h-96"])}"${_scopeId}><img src="https://www.likeminds.fr/wp-content/uploads/2015/12/Point-dinterrogation-Gris-1.png" alt="" class="object-cover h-96"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Image URL",
              name: "photo",
              placeholder: "url"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Titre",
              name: "title",
              placeholder: "Nom de l'activité"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-bold text-gray-700 text-sm"${_scopeId}>Catégorie</p><div class="flex gap-2 flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<!--[--><input type="radio"${ssrRenderAttr("id", category.id)} name="category" class="hidden"${_scopeId}><label${ssrRenderAttr("for", category.id)}${_scopeId}><div class="${ssrRenderClass([
                formData.category_id === category.id ? "bg-green-500 text-white" : "",
                "bg-together-green-light px-1.5 rounded-lg text-gray-600 border border-green-600 text-sm"
              ])}"${_scopeId}>${ssrInterpolate(category.name)}</div></label><!--]-->`);
            });
            _push2(`<!--]--></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Date de l'activité",
              name: "date",
              placeholder: "01/01/2023"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Heure de l'activité",
              name: "time",
              placeholder: "10:00"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Durée de l'activité",
              name: "duration",
              placeholder: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Nombre de participants",
              name: "max_participants",
              placeholder: "5"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Adresse",
              name: "adress",
              placeholder: "Adresse de l'activité"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Ville",
              name: "city",
              placeholder: "Ville"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              onInput,
              label: "Pays",
              name: "country",
              placeholder: "Pays"
            }, null, _parent2, _scopeId));
            _push2(`<label class="block font-medium text-sm text-gray-700"${ssrRenderAttr("for", _ctx.name)}${_scopeId}><p class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.label)}</p><p class="font-bold"${_scopeId}>Description</p><div class="flex flex-row justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light"${_scopeId}><textarea name="descrition" placeholder="Description" class="p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0" rows="7"${_scopeId}>${ssrInterpolate(formData.description)}</textarea><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"${_scopeId}></path></svg></div></label><input type="button" value="Envoyer" class="bg-green-500 py-2 font-bold text-white rounded-full my-4 disabled:bg-gray-300 disabled:text-gray-200"${_scopeId}></form>`);
          } else {
            return [
              createVNode("section", { class: "relative -mx-8 -mt-10 h-16 bg-black/25 w-screen" }, [
                createVNode("div", { class: "z-10 w-screen absolute h-16 bg-opacity-25 text-zinc-900 bg-black flex items-center justify-between px-4" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("a", {
                      href: _ctx.route("dashboard")
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-7 h-7 text-white",
                        viewBox: "0 0 24 24"
                      }, [
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
                ])
              ]),
              createVNode("form", { class: "flex flex-col gap-4 text-gray-700 pt-8" }, [
                createVNode("div", { class: "h-96 overflow-hidden" }, [
                  createVNode("img", {
                    src: formData.photo,
                    alt: "",
                    class: ["object-cover h-96", !formData.photo ? "hidden" : ""]
                  }, null, 10, ["src"]),
                  createVNode("img", {
                    src: "https://www.likeminds.fr/wp-content/uploads/2015/12/Point-dinterrogation-Gris-1.png",
                    alt: "",
                    class: "object-cover h-96"
                  })
                ]),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Image URL",
                  name: "photo",
                  placeholder: "url"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Titre",
                  name: "title",
                  placeholder: "Nom de l'activité"
                }),
                createVNode("div", null, [
                  createVNode("p", { class: "font-bold text-gray-700 text-sm" }, "Catégorie"),
                  createVNode("div", { class: "flex gap-2 flex-wrap" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                      return openBlock(), createBlock(Fragment, {
                        key: category.id
                      }, [
                        createVNode("input", {
                          type: "radio",
                          id: category.id,
                          name: "category",
                          class: "hidden"
                        }, null, 8, ["id"]),
                        createVNode("label", {
                          for: category.id
                        }, [
                          createVNode("div", {
                            class: [
                              "bg-together-green-light px-1.5 rounded-lg text-gray-600 border border-green-600 text-sm",
                              formData.category_id === category.id ? "bg-green-500 text-white" : ""
                            ],
                            onClick: ($event) => select(category.id)
                          }, toDisplayString(category.name), 11, ["onClick"])
                        ], 8, ["for"])
                      ], 64);
                    }), 128))
                  ])
                ]),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Date de l'activité",
                  name: "date",
                  placeholder: "01/01/2023"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Heure de l'activité",
                  name: "time",
                  placeholder: "10:00"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Durée de l'activité",
                  name: "duration",
                  placeholder: "1"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Nombre de participants",
                  name: "max_participants",
                  placeholder: "5"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Adresse",
                  name: "adress",
                  placeholder: "Adresse de l'activité"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Ville",
                  name: "city",
                  placeholder: "Ville"
                }),
                createVNode(_sfc_main$1, {
                  onInput,
                  label: "Pays",
                  name: "country",
                  placeholder: "Pays"
                }),
                createVNode("label", {
                  class: "block font-medium text-sm text-gray-700",
                  for: _ctx.name
                }, [
                  createVNode("p", { class: "font-bold" }, toDisplayString(_ctx.label), 1),
                  createVNode("p", { class: "font-bold" }, "Description"),
                  createVNode("div", { class: "flex flex-row justify-between rounded-xl border-0 py-1 px-2 w-full bg-together-green-light" }, [
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => formData.description = $event,
                      name: "descrition",
                      placeholder: "Description",
                      class: "p-0 bg-inherit border-0 w-full outline-none focus:border-none focus:ring-0",
                      rows: "7"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, formData.description]
                    ]),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5 mx-1",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        d: "M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2L17.875 1.9L22.1 6.125l-2.8 2.8ZM3 21v-4.25l10.6-10.6l4.25 4.25L7.25 21H3ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"
                      })
                    ]))
                  ])
                ], 8, ["for"]),
                createVNode("input", {
                  type: "button",
                  value: "Envoyer",
                  class: "bg-green-500 py-2 font-bold text-white rounded-full my-4 disabled:bg-gray-300 disabled:text-gray-200",
                  onClick: submitForm
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddActivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
