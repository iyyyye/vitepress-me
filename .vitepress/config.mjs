import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iyyye.me",
  description: "前端 程序员 个人网站",
  themeConfig: {
    outlineTitle:"本节目录",
    outline:[2,6],

    logo:'/logo1.png',
   
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页',items:[
        { text:'主页',link: '/' },
        {text:'简历',link:'/jianli/'}

      ]},
      { text: '学习笔记',items:[
        { text:'vue2',link: '/xuexibiji/vue2' },
        { text:'vue3',link: '/xuexibiji/vue3' },
        { text:'JavaScript',link: '/xuexibiji/js' },
        { text:'ajax',link: '/xuexibiji/ajax' },
        { text:'git',link: '/xuexibiji/git' },
        { text:'数据结构',link: '/xuexibiji/sjjg' },
        { text:'计算机网络',link: '/xuexibiji/jw' },
        { text:'手写代码',link: '/xuexibiji/shouxie' },
      
      ]
 },




 { text: '项目经验',link: '/xiangmu/' },

// {text:'作品集',link:'/'},

    ],

    sidebar: {
      '/jianli/': [
        {
          text: '简历', link: '/jianli/' 
        }
      ],
      '/xuexibiji/': [
        {
          text: 'vue2', link: '/xuexibiji/vue2' ,
         
        },
        {
          text: 'vue3', link: '/xuexibiji/vue3' ,
         
        },{
           text:'JavaScript',link:'/xuexibiji/js'
        }, {
          text: 'ajax', link: '/xuexibiji/ajax' ,
         
        },
        {
          text: 'git', link: '/xuexibiji/git' ,
         
        }, {
          text: '计算机网络', link: '/xuexibiji/jw' ,
         
        },
        {
          text: '数据结构', link: '/xuexibiji/sjjg' ,
         
        },
        {
          text: '手写源码', link: '/xuexibiji/ym' ,
         
        },
       
       
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iyyyye' }
    ],
    footer:{
      message: "联系方式：huaan0226@163.com",
      copyright: "Copyright © 2025 Li Jiye. All rights reserved",
    },
  }
  
})
