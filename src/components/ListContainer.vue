<template>
  <list-category />
  <list-new />
  <list-items />
  <div>
    <router-link to="/random">랜덤돌리기</router-link>
  </div>
</template>

<script>
export default {
  name: "ListContainer"
}
</script>

<script setup>
import ListCategory from './ListCategory.vue';
import ListNew from './ListNew.vue';
import ListItems from './ListItems.vue';
</script>