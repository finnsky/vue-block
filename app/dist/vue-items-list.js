import { ref as _, watchEffect as d, defineComponent as h, computed as v, unref as l, openBlock as c, createElementBlock as a, toDisplayString as m, createElementVNode as p, Fragment as f, renderList as y, inject as g, createBlock as k, createApp as L } from "vue";
function w(o) {
  const t = _(null), e = _(null), s = _(!0);
  return d(async () => {
    s.value = !0;
    try {
      const r = await (await fetch(o.value)).json();
      t.value = r;
    } catch (n) {
      e.value = n;
    } finally {
      s.value = !1;
    }
  }), { data: t, error: e, isFetching: s };
}
const E = { key: 0 }, I = { key: 1 }, b = { key: 2 }, j = { class: "vue-items-list__list" }, D = { class: "vue-items-list__title" }, F = /* @__PURE__ */ h({
  __name: "ItemsList",
  props: {
    items: {}
  },
  setup(o) {
    const t = o, e = v(() => `https://jsonplaceholder.typicode.com/posts?_limit=${t.items}`), { data: s, error: i, isFetching: n } = w(e);
    return (r, B) => l(n) ? (c(), a("div", E, "Loading...")) : l(i) ? (c(), a("div", I, "Error: " + m(l(i).message), 1)) : (c(), a("div", b, [
      p("ul", j, [
        (c(!0), a(f, null, y(l(s), (u) => (c(), a("li", {
          key: u.id,
          class: "vue-items-list__item"
        }, [
          p("h4", D, m(u.title), 1),
          p("p", null, m(u.body), 1)
        ]))), 128))
      ])
    ]));
  }
}), A = /* @__PURE__ */ h({
  __name: "App",
  setup(o) {
    const t = g("vueItemsLength");
    return (e, s) => (c(), k(F, {
      items: l(t) ?? 3
    }, null, 8, ["items"]));
  }
});
(function(o, t) {
  o.behaviors.vueItemsList = {
    attach(e) {
      e.querySelectorAll("[data-vue-items-list]").forEach((i) => {
        t("vueItemsList", i).forEach((n) => {
          const r = L(A);
          r.provide("vueItemsLength", n.dataset.vueItemsLength), r.mount(n);
        });
      });
    }
  };
})(window.Drupal, window.once);
