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

import PtHome from './views/PtPage/Home.vue'
import PtMain from './views/PtPage/Main.vue'
import PtSet from './views/PtPage/set/Set.vue'
import PtGoods from './views/PtPage/goods/Goods.vue'
import PtAddGoods from './views/PtPage/goods/AddGoods.vue'
import PtSelfGoods from './views/PtPage/goods/SelfGoods.vue'
import PtProperty from './views/PtPage/property/Property.vue'
import PtOrder from './views/PtPage/order/Orderlist.vue'
import PtOrderDetails from './views/PtPage/order/OrderDetails.vue'
import PtCompany from './views/PtPage/company/company.vue'
import PtCommerce from './views/PtPage/company/induction.vue'

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
    // 企业 start
    {
        path: '/',
        component: QyHome,
        name: '企业概况',
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
        name: '商品管理',
        type: "qiye",
        iconCls: 'fa fa-window-restore', //图标样式class
        leaf: true, //只有一个节点
        children: [{
                path: '/qygoods',
                component: QyGoods,
                name: '商品管理'
            },
            {
                path: '/qyaddgoods',
                component: QyAddGoods,
                hidden: true,
                name: '添加商品'
            }
        ]
    },
    {
        path: '/',
        component: QyHome,
        name: '订单管理',
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
        name: '财务管理',
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

    // 商会 start
    {
        path: '/',
        component: ShHome,
        name: '商会概况   ',
        type: "shanghui",
        iconCls: 'fa fa-pie-chart', //图标样式class
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
        leaf: true, //只有一个节点
        iconCls: 'fa fa-cube', //图标样式class
        children: [{
                path: '/shgoods',
                component: ShGoods,
                name: '商品管理  '
            },
            {
                path: '/shgoodsdetails',
                component: ShGoodDetails,
                hidden: true,
                name: '商品详情  '
            }
        ]
    },
    {
        path: '/',
        component: ShHome,
        type: "shanghui",
        name: '财务管理  ',
        iconCls: 'fa fa-bar-chart', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/shproperty',
            component: ShProperty,
            name: '财务管理   '
        }]
    },

    {
        path: '/',
        component: ShHome,
        type: "shanghui",
        name: '企业管理',
        iconCls: 'fa  fa-tasks', //图标样式class
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
    // 平台 start
    {
        path: '/',
        component: PtHome,
        name: '平台概况',
        type: "pingtai",
        iconCls: 'fa fa-cube', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/ptmain',
            component: PtMain,
            name: '平台概况 '
        }]
    },
    {
        path: '/',
        component: PtHome,
        name: '商品管理',
        type: "pingtai",
        iconCls: 'fa fa-window-restore', //图标样式class
        children: [{
                path: '/ptgoods',
                component: PtGoods,
                name: '商品管理'
            }, {
                path: '/ptselfgoods',
                component: PtSelfGoods,
                name: '自营商品'
            },
            {
                path: '/ptaddgoods',
                component: PtAddGoods,
                name: '添加商品'
            },

        ]
    },
    {
        path: '/',
        component: PtHome,
        name: '订单管理',
        type: "pingtai",
        iconCls: 'fa fa-calendar-check-o', //图标样式class
        children: [{
                path: '/ptorder',
                component: PtOrder,
                name: '订单列表'
            },
            {
                path: '/ptorderdetails',
                component: PtOrderDetails,
                name: '订单详情'
            },
        ]
    },
    {
        path: '/',
        component: PtHome,
        name: '客户管理',
        type: "pingtai",
        iconCls: 'fa fa-calendar-check-o', //图标样式class
        children: [{
                path: '/ptCommerce',
                component: PtCommerce,
                name: '商会管理'
            }, {
                path: '/ptCompany',
                component: PtCompany,
                name: '企业管理'
            }


        ]
    },
    {
        path: '/',
        component: PtHome,
        type: "pingtai",
        name: '财务管理',
        iconCls: 'fa fa-bar-chart', //图标样式class
        leaf: true, //只有一个节点
        children: [{
            path: '/ptproperty',
            component: PtProperty,
            name: '交易记录'
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