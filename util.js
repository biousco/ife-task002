// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
  var result = {};
  for (var key in src) {
    result[key] = typeof src[key] !== "object" ? src[key] : cloneObject(src[key]);
  }
  return result;
}

function convertToArray(nodes) {
  var array = null;
  try {
    array = Array.prototype.slice.call(nodes, 0);
  } catch (ex) {
    array = new Array();
    for (var i = 0, len = nodes.length; i < len; i++) {
      array.push(nodes[i]);
    }
  }
  return array;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
  var result = [],
    i = 0;
  for (i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) > -1)
      continue;
    result.push(arr[i]);
  }
  return result;
}

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
  var i = 0, len = str.lengt, result1 = "", result = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result1 = str.substr(i + 1);
    } else {
      break;
    }
  }
  for (i = result1.length - 1; i >= 0; i--) {
    if (result1[i] === " ") {
      result = result1.substr(0, i - 1);
    } else {
      break;
    }
  }
  return result;
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
  var i = 0, len = arr.length;
  for (; i < len; i++) {
    fn(arr[i], i);
  }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== "object") {
      count++;
    }
  }
  return count;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
  var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
  return reg.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  var pre = trim(element.className);
  if (pre.indexOf(newClassName) > -1) return false;
  pre += " " + newClassName;
  element.className = trim(pre);
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
  var pre = trim(element.className);
  var class_arr = uniqArray(pre.split(" "));
  var i = 0, len = class_arr.length;
  for (; i < len; i++) {
    if (class_arr[i] === oldClassName) {
      class_arr.splice(i, 1);
    }
  }
  var new_cls = class_arr.join(" ");
  element.className = new_cls;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  var a_p = element.parentNode;
  var b_p = element.parentNode;
  return a_p === b_p;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
  var pos = element.getBoundingClientRect();
  return {
    x: pos.left,
    y: pos.top
  }
}

function $(selector) {
  if (typeof selector !== "string") return;
  if (/^#([\w-]+)$/.test(selector)) {
    return document.getElementById(selector.substr(1));
  } else if (/^\w+$/.test(selector)) {
    return document.getElementsByTagName(selector);
  }
  try {
    return document.querySelectorAll(selector);
  } catch (e) {
    alert("版本太低了...");
  }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener, bubble) {
  if ('addEventListener' in element) {
    element.addEventListener(event, listener, bubble);
  } else if ('attachEvent' in element) {
    if (typeof listener == "object" && listener.handleEvent) {
      element.attachEvent("on" + event, function () {
        listener.handleEvent.call(listener);
      })
    } else {
      element.attachEvent('on', event, listener);
    }
  }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener, bubble) {
  if ('removeEventListener' in element) {
    element.removeEventListener(event, listener, bubble);
  } else if ('detachEvent' in element) {
    if (typeof listener == "object" && listener.handleEvent) {
      element.detachEvent("on" + event, function () {
        listener.handleEvent.call(listener);
      })
    } else {
      element.detachEvent('on', event, listener);
    }
  }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
  addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener, bubble) {
  if ('addEventListener' in element) {
    element.addEventListener("keydown", function (evt) {
      var event = evt || window.event;
      if (event.keyCode === 13) {
        listener(event);
      }
    }, bubble);
  } else if ('attachEvent' in element) {
    if (typeof listener == "object" && listener.handleEvent) {
      element.attachEvent("onkeydown", function () {
        listener.handleEvent.call(function (evt) {
          var event = evt || window.event;
          if (event.keyCode === 13) {
            listener(event);
          }
        });
      })
    } else {
      element.attachEvent("onkeydown", function (evt) {
        var event = evt || window.event;
        if (event.keyCode === 13) {
          listener(event);
        }
      });
    }
  }
}

function delegateEvent(element, tag, eventName, listener, bubble) {
  if ('addEventListener' in element) {
    element.addEventListener(event, function (event) {

    }, bubble);
  } else if ('attachEvent' in element) {
    if (typeof listener == "object" && listener.handleEvent) {
      element.attachEvent("on" + event, function () {
        listener.handleEvent.call(listener);
      })
    } else {
      element.attachEvent('on', event, listener);
    }
  }
}

$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;

