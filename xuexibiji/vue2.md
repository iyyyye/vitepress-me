# VUE2 （2023.11.30）

## VUE2

### 快速上手

#### 概念：Vue 是一个用于构建用户界面的渐进式框架

#### 创建 Vue 实例与初始化渲染

核心步骤 4 步：

1. 准备容器
2. 引入脚本（官网提供的开发/生产版本）
3. 创建 Vue 实例 `new Vue()`
4. 指定配置项以渲染数据

* `el`：指定挂载点
* `data`：提供数据

![创建一个 Vue 实例](/创建一个vue实例.png)

#### 插值表达式 `{{}}`

* 语法：`{{ 表达式 }}`
* 注意：

  * 数据必须存在
  * 不能写语句
  * 不能在标签属性中使用
* 不具备解析标签的能力，如需渲染 HTML，请使用 `v-html`

#### 响应式特征

* 数据改变，视图自动更新
* `data` 中的属性会被添加到实例上

  1. 访问数据：`实例.属性名`
  2. 修改数据：`实例.属性名 = 新值`

#### 开发者工具

* Vue.js devtools 浏览器扩展用于调试

### 指令（Directives）

#### `v-html`

* 功能：设置元素的 `innerHTML`
* 语法：`v-html="表达式"`

#### `v-show` 与 `v-if`

* `v-show`

  * 功能：控制元素显示隐藏
  * 原理：切换 CSS 的 `display: none`
  * 适用场景：频繁切换显示隐藏
* `v-if`

  * 功能：条件渲染，创建或移除元素
  * 适用场景：显示/隐藏开销较大时

#### `v-else` 与 `v-else-if`

* `v-else`：辅助 `v-if`，需紧挨着 `v-if`
* `v-else-if`：`v-else-if="表达式"`

#### 事件监听：`v-on` (`@`)

* 语法：`v-on:事件名="方法"` 或简写 `@事件名="方法"`
* 支持传参

  <img src="/v-on调用传参.png" alt="v-on 调用传参" style="zoom:60%;" />

#### 属性绑定：`v-bind` (`:`)

* 动态设置元素属性
* 语法：`v-bind:属性名="表达式"` 或简写 `:属性名="表达式"`

  <img src="/v-bind语法.png" alt="v-bind 语法" style="zoom: 50%;" />

#### 列表渲染：`v-for`

* 语法：`v-for="(item, index) in 数组"`
* 建议添加 `:key`，使用唯一标识，如 `:key="item.id"`
  ![v-for 语法](/v-for语法.png)

#### 双向绑定：`v-model`

* 用于表单元素，实现双向数据绑定
* 语法：`v-model="变量"`

#### 指令修饰符

* 通过 `.` 添加后缀简化操作

  <img src="/指令修饰符.png" alt="指令修饰符" style="zoom:50%;" />

### 样式与类绑定

#### `v-bind:class`

<img src="/v-bind操作class.png" alt="v-bind 操作 class" style="zoom:50%;" />  
<img src="/tab栏的active效果.png" alt="tab 栏的 active 效果" style="zoom:50%;" />

#### `v-bind:style`

<img src="/v-bind操作style.png" alt="v-bind 操作 style" style="zoom:50%;" />

### 计算属性（Computed）

* 基于已有数据计算新属性，依赖变化时自动更新
* 在 `computed` 配置项中声明，需返回值

```js
computed: {
  totalCount() {
    return this.list.reduce((sum, item) => sum + item.num, 0);
  }
}
```

* 完整写法支持 `get` 与 `set`

```js
computed: {
  propName: {
    get() {
      // 计算逻辑
      return result;
    },
    set(value) {
      // 修改逻辑
    }
  }
}
```

<img src="/computed的优势.png" alt="computed 的优势" style="zoom:50%;" />

### 侦听器（Watch）

* 用于监视数据变化，执行业务逻辑或异步操作
* 简单写法：监视基础类型

  <img src="/watch监听器.png" alt="watch 监听器" style="zoom:50%;" />
* 深度与立即执行配置

```js
watch: {
  obj: {
    deep: true,
    immediate: true,
    handler(newVal) {
      // 处理逻辑
    }
  }
}
```

* 防抖示例：将 `timer` 挂载到实例属性而非 `data`

  <img src="/延时.png" alt="延时示例" style="zoom:50%;" />

### 综合案例：水果购物车

<img src="/本地化deep true.png" alt="本地化示例" style="zoom:50%;" />  
<img src="/Snipaste_2023-12-03_19-18-22.png" alt="购物车示例" style="zoom:50%;" />

### 生命周期

一个 Vue 实例从**创建**到**销毁**的整个过程
![生命周期](/生命周期.png)

#### 生命周期函数

<img src="/生命周期函数.png" alt="生命周期函数" style="zoom:40%;" />  

#### 挂载时机示例

* 页面获取焦点：使用 `mounted` 完成

  <img src="/mounted一进页面获取焦点.png" alt="mounted一进页面获取焦点" style="zoom:68%;" />  

* 请求命令写在 `created` 钩子中

  <img src="/添加的前置alert.png" alt="添加的前置alert" style="zoom:80%;" />  

### 工程化开发与脚手架

#### 安装与目录结构

<img src="/安装vuecli.png" alt="安装vuecli" style="zoom:50%;" />  
![脚手架目录](/脚手架目录.png)  

#### 渲染函数简写

```js
render: (createElement) => {
  return createElement(App)
}
// 等价于
render: h => h(App)
```

### 组件注册与使用

#### 普通组件

![普通组件的注册使用](/普通组件的注册使用.png)
`<vuv>` 快捷创建结构、逻辑与样式

#### 局部组件注册

<img src="/局部组件注册.png" alt="局部组件注册" style="zoom:48%;" />  
<img src="/image-20231204200440894.png" alt="局部组件详情设置代码" style="zoom:53%;" />  

* `trigger on tab` 打开标签页，快捷生成 `<></>` 结构

#### 全局组件注册

* 在 `main.js` 中导入并注册组件

  <img src="/全局组件注册.png" alt="全局组件注册" style="zoom:50%;" />  

![全局组件的注册](/全局组件的注册.png)

### 常用快捷键

![快捷键](/快捷键.png)


### 样式隔离

#### scoped 样式

默认情况下，组件内部样式会**全局生效**，易造成冲突：

* **全局样式**：组件中未加 `scoped` 的样式会作用于全局
* **局部样式**：在 `<style scoped></style>` 中编写，样式仅作用于当前组件

```html
<style scoped>
  /* 仅在当前组件生效 */
</style>
```

### 响应式数据

#### data 必须是函数

<img src="/Snipaste_2023-12-05_20-07-42.png" alt="data 函数" style="zoom:40%;" />  

### 组件通信

#### 父子组件通信

* `props`：父组件向子组件传递数据
* `$emit`：子组件触发事件通知父组件

  <img src="/父子通信流程.png" alt="父子通信流程" style="zoom:40%;" />  

#### 非父子组件通信

* `provide` & `inject`
* `eventbus`

#### 全局状态管理

* `vuex`（适用于复杂业务场景）





