module.exports = {
  "title": "LastWhisper",
  "description": "Talk is cheap. Show me the code.",
  "dest": "dist", // 打包目录
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      },
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },

  // 主题配置
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      { 
        "text": "关于我",
        "link": "/about/",
        "icon": "reco-suggestion"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/LastWhisperzzz",
        "icon": "reco-github"
      }
    ],
    // 侧边栏设置
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "subSidebar": 'auto', // 自动形成侧边导航

    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "分类" //  默认 “分类”
      },
      "tag": {
        "location": 3, // 在导航栏菜单中所占的位置，默认3
        "text": "标签" // 默认 “标签”
      }
    },
    "friendLink": [
      {
        "title": "vuepress",
        "desc": "Vue 驱动的静态网站生成器",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress.vuejs.org/zh/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],

    // 评论
    "valineConfig": {
      "showComment": false,
      "appId": "8nCgw7Mg1jH7xmBGgKIlHjUy-9Nh9j0Va",// your appId
      "appKey": 'pkkDGvoMSm3XPK1B34upxbpS', // your appKey
      "avatar": 'retro', //头像展示方式(''/mp/identicon/monsterid/wavatar/robohash/retro/hide) 官方图形/灰白头像/几何图/小怪物/组合头像/8位像素图/机器人/不显示
      "meta": ['nick','mail','link'], //评论者相关属性
      // "requiredFields": ['nick','mail'], //必填项
      "placeholder": '来发条评论吧！昵称填写qq可显示qq头像和昵称，填写邮箱可以收到回复哦(●\'◡\'●)' ,
      "pageSize": 10,
      // "visitor": true, //文章访问量统计
      "recordIP": true, // 记录评论者IP
      "enableQQ": true, // 是否启用昵称框自动获取QQ昵称和QQ头像
      // "avatarForce": true // 每次访问强制拉取最新的评论列表头像
    },

    "logo": "/logo.jpg", // 导航栏头像
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LastWhisper", 
    "authorAvatar": "/avatar.jpg", //主页头像
    "record": "浙ICP备2020039354号", // 备案号
    "recordLink": "http://beian.miit.gov.cn/",
    "startYear": "2019"
  },

  // 插件配置
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'], 
        clean: true, //是否隐藏所有按钮
        messages: {
          welcome: '欢迎来到LastWhisper的小站',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦',
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-K13CY32124' 
      }
    ]
  ],
  "markdown": {
    "lineNumbers": true
  }
}