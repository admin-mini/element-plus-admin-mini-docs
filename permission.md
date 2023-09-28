# 权限

由于每个项目的权限验证方式不同，为了保持高度自定义

你需要重写```/src/utils/permission```中的hasPermission函数

以下所有权限都会通过该函数来判断是否有权限

## 路由权限

定义路由时，通过指定meta.p=[权限1，权限2]
```javascript
{
    path:"/home",
    meta:{
        name:"首页",
        p:["admin"]//仅有admin可以访问
    }
}

```

## 指令权限
```vue
<template>
    <div v-p="['admin']">只有管理员能看到<div>
</template>
```

## 直接调用函数
为了解决某些组件并无实际DOM或一些其他原因 指令方式并不能生效的情况

```vue {3}
<template>
    <el-table>
       <el-table-column v-if="$hasPermission(['admin'])"  prop="username" label="帐号" />
       <el-table-column prop="username" label="用户姓名" />
    <el-table>
    <div v-p="['admin']">只有管理员能看到<div>
</template>
```