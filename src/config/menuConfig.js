export default [
    {
        title: '首页',
        key: '/home',
        icon: 'appstore',
    },
    {
        title: 'UI',
        key: '/ui',
        icon: 'appstore',
         children: [{
            title: '按钮',
            key: '/ui/buttons'
        }, {
            title: '弹框',
            key: '/ui/modals'
        }, {
            title: 'Loadings',
            key: '/ui/loadings'
        }, {
            title: 'Notifications',
            key: '/ui/notifications'
        }, {
            title: 'Messages',
            key: '/ui/messages'
        }, {
            title: 'Tabs',
            key: '/ui/tabs'
        }]
    },
    {
        title: '表单',
        key: '/form',
        icon: 'appstore',
        children: [{
            title: '登录',
            key: '/form/login'
        }, {
            title: '注册',
            key: '/form/register'
        }]
    },
    {
        title: '菜单1',
        key: '/m1',
        icon: 'appstore',
        children: [
            {
                title: '菜单11',
                key: '/m11'
            },
            {
                title: '菜单12',
                key: '/m12'
            }
        ]
    }
]