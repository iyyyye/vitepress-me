# JS-200p

## JS基础day1-day5

### day1

```
<script> alenrt </script> 页面弹出警示框

<script src="/my.js"> 外部引用中间不写代码 </script>
```

注释，ctrl+/ ctrl+shift+a	结束符；可不加

输出语法：

document.write('中文')	文档输出内容

alert('中文')	弹出警示对话框

console.log('')	控制台输出语法

输入语法：

prompt('请输入你的姓名:')	显示一个对话框，包含文字提示

变量	声明：`let 变量名`

"="赋值运算符     赋值变量在左数据在右

`*let uname = prompt('请输入你的名字')*`

`*document.write('uname')*`

变量的更新，交换（把右面给左边）

###### 变量的命名规则（不能用关键字，有数字、下划线、字母、$组成，数字不能开头，严格区分大小写）和规范（小驼峰，先小写后大写）

`let 数组名 = [数据1,数据2...,数据n]`

console.log(names.length)  n

常量的定义（不允许再次赋值变化不允许更改，且声明时必须赋值）

 `const 常量名 = 1`

JS的数据类型

基本数据类型：number数字型，string字符串型，boolean布尔型，undefined未定义型，null空类型

引用数据类型：object对象

算术运算符：+-*/%

字符串：单双反引号里面的数据类型都是字符串数据类型

字符串里的 + 号起到拼接的效果

**模板字符串**	拼接字符串和变量时使用

let age = 18 

`document.write(反引号我今年${age}岁了反引号`)

布尔值：true  false  

一个变量声明了，没给值就会返回undefined

null表示赋值了，但内容为空（将来会把对象放在里面）

检测数据类型	typeof x

因为使用表单、prompt获取过来的数据默认是字符串类型的，不能直接运算，所以需要**类型转换**

隐式转换：除了+其他的符号会自动转换为数字类型（+'123'）任何数据和字符串想家结果都是字符串

显示转换：

let num = Number(prompt('输入工资'))

或者

let num =+prompt('请输入工资')	



**parsenlt(数据)只保留整数**

console.log(parseInt('12.94px'))           12

**parseFloat(数据)可以保留小数**

console.log(parseFloat('12.34px'))           12.34

常见的错误 Missing initializer in const declaration    **const声明的时候没有赋值**

age is not defined   **age没有被定义（先声明后使用）**

Identifier 'age' has already been declared    **age被多次声明**

Assignment to constant variable  **常量不能被重新赋值**



### day2

**赋值运算符**（=把右边给左边，要求左边必须是容器）

**num =  num + 1等于num += 1**

**一元运算符** 正负号

**自增运算符** **++**	前置自增和后置自增	单独使用时没有区别，运算时i++ +1    结果2，i变2	实际时一般使用i++单独使用，代码开发时后置++

**比较运算符**	==左右两边是否相等 **===**是否类型和值都相等，返回值只有两种true和false，多用===，不比较小数，不比较NaN

**逻辑运算符**	解决多重条件判断	

**&&并且一假则假	||或者一真真	!取反**

**运算符的优先级**	()	一元	算术	关系<>>=	相等===	不相等!==	逻辑先与后或	赋值= 	逗号,

### 语句（分支、循环）

分支：if、三元、Switch

`if(条件/0和''是假){`

`满足条件要执行的语句`

`}`

if(条件){

}else{

}

最后只有一个代码会被运行

if(条件){

}else if (){

}else if (){

}else{

}

都不符合的话，最后执行else（else if ()的if 后面有空格）

三元运算符：条件?满足条件执行的代码:不满足条件执行的代码

switch语句：

~~~javascript
switch(数据){

case 值1: 

	代码1

	break

case 值2:

	代码2

	break

default:

	代码n

	break

}
~~~



不写break会穿透

循环：

断点演示F12 source文件夹

while(循环条件){

​		要重复执行的代码（循环体）

}

起始值、终止条件、变化量

break 和continue(只结束了本次循环)的区别

范围判断用if...else，确定值用switch...case；；；switch一定注意是全等===，注意数据类型，和break穿透；；分支少用if...else，多用switch。

### day3（for循环、数组）

~~~JavaScript
for（变量起始值；终止条件；变量变化量）{`

`//循环体`

}
~~~



遍历数组的终止条件 i < 数组的长度arr.length

for循环里，只要遇到continue，直接去看i++；看到break，往下跑，彻底结束。

循环嵌套 双重for循环

数组：字面量声明数组

~~~JavaScript
遍历数组求和：
let arr = [1,2,3,4]
let sum = 0
for (let i = 0;i < arr.length;i++){
    sum += arr[i]
}
console.log(`数组的和的结果是：%{sum}`)
console.log(`数组的平均值是：%{sum / arr.length}`)

~~~

数组的增删改查：

查，数组[下标]

改，数组[下标]=新值

增，arr.push(新增的内容)添加到末尾并返回数组长度	arr.unshift(新增的内容)添加到开头并返回数组长度

案例：数组的筛选

删，arr.pop()删除最后一个，()里面不用写值	arr.shift()删除第一个元素，只删一个	arr.splice(操作的下标，删除的个数)

arr.splice(1,1)	从索引号1的位置开始删，只删除1个

  arr.sort()数组的排序

### day4函数

**function使用**

~~~JavaScript
function 函数名(){
    函数体
}

调用：函数名()
~~~

函数的命名用小驼峰，且前缀为动词

**函数传参**（形参可以给默认值）

~~~javascript
function 函数名(参数列表){
    函数体
}

function getSquare(num1,num2){
    document.write(num1+num2)    
}
~~~

调用的小括号里面叫实参，定义函数时候括号里的叫形参

**函数的返回值**

~~~javascript
function getTotalPrice(x,y){
    return x + y
}
let sum = getTotalPrice(1,2)
console.log(sum)
~~~

注意：return后面的代码不执行，return不要换行，return返回多个值用[a，b]

返回值返回给了谁？函数的调用者getSum(1,2)

**作用域** 特殊情况：如果函数内部，变量没有let声明，直接赋值，也当做全局变量看，正常程序里不允许这样定义变量。形参也是局部变量

变量的访问原则：能访问到的情况下，先局部，局部没找到再找全局

**匿名函数**（web api、表单验证）不会出现变量污染

函数表达式和立即使用

~~~JavaScript
let fn = function(){
    console.log(`我是表达式`)
}
fn()
~~~

匿名函数的调用不能在任意位置

`(第一个函数)();` 另一种 `(function(形参){}(实参))`

第一个函数：function(){}

**逻辑中断**

&&左边为false就短路

||左边为true就短路

console.log(false && 3+5)

**转换为布尔型**

``、0、undefined、null、NaN六种都是false

隐式转换

1.有字符串的加法""+1,结果是"1"

2.减法-(想法多数数学运算一样)只能用于数字，它会使空字符串""转换为0

3.null经过数字转换之后会变为0

4.undefined经过数字转换之后会变为NaN

### day5对象

对象（object）也是一种JavaScript里的一种数据类型，无序。描述

**对象声明语法：**`let 对象名 = {}` 

{}是对象字面量。对象有属性和方法组成

~~~JavaScript
let 对象名 = {
	属性名:属性值,
    方法名:函数
}
~~~

**对象的使用**增删改查

查：对象名.属性     对象名['属性名']

改：对象名.属性 = 新值

增：对象名.属性 = 新值

删：delete 对象名.属性

~~~JavaScript
let obj = {
    uname: 'cxk'
    song: function(){
        console.log('jntm')
    }
}
//方法的调用（在对象外叫函数，在对象里面的叫方法）对象名.方法名
obj.song

~~~

**遍历对象**

~~~javascript
let obj = {
    uname : 'cxk',
    age : '18',
    gender : '男'
     
}
//遍历对象
for (for k in obj){
    console.log(k) //'uname' 'age'
    console.log(obj['k'])
}
~~~

**数组对象**

 ~~~javascrip
 //数组
 let students = [
//对象
{name:'a',age:'18'}
{name:'b',age:'18'}
{name:'c',age:'18'}
]
//遍历数组对象
for(let i = 0; i < students.length; i++){
console.log(students[i].name)
}
 ~~~

渲染

**内置对象-Math**

Math对象包含的方法有：
random：生成0-1之间的随机数，max,min,abs绝对值，floor向下取整，ceil向上取整
null是空对象

随机数生成`Math.random()`	左闭右开

`Math.floor(Math.random()*11)` 0-10之间的整数

生成N-M之间的随机数 Math.floor(Math.random)*(M - N + 1)) + N

封装函数

~~~JavaScript
function getRandom(N,M){
return Math.floor(Math.random()*(M - N + 1)) + N
}

console.log(getRandom(1,100))
~~~

~~~javascript
随机抽名字案例：
 let arr = ['赵云', '黄忠', '关羽', '张飞', '马超', '刘备', '曹操', '刘备']
    let random = parseInt(Math.random() * arr.length)
    document.write(arr[random])
    //抽到谁，删除谁
    arr.splice(arr[random], 1)
~~~

~~~javascript
猜数字案例
//1.随机生成一个数字
function getRandom(N,M){
return Math.floor(Math.random)*(M - N + 1)) + N
}
while(true){
let random = getRandom(1,100)
 let num = +prompt('请输入你猜的数字')
 if(random>num){
     alert('小了')
 } else if(random<num){
     alert('大了')
 }else{
     alert('恭喜你猜对了')
     break
 }
}
~~~

开关变量：let flag = true

~~~JavaScript
随机颜色


~~~



**拓展**

关键字，保留字，标识符

 堆，栈，基本数据类型值类型，引用数据类型

## api

### day1-dom获取元素

声明变量有三个var(已淘汰)、let和const
const优先（reat），const定义的时候不
数组和对象使用const
简单数据类型用let

<img src="/Snipaste_2023-10-14_19-53-32.png" alt="Snipaste_2023-10-14_19-53-32" style="zoom: 67%;" />

dom树

**获取dom对象**

1.根据css选择器来获取匹配的第一个dom元素	`document.querySelettor('css选择器')`

返回值：css选择器匹配的第一个元素，一个htmlelement对象

`document.querySelettorAll('css选择器')`

返回值：css选择器匹配的对象集合

queryselectorall获取得到的是一个伪数组，有长度有索引，但是没有pop()push()，用for遍历

#### **操作元素内容**

`对象.innerText 属性`	不识别标签

`对象.innerHTML 属性`	识别标签

#### **操作元素的属性**

常用：herf、title、src

语法：`对象.属性=值`

#### **3种操作元素样式属性**

1.通过style属性操作css	`对象.style.样式属性 = 值`

2.操作类名（className）操作css	`元素.className = 'active'`

~~~javascript
.box{
    w300+h300
}
//1.获取元素
const div = document.querySelector('div')
//2.添加类名修改元素样式属性
div.className = 'box'

~~~

**3.通过classList操作类控制css**	

`元素.classList.add('类名')`

`元素.classList.remove('类名')`

`元素.classList.toggle('类名')`	切换

~~~JavaScript
//通过classList添加
//1.获取元素
const box = document.querySelector('.box')
//修改样式	add()类名不加点，并且是字符串	
box.classList.add('active')
~~~

~~~JavaScript
随机轮播图
    const random = Math.floor(Math.random() * sliderData.length)

    //获取图片
    const img = document.querySelector('.slider-wrapper img')
    //修改图片路径
    img.src = sliderData[random].url

~~~

#### **操作表单元素属性**

获取：dom对象.属性名
设置：dom对象.属性名 = 新值
表单里的password、input、checked、bottom都是布尔类型的
小tips：h5新规范里面的属性和属性值相同时可以省略

#### 自定义元素

date-自定义属性名
获取dateset.名：

~~~javascript
<body>
    
<div data-id="1” data-spm="不知道">1</div>
<div data-id="2">2</div><div data-id="3">3</div>
<div data-id="4">4</div>
<div data-id="5">5</div>
<script>
const one = document.querySelector('div')
console.log(one.dataset.id) // 1
console.log(one. dataset.spm)// 不知道

</script>
</body>
~~~

#### 定时器-间歇函数

开&关，1秒=1000毫秒
`setInterval(函数名不加小括号,间隔时间)`
作用：每间隔一段时间(毫秒)，执行函数
定时器返回的是一个数字id

关闭：

`let 变量名 = setinterval(函数,间隔时间)`

`clesrInterval(变量名)`

定时关闭开启案例：

![定时关闭开启案例代码](/定时关闭开启案例代码.png)

综合案例定时轮播图

### day2-dom事件基础

`元素对象.addEventListener('事件类型',要执行的函数)`

时间监听三要素

- 事件源：哪个dom元素被事件触发了，要获取dom元素
- 事件类型：用什么方式触发，比如鼠标单击click，鼠标经过mouseover等
- 事件调用的函数：要做什么事

事件监听版本：

dom l0	事件源.on事件 = function(){}

dom l2	addEventListener(事件,事件处理函数)

区别：on方式会被覆盖，addEventListener方式可绑定多次，拥有事件的更多特性

**事件类型**

鼠标事件
鼠标触发
click鼠标点击
mouseenter 鼠标经过
mouseleave 鼠标离开

焦点事件
表单获得光标
focus获得焦点
blur失去焦点

键盘事件
键盘触发
Keydown 键盘按下触发
Keyup 键盘抬起触发

文本事件
表单输入触发
input 用户输入事件

**事件对象**（属性和方法）

![事件对象](/事件对象.png)

检测键盘输入：key

![key检测](/key检测.png)

回车发布评论：

![案例回车发布评论](/案例回车发布评论.png)

trim()清空两侧的空格方法

**环境对象this**

【谁调用，this就是谁】粗略的规则

**回调函数**

如果把函数a作为参数传递给函数b，我们称a为回调函数

**综合案例**

### day3-dom事件进阶

**事件流：**事件完整执行过程中的流动路径
事件捕获（大到小）：不常见
**事件冒泡（小到大）：**当一个元素触发事件后，会依次向上调用父级元素的同名事件
阻止冒泡：`事件对象.stopPropagation`

解绑事件：
on事件解绑：`btn.onclick=null`
addEventListener的解绑：`btn.removeEventListener('click', fn)`匿名事件不会被解绑除非写在外面加名字
用mouseenter和mouseleave，因为没有冒泡


**事件委托**	减少注册次数，可以提高程序性能。利用事件冒泡的特点，给父元注册事件。
然后实现：事件对象.target.tagName

![事件委托的情况下怎么找到点击元素](/事件委托的情况下怎么找到点击元素.png)




**阻止默认行为** e.preventDedfault()

~~~
javascript
const a = document.querySelector('a')
a.addEventListener('click',function(e){
    e.preventDefault()
})
~~~

#### 其他事件

页面加载事件
load

~~~JavaScript
//页面所有资源加载完毕，就回去执行回调函数
window.addEventListener('load',function(){
    //执行事件
})
~~~

DOMContentLoaded

~~~javascript
document.addEventListener('DOMContentLoaded',function(){
    //执行操作
})
~~~

页面滚动事件

scroll

~~~JavaScript
//页面滚动事件
window.addEventLISTENER('scroll',function(){
    //执行操作
})
~~~

scrollTop
（获取页面的html标签：`document.documentElement`）

~~~javascript
//电梯井的返回按钮
const backTop = doucument.querySelector('#backTop')
backTop.addEventListener('click',function(){
    document.documentElement.scrollTop = 0	//另一种写法：window.scrollTO(0,0)
})
~~~

页面尺寸事件

检测窗口尺寸改变resize

~~~JavaScript
window.addEventLISTENER('resize',function(){
    //执行操作
})
~~~

通过js来获取盒子的可见部分宽度高度：clientWidth和clientHeight

~~~JavaScript
window.addEventLISTENER('resize',function(){
    let w = document.documentRlement.clientWidth
    console.log(w)
})
~~~

元素尺寸与位置：
 offsetWidth和offsetHeight
offsetLeft和offsetTop

#### 综合案例

css做页面平滑划动
`html{`
`scroll-behavior: smooth;`
`}`

小兔鲜电梯导航

### day4-dom节点操作

#### 日期对象

实例化：new
获得当前时间	const date = new Date()

~~~javascript
![倒计时公式](/倒计时公式.png)Zconst div = document.querySelector('div')
function getMyDate(){
    //实例化时间
    const date = new date
    let h = date.getHours()
    h = h <10 ? '0'+h : h 
    return `现在是:${h}点`  
}

div.innerHTML = getMyDate()

steIntervarl(function(){
	div.innerHTML = getMyDate()
},1000)
~~~

~~~javascript
//另一种写法
const div = document.querySelector('div')
const date = nwe Date()

div.innerHTML = date.tolocaleString()

steIntervarl(function(){
    const date = nwe Date()
	div.innerHTML = date.tolocaleString()
},1000)
~~~

时间戳：**毫秒数**特殊的计量时间的方式

~~~javascript
//必须实例化
const date = new Date()
console.log(date.getTime())
~~~

~~~JavaScript
+nwe Date()
~~~

~~~JavaScript
Date.now()
~~~

<img src="/倒计时公式.png" alt="倒计时公式" style="zoom:50%;" />

**节点操作**

dom节点：dom树里的每一个内容都称之为节点（**元素节点**、属性节点、文本节点）

查找节点(元素节点)：
父节点（最近一级的父节点，不存在返回null）	`子元素.parentNode`
子节点（返回的还是伪数组）	`父元素.children`
兄弟关系查找	`netxElementSibling`	`previousElementSibling`

增加节点(先创建节点后放入元素内部):	
`document.creatElement('标签名')`
`父元素.appendChild(要插入的元素)`
`父元素.insertBefore(要插入的元素，谁元素的前面)`

克隆节点：元素.cloneNode(布尔值)
无缝滚动：

![无缝滚动节点克隆代码](/无缝滚动节点克隆代码.png)

删除节点：父元素.removeChild(要删除的元素)

**M端事件**
touchstart、touchmove、touchend

因为移动端做轮播图麻烦，所以用插件

学习插件的过程：
熟悉官网—看在线演示找符合要求的demo—查看基本使用流程—查看api文档配置自己的插件（多个swiper同时使用的时候，类名需要注意区分）

![在html里面代码调用swiper怎么写css&js](/在html里面代码调用swiper怎么写css&js.png)



综合案例，不用dom操作，采用操作数据的形式

阻止默认行为：e.preventDafault()

~~~javascript
 <script>
    //获取元素
    const uname = document.querySelector('.uname')
    const age = document.querySelector('.age')
    const gender = document.querySelector('.gender')
    const salary = document.querySelector('.salary')
    const city = document.querySelector('.city')
    
    const tbody = document.querySelector('tbody')

    const items = document.querySelectorAll('[name]')

    //声明一个空数组
    const arr = []
    //录入模块，表单提交事件
    const info = document.querySelector('.info')
    info.addEventListener('submit', function (e) {
      //阻止默认事件，录入后的跳转
      e.preventDefault()
        //遍历新建的items数组，空则return
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === '') {
          alert('值不能为空')
          return
        }
      }
      // console.log(11)x
      //创建新的对象
      const obj = {
        stuId: arr.length + 1,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value,
        city: city.value
      }
      arr.push(obj)

      console.log(obj)
      this.reset()
      //调用渲染函数
      render()

    })
    //渲染函数
    function render() {

      //先清空tbody

      tbody.innerHTML = null
      for (let i = 0; i < arr.length; i++) {

        //创建元素，生成tr
        const tr = document.createElement('tr')
        tr.innerHTML = `
        
          <td>${arr[i].stuId}</td>
          <td>${arr[i].uname}</td>
          <td>${arr[i].age}</td
          <td>${arr[i].gender}</td>
          <td>${arr[i].salary}</td>
          <td>${arr[i].city}</td>
          <td>
            <a href="javascript:" date-id=${i}>删除</a>
          </td>

        //追加给父元素对象
        tbody.appendChild(tr)
      }
    }
    //删除功能
    //委托事件
    tbody.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        arr.splice(e.target.dataset.id, 1)
      }·
      // console.log(arr)
      render()
    })


  </script>
~~~

### day5—bom操作浏览器

**BOM**（Browser Object Model）

**定时器-延时函数**	`setTimeout(回调函数，等待的毫秒数)`
清除：`clearTimeout(timer)`

**Js的执行机制**：渲染引擎、v8引擎(解析js)
单线程，同一时间只能做一件事
同步和异步（同步任务-执行栈，异步任务-任务队列）
步骤：1.先执行执行栈中的同步任务2.异步任务放入任务队列3.一旦执行栈里的所有的同步任务执行完毕之后，系统就会按照次序执行任务队列里的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行（事件循环）

<img src="/js执行机制.png" alt="js执行机制" style="zoom: 80%;" />

**location对象**
`location.herf`<img src="/js自动跳转页面.png" alt="js自动跳转页面" style="zoom: 50%;" />

location还有属性：search（?后面的部分），hash（#后面的部分），reload（F5）

**navigator对象**
移动端/手机端，页面自动跳转（直接复制代码）

**history对象**
方法：back()	forward()	go()
<img src="/history.方法写前进后退.png" alt="history.方法写前进后退" style="zoom: 50%;" />

#### **本地存储**（数据存储在用户浏览器中）

**localStorage**(永久)：
语法：

增·储存数据：
`localStorage.setltem('key','value')`
获取数据
`localStorage.getltem('key')`
删除
`localStorage.removeltem('key')`
改
`localStorage.setltem('key','新value')`
PS：本地存储只能存字符串数据类型
sessionStorage(关闭会消失,不常用)

存储复杂数据类型的时候用这个语法：JSON.stringify
`localStorage.setItem('obj',JSON.stringify(obj))`
json再转换回去：JSON.parse(localSrorage.getItem('obj'))

实战案例：

数组map方法（遍历，有数组返回）：

~~~JavaScript
arr.map(function(ele,index){
    return ele + '颜色'
})
~~~

数组join方法（把数组转换成一个字符串）：

~~~JavaScript
arr.join() //有分隔符
arr.join('')//无分隔符
arr.join('/') //自定义符号
~~~

利用map和join的方法渲染页面

案例《读取本地存储数据》

### day6-正则表达式

**正则表达式(一种模式，对象)**
作用：验证表单-匹配、过滤敏感词-替换、字符串的某一部分-提取
语法：定义规则，匹配规则

`const 变量名 = /表达式/`	'/'是字面量
`regObj.test(被检测的字符串)`	返回值是bool
`regObj.exec(被检测的字符串)`	返回值是数组

**元字符（特殊的字符）**
边界符：^开始 $结束，^$一起时表示精确匹配只能1个
量词：
<img src="/元字符-量词表.png" alt="元字符-量词表" style="zoom:50%;" />
字符类：[]匹配字符集合：只要包含里面的任意一个字符，都返回true
[^]取反	.除了换行符

预定义：
<img src="/字符类-预定义图标.png" style="zoom: 50%;" />

**修饰符**

/表达式/修饰符
i匹配时字符不区分大小写；g所有满足的结果

替换replace替换
语法：
字符串.replace(/正则表达式/,'替换的文本')

今日综合案例+阶段案例

小tips：
节流阀，通过一个变量flag控制开关
表单验证用change事件，不用blurn
通过使用立即函数，避免重复变量名

~~~JavaScript
(function(){
  //被包起来的代码  
})();
~~~

切换类toggle
检查是否有某个类：classList.contains()，有返回true，无返回false

![](/tab栏切换的事件委托(排他思想).png)

历史记录关闭（表单form）: 	`autocomplete="off"`

### day7-实战 

小兔鲜网站，放大效果





## JS进阶

### DAY01es6+新语法

**作用域**

- 局部作用域
  函数内部和块作用域

- 全局作用域

  `<script>` 和 `.js` 文件 

- 作用域链
  就近原则，逐级查找父级作用域

- JS垃圾回收机制
  生命周期：内存分配、内存使用、内存回收
  全局变量一般不会回收（关闭页面回收）；局部变量不用了会被自动回收

  内存泄漏：内存，未释放或无法释放

  **算法说明**

  1.栈(操作系统):由**操作系统自动分配释放**函数的参数值、局部变量等。
  基本数据类型放到栈里面
  2.堆(操作系统):一般由程序员分配释放，若程序员不释放，由**垃圾回收机制**回收。
  **复杂数据类型**放到堆里面

  两种常见的浏览器**垃圾回收算法**：
  **引用计数法(IE)：**引用次数（嵌套/循环引用导致内存泄漏）
  **标记清除法：**从global全局出发，无法到达的对象清除

- 闭包(内层函数+外层函数的变量)
  <img src="/闭包使用代码.png" alt="闭包使用代码" style="zoom: 33%;" />
  闭包应用：实现数据的私有（也有内存泄漏的风险）

- 变量提升：仅存在var声明变量
  <img src="/Var变量提升.png" alt="Var变量提升" style="zoom: 50%;" />

**函数进阶**
**函数提升**(无所谓)：同变量提升的原理（但函数表达式不行，因为本质是赋值不是声明）

**函数参数**：
动态参数-arguments只存在于函数里的伪数组
剩余参数-只存在于函数里的，开发中多使用，...是一个真数组
**展开运算符**：...		Math.方法求数组的最值、合并数组const arr3=[...arr1,...arr2]

**箭头函数**（vue）：1.只有一个形参的时候可以省略小括号2.只有一行代码的时候可以省略大括号3.箭头函数可以省略return 4.箭头函数可以直接返回一个对象const fn = (uname) => ({属性:参数})

~~~javascript
//箭头函数 基本语法
const fn = () => {
    //执行代码
}
//函数调用
  fn()
~~~

普通函数有arguments动态函数，箭头函数没有arguments动态参数和变量提升 	，但是有剩余参数..arr

箭头函数没有自己的this，它的this 是上一层作用域的this	

**解构赋值**

数组结构：是将数组的单元值快速批量赋值给一系列变量的简洁语法
`const [max,min,avg] = [100,60,80]`
ps:立即执行函数和数组解构时，前面必须加分号
变量和单元值数目对不上：可以用剩余参数...c来解决变量少于单元值的情况；也可以给默认值；按需导入赋值，空着就行；
多维数组的结构：	

对象结构

~~~JavaScript
//解构的语法,属性名和变量名必须相同（改名：旧变量名：新变量名）
const{ uname, age } = { uname:'a', age:18 }
//等价于 const uname = obj.uname
~~~

数组对象结构：一一对应
多级对象解构：
//msg是后台数据传过来的数据一个对象，date是参数
`function render({data:mayData}){`
`console.log(myData)`
`}`
`render(msg)`



**forEach方法**
遍历数组的每个元素(只遍历不返回)
语法：(适合遍历数组对象)

~~~JavaScript
被遍历的数组.forEach(function(当前数组元素，当前元素索引号){
//函数体
})
~~~

~~~JavaScript
const arr = ['red','green','pink']
arr.forEach(function(item,index){
    console.log(item)
    console.log(index)
//item必写，index可以不写
})
~~~

##### 综合案例

**筛选数组filter方法**，筛选数组符合条件的元素，并返回筛选之后元素的新数组

~~~javascript
const arr = [10,20,30]
arr.filter(function(item,index){
   // console.log(item)
  //  console.log(index)
    return item >=20
})
~~~

### DAY02构造函数&常用函数

**深入对象**

- 创建对象的三种方式：利用字面量、利用new Object创建对象、利用**构造函数**创建对象

- 构造函数：一种特殊的函数，目的是用来创建多个对象，创建对象。**规定**：**！命名以大写字母开头**；只能由“new”来操作。
  构造函数不用return，自动返回对象

  ~~~JavaScript
  //1.创建构造函数
  function Pig(uname){
      this.uname = uname
  }
  //2.new 关键字调用函数
  //new Pig('佩奇')
  //接受创建的对象
  const p = new Pig('佩奇')
  console.log(p)//{uname:'佩奇'}
  ~~~

- 实例成员&静态成员
  用构造函数创建的对象称为实例对象，**实例对象**当中的属性和方法称为**实例成员**（构造函数创建的实例对象彼此独立互不影响）

  构造函数的属性和方法就是**静态成员**
  静态成员只能构造函数来访问，静态方法里的this指向构造函数

#### 内置的构造函数

引用类型:Object，Array，RegExp，Date 等
包装类型:String，Number，Boolean等

Object是内置的构造函数
`const user = new Object({ name:'小明', age: 15 })`	推荐使用字面量方式声明对象，而不是Object构造函数
三个只有Object才能调用的静态方法：
Objcet.keys()	返回数组
Objcet.values(目标对象)	返回数组
Objcet.assign(容器,水)	拷贝对象

Array	
实例方法：forEach遍历数组，filter过滤数组，map迭代数组，reduce累计器	`arr.reduce(function(上一次的值，当前值){}, 初始值)`
遇到对象数组的时候，要设定初始值为0

**数组方法**
find的实际使用：
<img src="/find方法查找数组对象中包含某一属性的元素.png" alt="find方法查找数组对象中包含某一属性的元素" style="zoom: 50%;" />
`const mi = arr.find(item => item.name === '小米')`

every、some方法
(aaba).every(a)	=>false
(abba).every(b)	=>true

静态方法：Array.from()
`const zhen =Array.form(weishuzu)`



字符串String
实例方法

<img src="/String常见的实例方法.png" style="zoom:67%;" />

**数组—>字符串，join方法**
**字符串—>数组，split('分隔符')**	然后通常用map来遍历数组再用join

str.substring (开始的索引号 [,结束的索引号])	字符串截取	ps:省略默认取到最后,结束不包含

str.startswith (''某个字符'' [,从第几个开始])	判断是不是以某个字符开头，返回布尔值

str.includes (检索字符串[,从第几个开始])	判断是否包含某个字符串，返回布尔值	PS：区分大小写

Number:内置的构造函数，用于创建数值，toFixed()设置保留小数位的长度。

~~~javascript
const price = 12.345
//保留两位小数 四舍五入
console.log(price.toFixed(2)) //12.35
~~~

综合案例

String(num)/num.toString()

### DAY03深入面向对象

##### 编程思想

面向对象（oop）：封装性，继承性，多态性
面向过程

##### 构造函数

封装性
存在浪费内存的问题（↓使用原型解决）

##### 原型

1每一个构造函数都有一个prototype属性，指向另一个对象，也叫原型对象。
2这个对象可以挂载函数，来解决对象实例化时多次调用函数导致的浪费内存问题，我们可以把那些不变的方法，从构造函数中拿出来，直接定义在prototype对象上，这样所有对象的实例可以共享这个方法。
3构造函数和原型对象中的this都指向实例化的对象。



利用原型来为数组增加方法/函数

~~~javascript
const arr = [1,2,3]
Array.prototype.max =function(){
    //展开运算符
    return Math.max(...this)
} 
//调用
arr.max()
~~~

**constructor属性**

每个构造函数里面都有constructor属性，指向其构造函数
<img src="/用prototype属性定义多个函数方法的时候,需要重新指回构造函数一下.png" style="zoom: 50%;" />

**对象原型**
每一个实例对象，都有一个 `__proto__`属性，这个属性(对象原型)指向构造函数的prototype原型对象。
对象原型里面也有constructor属性，指向创建实例对象的构造函数



**原型继承**
借助原型对象继承的特性，所以叫做原型继承

~~~JavaScript
const Person = {
    eays: 2,
    head: 1
}
function Woman(){  
}
//Woman 通过原型来继承 Person
Woman.prototype = Person
//指回原来的构造函数
Woman.prototype.consturctor = Woman
const a = new Woman()
~~~

由于**引用类型的特点**，当两个实例化对象使用了同一个对象（即指向了同一个对象的时候，修改一个都会影响）。
为了解决**这个问题**，需要**再套一个构造函数**，function Person(){this.eyes = 2}，然后在修改实例化对象的原型对象的时候这么写Woman.prototype = new Person()

**原型链**
<img src="/原型链图示.png" alt="原型链图示" style="zoom: %;" />

查找规则：当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性。如果没有就查找它的原型 (也就是__proto__指向的 prototype 原型对象)如果还没有就查找原型对象的原型 (object的原型对象)依此类推一直找到 object 为止 (null)
proto 对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

##### 综合案例

### DAY04高阶技巧

#### 深浅拷贝

##### 浅拷贝：只拷贝了地址（单层）

对象：Object.assgin()或者{...obj}
数组：Arry.prototype.concat或者[...arr	]

##### 深拷贝：拷贝的是对象

常见方法：
1.自己利用递归函数写（一个函数在内部调用自己）实现深拷贝
2.利用js库lodash里面的_.cloneDeep()

~~~JavaScript	
//先引用
<script src="..lodash.min.js"></script>
const obj = {
    age:1,
    hobby:['1','1'],
    family:{baby:'1'}
}
const o = _.cloneDeep(obj)
~~~

3.利用JSON.stringfy()字符串转换

~~~javascript
//把对象转换成字符串，再转回对象
const o = JSON.parse(JSON.stringify(obj))
~~~

#### 异常处理

**throw抛异常**：自己会中断，常与error对象同时使用

~~~JavaScript
function fn(x,y){
   if (!x ll !y){
 	throw new Error('没有参数传递过来')
   }
}
~~~

**try/catch**：捕获浏览器提供的错误信息，不中断程序执行

~~~JavaScript
function fn() {
      try {
        // 可能发送错误的代码 要写到 try
        const p = document.querySelector('.p')
        p.style.color = 'red'
      } catch (err) {
        // 拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行
        console.log(err.message)
        throw new Error('你看看，选择器错误了吧')
        // 需要加return 中断程序
        // return
      }
      finally {
        // 不管你程序对不对，一定会执行的代码
        alert('弹出对话框')
      }
      console.log(11)
    }
    fn()
~~~

**debugger**断点自动拦停

#### 处理this

**this指向**
普通函数：谁调用，指向谁（严格模式指向undefined）
箭头函数：不存在，默认引用最近作用域里面的this，一层一层向外查找。（构造函数，原型函数，dom事件函数不适用）

**改变this**	三个方法

call()	`改谁.call(this指向谁,1,2)`

apply()	`fun.apply(thisArg,[argsArray])`
apply传递的必须是数组

bind()方法不会调用函数，但是能改变函数内部this指向(定时器内部)	`fun.bind(thisAri,arg1,arg2,...)`
返回值是修改过this后的新函数

区别：call和apply会立即执行函数，而bind不立即执行；call返回元素、apply返回数组

#### 性能优化

防抖：单位时间内，频繁触发事件，只执行最后一次
实现方法：1、**lodash**提供的**防抖函数**来处理 `_.debounce(fun,[100ms])`	2、**手写**一个防抖函数来处理`setTimeout定时器来实现`

节流-throttle：单位时间内，频繁触发事件，只执行一次
实现方法：1、**lodash**提供的**节流函数**来处理 `_.throttle(fun,[100ms])`	2、**手写**一个**防抖函数**来处理





END

