# VUE2+VUE3 （2023.11.30-）

## VUE2

# day1

### vue快速上手

#### 概念：vue是一个用于构建用户界面的渐进式框架

#### 创建 Vue 实例，初始化渲染

核心步骤4步:
1.准备容器
2.引包(官网)- 开发版本 /生产版本
3.创建Vue 实例 new Vue()
4.指定配置项=>渲染数据
el指定挂载点
data 提供数据
![创建一个vue实例](../note/创建一个vue实例.png)

#### 插值表达式{{}}

一种Vue的模板语法
语法：**{{表达式}}**
注意：数据必须存在；不能写语句：不能在标签属性中使用
插值表达式不具备解析标签的能力，用v-html

#### 响应式特征

数据改变，视图自动更新
data中的数据，是会被添加到实例上。
1.访问数据：**实例.属性名**
2.修改数据：**实例.属性名 = 新值**

#### 开发者工具

Vue.js devtools浏览器调试工具

### vue指令

**v-html:**
作用: 设置元素的 innerHTML
语法: `v-html="表达式"`

**show**
作用:控制元素显示隐藏
语法:  `V-show ="表达式"`  表达式值 true 显示，false 隐藏

**v-if**
作用:控制元素显示隐藏(条件渲染)
语法: `v-if ="表达式"`	表达式值 true 显示，false 隐藏

v-show底层原理: 	切换 css 的 display: none 来控制显示隐藏(频繁切换显示隐藏的场景)
v-if 底层原理: 	根据判断条件控制元素的创建和移除(要么显示，要么隐藏)

**v-else**
辅助 v-if 进行判断染，紧挨着v-if

**v-else-if**
`v-else-if = "表达式"`

**v-on**
`v-on:监听事件="内联语句"`
简便写法：@ = v-on:
`v-on:"监听事件"="methods中的函数名"`
<img src="../note/vue里的method方法.png" alt="vue里的method方法" style="zoom:53%;" />
vue实例化的对象当中的method里面的函数，this都指向当前vue实例化出来的对象	
**v-on调用传参**
<img src="../note/v-on调用传参.png" alt="v-on调用传参" style="zoom:60%;" />

**v-bind**
动态设置html的标签属性（图片）
`v-bind:属性名="表达式"`
简写：v-bind: = :
<img src="../note/v-bind语法.png" alt="v-bind语法" style="zoom: 50%;" />

**v-for**
基于数据循环，多次渲染整个元素
v-for="(item,index) in 数组"
![v-for语法](..d/note/vue笔记截图/v-for语法.png)

tips：
// 通过 id 进行删除数组中的 对应项 > filter(不会改变原数组)
// filter: 根据条件，保留满足条件的对应项，得到一个新数组。
// this.list = this.booksList.filter(item => item.id !== id))

**v-for里面的key**
key属性 ="唯一标识
给列表项添加的唯一标识。便于Vue进行列表项的正确排序复用
推荐使用 **id** 作为 key (唯一)
`:key="item.id"`

**v-model**
给 **表单元素** 使用，**双向数据绑定** -> 可以快速**获取或设置**表单元素内容
`v-model='变量'`

**小黑记事本案例**
<img src="../note/小黑记事本案例.png" alt="小黑记事本案例" style="zoom:50%;" />



# day2

### 指令补充

**指令修饰符**
通过**"."**指明一些指令**后缀**，不同后缀装了不同的处理操作简化代码
<img src="../note/指令修饰符.png" alt="指令修饰符" style="zoom:50%;" />

**v-bind对于样式控制的增强**
![v-bind操作class](../note/v-bind操作class.png)

![tab栏的active效果](../note/tab栏的active效果.png)

**v-bind-操作style**
![v-bind操作style](E../note/v-bind操作style.png)

<img src="../note/Snipaste_2023-12-02_17-01-47.png" alt="Snipaste_2023-12-02_17-01-47" style="zoom:50%;" />

v-model应用于其他表单元素
<img src="../note/Snipaste_2023-12-02_17-02-54.png" alt="Snipaste_2023-12-02_17-02-54" style="zoom:50%;" />

tips
<img src="../note/tips3.png" alt="tips3" style="zoom:50%;" />

### computed计算属性

基于现有的数据，计算出来的新属性。依赖的数据变化，**自动重新计算**。
先声明后使用，声明在**computed配置项**中，一个计算属性对应一个函数，需要return返回
<img src="../note/计算属性.png" alt="计算属性" style="zoom:50%;" />

~~~JavaScript
computed:{
totalCount(){
return this.list.reduce((sum, item) => sum + item.num, 0)
}
}
~~~

computed计算属性vsmethod方法
computed的优势：![computed的优势](../note/computed的优势.png)

计算属性的完整写法：
~~~JavaScrit
computed:{
计算属性名:{
get(){
一段代码逻辑(计算逻辑)
return 结果
},
set(修改的值){
一段代码逻辑(修改逻辑)
}
}
}
~~~

**vue写学生成绩案例**

### watch侦听器

作用:监视数据变化，执行一些 业务逻辑 或异步操作
简单写法（方法格式） ：简单类型数据，直接监视
<img src="../note/watch监听器.png" alt="watch监听器" style="zoom:50%;" />
完整写法：添加额外配置项

防抖-实例：
![延时](../note/延时.png)

注：timer与页面渲染无关的，不放进data里，直接挂载到实例的身上当做一个属性就行

watch的完整写法：
(1) **deep: true** 对复杂类型深度监视
(2)**immediate: true** 初始化立刻执行一次handler方法
完整写法（按对象格式）：

~~~javas
obj:{
deep:true，//监听对象全部属性的变化
immediate:true, //立即执行，handler
handler(newValue){
//操作
}
}
~~~

### 综合案例水果购物车

本地化:
<img src="../note/本地化deep true.png" alt="本地化deep true" style="zoom:50%;" />

<img src="../note/Snipaste_2023-12-03_19-18-22.png" alt="Snipaste_2023-12-03_19-18-22" style="zoom:50%;" />
-

# day3

### 生命周期

一个vue实例从**创建**到**销毁**的整个过程
![生命周期](../note/生命周期.png)

生命周期函数
<img src="../note/生命周期函数.png" alt="生命周期函数" style="zoom:40%;" />

一进页面获取焦点-用mounted完成
<img src="../note/mounted一进页面获取焦点.png" alt="mounted一进页面获取焦点" style="zoom:68%;" />

请求命令写在created里面

<img src="../note/添加的前置alert.png" alt="添加的前置alert" style="zoom:80%;" />

工程化开发&脚手架Vue CLI

<img src="../note/安装vuecli.png" alt="安装vuecli" style="zoom:50%;" />

![脚手架目录](../note/脚手架目录.png)

`render:(createElement) => {`
`return creatElement(App)}`
等于
`render: h => h (App)`

<img src="../note/vuecli组件化开发.png" alt="vuecli组件化开发" style="zoom:50%;" />

<img src="../note/app.vue的组成部分.png" alt="app.vue的组成部分" style="zoom:50%;" />

<img src="../note/appvue里加less.png" alt="appvue里加less" style="zoom:50%;" />

![普通组件的注册使用](../note/普通组件的注册使用.png)

<vuv快捷创建结构逻辑样式


局部：
<img src="../note/局部组件注册.png" alt="局部组件注册" style="zoom: 48%;" />

<img src="../note/image-20231204200440894.png" alt="image-20231204200440894" style="zoom:53%;" />

trigger on tab 打开tab快捷变<><>

<img src="../note/局部组件详情设置代码.png" alt="局部组件详情设置代码" style="zoom:45%;" />

全局：

![全局组件的注册](../note/全局组件的注册.png)

要在main.js里面导入，
<img src="../note/全局组件注册.png" alt="全局组件注册" style="zoom:50%;" />

![快捷键](../note/快捷键.png)

# day4



##### scoped样式冲突

默认情况:写在组件中的样式会**全局生效**—>因此很容易造成多个组件之间的样式冲突问题

1.**全局样式**:默认组件中的样式会作用到全局
2.**局部样式**: 可以给组件加上 **scoped** 属性，**可以让样式只作用于当前组件**`<style scoped></style>`

##### data是一个函数

<img src="../note/Snipaste_2023-12-05_20-07-42.png" alt="Snipaste_2023-12-05_20-07-42" style="zoom:40%;" />

##### 组件通信

父子关系的组件通信解决方案：props和$emit

<img src="../note/父子通信流程.png" alt="父子通信流程" style="zoom:40%;" />



非父子组件通信解决方案:provide&inject	eventbus

通用解决方案：vuex(适合复杂业务场景)






尚硅谷 2024.4.18

## P1-2配置环境和下载

## p3.创建项目各个文件的解释

.vscode文件夹	json配置文件-vscode的插件（不重要）
public文件夹	公共资源（不重要）
src文件	前端的所有重要的代码都在里面，源代码文件（工作台，重要）
gitignore忽略文件
env.d.ts	ts的识别文件（不能删除）
node_modules	依赖包安装的地址（重要，如果没有终端运行npm i）
index.html(vue3的**入口**，不要动)
package的两个文件：包的管理文件，勿动
ts的三个文件：ts相关的文件，勿动
vite.config.ts	-->安装插件、配置代理

*运行项目的dev在 package.json 里面	"dev":vite",*****
*npm run dev*
ctrl + c停止项目

创建一个项目-基于vite创建	`npm create vue@latest`

## p4编写app组件

入口index.html引入了一个文件main.ts

main.ts代码的解释<img src="../note/main.js_.png" alt="main.js_" style="zoom: 80%;" />

components文件夹里面写的是组件

 重新写一遍src，输出hello

## P5一个简单的效果-写一个组件

写一个Person的组件
<img src="../note/app组件的代码怎么写.png" alt="app组件的代码怎么写" style="zoom:80%;" />



Person.vue组件

![一个组件怎么写person](../note/一个组件怎么写person.png)

## P6 options api和composition api

Vue2: Options API 选项式API	Vue3: Composition API 组合式API

vue2中的选项式api有弊端	->	vue3的组合式api

## P7-9 compositionapi/组合式api 

#### **setup**

**![setup初阶](../note/setup初阶.png)**



#### 小tips：

①**setup里面没有维护this的语法，setup 的this指向的是undefined，vue3中已经弱化this了**
②脚手架是局部刷新不是整体刷新，有些报错一刷新就没了
③setup语法里数据需要用return返回{}对象里可以触发“对象的简写形式”
④方法和数据的变量名都需要return返回之后才可以使用
⑤此时的数据不是响应式的（后面再讲）
⑥setup所执行的时机比vue2里生命周期中的beforCreate钩子还要早

#### setup的返回值

对象（	也可以是一个渲染函数return ()=>'哈哈'	）

#### 面试题：

问：setup data methods 关系、能不能同时存在？
答：可以同时存在，但十分不推荐！data读的到setup里的数据，前提是写this.name(因为setup的生命周期比data早)，但是新的不能读到旧的

## **P10setup语法糖**

![setup语法糖写法](../note/setup语法糖写法.png)



## P11 vue3的数据响应式——用ref来创建基本类型的响应式数据：

**VUE2: 用数据劫持完成数据的响应式** 
**而VUE3里面用的是：ref 和reactive**

**ref创建基本类型的响应式数据：**

引用	import
使用	ref()
更改/方法	变量名.value![ref](../note/ref.png)

因为：

<img src="../note/REF1.png" alt="REF1" style="zoom: 67%;" />

然后：

![ref2](../note/ref2.png)

## P12、用reactive来创建对象类型的响应式数据

1.引入	import {reactive} from 'vue'
2.括号包住	let car =reactive({brand:'benchi',price:100})

reactive()是proxy

用reactive做对象数据的响应式：vue2语法![用reactive做对象数据的响应式](../note/用reactive做对象数据的响应式.png)

小tips:![reactive生成响应式对象](../note/reactive生成响应式对象.png)

## P13用ref创建对象类型的响应式数据

![ref、reactive](../note/ref、reactive.png)

ref-对象式响应数据怎么做：
<img src="../note/ref对象.png" alt="ref对象" style="zoom:67%;" />

<img src="../note/ref对象2.png" alt="ref对象2" style="zoom:67%;" />

<img src="../note/ref对象3底层.png" alt="ref对象3底层" style="zoom:67%;" />

## P14ref对比reactiv

ref创建的变量必须使用.value（可以使用vue内置插件自动写.value）

reactive重新分配一个新对象，会失去响应式(可以使用Object.assign去整体替换)
<img src="../note/object.assign.png" alt="object.assign" style="zoom:67%;" />

使用原则

<img src="../note/使用原则.png" alt="使用原则" style="zoom:150%;" />



## P15 toRefs与toRef![toRefs](../note/toRefs.png)

![roRef](../note/roRef.png)

## P16 computed计算属性

小tips：
v-bind（简写是:）是单向绑定
v-model(:value可以简写) 是双向绑定

![computed定义一个可读可写的计算属性](../note/computed定义一个可读可写的计算属性.png)

## P17-20 watch

![watch监视的四种数据](../note/watch监视的四种数据.png)

**情况一：**监视ref定义的基本类型数据
![watch情况一ref](../note/watch情况一ref.png)

**情况二：**
**监视【ref】定义的【对象类型】数据**
![ref监视对象类型数据](../note/ref监视对象类型数据.png)

**情况三:**
**监视reactive定义的【对象类型】数据，且默认开启了深度监视******

**![监视reactive定义的对象数据类型](../note/监视reactive定义的对象数据类型.png)**

**情况四：**
**监视ref或者reactive定义的【对象类型】数据中的某个属性(基本or对象)**![监视对象数据中的某个属性时](../note/监视对象数据中的某个属性时.png)

**情况五：**
**监视上述多个数据**
![监视多个数据，用数组包函数](../note/监视多个数据，用数组包函数.png)

**watchEffect**

![watcheffect](../note/watcheffect.png)

## P23标签的ref标识

<img src="../note/vue3里面app的写法.png" alt="vue3里面app的写法" style="zoom:50%;" />

**ref标识** 防止组件之间id名字的重复混淆
![ref标识](../note/ref标识.png)

ps：局部样式scoped（无脑加）

ref标识可以放在普通html标签上，拿到的是dom元素，也可以放在组件标签上，拿到的是组件的实例对象，由于vue3的保护机制，拿不到组件里的ref，需要import一个‘definedExpose’，然后写上`definedExpose({a,b,c})`

## P24 TS

![ts1](../note/ts1.png)

![ts2定义一个接口规定一个对象里面的属性](../note/ts2定义一个接口规定一个对象里面的属性.png)

暴露有三种方式：
1.默认暴露
2.分别暴露(export)
3.统一暴露

在组件中使用ts接口的时候需要注意：
![interface](../note/interface.png)

**泛型**
![ts泛型](../note/ts泛型.png)

**自定义类型**
![ts自定义类型](../note/ts自定义类型.png)

<img src="../note/ts自定义类型调用.png" alt="ts自定义类型调用" style="zoom:67%;" />

## P25 Props的使用

**Props 是用于接收父组件传递给子组件的数据的机制。**

小tips：
1.setup里面的对象类型数据同时用到了reactive响应式和ts泛型![setup里面的对象类型数据同时用到了reactive响应式和ts泛型](../note/setup里面的对象类型数据同时用到了reactive响应式和ts泛型.png)

2.ts接口可有可无![ts接口可有可无](../note/ts接口可有可无.png)

3.defined开头的函数叫做宏函数，在vue里面可以不用引入直接使用

**父(App)给子(Person)传值**

defineProps函数
![props组件传值父传子](../note/props组件传值父传子.png)

## P26-28生命周期

VUE2的生命周期
小tips：
<img src="../note/调试断点.png" alt="调试断点" style="zoom: 67%;" />
v-if全部删掉，v-show，只是隐藏结构还在

<img src="../note/vue2生命周期.png" alt="vue2生命周期" style="zoom:80%;" />



vue3的生命周期

<img src="../note/vue3生命周期.png" alt="vue3生命周期" style="zoom:67%;" />

## P29自定义Hooks

小tips：安装axios(npm i axios)
![hooks在组件里怎么引入](../note/hooks在组件里怎么引入.png)

![hooks里面的点ts文件怎么写](../note/hooks里面的点ts文件怎么写.png)

## P30路由

1.路由就是一组key-value的对应关系。（单页面应用spa应用）
2.多个路由，需要经过路由器的管理。
<img src="../note/路由的概念.png" alt="路由的概念" style="zoom: 33%;" />

### 一个小项目

1.写页面
2.安装路由 npm i vue-router
3.创建src/router,编写index.ts路由的文件
4.在main.ts里配置路由环境
5.在app里写
<img src="../note/路由src.png" alt="路由src" style="zoom:67%;" />

<img src="../note/路由router里的ts配置文件.png" alt="路由router里的ts配置文件" style="zoom: 50%;" />

<img src="../note/main文件挂载app.png" alt="main文件挂载app" style="zoom: 67%;" />

<img src="../note/app_vue路由写法.png" alt="app_vue路由写法" style="zoom: 67%;" />

两个注意点

1.路由组件通常放在pages或views文件夹里，一般组件放在components文件夹里
2.通过点击导航，视觉上消失的路由组件，默认是被卸载，需要的时候再去挂载

## P33路由器的工作模式

![路由器2个工作模式](../note/路由器2个工作模式.png)

RouterLink里面to的两种写法
`to="/home"`
`:to="{path:'/home'}"`

**命名路由**
<img src="../note/命名路由1.png" alt="命名路由1" style="zoom:50%;" />
<img src="../note/命名路由2.png" alt="命名路由2" style="zoom:50%;" />

**嵌套路由**

<img src="../note/嵌套路由第一步.png" alt="嵌套路由第一步" style="zoom:67%;" />

<img src="../note/嵌套路由第二步.png" alt="嵌套路由第二步" style="zoom: 33%;" />

![嵌套路由第三步(写一个子路由组件)](../note/嵌套路由第三步(写一个子路由组件).png)

**路由传参**

query参数
1.传参给子路由怎么写![传参给子路由怎么写](../note/传参给子路由怎么写.png)
2.子路由怎么接收并使用
![子路由接收并使用参数](../note/子路由接收并使用参数.png)

**params参数**
![params传参路由](../note/params传参路由.png)
![params传参路由的子路由接收怎么写](../note/params传参路由的子路由接收怎么写.png)
params传参需要写一下路由配置
![params路由配置](../note/params路由配置.png)

![传递params参数时的注意项](../note/传递params参数时的注意项.png)

小tips：
1、从一个响应式对象身上直接解构属性，属性就此会失去响应式
解决方法：
`import {toRefs} from 'vue'`
`let (query) = toRefs(route)`
2、可以通过?来配置

## P39路由规则的props配置

![路由的props配置](../note/路由的props配置.png)

**路由的replace属性**
![路由的replace属性](../note/路由的replace属性.png)

在routerlink后面加上replace就可以使页面无法退回（路由在跳转的时候会操作浏览器的历史记录）


## P41 编程式导航

为什么要用编程式导航：  
![编程式路由导航](../note/编程式路由导航.png){style="zoom: 33%;"}

脱离 `<RouterLink>` 实现路由跳转，其实就是编程式路由导航。

如何实现：

<pre>
import { useRouter } from 'vue-router' <br>const router = useRouter() <br> </pre>


router.push() 括号里面能写什么？—> to 里能写什么，括号里面就能写什么。 to有两种写法：1是字符串2是对象

![编程式路由导航实际怎么写](../note/编程式路由导航实际怎么写.png)

## P42路由的重定向

一进入页面借助重定向可以实现，默认跳转到一个页面

```
在router的配置文件，并列一级路由的最后面加上重定向
//默认跳转到home页面
{
path'/',
redirect:'/home'
}
```

## P42vue里的状态管理工具pinia

vuex pinia 集中式状态(数据)管理

准备两个组件的效果：Love.vue和Count.vue
详见代码

小tips：
1、import引入的时候，分别暴露是{}，默认暴露不用加
2、id生成库，uuid，nanoid

>KAISHI开始pinia

在main.ts里引入pinia
![pinia的引入](../note/pinia的引入.png)

pinia在src文件夹里面有一个store文件夹专门负责管理
store文件夹->组件名.ts文件

```pinia的ts文件标准
//pinia的写法
import {defineStore} from 'pinia'

export const use文件名Store = defineStore('文件名',{
//大括号里写配置对象
//vue3里state写成一个函数，并且return一个对象
state(){
 return {
}
}
})
```

```
//在组件里面调用pinia
import {use组件名Store} from '@/store/组件名'

const 组件名store = use组件名Store()

然后再把用到的数据前面加上.组件名store
```

在组件.vue文件里面修改数据的三种方法：
1、前面加.组件名Store，**直接改**，（vue2的vuex里不行，pinia可以）
2、zujianmingStore.$patch({})        **批量变更**（好处，浏览器vue工具里时间线的component events只会有一次$patch的变更）
3、**最麻烦** 使用actions
<img src="../note/第三种修改pinia.png" alt="第三种修改pinia" style="zoom:50%;" />
<img src="../note/第三种修改pinia2.png" alt="第三种修改pinia2" style="zoom: 50%;" />

**组件.vue文件里面实现解构：用storeToRefs**

```
import {storeToRefs} from 'pinia'
//只会关注Store中的数据，不会对方法进行ref包裹

const{sum,school,address}=storeToRefs(zujianmingStore)
```

## P49getters

也是store文件(pinia)里的文件中和action、state同级的，getters
![pinia的store文件里的写法-getters](../note/pinia的store文件里的写法-getters.png)
在组件.vue文件的里面，直接取过来用
![pinia的store文件里的写法-getters的用法](../note/pinia的store文件里的写法-getters的用法.png)

## P50 $订阅【$subscribe】

通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化

```ts
talkStore.$subscribe((mutate,state)=>{
  console.log('LoveTalk',mutate,state)
  localStorage.setItem('talk',JSON.stringify(talkList.value))
})
```

## P51 store组合式写法

统一好风格
<img src="../note/store组合式写法.png" alt="store组合式写法" style="zoom: 40%;" />

## P52组件通信

### 1.props

概述：`props`是使用频率最高的一种通信方式，常用与 ：**父 ↔ 子**。

- 若 **父传子**：属性值是**非函数**。
- 若 **子传父**：属性值是**函数**。

<img src="../note/props组件传值-父子互传.png" alt="props组件传值-父子互传" style="zoom:250%;" />

### 2.自定义事件===>子传父

$event 表示一个事件对象
![自定义事件-组件通信](../note/自定义事件-组件通信.png)

### 3.mitt-任意组件之间的通信

- pubsub
- $bus
- mitt

接收数据的：提前绑定好事件（vue2订阅）
提供数据的：在合适的时候触发事件（vue2发布）

npm i mitt
创建文件夹utils
创建文件emitter.ts

```
import mitt from 'mitt'
const emitter =mitt()
export default emitter
```

然后在main.ts文件里引入，import emitter from '@/ulits/emitter'
![mitt的emitter文件1](../note/mitt的emitter文件1.png)

利用mitt实现所有组件之间的通信
![mitt的emitter实现组件通信](../note/mitt的emitter实现组件通信.png)
ps：记得在onunmounted 的时候解绑事件

### 4.v-model 

ui组件库的底层大量使用v-model进行组件通信

```
v-model用在html标签上
<input type="text" v-model="username">

等同于==========================

<input type="text" :value="username" @input="username =(<HTMLInputElement>$event.target ).value">

因为v-model的底层原理是动态的value值配合input事件
```

v-model用在组件上

```
 <Input v-model="username"/>
 等同于====================
  <Input :modelValue="username" @updata:modelValue='username = $event'/>
  ps:vue2里面 :modelValue是:value
			@updata:modelValue是@input	@updata:modelValue是自定义组件名
```

底层的ui库，即ui组件.vue里的底层写法：
![ui组件库底层实现v-model](../note/ui组件库底层实现v-model.png)

$event是啥，什么时候.target![](../note/$event是啥.png)

v-model的细节补充
<img src="../note/v-model补充.png" alt="v-model补充" style="zoom:80%;" />

### 5.$attrs祖->孙

![祖孙通过$attrs互传](../note/祖孙通过$attrs互传.png)

### 6.$refs和$parent

ref父传子
![ref父改子的数据](../note/ref父改子的数据.png)

refs父传子
![refs、](../note/refs、.png)

parent子传父
![$parent父传子](../note/$parent父传子.png)

### 6.provide-inject祖孙之间

祖传孙

![provide-inject祖传孙](../note/provide-inject祖传孙.png)

孙传祖

### 7.pinia 见前文

### 8.插槽（默认、具名、作用域）

> 默认插槽

![slot默认插槽](../note/slot默认插槽.png)

>具名插槽：只能放在组件标签和template上

v-slot:s1
简写：#s1

![具名插槽](../note/具名插槽.png)

>作用域插槽

解决作用域问题，相当于props组件通信

![作用域插槽](../note/作用域插槽.png)

ps:<img src="../note/作用域插槽name属性.png" alt="作用域插槽name属性" style="zoom:50%;" />



### 几种组件通信总结

<img src="../note/组件通信总结.png" alt="组件通信总结" style="zoom:67%;" />

## P64其他api【shallowRef 与 shallowReactive 】

`shallowRef`

1. 作用：创建一个响应式数据，但只对顶层属性进行响应式处理。

2. 用法：

   ```js
   let myVar = shallowRef(initialValue);
   ```

3. 特点：只跟踪引用值的变化，不关心值内部的属性变化。

`shallowReactive`

1. 作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的

2. 用法：

   ```js
   const myObj = shallowReactive({ ... });
   ```

3. 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。

总结

> 通过使用 [`shallowRef()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 和 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 `API` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。



### P65【readonly 与 shallowReadonly】

**`readonly`**

1. 作用：用于创建一个对象的深只读副本。

2. 用法：

   ```js
   const original = reactive({ ... });
   const readOnlyCopy = readonly(original);
   ```

3. 特点：

   * 对象的所有嵌套属性都将变为只读。
   * 任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。

4. 应用场景：

   * 创建不可变的状态快照。
   * 保护全局状态或配置不被修改。

**`shallowReadonly`**

直限制浅层次的为只读属性（readonly），深层次的依旧可以更改



### P66【toRaw 与 markRaw】

`toRaw`

```
import {toRaw} from 'vue'

let person =reactive({
name:'a',age:'1'
})

let person2 = toRaw(person)
```

生成一个原始的对象，而非响应式的对象（应用场景：在把vue里的数据交给外部时）

`markRaw`

1. 作用：标记一个对象，使其**永远不会**变成响应式的。

   ```js
   import {markRaw} from 'vue'
   
   let car = markRaw({brand:'奔驰',price:'100'})//使下面不生效
   let car2 = reactive(car)//这行代码不会起作用
   ```

   >例如使用`mockjs`时，为了防止误把`mockjs`变为响应式对象，可以使用 `markRaw` 去标记`mockjs`

### P67【customRef】

作用：创建一个自定义的`ref`，并对其依赖项跟踪和更新触发进行逻辑控制。

![customR而非、](../note/customR而非、.png)

封装成hooks
![封装一个customref的hooks方法方便调用](../note/封装一个customref的hooks方法方便调用.png)
调用：![调用封装好的customref](../note/调用封装好的customref.png)

# 8. Vue3新组件

## 8.1. 【Teleport】

- 什么是Teleport？—— Teleport 是一种能够将我们的**组件html结构**移动到指定位置的技术。

```html
<teleport to='body' >
    <div class="modal" v-show="isShow">
      <h2>我是一个弹窗</h2>
      <p>我是弹窗中的一些内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
</teleport>
```

## 8.2. 【Suspense】

子组件在script结构里面写异步任务的时候会导致子组件丢失渲染-->解决：在父组件里用suspense包裹子组件，并添加默认插槽：
![suspense](../note/suspense.png)

![suspense-api](../note/suspense-api.png)

-  等待异步组件时渲染一些额外内容，让应用有更好的用户体验 
-  使用步骤： 
   -  异步引入组件
   -  使用`Suspense`包裹组件，并配置好`default` 与 `fallback`

```tsx
import { defineAsyncComponent,Suspense } from "vue";
const Child = defineAsyncComponent(()=>import('./Child.vue'))
```

```vue
<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child/>
          </template>
          <template v-slot:fallback>
            <h3>加载中.......</h3>
          </template>
        </Suspense>
    </div>
</template>
```

## 8.3.【全局API转移到应用对象】 Vue. 转变成 app.

- `app.component`   全局组件
- `app.config `         原型链挂载(飘红看官网优解决方案)
- `app.directive`
- `app.mount`
- `app.unmount`
- `app.use`

## 8.4.【其他】

- 过渡类名 `v-enter` 修改为 `v-enter-from`、过渡类名 `v-leave` 修改为 `v-leave-from`。


- `keyCode` 作为 `v-on` 修饰符的支持。

- `v-model` 指令在组件上的使用已经被重新设计，替换掉了 `v-bind.sync。`

- `v-if` 和 `v-for` 在同一个元素身上使用时的优先级发生了变化。

- 移除了`$on`、`$off` 和 `$once` 实例方法。

- 移除了过滤器 `filter`。

- 移除了`$children` 实例 `propert`。

  ......













