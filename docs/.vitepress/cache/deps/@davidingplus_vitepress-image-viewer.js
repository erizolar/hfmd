import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  normalizeClass,
  onMounted,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  renderList,
  toDisplayString,
  unref,
  vShow,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-YRNSJHMG.js";

// node_modules/@davidingplus/vitepress-image-viewer/dist/image-viewer.es.js
var Pe = { class: "iv-controls" };
var Re = { class: "iv-left" };
var We = {
  class: "iv-counter",
  title: "Position in gallery"
};
var Ye = {
  class: "iv-buttons",
  role: "toolbar",
  "aria-label": "Image viewer controls"
};
var Ze = ["disabled"];
var He = ["disabled"];
var Xe = ["disabled"];
var $e = { class: "iv-side-nav" };
var je = ["disabled"];
var Fe = ["disabled"];
var Ke = ["src"];
var Ue = {
  key: 0,
  class: "iv-caption",
  role: "note"
};
var Ge = {
  key: 0,
  class: "iv-thumbs-bottom",
  role: "region",
  "aria-label": "Thumbnails panel"
};
var Je = { class: "iv-thumbs-inner" };
var Qe = ["onClick"];
var et = ["src"];
var D = 0.5;
var T = 3;
var tt = 300;
var nt = defineComponent({
  __name: "ImageViewer",
  setup(f, { expose: g }) {
    const o = ref(false), m = ref(""), c = ref(""), s = ref(1), v = reactive({ x: 0, y: 0 }), x = ref(false), z = ref(false), B = ref({ x: 0, y: 0 }), H = ref(0), ve = computed(() => s.value < T - 1e-9), ce = computed(() => s.value > D + 1e-9), de = computed(() => Math.abs(s.value - 1) > 1e-6 || v.x !== 0 || v.y !== 0), me = ref(null), _ = ref(false), r = ref([]), a = ref(-1), X = ref(window.innerWidth < 768);
    let E = ref(0), L = null;
    const p = ref("iv-fade");
    function $(e) {
      const t = [
        "nav",
        "header",
        ".navbar",
        ".site-logo",
        ".logo",
        ".vp-nav",
        ".vp-site-logo",
        ".theme-toggle",
        ".vp-navbar",
        ".link-card-logo",
        ".thumb"
      ], l = document.querySelector("main, article, .content, .vp-doc, .theme-doc, #main"), u = e ?? l ?? document, h2 = Array.from(u.querySelectorAll("img:not(.no-viewer)")), k = 60, y = h2.filter((d) => {
        for (const M of t)
          if (d.closest(M)) return false;
        return !(!d.src || d.classList.contains("iv-thumb") || d.naturalWidth > 0 && d.naturalHeight > 0 && d.naturalWidth < k && d.naturalHeight < k);
      }), S = /* @__PURE__ */ new Set(), se = [];
      y.forEach((d) => {
        const M = (d.currentSrc || d.src).split("#")[0];
        if (!S.has(M)) {
          S.add(M);
          const Ce = d.getAttribute("alt") ?? "";
          se.push({ src: M, alt: Ce });
        }
      }), r.value = se;
    }
    async function fe(e, t = "", l) {
      L = (l == null ? void 0 : l.closest("main, article, .content, .vp-doc, .theme-doc, #main")) ?? document.querySelector("main, article, .content, .vp-doc, .theme-doc, #main") ?? null, $(L ?? void 0), p.value = "iv-fade";
      const h2 = (e || "").split("#")[0], k = (l == null ? void 0 : l.getAttribute("alt")) ?? t ?? "";
      let y = r.value.findIndex((S) => S.src === h2);
      y === -1 && (r.value.unshift({ src: h2, alt: k }), y = 0), a.value = y, m.value = r.value[a.value].src, c.value = k || r.value[a.value].alt || "", s.value = 1, v.x = 0, v.y = 0, o.value = true, H.value = Date.now(), await nextTick();
    }
    g({ open: fe, visible: o });
    function V() {
      o.value = false, _.value = false, p.value = "iv-fade", setTimeout(() => {
        m.value = "", c.value = "", a.value = -1, r.value = [], L = null, s.value = 1, v.x = 0, v.y = 0;
      }, tt + 20);
    }
    function we() {
      Date.now() - H.value < 300 || V();
    }
    function j() {
      s.value = 1, v.x = 0, v.y = 0, z.value = false;
    }
    function he() {
      s.value = Math.min(s.value + 0.1, T);
    }
    function ge() {
      s.value = Math.max(s.value - 0.1, D);
    }
    function pe(e) {
      const t = e.deltaY > 0 ? -0.1 : 0.1;
      s.value = Math.min(Math.max(D, s.value + t), T);
    }
    function F(e) {
      x.value = true, z.value = false;
      const t = "touches" in e ? e.touches[0] : e;
      B.value = { x: t.clientX - v.x, y: t.clientY - v.y }, window.addEventListener("mousemove", I), window.addEventListener("mouseup", A), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", A);
    }
    function I(e) {
      if (!x.value) return;
      const t = "touches" in e ? e.touches[0] : e;
      v.x = t.clientX - B.value.x, v.y = t.clientY - B.value.y, z.value = true, e.preventDefault();
    }
    function A() {
      x.value = false, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", A), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", A);
    }
    function be() {
      $(L ?? void 0), _.value = !_.value;
    }
    function q(e) {
      e < 0 || e >= r.value.length || (a.value === -1 ? p.value = "iv-fade" : e > a.value ? p.value = "iv-slide-left" : e < a.value ? p.value = "iv-slide-right" : p.value = "iv-fade", a.value = e, m.value = r.value[e].src, c.value = r.value[e].alt || "", j());
    }
    const K = computed(() => a.value > 0), U = computed(() => a.value >= 0 && a.value < r.value.length - 1);
    function G() {
      r.value.length && K.value && q(a.value - 1);
    }
    function J() {
      r.value.length && U.value && q(a.value + 1);
    }
    function Q(e) {
      o.value && (e.key === "Escape" ? V() : e.key === "ArrowLeft" ? G() : e.key === "ArrowRight" && J());
    }
    let O = 0, ee = 1;
    function te(e) {
      const [t, l] = [e[0], e[1]], u = l.clientX - t.clientX, h2 = l.clientY - t.clientY;
      return Math.sqrt(u * u + h2 * h2);
    }
    function ne(e) {
      e.touches.length === 2 && (O = te(e.touches), ee = s.value);
    }
    function oe(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        const l = te(e.touches) / O;
        s.value = Math.min(Math.max(D, ee * l), T);
      }
    }
    function ae(e) {
      e.touches.length < 2 && (O = 0);
    }
    function xe() {
      const e = document.createElement("a");
      e.href = m.value, e.download = c.value || "image", e.click();
    }
    const _e = computed(() => ({
      transform: `translate(${v.x}px, ${v.y}px) scale(${s.value})`,
      transition: x.value ? "none" : "transform 0.28s ease, opacity 0.22s ease",
      cursor: x.value ? "grabbing" : "grab",
      zIndex: 9999
    })), ke = computed(() => r.value.length), ye = computed(() => a.value >= 0 ? a.value + 1 : 0), Me = computed(() => {
      const e = r.value.length;
      if (!e || a.value < 0) return [];
      const t = X.value ? 1 : 2, l = t * 2 + 1;
      let u = Math.max(0, a.value - t);
      return u + l > e && (u = Math.max(0, e - l)), E.value = u, r.value.slice(u, Math.min(e, u + l));
    });
    function le() {
      X.value = window.innerWidth < 768;
    }
    return onMounted(() => {
      window.addEventListener("keydown", Q), window.addEventListener("touchstart", ne, { passive: false }), window.addEventListener("touchmove", oe, { passive: false }), window.addEventListener("touchend", ae), window.addEventListener("resize", le);
    }), onUnmounted(() => {
      window.removeEventListener("keydown", Q), window.removeEventListener("touchstart", ne), window.removeEventListener("touchmove", oe), window.removeEventListener("touchend", ae), window.removeEventListener("resize", le);
    }), (e, t) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "iv-fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: "iv-overlay",
            onClick: withModifiers(we, ["self"]),
            onWheel: withModifiers(pe, ["prevent"])
          }, [
            createBaseVNode("div", Pe, [
              createBaseVNode("div", Re, [
                createBaseVNode("div", We, toDisplayString(ye.value) + " / " + toDisplayString(ke.value), 1)
              ]),
              createBaseVNode("div", Ye, [
                createBaseVNode("button", {
                  onClick: ge,
                  disabled: !ce.value,
                  "aria-label": "Zoom out",
                  title: "Zoom out"
                }, [...t[0] || (t[0] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1.5",
                      d: "m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M8 11h6"
                    })
                  ], -1)
                ])], 8, Ze),
                createBaseVNode("button", {
                  onClick: he,
                  disabled: !ve.value,
                  "aria-label": "Zoom in",
                  title: "Zoom in"
                }, [...t[1] || (t[1] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1.5",
                      d: "m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M11 8v6m-3-3h6"
                    })
                  ], -1)
                ])], 8, He),
                createBaseVNode("button", {
                  onClick: j,
                  disabled: !de.value,
                  "aria-label": "Reset",
                  title: "Reset"
                }, [...t[2] || (t[2] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1024 1024"
                  }, [
                    createBaseVNode("path", {
                      fill: "currentColor",
                      d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.12 30.12 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.12 30.12 0 0 0-30.118-30.118m-361.412 0a30.12 30.12 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.12 30.12 0 0 0-30.118-30.118M512 361.412a30.12 30.12 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.12 30.12 0 0 0 512 361.412M512 512a30.12 30.12 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.12 30.12 0 0 0 512 512"
                    })
                  ], -1)
                ])], 8, Xe),
                createBaseVNode("button", {
                  onClick: be,
                  "aria-label": "Toggle thumbnails",
                  title: "Toggle thumbnails"
                }, [...t[3] || (t[3] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                  }, [
                    createBaseVNode("path", {
                      fill: "currentColor",
                      "fill-rule": "evenodd",
                      d: "M9.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ])]),
                createBaseVNode("button", {
                  onClick: xe,
                  "aria-label": "Download",
                  title: "Download"
                }, [...t[4] || (t[4] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32"
                  }, [
                    createBaseVNode("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4l5-4m-5-10v14"
                    })
                  ], -1)
                ])]),
                createBaseVNode("button", {
                  onClick: V,
                  "aria-label": "Close",
                  title: "Close"
                }, [...t[5] || (t[5] = [
                  createBaseVNode("svg", {
                    class: "iv-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                    })
                  ], -1)
                ])])
              ])
            ]),
            createBaseVNode("div", $e, [
              createBaseVNode("button", {
                class: "iv-side iv-side-left",
                onClick: G,
                disabled: !K.value,
                "aria-label": "Previous"
              }, [...t[6] || (t[6] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32",
                  height: "32",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    d: "M22 12H2m9-9l-9 9l9 9"
                  })
                ], -1)
              ])], 8, je),
              createBaseVNode("button", {
                class: "iv-side iv-side-right",
                onClick: J,
                disabled: !U.value,
                "aria-label": "Next"
              }, [...t[7] || (t[7] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "32",
                  height: "32",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    d: "M2 12h20m-9-9l9 9l-9 9"
                  })
                ], -1)
              ])], 8, Fe)
            ]),
            createVNode(Transition, {
              name: p.value,
              mode: "out-in"
            }, {
              default: withCtx(() => [
                m.value ? (openBlock(), createElementBlock("div", {
                  key: m.value + "-" + a.value,
                  class: "iv-image-wrap"
                }, [
                  createBaseVNode("img", mergeProps({
                    ref_key: "animatedImage",
                    ref: me,
                    src: m.value
                  }, c.value ? { alt: c.value } : {}, {
                    class: "iv-image",
                    style: _e.value,
                    onMousedown: F,
                    onTouchstart: F,
                    draggable: "false"
                  }), null, 16, Ke)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["name"]),
            !_.value && c.value ? (openBlock(), createElementBlock("div", Ue, toDisplayString(c.value), 1)) : createCommentVNode("", true),
            createVNode(Transition, { name: "iv-slide-up" }, {
              default: withCtx(() => [
                _.value ? (openBlock(), createElementBlock("div", Ge, [
                  createBaseVNode("div", Je, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(Me.value, (l, u) => (openBlock(), createElementBlock("div", {
                      key: l.src + "_" + (unref(E) + u),
                      class: normalizeClass(["iv-thumb", { active: unref(E) + u === a.value }]),
                      onClick: (h2) => q(unref(E) + u),
                      role: "button",
                      tabindex: "0"
                    }, [
                      createBaseVNode("img", mergeProps({
                        src: l.src
                      }, { ref_for: true }, l.alt ? { alt: l.alt } : {}), null, 16, et)
                    ], 10, Qe))), 128))
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ], 544), [
            [vShow, o.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
});
var ot = (f, g) => {
  const o = f.__vccOpts || f;
  for (const [m, c] of g)
    o[m] = c;
  return o;
};
var at = ot(nt, [["__scopeId", "data-v-1f509915"]]);
function lt(f) {
  document.querySelectorAll("img:not(.no-viewer)").forEach((o) => {
    o.dataset.viewerBound !== "true" && (o.style.cursor = "zoom-in", o.addEventListener("click", () => {
      f && typeof f.open == "function" && !f.visible && f.open(o.src, o.alt || "", o);
    }), o.dataset.viewerBound = "true");
  });
}
function it(f) {
  if (typeof window > "u" || window.__vitepress_image_viewer_installed) return;
  window.__vitepress_image_viewer_installed = true;
  const g = document.createElement("div");
  document.body.appendChild(g);
  const o = ref(null);
  createApp({
    render: () => h(at, { ref: o })
  }).mount(g);
  const c = () => {
    nextTick(() => {
      lt(o.value);
    });
  };
  c(), new MutationObserver(() => {
    c();
  }).observe(document.querySelector("#app"), {
    childList: true,
    subtree: true
  });
}
export {
  it as default
};
//# sourceMappingURL=@davidingplus_vitepress-image-viewer.js.map
