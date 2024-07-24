<script setup lang="ts">
import ItemsList from './components/ItemsList.vue';
import { inject, Ref } from 'vue';

const itemsLength = inject<Ref<number>>('vueItemsLength');
</script>

<template>
  <ItemsList :items="itemsLength ?? 3" />
</template>
