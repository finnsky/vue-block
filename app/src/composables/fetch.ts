import { ref, Ref, watchEffect } from 'vue';

export function useFetch<T>(url: Ref<string | URL | Request>) {
  const data: Ref<T | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const isFetching = ref(true);

  const fetchData = async () => {
    isFetching.value = true;
    try {
      const res = await fetch(url.value);
      const json = await res.json();
      data.value = json as T;
    } catch (err) {
      error.value = err as Error;
    } finally {
      isFetching.value = false;
    }
  };

  watchEffect(fetchData);

  return { data, error, isFetching };
}
