<template>
  <div v-for="(item, idx) in data" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: "RandomList"
}
</script>

<script setup>

const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})


</script>