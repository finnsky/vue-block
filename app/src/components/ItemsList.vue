<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useFetch } from '../composables/fetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const props = defineProps<{
  items: number;
}>();

const apiUrl = computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=${props.items}`);

const { data, error, isFetching } = useFetch<Post[]>(apiUrl);
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <ul class="vue-items-list__list">
      <li v-for="item in data" :key="item.id" class="vue-items-list__item">
        <h4 class="vue-items-list__title">{{ item.title }}</h4>
        <p>{{ item.body }}</p>
      </li>
    </ul>
  </div>
</template>
