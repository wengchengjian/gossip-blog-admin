import{_ as s,o as a,c as l,d as n}from"./app.d991dbbc.js";const h=JSON.parse('{"title":"基于文件系统的路由","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用介绍","slug":"使用介绍","link":"#使用介绍","children":[]},{"level":2,"title":"进阶使用","slug":"进阶使用","link":"#进阶使用","children":[]},{"level":2,"title":"路由参数","slug":"路由参数","link":"#路由参数","children":[]},{"level":2,"title":"导航参数","slug":"导航参数","link":"#导航参数","children":[]},{"level":2,"title":"功能取舍","slug":"功能取舍","link":"#功能取舍","children":[]}],"relativePath":"guide/file-system-route.md"}'),e={name:"guide/file-system-route.md"},p=n(`<h1 id="基于文件系统的路由" tabindex="-1">基于文件系统的路由 <a class="header-anchor" href="#基于文件系统的路由" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该特性由 <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noreferrer">vite-plugin-pages</a> 和 <a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts" target="_blank" rel="noreferrer">vite-plugin-vue-layouts</a> 提供技术支持。</p></div><p>传统使用路由的方式需要手动编写路由，而基于文件系统的路由则会根据 <code>/src/views/</code> 下的文件目录结构，自动生成每个 <code>.vue</code> 文件对应的路由配置，从而节省手动配置路由的时间。</p><h2 id="使用介绍" tabindex="-1">使用介绍 <a class="header-anchor" href="#使用介绍" aria-hidden="true">#</a></h2><p>框架默认不启用该特性，如果需要开启，需要到应用配置里修改设置。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">routeBaseOn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filesystem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>启用基于文件系统的路由后，<code>/src/router/modules/</code> 目录将不再被需要，而 <code>/src/views/</code> 目录下的文件会自动被注册成路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">文件系统                       路由地址                       路由 name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">views</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ example</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ List</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │     └─ index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ params</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ [id].vue             /example/params/:id          example-params</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ axios.vue               /example/axios               example-axios</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ cookie.vue              /example/cookie              example-cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ svgicon.vue             /example/svgicon             example-svgicon</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ [...all].vue               /:all(.*)*                   all</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.vue                  /                            index</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ reload.vue                 /reload                      reload</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ login.vue                  /login                       login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>通过上面的示例，可以看出几个特性：</p><ul><li>使用路由参数需通过 [ ] 将参数名包裹，并设为文件名</li><li>文件夹不会生成路由，例如 example 文件夹并没有生成 /example 路由</li><li>路由 name 会根据文件的目录结构自动生成，并用<code>-</code>连接，可确保 name 的唯一性</li><li>所有 <code>components/</code> 目录均不会生成路由</li></ul><h2 id="进阶使用" tabindex="-1">进阶使用 <a class="header-anchor" href="#进阶使用" aria-hidden="true">#</a></h2><p>默认生成的路由均为嵌套路由，父级 component 指向 <code>/src/layout/index.vue</code> 组件，即：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 生成的路由</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/example/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/src/layout/index.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">children</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/src/views/example/list.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      meta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        layout</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>你可以在 SFC 单文件组件里将 layout 设置为 false，这样该路由则不会生成嵌套路由：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">route</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yaml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">route</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">列表页</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 生成的路由</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/example/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/src/views/example/list.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example-list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="路由参数" tabindex="-1">路由参数 <a class="header-anchor" href="#路由参数" aria-hidden="true">#</a></h2><p>你应该已经发现，原先在路由的配置信息被转移到了 SFC 单文件组件里的 <code>&lt;route&gt;&lt;/route&gt;</code> 标签内。</p><p>需要注意的是，既然使用了基于文件系统的路由，不建议再手动去设置 <code>path</code> 和 <code>name</code> ，同时因为路由不再承担生成导航的特性，所以 <code>meta</code> 对象的可配置项也有部分调整，保留了以下参数：</p><ul><li><a href="./router.html#title">title</a></li><li><a href="./router.html#i18n">i18n</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#permanent">permanent</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#auth">auth</a></li><li><a href="./router.html#activemenu">activeMenu</a></li><li><a href="./router.html#cache">cache</a></li><li><a href="./router.html#nocache">noCache</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#link">link</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#copyright">copyright</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#paddingbottom">paddingBottom</a> <sup class="pro-badge"></sup></li></ul><p>另外还新增了三个特殊参数：</p><p><strong>enabled</strong></p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否将该文件生成路由</td></tr></tbody></table><p>如果你想临时取消某个文件路由的生成，可以通过设置 <code>enabled: false</code> 来实现，从而不需要通过删除文件来实现。</p><p><strong>layout</strong></p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean / string</td><td style="text-align:center;">&#39;index&#39;</td><td style="text-align:left;">布局模版名称，对应 layout 目录下文件名</td></tr></tbody></table><p><strong>constant</strong></p><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">是否为固定路由，默认为动态路由</td></tr></tbody></table><h2 id="导航参数" tabindex="-1">导航参数 <a class="header-anchor" href="#导航参数" aria-hidden="true">#</a></h2><p>由于导航无法通过路由自动生成，所以在基于文件系统的路由模式下，我们需要手动配置导航数据。</p><p>导航数据存放在 <code>/menu/</code> 目录下，和 <code>/router/</code> 的目录结构类似， <code>/menu/modules/</code> 用于存放每个模块的导航配置，最终在 <code>/menu/index.ts</code> 文件里引用并进行归类，即主导航。</p><p>导航对象有三个标准参数：</p><ul><li>path 完整路由地址，如果有下级导航，则无需设置</li><li>meta 同路由 <code>meta</code> 对象，支持以下参数： <ul><li><a href="./router.html#title">title</a></li><li><a href="./router.html#i18n">i18n</a></li><li><a href="./router.html#icon">icon</a></li><li><a href="./router.html#activeicon">activeIcon</a> <sup class="pro-badge"></sup></li><li><a href="./router.html#auth">auth</a></li><li><a href="./router.html#badge">badge</a> <sup class="pro-badge"></sup></li></ul></li><li>children 下级导航数组</li></ul><p>同样的，导航数据也可通过后端进行返回，只需在应用配置中设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">menu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">baseOn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">backend</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>开启后访问 <code>/src/store/modules/menu.ts</code> 文件，找到 <code>generateMenusAtBack()</code> 这个 action 方法，你要做的就是修改这个方法里的请求地址，请求返回的数据就是路由数据，你可以在 <code>/src/mock/menu.ts</code> 里查看 mock 数据。</p><h2 id="功能取舍" tabindex="-1">功能取舍 <a class="header-anchor" href="#功能取舍" aria-hidden="true">#</a></h2><p>需要注意，使用文件系统的路由后，将无法再使用以下功能或特性：</p><ul><li>面包屑导航</li><li>次导航是否默认展开</li><li>JSX</li></ul>`,39),o=[p];function t(c,r,i,F,y,D){return a(),l("div",null,o)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
