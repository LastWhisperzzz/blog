module.exports = {
  "title": "LastWhisper",
  "description": "Talk is cheap. Show me the code.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
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
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      { 
        "text": "留言",
        "link": "/message/",
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
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "subSidebar": 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "valineConfig": {
      "showComment": false,
      "appId": "8nCgw7Mg1jH7xmBGgKIlHjUy-9Nh9j0Va",// your appId
      "appKey": 'pkkDGvoMSm3XPK1B34upxbpS', // your appKey
      "avatar": 'robohash', //头像展示方式
      "meta": ['nick','mail'], //评论者相关属性
      "placeholder": '🎈' ,
      "pageSize": 10,
      // "visitor": true, //文章访问量统计
      "recordIP": true //记录评论者IP
    },
    "logo": "/logo.jpg", 
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LastWhisper", 
    "authorAvatar": "/avatar.jpg", 
    // "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}