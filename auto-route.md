# auto-route
自动路由

摆脱繁琐的routes配置、完全自动化

## 原理说明
基于vite的```import.meta.glob```

深度扫描/views/下所有auto-route.js文件

根据auto-route.js文件路径获取同级的index.vue当做route的component

> 这意味着自动路由和自定义路由可以同时存在，你可以不建立auto-route.js 这样就不会自动引入

## auto-route.js

文件默认导出一个vue-router配置项

其中weight用来解决路由排序问题 数值越大越靠前
```javascript
export default {
  weight:-10,
  name: 'abc',
  meta: {
    name: 'user',
    icon: 'Grid'
  }
}

```

