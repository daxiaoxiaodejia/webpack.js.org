(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{339:function(e,o,n){"use strict";n.r(o),o.default='<p>这些选项可以配置是否 polyfill 或 mock 某些 <a href="https://nodejs.org/docs/latest/api/globals.html">Node.js 全局变量</a>和模块。这可以使最初为 Node.js 环境编写的代码，在其他环境（如浏览器）中运行。</p>\n<p>此功能由 webpack 内部的 <a href="https://github.com/webpack/webpack/blob/master/lib/NodeStuffPlugin.js"><code>NodeStuffPlugin</code></a> 插件提供。如果 target 是 "web"（默认）或 "webworker"，那么 <a href="https://github.com/webpack/webpack/blob/master/lib/node/NodeSourcePlugin.js"><code>NodeSourcePlugin</code></a> 插件也会被激活。</p>\n<h2 id="node"><code>node</code><a href="#node" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean = false</code> <code>object</code></p>\n<p>是一个对象，其中每个属性都是 Node.js 全局变量或模块的名称，每个 value 是以下其中之一……</p>\n<ul>\n<li><code>true</code>：提供 polyfill。</li>\n<li><code>"mock"</code>：提供 mock 实现预期接口，但功能很少或没有。</li>\n<li><code>"empty"</code>：提供空对象。</li>\n<li><code>false</code>: 什么都不提供。预期获取此对象的代码，可能会因为获取不到此对象，触发 <code>ReferenceError</code> 而崩溃。尝试使用 <code>require(\'modulename\')</code> 导入模块的代码，可能会触发 <code>Cannot find module "modulename"</code> 错误。</li>\n</ul>\n<blockquote class="warning">\n<p>注意，不是每个 Node 全局变量都支持所有选项。对于不支持的键值组合(property-value combination)，compiler 会抛出错误。更多细节请查看接下来的章节。</p>\n</blockquote>\n<blockquote class="tip">\n<p>如果你正在使用一个需要全局变量的模块，请使用 <code>ProvidePlugin</code> 而非 <code>global</code>。</p>\n</blockquote>\n<p>这里是默认值：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    global<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    __filename<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    __dirname<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>从 webpack 3.0.0 开始，<code>node</code> 选项可能被设置为 <code>false</code>，以完全关闭 <code>NodeStuffPlugin</code> 和 <code>NodeSourcePlugin</code> 插件。</p>\n<h2 id="nodeglobal"><code>node.global</code><a href="#nodeglobal" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean = false</code></p>\n<p>关于此对象的准确行为，请查看<a href="https://github.com/webpack/webpack/blob/master/buildin/global.js">源码</a>。</p>\n<h2 id="node__filename"><code>node.__filename</code><a href="#node__filename" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code> <code>boolean = false</code></p>\n<p>选项：</p>\n<ul>\n<li><code>true</code>: <strong>输入</strong> 文件的文件名，是相对于 <a href="https://webpack.js.org/configuration/entry-context/#context"><code>context</code> 选项</a>。</li>\n<li><code>false</code>: 常规的 Node.js <code>__filename</code> 行为。在 Node.js 环境中运行时，<strong>输出</strong> 文件的文件名。</li>\n<li><code>"mock"</code>: value 填充为 <code>"index.js"</code>.</li>\n</ul>\n<h2 id="node__dirname"><code>node.__dirname</code><a href="#node__dirname" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code> <code>boolean = false</code></p>\n<p>选项：</p>\n<ul>\n<li><code>true</code>: <strong>输入</strong> 文件的目录名，是相对于 <a href="https://webpack.js.org/configuration/entry-context/#context"><code>context</code> 选项</a>。</li>\n<li><code>false</code>: 常规的 Node.js <code>__dirname</code> 行为。在 Node.js 环境中运行时，<strong>输出</strong> 文件的目录名。</li>\n<li><code>"mock"</code>: value 填充为 <code>"/"</code>。</li>\n</ul>\n'}}]);