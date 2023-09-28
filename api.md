# 前后端数据交互规范
::: tip
前端请求中，所有数据体（如post中的body）均采用Content-Type: application/json
:::
## 前端参数
|字段名 |说明|
|-|-|
|page|分页请求中的第几页 page=2即为第二页
|size|分页请求中的页大小 size=20即为每页20条

## 后端返回

|字段名 |说明|
|-|-|
|code|0正常 1为错误
|total|响应分页请求的总条数
|data|数据体


**单个数据**
```json
{
    "code":0,
    "msg":"",
    "data":{}
}
```

**多条数据**
```json
{
    "code":0,
    "msg":"",
    "total":188,
    "data":[]
}
```

