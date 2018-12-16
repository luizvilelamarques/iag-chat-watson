import Vue from 'vue'
import Router from 'vue-router'
import MenuChat from '@/components/MenuChat'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuChat',
      component: MenuChat
    },
	{
      path: 'chat',
      name: 'chat',
      component: Chat
    }
  ]
})
