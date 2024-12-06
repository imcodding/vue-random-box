<template>
  <div class="list-new">
    <select v-model="type">
      <option v-for="item of category" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <input
      type="text"
      v-model="name"
      placeholder="입력해주세요"
      @keyup.enter="onAddItem"
      maxlength="20"
    />
    <button type="button" @click="onAddItem">추가</button>
  </div>
</template>

<script>
export default {
  name: "RandomNew"
}
</script>

<script setup>
import { reactive, toRefs, inject } from "vue"

const addItem = inject("addItem");
const category = inject("category");

const category_obj = reactive({name:"", type:"korea"})

const onAddItem = () => {
  let tmp = category_obj.name.trim();
  if(tmp && tmp.length > 0) {
    addItem(category_obj.name, category_obj.type)
    category_obj.name = ""
  }
}
const { name, type } = toRefs(category_obj)
</script>

