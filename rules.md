# $rules
基于element-plus权限规则的二次封装

可用于快速指定表单规则

## template中使用
```vue{4}
    <el-form-item 
    label="客户名称" 
    prop="accountName" 
    :rules="[$rules.required]"
    >
      <el-input v-model="postData.accountName"></el-input>
    </el-form-item>

```

## 上下文中使用

```vue
<script setup>
import $rules from '@/utils/rules'
const rules = reactive({
  username: [$rules.required],
  password:[$rules.required, $rules.checkPassword(postData, 'rePassword', postForm)],//密码
  rePassword:[$rules.required, $rules.checkPassword(postData, 'password', postForm)]//重复密码
})
</script>
```