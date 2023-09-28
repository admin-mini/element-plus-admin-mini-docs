# admin-table-formatter

快速格式化表格数据

$formatter已经通过```app.config.globalProperties.formatter``` 注册到全局作用域

也可以通过```/src/utils/formatter.js```来自定义其他的formatter



## $formatter.dict
自动输出字典中的label字段

```javascript
const tableData = {
    "code": 0,
    "total": 77,
    "data": [
        {
            "userId": "51",
            "username": "杨军",
            "nickName": "江超",
            "loginTime": "1695806948",
            "createTime": "1730040058825",
            "userType": "1"
        }
    ]
}
const userTypeDict =[
    { value: '1', label: '管理员', color: 'success' },
    { value: '2', label: '操作员', color: 'danger' },
    { value: '3', label: '录入员', color: 'warning' }
]
```
```vue{3,5}
<el-table :data="tableData">
    <el-table-column 
    prop="userType" 
    label="类型" 
    :formatter="$formatter.date(userTypeDict)"
     />         
</el-table>

```


::: tip
必须正确配置el-table-column的prop
:::


## $formatter.date

自动格式化时间戳
```javascript
$formatter.date(true)//传入true会输出 YYYY:MM:DD HH:mm:ss 为空则YYYY:MM:DD

```
```vue{3,5}
<el-table :data="tableData">
    <el-table-column 
    prop="loginTime" 
    label="登陆时间" 
    :formatter="$formatter.date(true)"
     />      
    <el-table-column 
    prop="createTime" 
    label="创建时间" 
    :formatter="$formatter.dict()"
     />         
</el-table>

```

::: tip
必须正确配置el-table-column的prop
:::
