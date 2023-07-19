//框架核心配置
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        share: true,
        shareTitle: '大丸子',
        homePath: '/pages/home/index',
        tabBar: [{
            title: '首页',
            icon: '/assets/imgs/home.png',
            curIcon: '/assets/imgs/home-active.png',
            url: '/pages/home/index',
            type: 'tab'
        },
        {
            title: '分类',
            icon: '/assets/imgs/cascades.png',
            curIcon: '/assets/imgs/cascades-active.png',
            url: '/pages/home/index',
            type: 'tab'
        },
        {
            title: '购物车',
            icon: '/assets/imgs/cart.png',
            curIcon: '/assets/imgs/cart-active.png',
            url: '/pages/home/index',
            type: 'tab'
        },
        {
            title: '我的',
            icon: '/assets/imgs/my.png',
            curIcon: '/assets/imgs/my-active.png',
            url: '/pages/home/index',
            type: 'tab'
        }],
    }
})