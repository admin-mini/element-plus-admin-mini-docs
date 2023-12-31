# admin-dialog

`useAdminDialog` 是一个用于在 Vue 3 和 Element Plus 项目中创建对话框的实用工具插件。**可以函数化导入dialog组件**，合理清晰安排项目结构以及代码；
你可以灵活组织代码为下面的样子,而不是把所有业务逻辑都放入一个VUE文件中：

- src
	- views
		- test
			- index.vue
			- add.vue
			- edit.vue
			


## 使用


要创建一个对话框，你可以使用 `useAdminDialog` 函数，传入 Vue 节点 `vnode` 和选项 `opts`。

index.vue

```html
<template>
  <div>
    <el-button @click="openEdit({ username: 'websir' })">编辑</el-button>
  </div>
</template>

<script setup>
  import useAdminDialog from "@/plugins/use-admin-dialog";
  import { h } from "vue";
  const adminDialog = useAdminDialog();
  async function openEdit(row) {
    adminDialog(
      h((await import("./post.vue")).default, {
        row: row,
        onSuccess: (eventData) => {
          //post.vue 触发的success事件
          console.log(eventData);
        }
      }),
      { title: "编辑" }
    );
  }
</script>

<style lang="scss" scoped></style>
```

post.vue

```html
<template>
  <div>
    <el-form>
      <el-form-item label="账号" prop="username" :rules="[$rules.required]">
        <el-input v-model="postData.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(postForm)">确定</el-button>
        <el-button @click="emits('end')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  const emits = defineEmits(["end", "success"]);
  const props = defineProps(["row"]);
  const postData = reactive({
    username: ""
  });
  if (props.row) {
    Object.assign(postData, props.row);
  }
  function submitForm() {
    emits("success", "编辑完了");
  }
</script>

<style lang="scss" scoped></style>
```

### 选项

你可以传递一些选项来自定义对话框的行为：

- `title`: 对话框的标题。
- `closeOnClickModal`: 是否允许点击模态框以关闭对话框。
- `其他 Element Plus Dialog 组件的选项。`

### 关闭对话框

子组件中emit end事件即可
```javascript
 const emits = defineEmits(["end"]);
 emits('end')
```
