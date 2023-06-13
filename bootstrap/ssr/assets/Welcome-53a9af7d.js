import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
const Welcome_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="bg-gray-100 min-h-screen pt-8"><div class="flex flex-col sm:justify-center items-center sm:pt-0"><div class="bg-white w-full p-10 shadow-lg"><h1 class="text-4xl text-gray-400 font-bold text-center pb-10"> Together </h1>`);
      if (__props.canLogin) {
        _push(`<div class="text-center z-10">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`DASHBOARD`);
              } else {
                return [
                  createTextVNode("DASHBOARD")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`LOG IN`);
              } else {
                return [
                  createTextVNode("LOG IN")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "font-semibold text-gray-100 text-sm bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 mx-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`REGISTER`);
                } else {
                  return [
                    createTextVNode("REGISTER")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
