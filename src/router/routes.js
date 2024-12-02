import ListView from '/@views/ListView.vue'
import RandomView from '/@views/RandomView.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
})

const routes = [
  { path: '/', redirect: '/list' },
  { path: '/list', name: 'listView', component: ListView },
  { path: '/random', name: 'randomView', component: RandomView },
  { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes
