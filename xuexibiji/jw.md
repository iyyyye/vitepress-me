# 计算机网络

---

## 1、osi-7层(参考)模型



![Snipaste_2024-03-31_18-26-58](/Snipaste_2024-03-31_18-26-58.png)

物理层：传输**比特流**。
数据链路层：数据帧。
网络层：数据包。路由，ip协议
传输层：数据段。定义端口号tcpudp
会话层：报文。
表示层：报文。翻译官
应用层：报文。dns ssh协议



## 2、tcp3次握手

seq，序列号随机生成
ack，确认号ack=seq+1
ACK，确认序列号有效
SYN，发起新链接<img src="/tcp3次握手.png" alt="tcp3次握手" style="zoom: 50%;" />

## 3、4次挥手

<img src="/四次挥手.png" alt="四次挥手" style="zoom:80%;" />

## 4、url

<img src="/url.png" alt="url" style="zoom:80%;" />

**dns查询：**
服务器有ip，为了方便，DNS把ip跟域名做了一个映射，通过对应的域名找到这个服务器对应的ip，再去拿到正确的资源。

四个查找规则（递归查找）：

- 浏览器自身DNS
- 操作系统DNS
- 本地host文件
- 向域名服务器发送请求

<img src="/dns域名查找.png" alt="dns域名查找" style="zoom: 50%;" />

**options请求**

两种情况：
1跨域的时候，浏览器会发送一下options请求，去做一个预检，看是否成功
2自定义请求头的时候，也会触发预检请求
（简单请求不会触发预检请求，浏览器会直接发送实际请求）

**浏览器的缓存**：**强缓存、协商缓存**

**强缓存**：浏览器去缓存一些服务端提供的一些资源，大部分为静态资源（css、js），后台配置，两个字段
<img src="/强缓存.png" alt="强缓存" style="zoom: 50%;" />



**协商缓存**：和后端协商
<img src="/协商缓存.png" alt="协商缓存" style="zoom:67%;" />

**拿到html页面开始渲染**：绘制dom树，html解析器将超文本和标签解析为dom树

**cssom的构建过程**：渲染引擎把css文本标准化，

### **回流(Reflow)大流**

当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

会导致回流的操作:

- **页面首次渲染**
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化(文字数量或图片大小等等)
- 元素字体大小变化
- 添加或者删除可见的 DOM 元素
- 激活 CSs 伪类(例如::hover)
- 查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法:

- clientwidth、clientHeight 、clientTop、clientLeft
- offsetwidth 、offsetHeight、offsetTop 、offsetLeft
- scrollwidth、scrollHeight、scrollTop、scrollLeft
- scrollIntoView()、scrollIntoViewIfNeeded()
- getComputedstyle()
- getBoundingclientRect()
- scrollTo()

### **重绘(Repaint)绘色**

当页面中元素样式的改变并不影响它在文档流中的位置时(例如:color、 background-colorvisibility 等)，浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

**解析JavaScript**
v8引擎
<img src="/v8解析JavaScript.png" alt="v8解析JavaScript" style="zoom:50%;" />

## 5、CDN内容分发

## <img src="/网站上线.png" alt="网站上线" style="zoom:50%;" />

在服务器上存放前端的一个静态资源，注册一个域名，配置一下dns域名解析，和服务器的ip进行绑定，当用户访问域名的时候，就会经过dns解析，找到服务器ip，返回相关资源

<img src="/负载均衡.png" alt="负载均衡" style="zoom:50%;" />

## 6、跨域：出于浏览器的同源策略限制，浏览器会拒绝跨域请求。

同源策略：请求的时候拥有相同的协议 域名 端口 只要有一个不同就属于跨域

<img src="/解决跨域的四种.png" alt="解决跨域的四种" style="zoom:50%;" />

1.jsonp
原理：通过script的src不受同源策略的限制，可以跨域请求数据，但是只能发送get请求（缺点：只能发送get请求，不安全，不容易维护）
后端返回的是一个函数，这个函数是在前端定义的，把值注入到这个函数的参数里面

2.纯前端代理：开发环境使用，上线还需要再配置

3.后端设置请求头：不安全，一般不用

4.nginx代理：安装nginx，在配置文件default里面：

```default
location /api {
proxy_pass http://cat获取nameserver的地址:3000;
}
```

## 7、AJAX全套：异步更新

## 8、fetch全套

## 9、see全套

## 10、websocket全套

## 11、navigator.sendBeacon

## 12、SSL TLS https(应用层的下面，传输层的上面做加密)

**http 缺点**
通信使用明文(不加密)，内容可能会被盗用
不验证通信方的身份，因此有可能遭遇伪装
无法证明报文的完整性，所以有可能已遭篡改

**https**
信息加密
完整性校验
身份验证

`HTTPS = http + TLS/SSL`

对称加密，非对称加密，散装函数

## 13、JWT鉴权

三部分

## 14、网络状态

如何获得前端的网络状态? 

```
console.log(navigator.online);
```

 true在线 fslse离线

第二种方法，挂到Window上面 , online offline

```html
window.addEventListener('online',function(){
	console.log('online');
})
```

如何区分强网和弱网的环境

```
console.log(navigator.connection);
```

会返回一个NetworkInformation的一个对象。

`navigator.connection` API 能够获取的主要网络连接属性如下：

- `downlink`: 当前网络连接的估计下行速度（单位为 Mbps）
- `downlinkMax`: 设备网络连接最大可能下行速度（单位为 Mbps）
- `effectiveType`: 当前网络连接的估计速度类型（如 slow-2g、2g、3g、4g 等）
- `rtt`: 当前网络连接的估计往返时间（单位为毫秒）
- `saveData`: 是否处于数据节省模式

除此之外，还有其他诸如 `type`、`onchange` 等属性，用于获取设备网络连接的类型和注册网络连接状态变化事件等功能。

## 15、xss跨站脚本攻击

反射型xss
存储型xss（最严重的）
dom型xss

xss漏洞扫描工具
wvs、椰树、safe3、burp、w3af--kali、vega--kali

预防xss：主要还是服务端

```
前端 value.replace(/</g,'&lt;').replace(/>/,'&gt;');
```

注入第三方的库预防的工具：npm 搜索xss 

## 16、tcp实现http的服务

---



## tcp三次握手

<img src="/三次握手.png" alt="三次握手" style="zoom:80%;" />

客户端
服务端

**发请求是采用http请求，建立http连接之前，首先要建立TCP连-三次握手**
客户端主动的 -> 服务器 SYN=1 
服务器 -> 客户端 SYN=1 ACK= 1
客户端 ->服务器 OK收到可以建立连接了

**四次挥手<img src="/四次挥手1.png" alt="四次挥手1" style="zoom:50%;" />**

客户端 - 服务器 FIN=1 告诉服务器我要断开连接了
服务器-客户端 ACK-=1 告诉服务器我知道了，但是我现在还不能断开，因为有可能我的数据还没有传输完成
服务器-客户端 FIN=1 数据传输完毕了，确认要断开了
客户端-服务器 -确认断开连接-2MSLtimeawit阶段-等待关闭

<img src="/四次挥手.png" alt="四次挥手" style="zoom:80%;" />



---

## 计算机网络

<img src="/计算机网络.png" alt="计算机网络" style="zoom:150%;" />

arp协议->ip转换mac地址
tcp->传输层
http请求->网络层





---

## HTTPS原理全解析

https保证了外部传输过程中的传输安全

**对称加密**：不可取，因为key只有一个，黑客也可以获取key
**非对称加密**：有缺点，私钥只有服务器有，所以服务器向客户端发送的数据可以被公钥解析，不安全，而公钥是公开的
**对称+非对称：**先用非对称将num传给s，s用私钥解析出num，再用num当做临时的key进行互相之间的传输

明文：裸奔
对称加密：key唯一=跟明文没什么两样
非对称加密：s->c不安全
对称加非对称：中间人问题

**最终解决方法**
**对称+非对称+CA认证**：s端不再直接向c端直接传输公钥pk，用csk加密pk得出license(非对称加密，这一步在CA运行，直接给到s端一个license)，然后把license传输给c端， c端再用cpk解析license就可以得出s端的pk，CA机构的cpk已经写死在client端的操作系统当中，无需再向CA索要cpk。 然后就可以继续用非对称加密进行key的协商，后续同对称+非对称的方法。

协商key 的过程：
对称+非对称+hash散列算法+ca认证
<img src="/https协商过程.png" alt="https协商过程" style="zoom:50%;" />



---

## cookie/session/localstorage/sessionstorage

<img src="/前端存储.png" alt="前端存储" style="zoom:50%;" />



---

## DNS原理和域名的配置

![dns路径](/dns路径.png)

**dns的作用：**
**配置域名去映射ip->  A记录ARecord / ipv6:AAA记录**
**域名去映射另一个域名**：**CName**
**域名去映射url**

---

## 计算机网络-其他课程

















































































































