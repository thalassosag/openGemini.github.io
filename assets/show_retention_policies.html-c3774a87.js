import{_ as r,X as c,Y as i,$ as p,a0 as a,a3 as d,C as u,Z as s,a1 as n}from"./framework-a4aa538b.js";const k={},m=d(`<h1 id="show-retention-policies" tabindex="-1"><a class="header-anchor" href="#show-retention-policies" aria-hidden="true">#</a> SHOW RETENTION POLICIES</h1><p>返回指定数据库的<strong>保留策略</strong>列表。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> RETENTION POLICIES <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选项。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-retention-policies查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-retention-policies查询" aria-hidden="true">#</a> 运行带有<code>ON</code>子句的<code>SHOW RETENTION POLICIES</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> RETENTION POLICIES <span class="token keyword">ON</span> NOAA_water_database
<span class="token operator">+</span><span class="token comment">---------+----------+--------------------+--------------+---------------+----------------+----------+---------+</span>
<span class="token operator">|</span> name    <span class="token operator">|</span> duration <span class="token operator">|</span> shardGroupDuration <span class="token operator">|</span> hot duration <span class="token operator">|</span> warm duration <span class="token operator">|</span> <span class="token keyword">index</span> duration <span class="token operator">|</span> replicaN <span class="token operator">|</span> <span class="token keyword">default</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+----------+--------------------+--------------+---------------+----------------+----------+---------+</span>
<span class="token operator">|</span> autogen <span class="token operator">|</span> <span class="token number">0</span>s       <span class="token operator">|</span> <span class="token number">168</span>h0m0s           <span class="token operator">|</span> <span class="token number">0</span>s           <span class="token operator">|</span> <span class="token number">0</span>s            <span class="token operator">|</span> <span class="token number">168</span>h0m0s       <span class="token operator">|</span> <span class="token number">1</span>        <span class="token operator">|</span> <span class="token boolean">true</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+----------+--------------------+--------------+---------------+----------------+----------+---------+</span>
<span class="token number">8</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询以表格的形式返回数据库<code>NOAA_water_database</code>中所有的保留策略。这个数据库有一个名为<code>autogen</code>的保留策略，该保留策略具有无限的持续时间，为期7天的shard group持续时间，复制系数为1，并且它是这个数据库的默认(<code>DEFAULT</code>)保留策略。</p><h3 id="运行不带有on子句的show-retention-policies查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-retention-policies查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW RETENTION POLICIES</code>查询</h3>`,11),b=s("p",null,[n("使用"),s("code",null,"USE <database_name>"),n("指定数据库")],-1),v=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">>"),s("span",{class:"token operator"},">"),n(` use NOAA_water_database
Elapsed: 704ns
`),s("span",{class:"token operator"},">>"),s("span",{class:"token operator"},">"),n(` SHOW RETENTION POLICIES
+---------+----------+--------------------+--------------+---------------+----------------+----------+---------+
`),s("span",{class:"token operator"},"|"),n(" name    "),s("span",{class:"token operator"},"|"),n(" duration "),s("span",{class:"token operator"},"|"),n(" shardGroupDuration "),s("span",{class:"token operator"},"|"),n(" hot duration "),s("span",{class:"token operator"},"|"),n(" warm duration "),s("span",{class:"token operator"},"|"),n(" index duration "),s("span",{class:"token operator"},"|"),n(" replicaN "),s("span",{class:"token operator"},"|"),n(" default "),s("span",{class:"token operator"},"|"),n(`
+---------+----------+--------------------+--------------+---------------+----------------+----------+---------+
`),s("span",{class:"token operator"},"|"),n(" autogen "),s("span",{class:"token operator"},"|"),n(" 0s       "),s("span",{class:"token operator"},"|"),n(" 168h0m0s           "),s("span",{class:"token operator"},"|"),n(" 0s           "),s("span",{class:"token operator"},"|"),n(" 0s            "),s("span",{class:"token operator"},"|"),n(" 168h0m0s       "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token number"},"1"),n("        "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token boolean"},"true"),n("    "),s("span",{class:"token operator"},"|"),n(`
+---------+----------+--------------------+--------------+---------------+----------------+----------+---------+
`),s("span",{class:"token number"},"8"),n(" columns, "),s("span",{class:"token number"},"1"),n(" rows "),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token builtin class-name"},"set"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("p",null,[n("使用参数"),s("code",null,"db"),n("指定数据库")],-1),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("~$ "),s("span",{class:"token function"},"curl"),n(),s("span",{class:"token parameter variable"},"-G"),n(),s("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),n(" --data-urlencode "),s("span",{class:"token string"},'"q=SHOW RETENTION POLICIES"'),n(`

`),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string"},'"results"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token string"},'"statement_id"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token number"},"0"),n(`,
            `),s("span",{class:"token string"},'"series"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                `),s("span",{class:"token punctuation"},"{"),n(`
                    `),s("span",{class:"token string"},'"columns"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token string"},'"name"'),n(`,
                        `),s("span",{class:"token string"},'"duration"'),n(`,
                        `),s("span",{class:"token string"},'"shardGroupDuration"'),n(`,
                        `),s("span",{class:"token string"},'"hot duration"'),n(`,
                        `),s("span",{class:"token string"},'"warm duration"'),n(`,
                        `),s("span",{class:"token string"},'"index duration"'),n(`,
                        `),s("span",{class:"token string"},'"replicaN"'),n(`,
                        `),s("span",{class:"token string"},'"default"'),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`,
                    `),s("span",{class:"token string"},'"values"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"autogen"'),n(`,
                            `),s("span",{class:"token string"},'"0s"'),n(`,
                            `),s("span",{class:"token string"},'"168h0m0s"'),n(`,
                            `),s("span",{class:"token string"},'"0s"'),n(`,
                            `),s("span",{class:"token string"},'"0s"'),n(`,
                            `),s("span",{class:"token string"},'"168h0m0s"'),n(`,
                            `),s("span",{class:"token number"},"1"),n(`,
                            `),s("span",{class:"token boolean"},"true"),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`
                `),s("span",{class:"token punctuation"},"}"),n(`
            `),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function _(N,O){const e=u("Tabs");return c(),i("div",null,[m,p(e,{id:"29",data:[{title:"CLI"},{title:"API"}]},{tab0:a(({title:t,value:o,isActive:l})=>[b,v]),tab1:a(({title:t,value:o,isActive:l})=>[h,g]),_:1})])}const E=r(k,[["render",_],["__file","show_retention_policies.html.vue"]]);export{E as default};