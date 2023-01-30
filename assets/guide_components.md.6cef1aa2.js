import{_ as s,o as n,c as a,d as l}from"./app.d991dbbc.js";const C=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础组件","slug":"基础组件","link":"#基础组件","children":[]},{"level":2,"title":"扩展组件","slug":"扩展组件","link":"#扩展组件","children":[]}],"relativePath":"guide/components.md"}'),o={name:"guide/components.md"},e=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h1><p>框架提供一系列的组件方便快速开发，其中<strong>基础组件</strong>为 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus</a> 原生提供的组件；而<strong>扩展组件</strong>有一部分是在 Element Plus 组件上进行了二次开发，还有一部分是封装了第三方插件。</p><p>组件源码完全开放，如果觉得用着不顺手，可以到 <code>/src/components/</code> 目录下找到对应组件进行修改。</p><h2 id="基础组件" tabindex="-1">基础组件 <a class="header-anchor" href="#基础组件" aria-hidden="true">#</a></h2><p>基础组件由 Element Plus 提供，其中包含<strong>按钮</strong>、<strong>文字链接</strong>、<strong>单选框</strong>、<strong>多选框</strong>、<strong>输入框</strong>、<strong>计数器</strong>、<strong>级联选择器</strong>、<strong>开关</strong>、<strong>滑块</strong>等 <strong>50+</strong> 个组件。</p><p>阅读并学习请查看 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus 官方文档</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>框架严格按照 Element Plus 推荐的使用方式进行引入，即按需自动导入，意味着你可以直接在代码里使用组件，而无需手动注册。</p><p>但也意味着 Element Plus 一些全局方法将无法使用，例如 Message 消息提示组件。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 无法使用</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurrentInstance</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#A6ACCD;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以使用</span></span>
<span class="line"><span style="color:#A6ACCD;">ElMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#A6ACCD;">(options)</span></span>
<span class="line"></span></code></pre></div><p>另外因为框架没有采用 Element Plus 官方的图标使用方式，这也意味着部分组件的 icon 属性将无法使用，例如 Button 按钮组件。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 无法使用 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el-icon-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">编辑</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 可以使用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ep:edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    编辑</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></div><h2 id="扩展组件" tabindex="-1">扩展组件 <a class="header-anchor" href="#扩展组件" aria-hidden="true">#</a></h2>`,8),t=[e];function p(c,r,i,D,y,F){return n(),a("div",null,t)}const d=s(o,[["render",p]]);export{C as __pageData,d as default};
