import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.590dd546.js";const F=JSON.parse('{"title":"admin-table","description":"","frontmatter":{},"headers":[],"relativePath":"admin-table.md","filePath":"admin-table.md"}'),o={name:"admin-table.md"},p=n(`<h1 id="admin-table" tabindex="-1">admin-table <a class="header-anchor" href="#admin-table" aria-label="Permalink to &quot;admin-table&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>admin-table经过多个项目的打磨，在封装和扩展性之间找到的最佳平衡</p><p>你可以用它<strong>承载你几乎所有的index.vue</strong></p><p>你只需要指定列表API 即可完成获取数据、分页、刷新、搜索</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { userList } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/api&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useAdminTable </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/plugins/use-admin-table&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$table</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useAdminTable</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">$table.api </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userList;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;admin-view&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">border</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.data&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:empty-text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.emptyText&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">table-layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;auto&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;username&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;帐号&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prop</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;nickName&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;用户姓名&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;操作&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;400px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">scope</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">el-space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">spacer</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;|&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scope.row.loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openEdit(scope.row)&quot;</span><span style="color:#E1E4E8;">&gt;编辑&lt;/</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scope.row.loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openDel(scope.row)&quot;</span><span style="color:#E1E4E8;">&gt;删除&lt;/</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scope.row.loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openPassword(scope.row)&quot;</span><span style="color:#E1E4E8;">&gt;修改密码&lt;/</span><span style="color:#85E89D;">el-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">el-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-pagination</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.pageLayout&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">background</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:current-page</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.query.page&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:page-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.query.size&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:total</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.total&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@size-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@current-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$table.handleCurrentChange&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { userList } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/api&#39;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useAdminTable </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/plugins/use-admin-table&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$table</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useAdminTable</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">$table.api </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userList;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;admin-view&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">border</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.data&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:empty-text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.emptyText&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">table-layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;auto&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;username&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;帐号&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prop</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nickName&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;用户姓名&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;操作&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;400px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">scope</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">el-space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">spacer</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;|&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scope.row.loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openEdit(scope.row)&quot;</span><span style="color:#24292E;">&gt;编辑&lt;/</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scope.row.loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openDel(scope.row)&quot;</span><span style="color:#24292E;">&gt;删除&lt;/</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scope.row.loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openPassword(scope.row)&quot;</span><span style="color:#24292E;">&gt;修改密码&lt;/</span><span style="color:#22863A;">el-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">el-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-pagination</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.pageLayout&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">background</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:current-page</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.query.page&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:page-size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.query.size&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:total</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.total&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@size-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.handleSizeChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@current-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$table.handleCurrentChange&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>$table属性</strong></p><table><thead><tr><th>名称</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>api</td><td><code>undefined</code></td><td>指定列表数据对应的函数</td></tr><tr><td>data</td><td><code>[]</code></td><td>获取到的列表数据</td></tr><tr><td>query</td><td><code>{page:1,size:20}</code></td><td>请求参数</td></tr><tr><td>parse</td><td><code> (data) =&gt; data.data</code></td><td>格式化返回数据</td></tr><tr><td>parseQuery</td><td><code>(query) =&gt; query</code></td><td>格式化请求数据</td></tr><tr><td>total</td><td><code>0</code></td><td>后端返回的列表总条数 用于分页</td></tr><tr><td>loading</td><td><code>false</code></td><td>是否正在加载</td></tr><tr><td>ref</td><td><code>null</code></td><td>如果指定会自动执行validate校验表单</td></tr><tr><td>pageLayout</td><td><code>total, sizes, prev, pager, next, jumper</code></td><td>请求参数</td></tr><tr><td>emptyText</td><td><code>暂无数据</code></td><td>数据为空时提示</td></tr></tbody></table><p><strong>$table方法</strong></p><table><thead><tr><th>名称</th><th>参数</th><th>备注</th></tr></thead><tbody><tr><td>getTable</td><td>无</td><td>参数不变重新请求api</td></tr><tr><td>search</td><td>无</td><td>query.page修改为1 重新请求api</td></tr></tbody></table>`,11),t=[p];function e(c,r,E,y,i,d){return a(),l("div",null,t)}const q=s(o,[["render",e]]);export{F as __pageData,q as default};