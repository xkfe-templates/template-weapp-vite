import { defineAppJson } from 'weapp-vite/json'

export default defineAppJson({
  "$schema": "https://vite.icebreaker.top/app.json",
  pages: [
    'pages/index/index',
    'pages/utils/utils',
    'pages/mine/mine',
  ],
  subpackages: [
    {
      root: 'subpackages/example',
      name: 'example',
      pages: [
        'pages/image-plus/image-plus',
        'pages/count-to/count-to',
        'pages/loadmore/loadmore',
        'pages/empty/empty',
        'pages/overlay/overlay',
        'pages/popup/popup',
      ]
    },
    {
      root: 'subpackages/exam_utils',
      name: 'exam_utils',
      pages: [
        'pages/request/request',
        'pages/form-validate/form-validate',
        'pages/encrypt/encrypt',
      ]
    }
  ],
  preloadRule: {},
  __usePrivacyCheck__: true,
  window: {
    navigationBarTitleText: '小程序模板',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#34B167',
  },
  style: 'v2',
  componentFramework: 'glass-easel',
  sitemapLocation: 'sitemap.json',
  lazyCodeLoading: 'requiredComponents',
  plugins: {},
  tabBar: {
    color: '#373737',
    selectedColor: '#34B167',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: "/images/tabbar/components.png",
        selectedIconPath: "/images/tabbar/components-selected.png"
      },
      {
        pagePath: 'pages/utils/utils',
        text: 'utils',
        iconPath: "/images/tabbar/fn.png",
        selectedIconPath: "/images/tabbar/fn-selected.png"
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: "/images/tabbar/mine.png",
        selectedIconPath: "/images/tabbar/mine-selected.png"
      },

    ],
  },
})
