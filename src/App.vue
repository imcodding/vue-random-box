<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
}
</script>

<script setup>
import { ref, provide } from 'vue';
import { useStorage } from '/@compositions/storage';
const { loadList } = useStorage();
const list = ref([])

const initList = (init_list) => {
  list.value = init_list;
}
loadList(initList)

provide("initList", list)
</script>

<style scoped>

</style>