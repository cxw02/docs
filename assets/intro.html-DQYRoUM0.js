import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as r,d as l,a as t,g as n,o as a}from"./app-DqblKm8F.js";const o={};function i(h,e){return a(),p("div",null,[e[0]||(e[0]=r("p",null,[r("code",null,"vuepress-theme-hope"),l(" 捆绑了很多 VuePress 插件并提供了更多 VuePress 插件支持。")],-1)),t(" more "),e[1]||(e[1]=n('<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项"><span>插件选项</span></a></h2><p>主题提供 <code>plugins</code> 选项向对应的插件传递所需选项。</p><div class="hint-container info"><p class="hint-container-title">插件选项名称</p><p>所有的配置键名均为插件名称的驼峰式 (camelCase) 版本，并去除名称中可能存在的数字 2 结尾。</p><p>例如:</p><ul><li><code>@vuepress/plugin-copy-code</code> 的配置键名为 <code>copyCode</code>。</li><li><code>@vuepress/plugin-copyright</code> 的配置键名为 <code>copyright</code></li><li><code>vuepress-plugin-md-enhance</code> 的配置键名为 <code>mdEnhance</code></li></ul></div><h2 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表"><span>插件列表</span></a></h2><h3 id="内置插件" tabindex="-1"><a class="header-anchor" href="#内置插件"><span>内置插件</span></a></h3><p>下列插件被内部调用，不可禁用:</p><ul><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/sass-palette/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-sass-palette</a>: 面向插件和主题的 Sass 配置插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/theme-data.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-theme-data</a>: 主题配置的 Composition API 插件</p></li><li><p><a href="https://plugin-components.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-components</a>: 提供一些开箱即用的组件</p></li></ul><h3 id="自动启用的插件" tabindex="-1"><a class="header-anchor" href="#自动启用的插件"><span>自动启用的插件</span></a></h3><p>下列插件默认启用，你可以禁用它们:</p><ul><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/active-header-links.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-active-header-links</a>: 自动更新路由 Hash</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/back-to-top.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-back-to-top</a>: 返回顶部按钮</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/catalog.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-catalog</a>: 提供目录页自动生成与 <code>&lt;Catalog /&gt;</code> 组件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/copy-code.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-copy-code</a>: 为代码块提供复制按钮。</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/git.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-git</a>: 基于 Git 的信息插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/markdown/links-check.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-links-check</a>: 检查 Markdown 链接</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/nprogress.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-nprogress</a>: 进度条</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/photo-swipe.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-photo-swipe</a>: 基于 Photo Swipe 的图片浏览插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/reading-time.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-reading-time</a>: 阅读时间与字数统计</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/seo/seo/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-seo</a>: SEO 增强插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-shiki</a>: 基于 Shiki 的代码高亮插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/seo/sitemap/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-sitemap</a>: Sitemap 插件</p></li><li><p><a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance</a>: 提供更多 Markdown 语法</p></li></ul><h3 id="需要手动启用的插件" tabindex="-1"><a class="header-anchor" href="#需要手动启用的插件"><span>需要手动启用的插件</span></a></h3><p>主题捆绑以下插件，你可以通过配置启用它们</p><ul><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/blog/blog/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-blog</a>: VuePress2 的博客插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/copyright.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-copyright</a>: 在用户复制时追加版权信息，或禁用站点的复制与选择。</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-comment</a>: 提供评论与浏览量功能</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/notice.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-notice</a>: 提供公告</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/development/rtl.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-rtl</a>: 提供 RTL 支持</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/features/watermark.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-watermark</a>: 水印插件</p></li></ul><h3 id="内置支持的插件" tabindex="-1"><a class="header-anchor" href="#内置支持的插件"><span>内置支持的插件</span></a></h3><p>以下插件受到主题支持，但你需要在使用前自行安装它们:</p><ul><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/search/docsearch.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-docsearch</a>: 基于 DocSearch 的搜索插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/search/search.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-search</a>: 简单的客户端搜索插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/blog/feed/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-feed</a>: Feed 支持</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-prismjs</a>: 基于 prism.js 的代码高亮插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/tools/redirect.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-redirect</a>: 重定向插件</p></li><li><p><a href="https://ecosystem.vuejs.press/zh/plugins/pwa/pwa/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-pwa</a>: PWA 支持</p></li><li><p><a href="https://plugin-search-pro.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-search-pro</a>: 专业客户端搜索插件</p></li></ul><h3 id="官方插件" tabindex="-1"><a class="header-anchor" href="#官方插件"><span>官方插件</span></a></h3>',17))])}const g=s(o,[["render",i],["__file","intro.html.vue"]]),m=JSON.parse('{"path":"/config/plugins/intro.html","title":"主题插件","lang":"zh-CN","frontmatter":{"title":"主题插件","icon":"fas fa-circle-info","order":1,"category":["配置"],"tag":["插件配置","主题配置","介绍"],"gitInclude":[]},"headers":[{"level":2,"title":"插件选项","slug":"插件选项","link":"#插件选项","children":[]},{"level":2,"title":"插件列表","slug":"插件列表","link":"#插件列表","children":[{"level":3,"title":"内置插件","slug":"内置插件","link":"#内置插件","children":[]},{"level":3,"title":"自动启用的插件","slug":"自动启用的插件","link":"#自动启用的插件","children":[]},{"level":3,"title":"需要手动启用的插件","slug":"需要手动启用的插件","link":"#需要手动启用的插件","children":[]},{"level":3,"title":"内置支持的插件","slug":"内置支持的插件","link":"#内置支持的插件","children":[]},{"level":3,"title":"官方插件","slug":"官方插件","link":"#官方插件","children":[]}]}],"readingTime":{"minutes":2.34,"words":702},"filePathRelative":"config/plugins/intro.md","excerpt":"<p><code>vuepress-theme-hope</code> 捆绑了很多 VuePress 插件并提供了更多 VuePress 插件支持。</p>\\n"}');export{g as comp,m as data};
