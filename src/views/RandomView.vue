<template>
  <div class="random-view-box">
  <div>오늘 뭐 먹지?</div>
  <div class="random-view-result">{{ result }}</div>
  <button class="random-view-btn" @click="onGoHome">돌아가기</button>
</div>
</template>

<script>
export default {
  name: "RandomView"
}
</script>

<script setup>
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFilter } from '/@compositions/filters'

const { getListByType } = useFilter()
const router = useRouter()
const route = useRoute();
const filterType = route.params.type

const list = inject("initList");
const result = ref("")
const filterd_list = getListByType(list, filterType)

const startMix = () => {
  const idx = Math.floor(Math.random() * filterd_list.length)
  result.value = filterd_list[idx].name
}

const onGoHome = () => {
  router.push({
    name: 'listView',
    params: { type: filterType }
  })
}

setTimeout(startMix, 1000)
</script>