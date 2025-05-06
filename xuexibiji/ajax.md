# 大三前端框架过渡(2023.11.13-11.30)

## AJAX-DAY1

### axios库

使用：

~~~JavaScript
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    axios({
    url:''
}).then(result => {
    执行代码
})
    </script>
~~~

<img src="/ur1-ad.png" alt="url-ad" style="zoom:33%;" />



url查询参数
语法：
`params:{`
`参数名:值`
`}`

data:{} 请求参数，请求体



常见的请求方法：method：
GET获取数据
POSE提交数据
PUT
DELETE
PATCH

axios错误处理

~~~javascript
axios({
    //请求选项
}).then(result => {
    //处理数据
}).catch(error =>{
    //处理错误操作
})
~~~

案例：提交重复的注册信息报错：

~~~JavaScript
document.querySelector('.btn').addEventListener('click', () => {
      axios({
        url: 'http://hmajax.itheima.net/api/register',
        method: 'post',
        data: {
          username: 'cecece11',
          password: '1234567'
        }
      }).then(result => {
        console.log(result)
      }).catch(error => {
        alert(error.response.data.message)
      })
    })
~~~

**HTTP协议-请求报文** 
<img src="/请求报文0.png" alt="请求报文0" style="zoom: 33%;" />

请求报文-错误排查
<img src="/请求报文-检查错误.png" alt="请求报文-检查错误" style="zoom: 50%;" />

**响应报文**：与请求报文相反，是服务器返回给浏览器的报文，格式一样
1.**响应行/状态行**：协议、**HTTP 响应状态码**、状态信息
2.**响应头**:以键值对的格式携带的附加信息，比如: **Content-Type**
3.空行:分隔响应头
4.**响应体:返回的资源**

**接口文档**：由后端提供

**form-serialize插件**：快速收集表单元素的值

~~~JavaScript
//先接入
<script src=></script>
//form是要获取的表单元素名称，表单里需要设置好name属性才行
const aForm = document.querySelector('.css选择器')
const data = serialize(aForm,{hash:true,empty:true})
/*hash:设置获取数据结构 -ture：JS对象（推荐） -false：查询字符串
  empty：设置是否获取空值-true：获取空值（推荐） -false：不获取
  */
~~~

综合案例小tips：当使用完serialize插件获取完表单元素**后**(存在data变量里)，后面代码的使用前，要先进行**解构赋值**，const { username, password } = data

## AJAX-DAY2

**Bootstrap弹框**	不离开页面，供用户操作
引入-官网找样式-学习-复制粘贴-自定义属性控制显示隐藏

~~~JavaScript
// 创建弹框对象
const addModalDom = document.querySelector('需要填')
const addModal = new bootstrap.Modal(addModalDom)
//
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)

// 显示弹框
modal.show()
// 隐藏弹框
modal.hide()
~~~

图书管理系统，代码实写

高级遍历：
<img src="/高级遍历用法-图书管理系统.png" alt="高级遍历用法-图书管理系统" style="zoom:50%;" />



**图片上传**

1.先获取用户上传的图片文件对象
2.使用FormData携带图片文件
`const fd = new FormData()`
`fd.append(参数名,值)`
3.提交表单数据到服务器
4.使用图片url网址

![图片上传](/图片上传.png)



给**body更换背景图片**，document.body.style.backgroundImage = `url(${result.datd.data.url})`

上传成功之后，要**保存在本地存储**当中：localStorage.setItem('bgImg',result.data.data.url)

从**本地存储**当中**拿出来使用**：
const bgShiYong = localStorage.getItem('bgImg')
bgShiYong && document.body.style.backgroundImage = `url$(bgShiYong)`

个人信息-获取渲染

~~~JavaScript

//获取服务器的个人信息并进行渲染
axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator: 'ljy'
  }
}).then(result => {
  const fanHuiObj = result.data.data
  //开始回显
  Object.keys(fanHuiObj).forEach(key => {
    //头像
    if (key === 'avatar') {
      document.querySelector('.prew').src = fanHuiObj[key]
    }
    //性别
    else if (key === 'gender') {
      //获取dom性别单选框
      const radioList = document.querySelectorAll('.gender')
      //获得性别的数字
      const radioNum = fanHuiObj[key]
      radioList[radioNum].checked = true
    }
    //其他内容的渲染
    else {
      document.querySelector(`.${key}`).value = fanHuiObj[key]
    }
  })
})
~~~

个人信息设置案例-信息修改的代码：
注意的点：
 data.gender = +data.gender，字符串类型隐式转换成数字型
data.creator = creator	添加creator到表单里

~~~javascript
//信息修改
document.querySelector('.submit').addEventListener('click', e => {
  //表单收集
  const userForm = document.querySelector('.user-form')
  const data = (serialize, { userForm, hash: true, empty: true })
  data.gender = +data.gender
  data.creator = creator
  //提交信息到服务器
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'put',
    data: {
      data
    }
  })
})
~~~

个人信息设置案例-提示框
<img src="/boos提示框代码.png" alt="boos提示框代码" style="zoom:50%;" />
<img src="/bootstarp提示框显示隐藏和前置插入.png" alt="bootstarp提示框显示隐藏和前置插入" style="zoom:50%;" />

## AJAX-DAY3

AJAX原理-XMLHttpRequest
![xhr的使用方法代码](/xhr的使用方法代码.png)

<img src="/api自动把对象转换成url上传的字符串格式的方法.png" alt="api自动把对象转换成url上传的字符串格式的方法" style="zoom: 67%;" />

原生XMLHttpRequest-数据提交

<img src="/xhr数据提交-请求头请求体.png" alt="xhr数据提交-请求头请求体" style="zoom:50%;" />

**Promise**：promise对象用于管理异步代码

~~~JavaScript
//1.创建Promise对象
const p new Promise((resolve,reject)=>{
    //2.执行异步任务-并传递结果
    //成功调用：resolve(值)触发then()执行
    //失败调用：reject(值)触发catch()执行
})
//3.接收结果
p.then(result=>{
    //成功
}).catch(error=>{
    //失败
})
~~~

 Promis的三种状态
<img src="/promis的三种状态.png" alt="promis的三种状态" style="zoom: 50%;" />

用promise对象管理xhr

![用promise对象管理xhr的错误和正确](/用promise对象管理xhr的错误和正确.png)

逻辑与 中断 &&（a && b）a为空，中断，不执行b
逻辑或  || 前面有值用前面（传进来的参数）的，前面没有，才用后面（设置默认参数）的 

用promis封装一个简易的axios函数

~~~javascript
 function myAxios(config) {
      return new Promise((resolve, reject) => {
        //写xhr请求体
        const xhr = new XMLHttpRequest()
        xhr.open(config.method || 'GET', config.url)
        xhr.addEventListener('loadend', () => {
          //成功or失败
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response))
          }
          else {
            reject(new Error(xhr.response))
          }
        }
        )
        xhr.send()
      }
      )
    }
    //使用封装好的myAxios函数
    myAxios({
      url: 'http://hmajax.itheima.net/api/province'
    }).then(result => {

      document.querySelector('.my-p').innerHTML = result.list.join('<br>')
    }).catch(error => {
      document.querySelector('.my-p').innerHTML = error.message
    })
~~~

封装一个简易的地区查询函数-案例（params）

封装-简易axios-注册用户（data）

天气预报案例

~~~javascript
function getWeather(cityCode) {


  //获取天气数据
  myAxios({
    url: 'http://hmajax.itheima.net/api/weather',
    params: {
      city: cityCode
    }
  }).then(result => {
    console.log(result);
    const wObj = result.data
    const dateStr = `<span class="dateShort">${wObj.date}</span>
    <span class="calendar">农历&nbsp;
      <span class="dateLunar">${wObj.dateLunar}</span>
    </span>`
    document.querySelector('.title').innerHTML = dateStr
    document.querySelector('.area').innerHTML = wObj.area
    document.querySelector('.temperature').innerHTML = wObj.temperature
    document.querySelector('.air').innerHTML = `<span class="psPm25">${wObj.psPm25}</span>
    <span class="psPm25Level">${wObj.psPm25Level}</span>`
    document.querySelector('.weather-list').innerHTML = `<li>
    <img src="${wObj.weatherImg}" class="weatherImg" alt="">
    <span class="weather">${wObj.weather}</span>
  </li>
  <li class="windDirection">${wObj.windDirection}</li>
  <li class="windPower">${wObj.windPower}</li>`

    document.querySelector('.today-weather').innerHTML = `<div class="range-box">
<span>今天：</span>
<span class="range">
  <span class="weather">${wObj.weather}</span>
  <span class="temNight">${wObj.todayWeather.temNight}</span>
  <span>-</span>
  <span class="temDay">${wObj.todayWeather.temDay}</span>
  <span>℃</span>
</span>
</div>
<ul class="sun-list">
<li>
  <span>紫外线</span>
  <span class="ultraviolet">${wObj.todayWeather.ultraviolet}</span>
</li>
<li>
  <span>湿度</span>
  <span class="humidity">${wObj.todayWeather.humidity}</span>%
</li>
<li>
  <span>日出</span>
  <span class="sunriseTime">${wObj.todayWeather.sunriseTime}</span>
</li>
<li>
  <span>日落</span>
  <span class="sunsetTime">${wObj.todayWeather.sunsetTime}</span>
</li>
</ul>`

    // 7日天气预报数据展示
    document.querySelector('.week-wrap').innerHTML = wObj.dayForecast.map(item => {
      return `<li class="item ">
      <div class="date-box">
        <span class="dateFormat">${item.dateFormat}</span>
        <span class="date">${item.date}</span>
      </div>
      <img src="${item.weatherImg}" alt="" class="weatherImg">
      <span class="weather">${item.weather}</span>
      <div class="temp">
        <span class="temNight">${item.temNight}</span>-
        <span class="temDay">${item.temDay}</span>
        <span>℃</span>
      </div>
      <div class="wind">
        <span class="windDirection">${item.windDirection}</span>
        <span class="windPower">${item.windPower}</span>
      </div>
    </li>`
    }).join('')
  })
}


//默认打开界面先调用(北京cityCode：110100)
getWeather('110100')


//搜索匹配的城市列表
document.querySelector('.search-city').addEventListener('input', (e) => {
  console.log(e.target.value);

  myAxios({
    url: 'http://hmajax.itheima.net/api/weather/city',
    params: {
      city: e.target.value
    }
  }).then(result => {
    document.querySelector('.search-list').innerHTML = result.data.map(item => {
      return `<li class="city-item" data-code="${item.code}">${item.name}</li>`
    }).join('')
  })
})


//切换城市天气！！！
document.querySelector('.search-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('city-item')) {
    const cityCode = e.target.dataset.code
    console.log(cityCode)
    getWeather(cityCode)
  }

})
~~~

## AJAX-DAY4

**同步代码-异步代码**
逐行执行，需要**原地等待结果**后，才能继续向下执行
调用后**耗时**，不阻塞代码继续执行 (不必原地等待)，在将来完成后**触发**一个回调函数

**回调函数地狱**
在回调函数一直向下嵌套回调函数，形成回调函数地狱
可读性差
异常捕获困难
耦合性严重

**Promise-链式调用**
概念:依靠 then()方法会返回一个新生成的 Promise 对象特性，继续串联下一环任务，直到结束
then()回调函数中的返回值，会影响新生成的 Promise 对象最终状态和结果通过链式调用，解决回调函数嵌套问题![promis链式调用](/promis链式调用.png)

![](/promis-链式.png)

**async函数和await**
![用await关键字解决回调函数地狱](/用await关键字解决回调函数地狱.png)

**async函数和await_错误捕获**(try里面的代码出错全部不执行)
<img src="/async函数错误捕获try_catch.png" alt="async函数错误捕获try_catch" style="zoom: 45%;" />
打印错误console.dir(error)

**事件循环EventLoop**
<img src="/事件循环模型.png" alt="事件循环模型" style="zoom:40%;" />

**宏任务与微任务**（调用栈先执行微任务）
![宏任务微任务](/宏任务微任务.png)

Promise.all 静态方法
<img src="/promiseall的静态方法.png" alt="promiseall的静态方法" style="zoom:40%;" />

语法:

~~~JavaScript
const p = Promise.a11([Promise对象，Promise对象，...])p.then(result => {
    
// resu1t结果: [Promise对象成功结果，Promise对象成功结果，...]
    
}).catch(error => {
    // 第一个失败的Promise对象，抛出的异常
})
~~~

案例-<img src="/案例-提交反馈代码.png" alt="案例-提交反馈代码" style="zoom:70%;" />

## 项目

项目准备管理：

- assets:资源文件夹(图片，字体等)
- lib:资料文件夹(第三方插件，例如:form-serialize)
- **page**:页面文件夹
- **utils**:实用程序文件夹(工具插件)

~~~JavaScript
判断token
const token = localStorage.getItem('token')
if (!token) {
  location.href = '../login/index.html'
~~~

~~~JavaScript
登录页面
// 1.1监听点击事件
document.querySelector('.btn-primary').addEventListener('click', () => {
 
    
    // 1.2 收集手机号和验证码数据
  const form = document.querySelector('.login-form')
  const data = serialize(form, { hash: true, empty: true })
  console.log(data);
    
    
  //1.3 基于 axios 调用验证码登录接口
  axios({
    url: '/v1_0/authorizations',
    method: 'post',
    data
  }).then(result => {
    myAlert(true, '登陆成功')
    //先存token
    localStorage.setItem('token', result.data.data.token)
    //然后跳转页面
    //延迟跳转页面
    setTimeout(() => {
      location.href = '../content/index.html'
    }, 1500)
  }).catch(error => {
    myAlert(false, error.response.data.message)
  })
})
~~~

**axios请求拦截器**
在所有的axios请求发起之前，触发这个函数，对所有的**请求参数**进行额外配置

~~~JavaScript
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  //在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
                                 //不常用后面这段代码
~~~

**axios响应拦截器**：响应回到 then/catch 之前，触发的**拦截函数**，对**响应结果统一处理**

~~~JavaScript
axios.interceptors.response.use((config)=>{
    //aaaa
    return config
})
~~~

**富文本编辑器**：
使用wangEditor插件

项目功能-频道列表的获取

~~~JavaScript
async function setChannleList() {
  const a = await axios({ url: '/v1_0/channels' })
  const gudingStr = a.data.channels.map(item => {
    return `<option value="${item.id}">${item.name}</option>`
  }).join('')
  console.log(gudingStr);
  document.querySelector('.form-select').innerHTML = (` <option value="" selected>请选择文章频道</option>` + gudingStr
  )
}
setChannleList()
~~~

**我的-代码犯的常见错误！！！**：**map遍历数组的时候，一定要写return**

项目功能-封面图片上传并显示

~~~JavaScript
document.querySelector('.img-file').addEventListener('change', async e => {
  const file = e.target.files[0]
  const fd = new FormData()
  fd.append('image', file)
  const res = await axios({
    url: '/v1_0/upload',
    method: 'post',
    data: fd
  })
  console.log(res);
  document.querySelector('.rounded').src = res.data.url
  document.querySelector('.rounded').classList.add('show')
  document.querySelector('.place').classList.add('rounded')
})

document.querySelector('.rounded').addEventListener('click', () => {
  document.querySelector('.img-file').click()
})

~~~

项目功能-文章删除

~~~JavaScript
document.querySelector('.art-list').addEventListener('click', async (e) => {
  if (e.target.classList.contains('del')) {
    const delId = e.target.parentNode.dataset.id
    console.log(delId);
    const res = await axios({
      url: `/v1_0/mp/articles/${delId}`,
      method: 'DELETE'
    })
    console.log(res);
    artileList()
  }
})
~~~

功能-编辑文章跳转-接收（最后一段没看懂）

~~~JavaScript
; (function () {
    // 4.2 发布文章页面接收参数判断（共用同一套表单）
    const paramsStr = location.search
    const params = new URLSearchParams(paramsStr)
    params.forEach(async (value, key) => {
      // 当前有要编辑的文章 id 被传入过来
      if (key === 'id') {
        // 4.3 修改标题和按钮文字
        document.querySelector('.title span').innerHTML = '修改文章'
        document.querySelector('.send').innerHTML = '修改'
        // 4.4 获取文章详情数据并回显表单
        const res = await axios({
          url: `/v1_0/mp/articles/${value}`
        })
        console.log(res)
        // 组织我仅仅需要的数据对象，为后续遍历回显到页面上做铺垫
        const dataObj = {
          channel_id: res.data.channel_id,
          title: res.data.title,
          rounded: res.data.cover.images[0], // 封面图片地址
          content: res.data.content,
          id: res.data.id
        }
        // 遍历数据对象属性，映射到页面元素上，快速赋值
        Object.keys(dataObj).forEach(key => {
          if (key === 'rounded') {
            // 封面设置
            if (dataObj[key]) {
              // 有封面
              document.querySelector('.rounded').src = dataObj[key]
              document.querySelector('.rounded').classList.add('show')
              document.querySelector('.place').classList.add('hide')
            }
          } else if (key === 'content') {
            // 富文本内容
            editor.setHtml(dataObj[key])
          } else {
            // 用数据对象属性名，作为标签 name 属性选择器值来找到匹配的标签
            document.querySelector(`[name=${key}]`).value = dataObj[key]
          }
        })
      }
    })
  })();
~~~

## Node.js和Webpack

**Node.js**
基于chrome的**V8引擎**封装，独立执行JavaScript的代码环境
没有bom、dom

**fs模块**-读写文件
fs模块的加载：`const fs = require('fs')`
写入：
`fs.writeFile ('文件路径', '写入内容', err=>{`
`//写入后的回调函数`
`})`
读取：
`fs.readFile ('文件路径', (err, data) =>{`
`//写入后的回调函数`
`//data是文件内容的buffer数据流`
`})`

buffer数据流转回字符串，data.toString()

**path模块**-路径处理
在Node.js代码中，使用绝对路径
__dirname 内置变量（获取当前模块目录-绝对路径）
`path.join(__dirname,'所在文件夹往下查找目标文件')` 当前文件所在文件夹的地址

案例-压缩前端html

~~~JavaScript
//读取
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'public/index.html'),(err,data)=>{
    if(err) console.log(err)
		else if{
            //转换buffer为字符串
            const a = data.toSting()
            //用正则替换换行符和回车
            const b = a.replace(/[\r\n]/g,'')
            //写入新的文件
            fs.writeFile(path.join(__dirname,'dist/index.html'),b,err=>{
                if(err) console.log(err)
                else if console.log('写入成功')
            })
        }
})
~~~

**URL中的端口号**

![url](/url.png)

**创建web服务模块**

~~~JavaScript
// 1.1 加载 http 模块，创建 Web 服务对象
const http = require('http')
const server = http.createServer()
//监听request请求
server.on('request', (req, res) => {

  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  res.end('欢迎使用web服务')

})

//配置端口号并启动web服务
server.listen(3000, () => {
  console.log('web服务启动成功');
})
~~~

**模块化commonJS标准**

<img src="/commonjs标准.png" alt="commonjs标准" style="zoom: 80%;" />

**ECMAScript标准**-默认导出和导入

<img src="/es标准导入导出.png" alt="es标准导入导出" style="zoom: 80%;" />

<img src="/es标准命名导出导入.png" alt="es标准命名导出导入" style="zoom:50%;" />

按需加载，使用命名导出和导入
全部加载，使用默认导出和导入

**包（项目/软件包）**
![包](/包.png)

**package.json内容**

~~~JavaScript
{
"name":"cz_utils"软件包名称
"version":"1.0.0"，软件包当前版本
"description":"一个数组和字符串常用工具方法的包",软件包简短描述
"main":"index.js",软件包入口点
"author":"itheima",软件包作者
"license":"MIT",软件包许可证(商用后可以用作者名字宣传)
}
~~~

**包-把方法.js们使用commonJs标准导出到index.js里**

![包-统一封装到唯一对外的index里](/包-统一封装到唯一对外的index里.png)

**包-在项目文件中用commonJS标准导入工具包**

![包-导入软件包](/包-导入软件包.png)

**npm-软件包管理器**
初始化清单文件：npm init -y（得到package.json文件,有则略过）
下载软件包：npm i 软件包名称
使用软件包（模块化:const a = require('dayjs')）
ps:如没有mode_modules，直接npm i

![模块化的标准语法](/模块化的标准语法.png)



Webpcak：静态模块打包工具	
使用：
1.下载webpack到当前项目中        npm i webpack webpack-cli --save-dev
2.配置局部自定义命令                   "scripts":{"build":"webpack"}
3.运行打包命令，自动产生dist分发文件夹(main.js)          npm run build

**自定义webpack打包的入口和出口:**

配置webpack.config.js文件在根目录下

~~~javascript
const path = require('path');

const config = {
  // 入口
  entry: {
    'login': path.resolve(__dirname, 'src/login/index.js'),
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]/index.js',
    clean: true // 生成打包后内容之前，清空输出目录
  }}
~~~

然后npm run build

**登录页面-webpack实际使用**：代码详情请见ace文件夹

**自动生成html文件**（plugin）
插件html-webpack-plugin：在webpack打包时自动生成html文件并将打包生成的所有资源（如CSS、JS文件）自动注入到生成的HTML文件中。

~~~JavaScript
const config = {
  // 打包模式（development 开发模式-使用相关内置优化）
  // mode: 'development',
    
  // 入口
  // entry: path.resolve(__dirname, 'src/login/index.js'),
  entry: {
    'login': path.resolve(__dirname, 'src/login/index.js'),
    'content': path.resolve(__dirname, 'src/content/index.js'),
    'publish': path.resolve(__dirname, 'src/publish/index.js')
  },
    
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]/index.js',
    clean: true // 生成打包后内容之前，清空输出目录
  },
    
  // 插件（给 Webpack 提供更多功能）
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/login.html'), // 模板文件
      filename: path.resolve(__dirname, 'dist/login/index.html'), // 输出文件
    })
      }
~~~

**Webpack-loader（加载器）**打包css代码
加载器 css-loader：解析css代码
加载器 style-loader：把解析后的css代码插入到DOM
步骤：
1.把css代码放到src/login/index.js中 	`import './index.css'`
2.下载css-loader和style-loader本地软件包 	`npm i css-loader style-loader --save-dev`
3.配置webpack.config.js文件

~~~javascript
module.exports={
    //...
    module:{
        rules:[
            {
                tesy:/\.css$/i,
                use:["style-loader","css-loader"],
            }
        ]
    }
}
~~~

**单独打包css**提取css代码（css文件可以被浏览器缓存，减少js文件体积）
mini-css-extract-plugin：提取css代码（注意！不能和style-loader同用）
步骤 
1.安装npm install --save-dev mini-css-extract-plugin
2.配置webpack.config.js文件const MiniCssExtractplugin =require("mini-css-extract-plugin")
module.exports={
plugins:[
new MiniCssExtractplugin()
]}

**优化-压缩过程**
问题：css代码提取后没有压缩
解决：使用css-minimizer-webpack-plugin插件 

**打包less代码**
加载器less-loader：把less代码编译为css代码

**打包图片**
资源模块

**webpack-搭建开发环境**
开发环境：配置webpack-dev-server快速开发应用程序。自动检测热更新
![webpack-dev-serve](/webpack-dev-serve.png)

设置模式为开发模式，并配置自定义命令
module.eexports={
mode:'development'
}

"scripts":{
"build":"webpack",
"dev":"webpack serve --open"
}

启动 npm run dev

注意：
默认8080	
默认以public文件夹作为服务器根目录
也默认以output.path作为根目录，所以找plugins的filename的路径去运行
所以：直接在public里新建一个index.html，写`<s>location.href = 'login/index.html'</s>`

**打包模式**
	![打包模式](/打包模式.png)

**打包的应用**
借助cross-env（跨平台通用）包命令，设置参数区分环境
<img src="/cross-env.png" alt="cross-env" style="zoom:60%;" />

或者配置不同的webpack.config.js文件

**前端-注入环境变量**

开发环境调错-source map（仅用于开发环境）
在webpack.config.js配置devtool选项
module.exports={
devtool:'inline-source-map
}

**解析别名alias**
![路径别名的设置](/路径别名的设置.png)

优化-cdn使用
![优化cdn的使用](/优化cdn的使用.png)

**多页面打包**（没学会）

**优化-分割公共代码**（没看）

**总结**（需要再回来看吧）

## Git

查看git信息：`git config --list`

git仓库（.git文件夹）创建：`git init`

![git精髓图](/git精髓.png)

git文件2种文件：未跟踪、已跟踪（`git add`）
`git status -s`查看文件状态
<img src="/git文件状态.png" alt="git文件状态" style="zoom:60%;" />

`git restore 目标文件`	使暂存区覆盖工作区的目标文件
`git rm --cached 目标文件`	移除暂存区的文件	

`git log --oneline`	查看commit提交历史（完整日志查看	`git reflog --oneline`）

<img src="/git回退命令.png" alt="git回退命令" style="zoom:67%;" />

创建.gitignore文件夹

![git忽略文件](/git忽略文件.png)

**分支概念**
![git分支的作用](/git分支的作用.png)

**创建分支**命令：`git bracnch 分支名`

**切换分支**命令： `git checkout 分支名`

**查看**当前仓库中存在的分支：`git branch`

<img src="/git切换分支注意事项先切回主分支.png" alt="git切换分支注意事项先切回主分支" style="zoom: 60%;" />

**合并分支**(都一样)：
分支代码addcommit提交
先切换回主分支：`git checkout master`
合并其他分支：`git merge login-bug`
删除分支的指针：`git branch-d login-bug`

**合并冲突**：在不同的分支下，对同一文件的同一代码修改，会导致无法合并，产生合并冲突（此时文件进入到了一个合并冲突的状况下，并没有完成分支合并）
解决：找到冲突文件并手动解决，然后再次提交addcommit，删除被合并的分支 git branch -d publish

**git常用命令**

![git常用命令1](/git常用命令1.png)

![git常用命令2](/git常用命令2.png)

**git远程仓库**

**Gitee**

本地git仓库连接远程仓库	`git remote add origin https-远程仓库地址`

查看本地仓库所连接上的远程仓库：`git remote -v`

删除：`git remote remove origin`

本地推远程仓库	`git push -u origin` 分支名

克隆
`git clone 远程仓库地址.git`

拉取：`git pull origin(名) master(分支名)`

*ori是本地仓库的别名*
**项目-本地新项目仓库linkto远程仓库，流程**
1.本地项目dist文件夹内`git init`	`git add.`	`git commit -m'first'`
2.远程新建一个仓库，连接，`git remote add ori http.git`
3.先强制pull一下`git pull --rebase ori master`
4.然后push本地仓库，提交到远程仓库中，`git push ori master`

git远程仓库的命令大全
![git远程仓库命令大全](/git远程仓库命令大全.png)