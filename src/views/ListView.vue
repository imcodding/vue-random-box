<template>
  <list-container />
</template>

<script>
export default {
  name: "ListView"
}
</script>

<script setup>
import ListContainer from '/@components/ListContainer.vue';
import { useRoute } from 'vue-router'
import { provide } from 'vue';

const route = useRoute()
const type = route.params.type

provide("filterd_type", type)

</script>