import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iyyye.me",
  description: "前端 程序员 个人网站",
  themeConfig: {
    logo:'/logo1.png',
   
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页',items:[
        { text:'主页',link: '/' },
        {text:'简历',link:'/jianli/'}

      ]},
      { text: '学习笔记',items:[
        { text:'vue',link: '/xuexibiji/VUE' },
        { text:'JavaScript',link: '/' },
        { text:'ajax',link: '/' },
        { text:'git',link: '/' },
        { text:'java',link: '/' },
        { text:'数据结构',link: '/' },
        { text:'计算机网络',link: '/' },
        { text:'手撕源码',link: '/' },
      
      ]
 },




 { text: '项目经历',items:[
  { text:'xxx',link: '/' },
]},

{text:'作品集',link:'/'},

    ],

    sidebar: {
      '/jianli/': [
        {
          text: '简历', link: '/jianli/' 
        }
      ],
      '/xuexibiji/': [
        {
          text: 'vue', link: '/xuexibiji/vue' 
        }
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      message: "联系我：huaan0226@163.com | vx:iyyyey",
      copyright: "Copyright © 2025 Li Jiye. All rights reserved",
    },
  }
  
})
