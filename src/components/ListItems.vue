<template>
  <div v-for="(item, idx) in data" :key="item.id">
    {{ item.name }}
    <img src="/@/assets/images/Delete.svg" width="20" height="20" 
      @click="onRemoveItem(item.id)" />
  </div>
</template>

<script>
export default {
  name: "RandomList"
}
</script>

<script setup>
import { inject } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})
const removeItem = inject("removeItem")
const onRemoveItem = (id) => {
  if(!confirm('삭제하시겠습니까?')) return;
  removeItem(id)
}

</script>