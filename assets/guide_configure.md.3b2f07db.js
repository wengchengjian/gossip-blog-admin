import{_ as s,o as a,c as n,d as l}from"./app.d991dbbc.js";const A=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"应用配置（框架配置）","slug":"应用配置-框架配置","link":"#应用配置-框架配置","children":[]}],"relativePath":"guide/configure.md"}'),p={name:"guide/configure.md"},e=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-hidden="true">#</a></h2><p>默认提供三套环境配置，分别为：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ny9MV" id="tab-Y7hmNix" checked="checked"><label for="tab-Y7hmNix">.env.development 开发环境</label><input type="radio" name="group-ny9MV" id="tab-mJmdJ55"><label for="tab-mJmdJ55">.env.test 测试环境</label><input type="radio" name="group-ny9MV" id="tab-dDcp2qL"><label for="tab-dDcp2qL">.env.production 生产环境</label></div><div class="blocks"><div class="language-yaml active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 页面标题</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否开启代理</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_OPEN_PROXY = false</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 页面标题</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"></span></code></pre></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 页面标题</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#C3E88D;">VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"></span></code></pre></div></div></div><p>其中 <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p><h2 id="应用配置-框架配置" tabindex="-1">应用配置（框架配置） <a class="header-anchor" href="#应用配置-框架配置" aria-hidden="true">#</a></h2><p>开发者请在 <code>/src/settings.ts</code> 文件中设置自定义配置，而 <code>/src/settings.default.ts</code> 为框架的默认配置，请勿在该文件内修改。</p><p>关于配置的类型定义，可以在 <code>/src/types/globals.d.ts</code> 文件中查阅。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这是基础版演示源码里的自定义配置示例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enablePermission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableDynamicTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableMobileAdaptation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">menu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableSubMenuCollapseButton</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableHotkeys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">topbar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fixed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toolbar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableFullscreen</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enablePageReload</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableColorScheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableAppSetting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10),o=[e];function t(c,r,i,y,D,C){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
