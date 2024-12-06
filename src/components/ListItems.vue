<template>
  <div class="list-items">
    <div v-for="(item, idx) in data" :key="item.id">
      <span>{{ item.name }}</span>
      <img src="/@/assets/images/Delete.svg" width="20" height="20" 
      @click="onRemoveItem(item)" />
    </div>
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
const onRemoveItem = (item) => {
  if(!confirm(`'${item.name}' 삭제하시겠습니까?`)) return;
  removeItem(item.id)
}

</script>