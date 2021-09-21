import Vue from 'vue'
import Router from 'vue-router'
import UsersPage from '@/components/UsersPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'EmpTable',
            component: UsersPage
        }
    ]
})
