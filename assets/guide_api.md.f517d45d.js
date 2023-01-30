import{_ as s,o as a,c as n,d as l}from"./app.d991dbbc.js";const d=JSON.parse('{"title":"常用 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"接口请求","slug":"接口请求","link":"#接口请求","children":[]},{"level":2,"title":"鉴权","slug":"鉴权","link":"#鉴权","children":[]},{"level":2,"title":"主导航","slug":"主导航","link":"#主导航","children":[{"level":3,"title":"切换","slug":"切换","link":"#切换","children":[]}]},{"level":2,"title":"主页面","slug":"主页面","link":"#主页面","children":[{"level":3,"title":"刷新","slug":"刷新","link":"#刷新","children":[]},{"level":3,"title":"最大化","slug":"最大化","link":"#最大化","children":[]}]},{"level":2,"title":"标签栏","slug":"标签栏","link":"#标签栏","children":[{"level":3,"title":"获取当前标签页 tabId","slug":"获取当前标签页-tabid","link":"#获取当前标签页-tabid","children":[]},{"level":3,"title":"打开新标签页","slug":"打开新标签页","link":"#打开新标签页","children":[]},{"level":3,"title":"关闭当前标签页","slug":"关闭当前标签页","link":"#关闭当前标签页","children":[]},{"level":3,"title":"关闭指定标签页","slug":"关闭指定标签页","link":"#关闭指定标签页","children":[]},{"level":3,"title":"关闭两侧标签页","slug":"关闭两侧标签页","link":"#关闭两侧标签页","children":[]},{"level":3,"title":"关闭左侧标签页","slug":"关闭左侧标签页","link":"#关闭左侧标签页","children":[]},{"level":3,"title":"关闭右侧标签页","slug":"关闭右侧标签页","link":"#关闭右侧标签页","children":[]},{"level":3,"title":"校验指定标签两侧是否有可关闭的标签","slug":"校验指定标签两侧是否有可关闭的标签","link":"#校验指定标签两侧是否有可关闭的标签","children":[]},{"level":3,"title":"校验指定标签左侧是否有可关闭的标签","slug":"校验指定标签左侧是否有可关闭的标签","link":"#校验指定标签左侧是否有可关闭的标签","children":[]},{"level":3,"title":"校验指定标签右侧是否有可关闭的标签","slug":"校验指定标签右侧是否有可关闭的标签","link":"#校验指定标签右侧是否有可关闭的标签","children":[]}]},{"level":2,"title":"事件总线","slug":"事件总线","link":"#事件总线","children":[]},{"level":2,"title":"日期","slug":"日期","link":"#日期","children":[]}],"relativePath":"guide/api.md"}'),e={name:"guide/api.md"},p=l(`<h1 id="常用-api" tabindex="-1">常用 API <a class="header-anchor" href="#常用-api" aria-hidden="true">#</a></h1><h2 id="接口请求" tabindex="-1">接口请求 <a class="header-anchor" href="#接口请求" aria-hidden="true">#</a></h2><p>详细可阅读《<a href="./axios.html#接口请求">与服务端交互 - 接口请求</a>》。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="鉴权" tabindex="-1">鉴权 <a class="header-anchor" href="#鉴权" aria-hidden="true">#</a></h2><p>详细可阅读《<a href="./permission.html#鉴权函数">权限 - 鉴权函数</a>》。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useAuth </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useAuth</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> auth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> authAll </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAuth</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">auth</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">authAll</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="主导航" tabindex="-1">主导航 <a class="header-anchor" href="#主导航" aria-hidden="true">#</a></h2><h3 id="切换" tabindex="-1">切换 <a class="header-anchor" href="#切换" aria-hidden="true">#</a></h3><p>切换主导航，<code>index</code> 为主导航序列数。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useMenu </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useMenu</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> switchTo </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMenu</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">switchTo</span><span style="color:#A6ACCD;">(index)</span></span>
<span class="line"></span></code></pre></div><h2 id="主页面" tabindex="-1">主页面 <a class="header-anchor" href="#主页面" aria-hidden="true">#</a></h2><h3 id="刷新" tabindex="-1">刷新 <a class="header-anchor" href="#刷新" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useMainPage </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useMainPage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> reload </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMainPage</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">reload</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="最大化" tabindex="-1">最大化 <sup class="pro-badge"></sup> <a class="header-anchor" href="#最大化" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useMainPage </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useMainPage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> maximize </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMainPage</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// status: true / false</span></span>
<span class="line"><span style="color:#82AAFF;">maximize</span><span style="color:#A6ACCD;">(status)</span></span>
<span class="line"></span></code></pre></div><h2 id="标签栏" tabindex="-1">标签栏 <sup class="pro-badge"></sup> <a class="header-anchor" href="#标签栏" aria-hidden="true">#</a></h2><h3 id="获取当前标签页-tabid" tabindex="-1">获取当前标签页 tabId <a class="header-anchor" href="#获取当前标签页-tabid" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> getId </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getId</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="打开新标签页" tabindex="-1">打开新标签页 <a class="header-anchor" href="#打开新标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>to</code> 参数，该参数与 <code>router.push(to)</code> 一致，点击阅读<a href="https://next.router.vuejs.org/zh/api/#routelocationraw" target="_blank" rel="noreferrer">参数说明</a>。</p><p>通过该方式跳转页面，新增的标签页会插入到当前标签页后面，而直接通过路由跳转，新增的标签页会插入到所有标签页的最后。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> open </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(to)</span></span>
<span class="line"></span></code></pre></div><h3 id="关闭当前标签页" tabindex="-1">关闭当前标签页 <a class="header-anchor" href="#关闭当前标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>to</code> 参数，该参数与 <code>router.push(to)</code> 一致，点击阅读<a href="https://next.router.vuejs.org/zh/api/#routelocationraw" target="_blank" rel="noreferrer">参数说明</a>。</p><p>通过该方式跳转页面，同时可以关闭当前标签页，而直接通过路由跳转，当前标签页会被保留。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> close </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(to)</span></span>
<span class="line"></span></code></pre></div><h3 id="关闭指定标签页" tabindex="-1">关闭指定标签页 <a class="header-anchor" href="#关闭指定标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeById </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">closeById</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="关闭两侧标签页" tabindex="-1">关闭两侧标签页 <a class="header-anchor" href="#关闭两侧标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeOtherSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">closeOtherSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="关闭左侧标签页" tabindex="-1">关闭左侧标签页 <a class="header-anchor" href="#关闭左侧标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeLeftSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">closeLeftSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="关闭右侧标签页" tabindex="-1">关闭右侧标签页 <a class="header-anchor" href="#关闭右侧标签页" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> closeRightSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">closeRightSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="校验指定标签两侧是否有可关闭的标签" tabindex="-1">校验指定标签两侧是否有可关闭的标签 <a class="header-anchor" href="#校验指定标签两侧是否有可关闭的标签" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> checkCloseOtherSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">checkCloseOtherSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="校验指定标签左侧是否有可关闭的标签" tabindex="-1">校验指定标签左侧是否有可关闭的标签 <a class="header-anchor" href="#校验指定标签左侧是否有可关闭的标签" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> checkCloseLeftSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">checkCloseLeftSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h3 id="校验指定标签右侧是否有可关闭的标签" tabindex="-1">校验指定标签右侧是否有可关闭的标签 <a class="header-anchor" href="#校验指定标签右侧是否有可关闭的标签" aria-hidden="true">#</a></h3><p>该方法接收一个 <code>tabId</code> 参数，如果不传则默认为当前页的 <code>tabId</code> 。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useTabbar </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/composables/useTabbar</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> checkCloseRightSide </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useTabbar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">checkCloseRightSide</span><span style="color:#A6ACCD;">(tabId)</span></span>
<span class="line"></span></code></pre></div><h2 id="事件总线" tabindex="-1">事件总线 <a class="header-anchor" href="#事件总线" aria-hidden="true">#</a></h2><p>基于 <a href="https://github.com/developit/mitt" target="_blank" rel="noreferrer">mitt</a> 简单封装，使用方法请查阅官方文档。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> eventBus </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/eventBus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">eventBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="日期" tabindex="-1">日期 <sup class="pro-badge"></sup> <a class="header-anchor" href="#日期" aria-hidden="true">#</a></h2><p>基于 <a href="https://day.js.org/zh-CN/" target="_blank" rel="noreferrer">dayjs</a> 简单封装，使用方法请查阅官方文档。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> dayjs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/dayjs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,54),o=[p];function t(c,r,i,y,D,A){return a(),n("div",null,o)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};
