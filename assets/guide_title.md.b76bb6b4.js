import{_ as n,r as l,o as e,c as o,b as p,d as s}from"./app.d991dbbc.js";const _=JSON.parse('{"title":"动态标题","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"自定义标题","slug":"自定义标题","link":"#自定义标题","children":[]}],"relativePath":"guide/title.md"}'),t={name:"guide/title.md"},c=s(`<h1 id="动态标题" tabindex="-1">动态标题 <a class="header-anchor" href="#动态标题" aria-hidden="true">#</a></h1><p>让网页标题显示路由配置的 <code>meta.title</code> 字段。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p>在应用配置中设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableDynamicTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>效果如下：</p>`,6),r=s(`<h2 id="自定义标题" tabindex="-1">自定义标题 <a class="header-anchor" href="#自定义标题" aria-hidden="true">#</a></h2><p>有时候，我们需要在某个页面显示自定义的标题，而不是 <code>meta.title</code> 字段，比如在编辑用户的页面，显示当前用户的名称。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useSettingsStore </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/store/modules/settings</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> settingsStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSettingsStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">settingsStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setTitle</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">自定义标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,3);function i(D,y,F,C,d,A){const a=l("ZoomImg");return e(),o("div",null,[c,p(a,{src:"/dynamic-title.gif"}),r])}const g=n(t,[["render",i]]);export{_ as __pageData,g as default};
