import Login from './views/Login.vue'
import NotFound from './views/404.vue'

import QyHome from './views/QyPage/Home.vue'
import QyMain from './views/QyPage/Main.vue'
import QySet from './views/QyPage/set/Set.vue'
import QyGoods from './views/QyPage/goods/Goods.vue'
import QyAddGoods from './views/QyPage/goods/AddGoods.vue'
import QyExtendGoods from './views/QyPage/goods/ExtendGoods.vue'
import QyProperty from './views/QyPage/property/Property.vue'
import QyOrder from './views/QyPage/order/Orderlist.vue'
import QyOrderDetails from './views/QyPage/order/OrderDetails.vue'

import ShHome from './views/ShPage/Home.vue'
import ShMain from './views/ShPage/Main.vue'
import ShSet from './views/ShPage/set/Set.vue'
import ShGoods from './views/ShPage/goods/Goods.vue'
import ShGoodDetails from './views/ShPage/goods/GoodDetails.vue'
import ShProperty from './views/ShPage/property/Property.vue'
import ShCompany from './views/ShPage/company/company.vue'
import ShInduction from './views/ShPage/company/induction.vue'


let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: QyHome,
        name: '概况',
        type: "qiye",
        iconCls: 'fa fa-cube', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/qymain',
            component: QyMain,
            name: '概况 '
        }]
    },
    {
        path: '/',
        component: QyHome,
        name: '商品',
        type: "qiye",
        iconCls: 'fa fa-window-restore', //图标样式class
        children: [{
                path: '/qygoods',
                component: QyGoods,
                name: '商品管理'
            },
            {
                path: '/qyaddgoods',
                component: QyAddGoods,
                name: '添加商品'
            },
            {
                path: '/qyextendgoods',
                component: QyExtendGoods,
                name: '商品推广'
            },
        ]
    },
    {
        path: '/',
        component: QyHome,
        name: '订单',
        type: "qiye",
        iconCls: 'fa fa-calendar-check-o', //图标样式class
        children: [{
                path: '/qyorder',
                component: QyOrder,
                name: '订单列表'
            },
            {
                path: '/qyorderdetails',
                component: QyOrderDetails,
                name: '订单详情'
            },
        ]
    },
    {
        path: '/',
        component: QyHome,
        type: "qiye",
        name: '财务',
        iconCls: 'fa fa-bar-chart', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/qyproperty',
            component: QyProperty,
            name: '资产管理'
        }]
    },
    {
        path: '/',
        component: QyHome,
        type: "qiye",
        name: '设置',
        iconCls: 'fa fa-gear', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/qyset',
            component: QySet,
            name: '设置 '
        }]
    },



    {
        path: '/',
        component: ShHome,
        name: '概况   ',
        type: "shanghui",
        iconCls: 'fa fa-cube', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/shmain',
            component: ShMain,
            name: '概况  '
        }]
    },
    {
        path: '/',
        component: ShHome,
        name: '商品管理   ',
        type: "shanghui",
        iconCls: 'fa fa-cube', //图标样式class
        children: [{
                path: '/shgoods',
                component: ShGoods,
                name: '商品管理  '
            }, {
                path: '/shgoodsdetails',
                component: ShGoodDetails,
                name: '商品详情'
            },

        ]
    },
    {
        path: '/',
        component: QyHome,
        type: "shanghui",
        name: '财务',
        iconCls: 'fa fa-bar-chart', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/shproperty',
            component: ShProperty,
            name: '财务管理'
        }]
    },

    {
        path: '/',
        component: QyHome,
        type: "shanghui",
        name: '企业管理',
        iconCls: 'fa fa-bar-chart', //图标样式class
        children: [{
                path: '/shcompany',
                component: ShCompany,
                name: '企业列表'
            }, {
                path: '/shinduction',
                component: ShInduction,
                name: '入会审核'
            }


        ]
    },
    {
        path: '/',
        component: ShHome,
        type: "shanghui",
        name: '设置',
        iconCls: 'fa fa-gear', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/shset',
            component: ShSet,
            name: '设置 '
        }]
    },


    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;