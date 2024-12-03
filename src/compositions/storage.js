import { reactive, toRefs } from "vue"

export const useStorage = () => {
  const KEY = 'random-list'
  const storage_obj = reactive({ storage_id:0 })
  const loadList = (initList) => {
    let temp_list = JSON.parse(localStorage.getItem(KEY) || '[]')
    temp_list.forEach((item, idx) => {
      item.id = idx
    })
    storage_obj.storage_id = temp_list.length;
    initList(temp_list)
  }
  const saveList = (list) => {
    localStorage.setItem(KEY, JSON.stringify(list.value))
  }

  return {
    ...toRefs(storage_obj),
    loadList,
    saveList
  }
}
