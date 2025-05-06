递归函数写（一个函数在内部调用自己）实现深拷贝
~~~
function checkType(any) {
  return Object.prototype.toString.call(any).slice(8, -1)
// call bind apply
}

function clone(any) {
  if (checkType(any) === 'Object') { // 拷贝对象
    let o = {};
    for (let key in any) {
      o[key] = clone(any[key]);
    }
    return o;
  } else if (checkType(any) === 'Array') { // 拷贝数组
    var arr = [];
    for (let i = 0, leng = any.length; i < leng; i++) {
      arr[i] = clone(any[i]);
    }
    return arr;
  } else if (checkType(any) === 'Function') { // 拷贝函数
    return new Function('return ' + any.toString()).call(this);
  } else if (checkType(any) === 'Date') { // 拷贝日期
    return new Date(any.valueOf());
  } else if (checkType(any) === 'RegExp') { // 拷贝正则
    return new RegExp(any);
  } else if (checkType(any) === 'Map') { // 拷贝 Map 集合
    let m = new Map();
    any.forEach((v, k) => {
      m.set(k, clone(v));
    });
    return m;
  } else if (checkType(any) === 'Set') { // 拷贝 Set 集合
    let s = new Set();
    for (let val of any.values()) {
      s.add(clone(val));
    }
    return s;
  }
  return any;
}

~~~

简单type of写法
~~~
function deepClone(oldData) {
  if (typeof oldData === 'object' && oldData !== null) {
    // 根据 oldData 是数组还是对象，初始化 res
    const res = Array.isArray(oldData) ? [] : {};
    for (let k in oldData) {
      if (oldData.hasOwnProperty(k)) {
        // 递归拷贝每一个属性
        res[k] = deepClone(oldData[k]);
      }
    }
    return res;
  } else {
    // 基本类型直接返回
    return oldData;
  }
}

~~~