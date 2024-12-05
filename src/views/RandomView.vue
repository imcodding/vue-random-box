<template>
  <div class="random-view-box">
  <div>오늘 뭐 먹지?</div>
  <div class="random-view-result">{{ result }}</div>
  <router-link to="/list">
    <button class="random-view-btn">돌아가기</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: "RandomView"
}
</script>

<script setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useFilter } from '/@compositions/filters'

const { getListByType } = useFilter()
const route = useRoute();
const filterType = route.params.type

const list = inject("initList");
const result = ref("")
const filterd_list = getListByType(list, filterType)

const startMix = () => {
  const idx = Math.floor(Math.random() * filterd_list.length)
  result.value = filterd_list[idx].name
}

setTimeout(startMix, 1000)
</script>