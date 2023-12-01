module.exports = {
    title: '阿文的前端小世界',
    base: '/basis/',
    shouldPrefetch: () => false,
    description: 'Just playing around',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: '概述', link: '/' },
            { text: '前端基础', link: '/basis/' },
            { text: 'FAQ', link: '/faq' },
            { text: 'github', link: 'https://github.com/godbasin/vue-learning' },
        ],
        sidebar: {
            '/basis/': [
                {
                    title: '前端入门',
                    collapsable: true,
                    children: [
                        '/basis/basis1/test1.md',
                    ]
                }, {
                    title: '前端深入理解',
                    collapsable: true,
                    children: [
                        '/basis/basis2/test2.md',
                    ]
                }
            ],
            '/front-end-others/': [
                {
                    title: '玩转 Angular',
                    collapsable: true,
                    children: [
                        '/basis/basis1/test1.md',
                    ]
                }, {
                    title: '试试 Cycle.js',
                    collapsable: true,
                    children: [
                        '/basis/basis1/test1.md',
                        '/basis/basis1/test1.md',
                    ]
                }
            ],
            '/front-end-addon/': [
                {
                    title: '不止单线程',
                    collapsable: true,
                    children: [
                        '/basis/basis1/test1.md',
                    ]
                }, {
                    title: '不止纯前端',
                    collapsable: true,
                    children: [
                        '/basis/basis1/test1.md',
                        '/basis/basis1/test1.md',
                    ]
                }
            ],
        }
    },

};
