import Vue from 'vue'
import Router from 'vue-router'
import EmpTable from '@/components/EmpTable'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'EmpTable',
            component: EmpTable
        }
    ]
})
