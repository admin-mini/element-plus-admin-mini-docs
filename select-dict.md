# select-dict
超纯净方式使用el-select，

## 起源
相较于原有的el-select;

使用select-dict具有更加纯净的代码结构以及整体性

**传统用法**
```vue
<template>
    <el-select v-model="value" >
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
  </el-select>
<template>
<script setup>
    import { ref } from 'vue'
    const options = [
        {
            value: 'Option1',
            label: 'Option1',
        },
    ] 

</script>
```

**select-dict本地字典**
```vue
<template>
    <select-dict :dict="$dict.options" v-model="value"></select-dict>
<template>
<script setup>
    //将options写入/src/utils/dict.js中
</script>
```

**select-dic远程字典**

```vue
<template>
    <select-dict :api="getUserType" labelKey="typeName"  valueKey="type" v-model="value"></select-dict>
<template>
<script setup>
    import getUserType from "./api.js"  
</script>
```
```javascript
//模拟远程调用,实际直接返回axios封装好的api函数即可
export default function getUserType(){
    new Promise(resolve=>{           
            setTimeout(()=>{           
                resolve([
                    {typeName:"管理员",type:"A"},
                    {typeName:"业务经理",type:"B"},
                    {typeName:"业务员",type:"C"},
                ])
            },1000)
         })
}
```
## props
select-dict已注册到全局组件 可以在项目中任意地方使用

除了el-select原有props，还加入了一些特有的props

**props**

|属性|类型|默认值|说明|
|-|-|-|-|
|dict|Array|```[]```|字典数据|
|api|Function|```undefined```|调用远程字典|
|query|Object|```undefined```|远程调用传入参数|
|labelKey|String|```label```|指定字典label字段名|
|valueKey|String|```value```|指定字典的value字段名|
|selectFirst|Boolean|```false```|是否默认选中第一个选项|
|showAll|Boolean|```false```|是否显示 ```全部``` 选项|


