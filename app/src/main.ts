import { createApp } from 'vue';
import App from './App.vue';

declare global {
  interface Window {
    Drupal: any;
    once: any;
  }
}

// We use Drupal behaviors and once to make block work if
// will be loaded in dialog or whatever.

(function (Drupal, once) {
  Drupal.behaviors.vueItemsList = {
    attach(context: Document | HTMLElement) {
      const blocks = context.querySelectorAll('[data-vue-items-list]');
      blocks.forEach(block => {
        once('vueItemsList', block).forEach((element: HTMLElement) => {
          const app = createApp(App);
          app.provide('vueItemsLength', element.dataset.vueItemsLength)
          app.mount(element)
        });
      });
    },
  };
})(window.Drupal, window.once);
