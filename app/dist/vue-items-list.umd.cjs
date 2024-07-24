(function(e,r){typeof exports=="object"&&typeof module<"u"?r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis<"u"?globalThis:e||self,r(e.Vue))})(this,function(e){"use strict";function r(c){const t=e.ref(null),n=e.ref(null),s=e.ref(!0),i=async()=>{s.value=!0;try{const l=await(await fetch(c.value)).json();t.value=l}catch(o){n.value=o}finally{s.value=!1}};return e.watchEffect(i),{data:t,error:n,isFetching:s}}const p={key:0},d={key:1},m={key:2},f={class:"vue-items-list__list"},_={class:"vue-items-list__title"},h=e.defineComponent({__name:"ItemsList",props:{items:{}},setup(c){const t=c,n=e.computed(()=>`https://jsonplaceholder.typicode.com/posts?_limit=${t.items}`),{data:s,error:i,isFetching:o}=r(n);return(l,k)=>e.unref(o)?(e.openBlock(),e.createElementBlock("div",p,"Loading...")):e.unref(i)?(e.openBlock(),e.createElementBlock("div",d,"Error: "+e.toDisplayString(e.unref(i).message),1)):(e.openBlock(),e.createElementBlock("div",m,[e.createElementVNode("ul",f,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),a=>(e.openBlock(),e.createElementBlock("li",{key:a.id,class:"vue-items-list__item"},[e.createElementVNode("h4",_,e.toDisplayString(a.title),1),e.createElementVNode("p",null,e.toDisplayString(a.body),1)]))),128))])]))}}),u=e.defineComponent({__name:"App",setup(c){const t=e.inject("vueItemsLength");return(n,s)=>(e.openBlock(),e.createBlock(h,{items:e.unref(t)??3},null,8,["items"]))}});(function(c,t){c.behaviors.vueItemsList={attach(n){n.querySelectorAll("[data-vue-items-list]").forEach(i=>{t("vueItemsList",i).forEach(o=>{const l=e.createApp(u);l.provide("vueItemsLength",o.dataset.vueItemsLength),l.mount(o)})})}}})(window.Drupal,window.once)});
