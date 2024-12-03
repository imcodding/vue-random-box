<template>
  <list-new />
  <list-main />
</template>

<script>
export default {
  name: "ListContainer"
}
</script>

<script setup>
import ListNew from './ListNew.vue';
import ListMain from './ListMain.vue';
import { ref, readonly, provide } from "vue"
import { useStorage } from '/@compositions/storage';

const list = ref([])
const { loadList, saveList, storage_id } = useStorage();

provide("list", readonly(list))

const initList = (init_list) => {
  list.value = init_list;
}
const addItem = (name, type) => {
  list.value.push({
    id: storage_id.value++,
    name: name,
    type: type
  })
  saveList(list)
}
const removeItem = (id) => {
  list.value.splice(id, 1)
  list.value.forEach((item, idx) => {
    item.id = idx
  })
  saveList(list)
}

provide("addItem", addItem)
provide("removeItem", removeItem)

loadList(initList)

const category = [
  {label:'한식', value:'korea'},
  {label:'중식', value:'china'},
  {label:'일식', value:'japan'},
  {label:'양식', value:'western'},
  {label:'기타', value:'etc'},
]
provide("category", category)
</script>