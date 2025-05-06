# 数据结构

#### 时间复杂度:

O(1)：除了递归和for循环的大部分都是O(1)的复杂度
O(n)：for循环了n遍，时间复杂度取决于n
O(1) + O(n) = O(n)
O(n^2)：两个for循环的嵌套

#### 空间复杂度：

执行当前的算法需要占用多少的内存空间
O(1)、O(n)、O(n^2)

#### 栈：

原则：后进先出	入：push	出：pop

算法：
**力扣20.有效括号**：

```js
var isValid = function(s) {
const stack =[]
for(let c of s){
    if(c==='('){
        stack.push(')')
    }else if(c ==='['){
        stack.push(']')
    }else if (c=== '{'){
        stack.push('}')
    }else if(c!==stack.pop()){
        return false
    }
}
return stack.length===0;
};
```

**力扣.1047删除字符串里所以相同的相邻项**：

```js
var removeDuplicates = function(s) {

const stack=[]
for(let c of s){
if(stack.length === 0 ||c!==stack[stack.length-1]){
stack.push(c)
}else if(c===stack[stack.length-1]){
stack.pop()}
}
return stack.join('');
};
```

**力扣71.简化路径:**

```js
let stack = [];
  let str = '';
  let arr = path.split('/');

  arr.forEach(e => {
    if (e && e == '..') {
      stack.pop();
    } else if (e && e != '.') {
      stack.push(e);
    }
  });

  arr.length ? str = '/' + stack.join('/') : str = '/';
  
  return str;
```

#### 队列

先进先出

#### JS里的任务队列

js是一个单线程
![js的任务队列流程图](/js的任务队列流程图.png)

直接点击：
<img src="/演讲微任务1.png" alt="演讲微任务1" style="zoom: 50%;" />

用JavaScript点击：
<img src="/演讲微任务.png" alt="演讲微任务" style="zoom:50%;" />

**队列的算法题：力扣933最近的请求次数**

#### 链表

1.多个元素存储的列表
2.链表中的元素在内存中不是顺序存储的，而是通过"next"指针联系在一起的。

js中的原型链 原理就是 链表结构

链表和数组的区别
1.数组:有序存储的，在中间某个位置删除或者添加某个元素其他元素要跟着动。
2.链表中的元素在内存中不是顺序存储的，而是通过"next"指针联系在一起的

![单链表](/单链表.png)

![双向链表](/双向链表.png)

**遍历链表**

```
a.next = b;
b.next = c;
c.next = d;
d.next = null
//遍历链表
let obj = a;
while(obj && obj.key){
	console.log(obj.key);
	obj = obj.next;
}
```

链表中插入某个元素

```
let m ={key:'mmmmmm'}
c.next = m
m.next = d
```

删除操作

```
c.next = d;
//c本来指向的是m
```

**instanceof原理**

作用判断某一个对象是不是一个原型/arrar/object
手写：

```
const instanceofs = (target,obj)=>{
let p = target
while(p){
if(p==obj.prototype){
return true
}
p=p.__proto__
}
return false;
}
```

#### 环形链表

最后一项不再指向null，而是之前的某一个节点，组成一个环
**力扣141.环形链表**

```
//快慢指针
var hasCycle = function(head){
    let f = head;s = head;
    //head是链表的头节点 head
    //避免在移动指针时出现空指针异常
while(f !=null && f.next !=null){
s=s.next
f=f.next.next
if(s==f)return true
}
return false
}
```

**力扣237删除链表中的某个节点**

```
node.val = node.next.val
node.next =node.next.next
```

**力扣83.删除排序链表中的重复元素**

```
if(node.val == node.next.val){
node.next=node.next.next
}else{
node.val = node.next.val
}
```

**力扣206翻转链表**

```
//双指针（理解不深，一般般）
let cur =head
let pre =null

while(cur){
    let temp =cur.next
    cur.next =pre
    pre=cur
    cur=temp
}
	//返回要返回pre
return pre

//递归同理，头插法不会
```

#### 字典和哈希

py的字典就是用哈希实现的

哈希(hash)又称散列排序，是一种不可逆的的加密(把无限的字符转换为有限的数字叫做hashing)。

**哈希表的查找**要先对键进行运算(哈希函数MD5,SHA-256)，然后得到数字才可以找到对应的地址

**哈希函数**(MD5,SHA-256)，功能：输入数据输出整数；特点：不同的参数，得到不同的整数，只有相同的参数，才能得到相同的整数。**这些算法可以把数据运算为固定的值(摘要)**

输入不同的参数，得到相同的整数，这一现象被叫做**冲突**，任何算法在理论上都不能保证避免冲突，但存在**解决方案**。

解决方案(牺牲性能和存储空间)：封闭寻址法(链表法)、线性探测方法-二次探测方法-双重哈希-布谷鸟哈希(开放寻址法)

应用：数据检索、密码保存、文件对比、数字签名mac数字指纹

**力扣1.两数之和**

```
var twoSum = function(nums, target) {
let map = new Map
for(let i = 0;i<nums.length;i++){
    let a = target-nums[i]
    if(map.has(a)){
        return[i,map.get(a)]    
    }
    map.set(nums[i],i)
}
};
```

**力扣217.存在重复元素**

```
//Map 的键可以是任意数据类型，而不仅限于数字或字符串。这对于处理复杂的数据结构或对象作为键时非常有用。
var containsDuplicate = function(nums) {
let map = new Map();

for(let i = 0;i<nums.length;i++){
    if(map.has(nums[i])){
return true
    }
    map.set(nums[i])
}
return false
};
```

**面试真题：判断一个字符串中出现次数最多的字符，并统计次数，**

```
 //创建筛选的函数
    function fun(s) {
    
      //哈希的部分
      var hashMap = new Map()
      for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (hashMap.has(char)) {
          hashMap.set(char, hashMap.get(char) + 1)
        }
        else {
          hashMap.set(char, 1)
        }}
      
      //取出最大值的部分
      let maxCount = 0;
      let maxChar = '';

      hashMap.forEach(function (count, char) {
        if (count > maxCount) {
          maxChar = char;
          maxCount = count;
        }})
      console.log(maxChar + '出现次数最多，一共有' + maxCount + '次');
    }
    
    //调用函数
    fun('aabbbbbbbbbbbbaaccccccc')
```

易错点：
1.声明“**变量**”的时候用let，不要用const
2.forEach 函数的回调函数中，回调函数的参数顺序是 (value, key)，而不是 (key, value)。

**力扣349.两个数组的交集**（没做后半部分的判断）

```
1 let countMap = new Map();

    // 统计每个数的出现次数
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    let occurrencesSet = new Set();

    // 检查出现次数是否独一无二
    for (let count of countMap.values()) {
        if (occurrencesSet.has(count)) {
            return false; // 存在重复的出现次数
        } else {
            occurrencesSet.add(count);
        }
    }

    return true; // 每个数的出现次数都是独一无二的
```

**力扣03.无重复字符的最长子串**

```
//双指针的方法做(右指针可以用for循环的i来代替了，但用两个指针方便维护)
var lengthOfLongestSubstring = function (s) {
    let fin = 0;
    let left = 0;
    let right = 0;
    const hashSet = new Set();
    while (right < s.length) {
        if (!hashSet.has(s[right])) {
            hashSet.add(s[right]);
            fin = Math.max(fin, right - left + 1);
            right++;
        } else {
            hashSet.delete(s[left]);
            left++;
        }
    }
    return fin;
};

```

#### 树

一种分层数据的抽象模型，简单来说是用来分-层级关系的

**深度优先搜索：**
从根出发，尽可能深的搜索树的节点
1.访问根节点2.对根节点的children挨个进行深度优先遍历

```
深度：
const fun1 =(root)=>{
console.log(root.val)
root.children.forEach(fun1)
}
//调用
fun1(tree)
```

**广度优先搜索：**
从根出发,优先访问离根节点最近的节点
1.新建一个队列，把根节点入队2.把队头出队3.把队头的children挨个入队4.重复23步骤，直到队列为空

```
深度：
const fun2 =(root)=>{
const arr =[root]
while(arr.length>0){
const o =arr.shift()
console.log(o.val)
o.children.forEach(item=>{
arr.push(item)
})
}
}
//调用
fun2(tree)
```

多叉树和二叉树

**力扣144.二叉树的前序遍历**

```
let arr=[]
// 递归前序遍历函数
const fun=function(node) {
if (node === null) {
return;
}

arr.push(node.val); // 输出当前节点的值 console.log(node.val)
fun(node.left); // 递归遍历左子树
fun(node.right); // 递归遍历右子树
}
```

**力扣.二叉树的后序遍历**

```
let arr=[]

// 递归后序遍历函数
const fun=function(node) {
if (node === null) {
return;
}

fun(node.left); // 递归遍历左子树
fun(node.right); // 递归遍历右子树
arr.push(node.val); // 输出当前节点的值

}
fun(root)
return arr
```

**力扣111.二叉树的最小深度**

```
//后序遍历

```

**力扣104.二叉树的最大深度**

```
//后序遍历

```

**力扣104.翻转二叉树**

```

```

**力扣100.相同的树**

```

```

---

**BST二分查找树**

特点：任意一个节点的左树中的节点都比他小，右树中的节点都比它大。和二分查找思想相似
最优:O(log n)	最差:O(n)
缺点：无法胜任递增数列

---

**BST=>优化=>AVL**

特点：任意一个节点的左子树和右子树的深度差始终<=1
读和写的空间复杂都是O(log n)

---

**AVL=>优化平衡=>红黑树**

![红黑树图解](/红黑树图解.png)

TREEMAP的底层就是红黑树。
BST退化成链表，avl的平衡不如红黑树
终极效果要完成的就是：左右深差一倍以内

---

#### 堆

定义：把一堆的数据组成一种树的结构，但是这个树是**通过数组来表示**的（不是链表）堆必须是完全二叉树
堆序性：大根堆、小根堆
堆的存储：
<img src="/堆的存储.png" alt="堆的存储" style="zoom: 33%;" />
节点下标为i
左子节点下标为2i+1
右子节点下标为2i+2
堆的操作方式：
下滤：根节点向下调整	O(logN)
上滤：插入任意元素到堆尾部	O(logN)
建堆：
自顶向下1.插入堆2.上滤O(NlogN)
自下而上1.对每个父节点进行下滤O(N)

优先队列：
<img src="/优先队列2.png" alt="优先队列2" style="zoom:33%;" />
弹出最小元素：直接弹出根节点O(logN)
插入队列：上滤O（logN）
堆排序O（NlogN）

**最小堆**

**力扣215.数组中的第k个最大元素**

```
//暴力法：新建一个方法function(nums,k),用内置排序nums，直接返回nums[nums.length-k]
//堆排序：1最大堆 2最小堆(只有k个元素的最小堆)
//快速排序(还没学)

只有k个元素的最小堆的方法（力扣提交超出时间限制。。。。）
const hh =new MinHeap()
for(num of nums){
hh.insert(num)
if(hh.size()>k){
hh.pop()
}}
return hh.peek()
```

ps最小堆的js代码可以直接复制

```
// 最小堆类
class MinHeap {
constructor() {
this.heap = [];
};
// 交换节点位置
swap(i1, i2) {
const temp = this.heap[i1];
this.heap[i1] = this.heap[i2];
this.heap[i2] = temp;
};
// 获得父节点
getParentIndex(i) {
return Math.floor((i - 1) / 2);
};
// 获得左节点
getleftIndex(i) {
return 2 * i + 1;
};
// 获得右节点
getrightIndex(i) {
return 2 * i + 2;
};
// 上移
shiftUp(index) {
if (index === 0) { return; }
const parentIndex = this.getParentIndex(index);
if (this.heap[parentIndex] > this.heap[index]) {
this.swap(parentIndex, index);
this.shiftUp(parentIndex);
}
};
// 下移
shiftDown(index) {
const leftIndex = this.getleftIndex(index);
const rightIndex = this.getrightIndex(index);
if (this.heap[leftIndex] < this.heap[index]) {
this.swap(leftIndex, index);
this.shiftDown(leftIndex);
}
if (this.heap[rightIndex] < this.heap[index]) {
this.swap(rightIndex, index);
this.shiftDown(rightIndex);
}
};
// 插入 时间复杂度O(logk)，k为堆大小
insert(value) {
this.heap.push(value);
this.shiftUp(this.heap.length - 1);
};
// 删除堆顶
pop() {
// pop()方法删除数组最后一个元素并返回，赋值给堆顶
this.heap[0] = this.heap.pop();
// 对堆顶重新排序
this.shiftDown(0);
};
// 获取堆顶
peek() {
return this.heap[0];
};
// 获取堆的大小
size() {
return this.heap.length;
}
}
```

#### 总的大纲思维导图

<img src="/数据结构.png" alt="数据结构" style="zoom:33%;" />

**算法：**
排序：冒泡排序、快速排序、插入排序
搜索：二分搜索、顺序

#### 冒泡排序

N轮，遍历数组，O(n^2)
稳不稳定：相等的数，相对位置不会发生改变，所以是可以保证稳定

```
手写冒泡排序：
function arrSort(arr){

for(let i = 0;i<arr.length-1;i++){
	for(let j=0;j<arr.length-i-1;j++){
	if(arr[j]<arr[j+1]){
	let temp=arr[j]
	arr[j]=arr[j+1]
	arr[j+]=temp
	}
	}
}
return arr
}
arrSort()
```

#### 插入排序

打扑克，从牌池中摸到手牌里(从后往前扫描)
1.从第一个元素开始，该元素可以被认为已经被排序2.取出下一个元素，在已经排序号的序列中，从后往前扫描3.直到找到小于或者等于该元素的位置
摸起n张手牌，每张牌都需要插入O(n)
O(n^2)
稳定

```
手写代码


```



#### 选择排序

依次选出，选状元、选榜眼、选探花
n轮，遍历找最小值卷换n
O(n^2)
不稳定！！ （相对位置发生改变）

```
代码实现
function sortMin(arr){
let first=0;
for(let i =0;i<arr.length;i++){
first=i;
	for(let j=i+1；j<arr.length;j++){
		if(arr[j]<arr[first]){
		first=j
		}
}
let temp =arr[j]
arr[j]=arr[j+1]
arr[j+1]=temp
}
return arr
}
sortMin()
```



<img src="/归并和快排.png" alt="归并和快排" style="zoom:60%;" />

#### 快速排序

**分治思想**

操作：随机选一个PIVOT，比它小的放左边，大的放右边（双指针实现）层数有logN，每层有N，所以O(NlogN)
不是稳定的，涉及到交换
最坏情况：n^2	

```
手写代码

```

#### 归并排序

也是分治思想

核心操作：合并两个有序数组
层数logn，每层n
O(nlogn)
稳定的，交换的时候可以规定顺序

排序的性能分析：
三种基本排序：选择、插入、冒泡（n^2）
nlogn：快速、归并

```
手写代码

```



图：
<img src="/排序算法.png" alt="排序算法" style="zoom: 67%;" />
<img src="/排序算法2.png" alt="排序算法2" style="zoom:350%;" />

#### 二分搜索

条件：必须是在有序的数组情况下，适合二分搜索

```
//手写二分搜索法
    let arr = [2, 15, 44, 44, 89, 188, 1111, 4200]
   
   function search(arr, target) {
    
      let count = 1
      let start = 0
      let end = arr.length - 1

      while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let midIndex = arr[mid]
        console.log(count);

        if (midIndex == target) {
          return midIndex
        }
        if (midIndex > target) {
          end = mid - 1
        }
        if (midIndex < target) {
          start = mid + 1
        }
        count++
      }
      return -1
    }

    console.log(search(arr, 188888));
```

#### 分治思想和动态规划

**分治思想：将一个大问题拆成多个小问题，接着通过解决小问题来解决大问题。例如高考拆分成多个学科，之间没有关联**

**动态规划：将一个大问题拆成多个小问题，接着通过解决小问题来解决大问题。例如考博需要考研考大学考高中，大问题中问题小问题之间是一换套一环，小问题会将一些状态转移给大问题**

分治的子问题都是独立的，动态规划就是分治的一种优化（适用于动态规划的问题，经分解得到的子问题往往不是互相独立的）

**分治-力扣169.多数元素**

```
//用分治递归来写
```

**动态-力扣70.爬楼梯**

```
var climbStairs = function(n) {
if(n<=2){
    return n
}

 var dp = new Array(n + 1);
    dp[1]=1
    dp[2]=2
for(let i =3;i<=n;i++){
 
    dp[i]=dp[i-1]+dp[i-2]
}
return dp[n]
};
```

**动态-力扣198.打家劫舍**

```
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  
  var dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  
  for (var i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
  }
  
  return dp[nums.length - 1];
};
```

#### 贪心算法

一种思想，以局部最优推出全局最优。

**力扣.55. 跳跃游戏**

```
let cover = 0
for(let i =0;i<nums.length;i++){
   if(i<=cover){
    cover=Math.max(nums[i]+i,cover)
    if(cover>=nums.length-1){
        return true
    }
   }
  
    } return false
```

**力扣.455发饼干**

```
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b); // 对数组 g 进行升序排序
  s.sort((a, b) => a - b); // 对数组 s 进行升序排序
  let result = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    while (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }
  return result;
};
```

**力扣.122买卖股票**

```
//贪心算法
let numb=0
for(let i =1;i<prices.length;i++){
    if(prices[i]>prices[i-1]){
        numb+=prices[i]-prices[i-1]
    }
}
return numb
```






