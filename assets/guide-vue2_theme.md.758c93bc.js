import{_ as s,o as n,c as a,d as l}from"./app.d991dbbc.js";const A=JSON.parse('{"title":"主题","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础版","slug":"基础版","link":"#基础版","children":[]},{"level":2,"title":"专业版","slug":"专业版","link":"#专业版","children":[]}],"relativePath":"guide-vue2/theme.md"}'),p={name:"guide-vue2/theme.md"},o=l(`<h1 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>专业版整体重构了主题的实现方式，阅读时请区分。</p></div><h2 id="基础版" tabindex="-1">基础版 <a class="header-anchor" href="#基础版" aria-hidden="true">#</a></h2><p>基础版只提供一套主题，但可自行修改关键颜色变量，实现主题自定义，相关代码在 <code>/src/assets/styles/resources/variables.scss</code> 里。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 应用背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-app-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 主区域背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f5f7f9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">736477</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部导航选中颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lighten</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$g-header-bg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 主侧边栏背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-sidebar-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">736477</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 主侧边栏文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-sidebar-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 主侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-sidebar-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lighten</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$g-main-sidebar-bg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 次侧边栏背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ddcdcd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 次侧边栏菜单文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">89768f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 次侧边栏菜单文字选中颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-menu-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">darken</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$g-sub-sidebar-menu-color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 次侧边栏菜单选中背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">b5a5a5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>该文件里你还可对布局的宽高进行调整。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部高度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-breadcrumb-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-sidebar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">220px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sidebar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--real-sidebar-width</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="专业版" tabindex="-1">专业版 <a class="header-anchor" href="#专业版" aria-hidden="true">#</a></h2><p>框架提供了 5 款主题，在配置文件中就可轻松切换。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 主题，默认提供 5 款</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * default 默认</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * vue-cli Vue CLI 风格</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gitee 码云风格</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * freshness 清新</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * elegant 素雅</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，和基础版不同的是，专业版主题相关代码在 <code>/src/assets/styles/resources/themes.scss</code> 里。由于代码比较多，下面只截取部分。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$themes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 主区域背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-main-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0f2f5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 【头部】</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">222b45</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">334067</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vue-cli</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 主区域背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-main-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0f2f5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 【头部】</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1d2935</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">42b983</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1f3039</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre></div><p>可以看到，所有主题都存放在 <code>$themes</code> 这个变量里，所以如果想创建一个新主题，你可以按照 <code>default</code> 复制一份，其中 <code>new-theme</code> 就是主题的名称，里面主题的配色可以自行修改。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">$themes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 主区域背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-main-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0f2f5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 【头部】</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">222b45</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字选中颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航选中背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">334067</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">),</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">new-theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 主区域背景色</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-main-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f0f2f5</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 【头部】</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部背景色</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1d2935</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字颜色</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航文字选中颜色</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">42b983</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 头部导航选中背景色</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">g-header-menu-active-bg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1f3039</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>布局相关的部分宽高变量存放在 <code>/src/assets/styles/resources/layout.scss</code> 文件中。</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这是一个复合变量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当布局设置为 adaption-min-width 时，它代表 最小宽度</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当布局设置为 center 时，它代表 固定宽度</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当布局设置为 center-max-width 时，它代表 最大宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-app-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1400px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 头部高度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-header-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 面包屑高度（同时也是侧边栏Logo区域的高度）</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-breadcrumb-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 标签栏高度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-tabbar-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 侧边栏宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-main-sidebar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$g-sub-sidebar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">220px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function t(c,r,y,D,C,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
