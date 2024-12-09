<template>
  <div class="list-category">
    <ul>
      <li v-for="(item, idx) in category" :key="item.idx" :class="item.value == filter ? 'active' : ''">
        <a @click="filter = item.value">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListCategory"
}
</script>

<script setup>
import { ref, watch, inject } from "vue"
const emit = defineEmits(['change-filter'])
const props = defineProps({ filterType: { type: String, default: "all" }})
const filter = ref(props.filterType)

const category = inject("category");
category.unshift({label:'전체', value:'all'})

watch(
  () => filter.value,
  (filter) => {
    emit('change-filter', filter)
  }
)
</script>

<style scoped>
.active {
  background-color: #F7E02C;
}

</style>