# admin-table

## 说明
admin-table经过多个项目的打磨，在封装和扩展性之间找到的最佳平衡

你可以用它**承载你几乎所有的index.vue**

你只需要指定列表API 即可完成获取数据、分页、刷新、搜索

## 使用
``` vue{2-4}
<script setup>
import { userList } from '@/api'
import useAdminTable from '@/plugins/use-admin-table';
const $table = useAdminTable()
$table.api = userList;
</script>
<template>
  <div class="admin-view">
    <el-table border :data="$table.data" :empty-text="$table.emptyText" v-loading="$table.loading" table-layout="auto">
      <el-table-column prop="username" label="帐号" />
      <el-table-column prop="nickName" label="用户姓名" />
      <el-table-column label="操作" width="400px">
        <template #default="scope">
          <el-space spacer="|">
            <el-link :disabled="scope.row.loading" type="primary" @click="openEdit(scope.row)">编辑</el-link>
            <el-link :disabled="scope.row.loading" type="primary" @click="openDel(scope.row)">删除</el-link>
            <el-link :disabled="scope.row.loading" type="primary" @click="openPassword(scope.row)">修改密码</el-link>
          </el-space>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :layout="$table.pageLayout" background v-model:current-page="$table.query.page"
      :page-size="$table.query.size" :total="$table.total" @size-change="$table.handleSizeChange"
      @current-change="$table.handleCurrentChange" />
  </div>
</template>

<style></style>

```

 **$table属性**
| 名称 |默认值| 备注 |
| - | - | - | 
|api| ```undefined``` |  指定列表数据对应的函数
|data| ```[]``` |  获取到的列表数据
|query| ```{page:1,size:20}``` |  请求参数 
|parse|``` (data) => data.data``` |  格式化返回数据
|parseQuery | ```(query) => query``` |  格式化请求数据
|total| ```0``` |  后端返回的列表总条数 用于分页
|loading| ```false``` |  是否正在加载
|ref| ```null``` |  如果指定会自动执行validate校验表单
|pageLayout| ```total, sizes, prev, pager, next, jumper``` |  请求参数 
|emptyText| ```暂无数据``` |  数据为空时提示 

**$table方法**
| 名称 |参数| 备注 |
| - | - | - | 
|getTable| 无 |  参数不变重新请求api
|search| 无 |  query.page修改为1 重新请求api



