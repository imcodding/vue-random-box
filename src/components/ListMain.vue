<template>
  <list-category v-on:change-filter="onChangeFilter" />
  <list-items :data="filtered_list"/>
  <div class="list-main">
    <router-link :to="{name: 'randomView', params: {type: filter}}">
      <button type="button">랜덤돌리기</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ListMain"
}
</script>

<script setup>
import ListCategory from './ListCategory.vue';
import ListItems from './ListItems.vue';

import { ref, inject, watch } from "vue"
import { useFilter } from "/@compositions/filters"
import TYPE from "/@/enums/category"

const {
  getAllList,
  getKoreaList,
  getChinaList,
  getJapanList,
  getWesternList,
  getEtcList
} = useFilter()

const filter = ref("")
const list = inject("list")

const filters = {}
filters[TYPE.ALL] = {func:getAllList}
filters[TYPE.KOREA] = {func:getKoreaList}
filters[TYPE.CHINA] = {func:getChinaList}
filters[TYPE.JAPAN] = {func:getJapanList}
filters[TYPE.WESTERN] = {func:getWesternList}
filters[TYPE.ETC] = {func:getEtcList}

const filtered_list = ref([])

const onChangeFilter = (filter_type) => {
  filter.value = filter_type
}

watch(
  [() => filter.value, list.value],
  ([new_filter, new_list], [old_filter, old_list]) => {
    const newFilter = new_filter == "" ? "all" : new_filter
    const temp_list = filters[newFilter].func(list)
    filtered_list.value = temp_list;
  },
  { immediate: true }
)
</script>
