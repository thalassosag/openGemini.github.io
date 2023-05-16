import{_ as s,X as a,Y as n,a3 as e}from"./framework-a4aa538b.js";const o={},r=e(`<h1 id="show-users" tabindex="-1"><a class="header-anchor" href="#show-users" aria-hidden="true">#</a> SHOW USERS</h1><p>查看所有现有用户及其管理员状态</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> USERS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> USERS
<span class="token operator">+</span><span class="token comment">-------+-------+--------+</span>
<span class="token operator">|</span> <span class="token keyword">user</span>  <span class="token operator">|</span> admin <span class="token operator">|</span> rwuser <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------+-------+--------+</span>
<span class="token operator">|</span> admin <span class="token operator">|</span> admin <span class="token operator">|</span> <span class="token boolean">false</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------+-------+--------+</span>
<span class="token number">3</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[r];function p(l,c){return a(),n("div",null,t)}const i=s(o,[["render",p],["__file","show_users.html.vue"]]);export{i as default};