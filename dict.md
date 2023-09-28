# $dict

全局字典

$dict已经通过```app.config.globalProperties.dict``` 注册到全局作用域

## 起源

现代项目几乎都会涉及到 “字典”；例如：

用户类型（1管理员，2操作员，3录入员）

成绩（A完美 B优秀 C及格 D一般）

...

这些字典几乎贯穿一个业务模块的table字段呈现、筛选条件的表单、新增、编辑表单、详情页等等

我们用纯净的方式封装了一个小工具 $dict

它可以完美结合table-formatter/select-dict等功能

## 使用方式

**字典定义**
```javascript
///src/utils/dict.js
let dict = {
  SETTING: {
    OPEN_PERMISSION: false, //是否开启权限
    API_URL: '/api/', //API具体路径
    IMG_URL: '/picTemp/',
    AREA_CODE: 131000
  },
  userType: [
    { value: 'A', label: '管理员', color: 'success' },
    { value: 'C', label: '操作员', color: 'danger' },
    { value: 'B', label: '录入员', color: 'warning' }
  ],
  translateSerivce: [
    { value: '1', label: 'Google' },
    { value: '2', label: 'AWS' },
    { value: '3', label: 'Azure' }
  ],
  smsBatchEnable: [
    { value: '1', label: '启用' },
    { value: '2', label: '禁用' }
  ],
}
//...


```


**直接引用**
```javascript
import dict from "@/utils/dict.js"
console.log(dict.userType.get(["A", "C"])) //[ { value: 'A', label: '管理员', color: 'success' },{ value: 'C', label: '操作员', color: 'danger' }]
console.log(dict.userType.getLabel(["A", "C"])) //['管理员', '操作员']
console.log(dict.userType.get("A")) //{ value: 'A', label: '管理员', color: 'success' }
console.log(dict.userType.getLabel("A")) //"管理员"

```
**vue中使用**
```vue
<script setup></script>
<template>
    {{$dict.userType.getLabel("1")}} 
</template>
```



## 实现方式
```javascript
///src/utils/dict.js
let dict = {
  SETTING: {
    OPEN_PERMISSION: false, //是否开启权限
    API_URL: '/api/', //API具体路径
    IMG_URL: '/picTemp/',
    AREA_CODE: 131000
  },
  userType: [
    { value: 'A', label: '管理员', color: 'success' },
    { value: 'C', label: '操作员', color: 'danger' },
    { value: 'B', label: '录入员', color: 'warning' }
  ],
  translateSerivce: [
    { value: '1', label: 'Google' },
    { value: '2', label: 'AWS' },
    { value: '3', label: 'Azure' }
  ],
  smsBatchEnable: [
    { value: '1', label: '启用' },
    { value: '2', label: '禁用' }
  ],
}

//生产环境使用全局配置覆盖（/public/setting.js）
if (!import.meta.env.DEV && window.ADMIN_SETTING) {
  Object.assign(dict.SETTING, window.ADMIN_SETTING)
}

for (let key in dict) {
  if (key != 'SETTING') {
    makeDict(dict[key])
  }
}

export function makeDict(obj, labelKey = 'label', valueKey = 'value') {
  return Object.defineProperties(obj, {
    valueKey: {
      value: valueKey
    },
    labelKey: {
      value: labelKey
    },
    get: {
      value: get
    },
    getLabel: {
      value: getLabel
    }
  })
}
function get(val) {
  if (Array.isArray(val)) {
    val = val.map((item) => item.toString())
    return this.filter((item) => {
      return val.includes(item[this.valueKey].toString())
    })
  }
  return (
    this.find((item) => {
      return item[this.valueKey] == val
    }) || {}
  )
}
function getLabel(val) {
  if (Array.isArray(val)) {
    return this.get(val).map((item) => {
      return item[this.labelKey]
    })
  }
  return this.get(val)[this.labelKey]
}
export default dict
```