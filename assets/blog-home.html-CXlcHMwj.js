import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as l,g as a,o as t}from"./app-DqblKm8F.js";const n={};function h(r,i){return t(),e("div",null,[l(" more "),i[0]||(i[0]=a(`<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h2><p>必须设置为 <code>true</code> 以使用博客主页布局。</p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h2><p>必须设置为 <code>BlogHome</code> 以使用博客主页布局。</p><h2 id="hero" tabindex="-1"><a class="header-anchor" href="#hero"><span>hero</span></a></h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否显示主页的图标与描述。</p><h2 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>设置页面标题，会用于路径导航、页面增强等。</p><h2 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext"><span>heroText</span></a></h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Hello&quot;</code></li></ul><p>主页标题</p><h2 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline"><span>tagline</span></a></h2><ul><li>类型: <code>string | false</code></li><li>默认值: <code>&quot;Welcome to your VuePress site&quot;</code></li></ul><p>附加文字描述</p><h2 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage"><span>heroImage</span></a></h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标 (logo) 地址，不支持相对路径。</p><h2 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark"><span>heroImageDark</span></a></h2><ul><li>类型: <code>string</code></li><li>默认值: <code>heroImage</code></li></ul><p>深色模式下主页图标 (logo) 地址，不支持相对路径。</p><h2 id="heroimagestyle" tabindex="-1"><a class="header-anchor" href="#heroimagestyle"><span>heroImageStyle</span></a></h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>首页图标的 CSS 样式</p><h2 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt"><span>heroAlt</span></a></h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>主页图标的替代文字</p><h2 id="bgimage" tabindex="-1"><a class="header-anchor" href="#bgimage"><span>bgImage</span></a></h2><ul><li>类型: <code>string | false</code></li><li>默认值: 一张内置风景图片</li></ul><p>背景图片的地址，不支持相对路径。如果不填写，会自动应用一张默认的风景图片。</p><h2 id="bgimagedark" tabindex="-1"><a class="header-anchor" href="#bgimagedark"><span>bgImageDark</span></a></h2><ul><li>类型: <code>string</code></li><li>默认值: <code>bgImage</code></li></ul><p>深色模式下背景图片的地址，不支持相对路径。</p><h2 id="bgimagestyle" tabindex="-1"><a class="header-anchor" href="#bgimagestyle"><span>bgImageStyle</span></a></h2><ul><li>类型: <code>Record&lt;string, string&gt; | string</code></li><li>必填: 否</li></ul><p>背景图片的 CSS 样式。</p><h2 id="herofullscreen" tabindex="-1"><a class="header-anchor" href="#herofullscreen"><span>heroFullScreen</span></a></h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否全屏显示 Hero</p><h2 id="projects" tabindex="-1"><a class="header-anchor" href="#projects"><span>projects</span></a></h2><ul><li><p>类型: <code>ThemeBlogHomeProjectOptions[]</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ThemeBlogHomeProjectOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 项目名称</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 项目描述</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  desc</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 项目链接</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 项目图标</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-light-font-style:italic;--shiki-dark:#C678DD;--shiki-dark-font-style:italic;">description</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 支持图片链接或者图标字体类，同时也支持 \`&quot;link&quot;\`、\`&quot;project&quot;\`、\`&quot;book&quot;\`、\`&quot;article&quot;\`、\`&quot;friend&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  icon</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>项目列表</p>`,43))])}const c=s(n,[["render",h],["__file","blog-home.html.vue"]]),p=JSON.parse('{"path":"/config/Frontmatter/blog-home.html","title":"博客主页 Frontmatter 配置","lang":"zh-CN","frontmatter":{"title":"博客主页 Frontmatter 配置","icon":"fas fa-blog","order":6,"category":["配置"],"tag":["Frontmatter","博客主页"],"gitInclude":[]},"headers":[{"level":2,"title":"home","slug":"home","link":"#home","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"hero","slug":"hero","link":"#hero","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]},{"level":2,"title":"heroText","slug":"herotext","link":"#herotext","children":[]},{"level":2,"title":"tagline","slug":"tagline","link":"#tagline","children":[]},{"level":2,"title":"heroImage","slug":"heroimage","link":"#heroimage","children":[]},{"level":2,"title":"heroImageDark","slug":"heroimagedark","link":"#heroimagedark","children":[]},{"level":2,"title":"heroImageStyle","slug":"heroimagestyle","link":"#heroimagestyle","children":[]},{"level":2,"title":"heroAlt","slug":"heroalt","link":"#heroalt","children":[]},{"level":2,"title":"bgImage","slug":"bgimage","link":"#bgimage","children":[]},{"level":2,"title":"bgImageDark","slug":"bgimagedark","link":"#bgimagedark","children":[]},{"level":2,"title":"bgImageStyle","slug":"bgimagestyle","link":"#bgimagestyle","children":[]},{"level":2,"title":"heroFullScreen","slug":"herofullscreen","link":"#herofullscreen","children":[]},{"level":2,"title":"projects","slug":"projects","link":"#projects","children":[]}],"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"config/Frontmatter/blog-home.md","excerpt":""}');export{c as comp,p as data};
