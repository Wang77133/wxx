//引入vue-router
import { createRouter, createWebHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出
import Index from '@/views/static/index.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
//白名单
<<<<<<< HEAD
const whiteList = [
    "/",
    "/login",
    "/ums-member-task"
]
=======
const whiteList = ['/', '/login', '/cms-subject-category']
>>>>>>> a5dd1a8bdfb31291488ee6f9385ce387e1602478
import { useUserStore } from '../store/user'

//路由表
const routes = [{
        path: '/', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf 
        name: 'home', //命名路由
        component: Index, //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
    },
    {
        path: '/adcate',
        name: 'adCate',
        component: () =>
            import ('../views/static/adCate.vue') // 懒加载
    },

    {
<<<<<<< HEAD
        path: '/pms-product-attribute-category',
        name: 'pms-product-attribute-category',
        component: () => import('@/views/admin/pms-product-attribute-category.vue'), // 懒加载
      },
      
=======
<<<<<<< HEAD
        path: '/ums-member-task',
        name: 'ums-member-task',
        component: () => import('@/views/admin/ums-member-task.vue') // 懒加载
      },
      
=======
        path: '/ums-admin',
        name: 'ums-admin',
        component: () => import('@/views/admin/ums-admin.vue'), // 懒加载
      },
      
    {
        path: '/sms-coupon',
        name: 'sms-coupon',
        component: () =>
            import ('@/views/admin/sms-coupon.vue') // 懒加载
    },
    {
        path: '/sms-flash-promotion-session',
        name: 'sms-flash-promotion-session',
        component: () =>
            import ('@/views/admin/sms-flash-promotion-session.vue') // 懒加载
    },
    {
        path: '/cms-subject-category',
        name: 'cms-subject-category',
        component: () =>
            import ('@/views/static/cms-subject-category.vue') // 懒加载
    },

<<<<<<< HEAD
  {
    path: '/adcate',
    name: 'adCate',
    component: () => import('@/views/static/adCate.vue'), // 懒加载
  },
  {
    path: '/ums_rule',
    name: 'ums_rule',
    component: () => import('@/views/admin/ums_rule.vue'), // 懒加载
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/static/login.vue'), // 懒加载
  },
  {
    path: '/admin',
    name: 'admin',
    component: LayoutAdmin,
    children: [
=======
>>>>>>> 1c64c5a25deae3ed4b5a6a8f9f288f9b5de79f82
      {
        path:'/pmsFeight',
        name:'pmsFeight',
        component:()=>import('@/views/admin/pmsFeight.vue'),

      },
     
      
>>>>>>> a5dd1a8bdfb31291488ee6f9385ce387e1602478
>>>>>>> f3090e7593cc1a4795521249cd63ee6659f113cd
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/static/login.vue') // 懒加载
    },
    {
        path: '/admin',
        name: 'admin',
        component: LayoutAdmin,
        children: [{
                path: '',
                name: 'admin-index',
                component: () =>
                    import ('@/views/admin/index.vue')
            },
            {
                path: 'info',
                name: 'admin-info',
                component: () =>
                    import ('@/views/admin/info.vue')
            },
            {
                path: 'logout',
                name: 'admin-logout',
                component: () =>
                    import ('@/views/admin/logout.vue')
            }, {
                path: 'changepassword',
                name: 'admin-changepassword',
                component: () =>
                    import ('@/views/admin/changepassword.vue')
            },
            {
                path: 'forgetpassword',
                name: 'admin-forgetpassword',
                component: () =>
                    import ('@/views/admin/forgetpassword.vue')
            },

            {
                path: '/', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
                name: 'home', //命名路由
                component: Index, //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
            },

            {
                path: '/cms_log', //访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf
                name: 'cms_log', //命名路由
                component: () =>
                    import ('@/views/admin/cms_log.vue'),
            },

            {
                path: '/ums-member-receive-address',
                name: 'ums-member-receive-address',
                component: () =>
                    import ('../views/admin/ums-member-receive-address.vue') // 懒加载
            },
            {
                path: '/cms-help-category',
                name: 'cms-help-category',
                component: () =>
                    import ('../views/admin/cms-help-category.vue') // 懒加载
            },
            {
                path: '/cms-topic',
                name: 'cms-topic',
                component: () =>
                    import ('@/views/admin/cms-topic.vue'), // 懒加载
            },
            {
                path: '/adcate',
                name: 'adCate',
                component: () =>
                    import ('@/views/static/adCate.vue'), // 懒加载
            },
            {
                path: '/sms-flash-promotion',
                name: 'sms-flash-promotion',
                component: () =>
                    import ('@/views/admin/sms-flash-promotion.vue'), // 懒加载
            },
            {
                path: '/cms-topic',
                name: 'cms-topic',
                component: () =>
                    import ('@/views/admin/cms-topic.vue'), // 懒加载
            },
            {
                path: '/pms-product-category',
                name: 'pms-product-category',
                component: () =>
                    import ('@/views/admin/pms-product-category.vue'), // 懒加载
            },

            {
                path: '/login',
                name: 'login',
                component: () =>
                    import ('@/views/static/login.vue'), // 懒加载
            },
            {
                path: '/admin',
                name: 'admin',
                component: LayoutAdmin,
                children: [{
                        path: '',
                        name: 'admin-index',
                        component: () =>
                            import ('@/views/admin/index.vue'),
                    },
                    {
                        path: 'info',
                        name: 'admin-info',
                        component: () =>
                            import ('@/views/admin/info.vue'),
                    },
                    {
                        path: 'logout',
                        name: 'admin-logout',
                        component: () =>
                            import ('@/views/admin/logout.vue'),
                    },
                    {
                        path: 'changepassword',
                        name: 'admin-changepassword',
                        component: () =>
                            import ('@/views/admin/changepassword.vue'),
                    },
                    {
                        path: 'forgetpassword',
                        name: 'admin-forgetpassword',
                        component: () =>
                            import ('@/views/admin/forgetpassword.vue'),
                    },
                ],
            },


            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () =>
                    import ('../views/404.vue'), // 懒加载
            }
<<<<<<< HEAD

        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')// 懒加载  
=======
        ],
>>>>>>> f3090e7593cc1a4795521249cd63ee6659f113cd
    }
]
const router = createRouter({
<<<<<<< HEAD
  //模式
  history: createWebHistory(),
  routes,
})
//前置路由守卫
//用户状态 user.js
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()

//   if (whiteList.includes(to.path)) {
//     // 在白名单中的路径可以无需验证直接访问
//     next()
//   } else {
//     if (userStore.token && userStore.token.length > 0) {
//       // 用户已经登录，允许访问请求的路径
//       next()
//     } else {
//       // 用户未登录，重定向到登录页面
//       next({ name: 'login' })
//     }
//   }
// })
=======
        //模式
        history: createWebHistory(),
        routes,
    })
    //前置路由守卫
    //用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (whiteList.includes(to.path)) {
        // 在白名单中的路径可以无需验证直接访问
        next()
    } else {
        if (userStore.token && userStore.token.length > 0) {
            // 用户已经登录，允许访问请求的路径
            next()
        } else {
            // 用户未登录，重定向到登录页面
            next({ name: 'login' })
        }
    }
})
>>>>>>> 1c64c5a25deae3ed4b5a6a8f9f288f9b5de79f82

export default router