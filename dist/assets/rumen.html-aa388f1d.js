import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as n,d as a,b as t,e}from"./app-23957fcb.js";const l={},u=n("h1",{id:"mongodb最基础入门教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongodb最基础入门教程","aria-hidden":"true"},"#"),a(" MongoDB最基础入门教程")],-1),r=n("p",null,"我以为我对MongoDB十分了解，直到我遇到了字节面试官",-1),d={href:"https://mp.weixin.qq.com/s/NPJkMy5RppyFk9QhzHxhrw",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mp.weixin.qq.com/s/ZjsZxle7m_dfmVwVkq2ayg",target:"_blank",rel:"noopener noreferrer"},b=e('<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-a1f2d203-e586-4ca1-8556-e1a94c6b411e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>小伙伴们在继续阅读之前，我必须要声明一点，我对 MongoDB 并没有进行很深入的研究，仅仅是因为要用，就学一下。但作为一名负责任的技术博主，我是花了心思的，这篇入门教程，小伙伴们读完后绝对会感到满意，忍不住点赞。</p><p>当然了，小伙伴们遇到文章中有错误的地方，不要手下留情，可以组团过来捶我，但要保证一点，不要打脸，我怕毁容。</p><h3 id="_01、mongodb-是什么" tabindex="-1"><a class="header-anchor" href="#_01、mongodb-是什么" aria-hidden="true">#</a> 01、MongoDB 是什么</h3><blockquote><p>MongoDB 是一个基于分布式的文件存储数据库，旨在为 Web 应用提供可扩展的高性能数据存储解决方案。</p></blockquote><p>以上引用来自于官方，不得不说，解释得文绉绉的。那就让我来换一种通俗的说法给小伙伴们解释一下，MongoDB 将数据存储为一个文档（类似于 JSON 对象），数据结构由键值对组成，类似于 Java 中的 Map，通过 key 的方式访问起来效率就高得多，对吧？这也是 MongoDB 最重要的特点。</p><p>MongoDB 提供了企业版（功能更强大）和社区版，对于我们开发者来说，拿社区版来学习和使用就足够了。MongoDB 的驱动包很多，常见的编程语言都有覆盖到，比如说 Java、JavaScript、C++、C#、Python 等等。</p><p>很多知名的互联网公司都在用 MongoDB，比如说谷歌、Facebook、eBay 等等。总之，值得信赖，小伙伴们放心入门，技多不压身啊，就当是给自己一次学习的机会。</p><h3 id="_02、安装-mongodb" tabindex="-1"><a class="header-anchor" href="#_02、安装-mongodb" aria-hidden="true">#</a> 02、安装 MongoDB</h3><p>MongoDB 针对不同的操作系统有不同的安装包，我们这篇入门的文章就以 Windows 为例吧。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-557ab648-e2c4-4309-8695-aeb7fbcba25b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>官网下载地址如下：</p>',12),m={href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"},k=e('<p>最新的版本是 4.2.6，我选择的是安装版，msi 格式的，264M 左右。下载完就可以双击运行安装，傻瓜式的。</p><p>建议选择「Custom」自定义安装，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-42330ff2-598a-40bf-b252-480704c6a531.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以服务模式运行，并配置好数据和日志目录，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-c71a31d4-5a99-4c12-93a9-348aa79bc086.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>建议取消勾选安装 MongoDB 的图形化客户端工具，否则安装速度慢到你想要去扣会手机。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-84ea8b51-6b53-4500-86fa-0dcfa61b84cd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装完成后进入到 bin 目录下，双击 mongo.exe 文件就可以连接到 MongoDB 服务了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-bcf34981-0c2b-4f86-94e0-711dfb307371.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1）MongoDB 的默认端口号为 27017。</p><p>2）MongoDB 的版本号为 4.2.6。</p><p>默认会连接到 test 文档（相当于数据），可以通过 db 命令查询。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-ded1c30c-9943-4061-8fa3-4562387b72cd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还可以运行一些简单的算术运算：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-22c1d414-6ba4-47dd-beb8-f1003f21083e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那如何停止服务呢？可以直接点击右上角的 X 号——粗暴、壁咚。</p><h3 id="_03、安装-robo-3t" tabindex="-1"><a class="header-anchor" href="#_03、安装-robo-3t" aria-hidden="true">#</a> 03、安装 Robo 3T</h3><p>Robo 3T 提供了对 MongoDB 和 SCRAM-SHA-256（升级的 mongo shell）的支持，是一款轻量级的 MongoDB 客户端工具。</p><p>下载地址如下：</p>',19),v={href:"https://robomongo.org/download",target:"_blank",rel:"noopener noreferrer"},f=e(`<p>最新的版本是 1.3，选择 zip 格式进行下载，23M 左右。下载完成后，解压就行了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-b178e02c-23b6-4b54-92ec-3a170a8499d0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>包目录不再一一解释了，进入 bin 目录下，双击运行 robo3t.exe 文件，启动 Robo 3T 客户端。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-99717a12-c90d-4a03-941d-f3857f503d44.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「Create」创建一个 MongoDB 的连接。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-11866209-6a60-4a6a-9ca9-fcd9279796f6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>连接成功后，就可以操作 MongoDB 了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-753dfcd7-1557-4837-9a7e-94b2ff9db72a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（不过，小伙伴们这时候也不太知道该怎么操作，毕竟 MongoDB 的一些相关概念还不清楚，无从下手啊）</p><h3 id="_04、mongodb-的相关概念" tabindex="-1"><a class="header-anchor" href="#_04、mongodb-的相关概念" aria-hidden="true">#</a> 04、MongoDB 的相关概念</h3><p>随着互联网的极速发展，用户数据也越来越庞大，NoSQL 数据库的发展能够很好地处理这些大的数据，MongoDB 是 NoSQL 数据库中的一个典型的代表。</p><p>说到这，可能有些小伙伴们还不知道 NoSQL 是啥意思，我简单解释一下。NoSQL 可不是没有 SQL 的意思，它实际的含义是 Not Only SQL，也就是“不仅仅是 SQL”，指的是非关系型数据库，和传统的关系型数据库 MySQL、Oracle 不同。</p><p>MongoDB 命名源于英文单词 hu<strong>mongo</strong>us，意思是「巨大无比」，可以看得出 MongoDB 的野心。MongoDB 的数据以类似于 JSON 格式的二进制文档存储：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    name: &quot;沉默王二&quot;,
    age: 18,
    hobbies: [&quot;写作&quot;, &quot;敲代码&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进行下一步之前，需要先来理解 MongoDB 中的几个关键概念，比如说什么是集合，什么是文档，什么是字段等等。MongoDB 虽然是非关系型数据库，但和关系型数据库非常相似。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-814acc38-8934-47f9-991c-666466601bd7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看完上面这幅图（图片来源于好朋友 macrozheng 的文章），是不是瞬间就清晰了？</p><h3 id="_05、在-java-中使用-mongodb" tabindex="-1"><a class="header-anchor" href="#_05、在-java-中使用-mongodb" aria-hidden="true">#</a> 05、在 Java 中使用 MongoDB</h3><p>有些小伙伴可能会问，“二哥，我是一名 Java 程序员，我该如何在 Java 中使用 MongoDB 呢？”这个问题问得好，这就来，这就来。</p><p>第一步，在项目中添加 MongoDB 驱动依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.mongodb&lt;/groupId&gt;
    &lt;artifactId&gt;mongodb-driver-sync&lt;/artifactId&gt;
    &lt;version&gt;4.0.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，新建测试类 MongoDBTest：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MongoDBTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MongoClient</span> mongoClient <span class="token operator">=</span> <span class="token class-name">MongoClients</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MongoDatabase</span> database <span class="token operator">=</span> mongoClient<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;mydb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MongoCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> collection <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;hobbies&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;写作&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;敲代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        collection<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;集合大小：&quot;</span> <span class="token operator">+</span>collection<span class="token punctuation">.</span><span class="token function">countDocuments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Document</span> myDoc <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文档内容：&quot;</span> <span class="token operator">+</span> myDoc<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）MongoClient 为 MongoDB 提供的客户端连接对象，不指定主机名和端口号的话，默认就是“localhost”和“27017”。</p><p>如果小伙伴想自定义主机名和端口号的话，也可以通过字符串的形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MongoClient</span> mongoClient <span class="token operator">=</span> <span class="token class-name">MongoClients</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是不是感觉和 MySQL 的连接字符串挺像的？</p><p>2）<code>getDatabase()</code> 方法用于获取指定名称的数据库，如果数据库已经存在，则直接返回该 DB 对象（MongoDatabase），否则就创建一个再返回（省去了判空的操作，非常人性化）。</p><p>3）<code>getCollection()</code> 方法用于获取指定名称的文档对象，如果文档已经存在，则直接返回该 Document 的集合对象，否则就创建一个再返回（和 <code>getDatabase()</code> 方法类似）。</p><p>有了文档对象（<code>MongoCollection&lt;Document&gt;</code>）后，就可以往里面添加具体的文档内容了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;hobbies&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;写作&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;敲代码&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Document 对象来源于 org.bson 包下，可以在实例化该对象之后通过 <code>append()</code> 方法添加对应的键值对，非常方便，就像 String 类的 <code>append()</code> 方法一样。</p><p>有了文档对象后，就可以通过 <code>insertOne()</code> 方法将文档添加到集合当中了。</p><p>4）<code>countDocuments()</code> 方法用于获取集合中的文档数目。</p><p>5）要查询文档，可以通过 <code>find()</code> 方法，它返回一个 <code>FindIterable</code> 对象，<code>first()</code> 方法可以返回当前集合中的第一个文档对象。</p><p>好了，来看一下程序的输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>集合大小：1
文档内容：{&quot;_id&quot;: {&quot;$oid&quot;: &quot;5ebcaa76465cab3f18b93e1a&quot;}, &quot;name&quot;: &quot;沉默王二&quot;, &quot;age&quot;: &quot;18&quot;, &quot;hobbies&quot;: [&quot;写作&quot;, &quot;敲代码&quot;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完全符合我们的预期，perfect！</p><p>也可以通过 Robo 3T 查看“mydb”数据库，结果如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mongodb/rumen-95d49578-b1ef-43cc-91da-c7b3a7a7517e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_06、鸣谢" tabindex="-1"><a class="header-anchor" href="#_06、鸣谢" aria-hidden="true">#</a> 06、鸣谢</h3><p>好了，我亲爱的小伙伴们，以上就是本文的全部内容了，是不是看完后很想实操一把 MongoDB，赶快行动吧！如果你在学习的过程中遇到了问题，欢迎随时和我交流，虽然我也是个菜鸟，但我有热情啊。</p><p>另外，如果你想写入门级别的文章，这篇就是最好的范例。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,44);function h(q,j){const s=p("ExternalLinkIcon");return c(),i("div",null,[u,r,n("p",null,[a("有时候不得不感慨一下，系统升级真的是好处多多，不仅让我有机会重构了之前的烂代码，也满足了我积极好学的虚荣心。你看，"),n("a",d,[a("Redis 入门"),t(s)]),a("了、"),n("a",g,[a("Elasticsearch 入门"),t(s)]),a("了，这次又要入门 MongoDB，感觉自己变秃的同时，也变强大了。")]),b,n("p",null,[n("a",m,[a("https://www.mongodb.com/download-center/community"),t(s)])]),k,n("p",null,[n("a",v,[a("https://robomongo.org/download"),t(s)])]),f])}const _=o(l,[["render",h],["__file","rumen.html.vue"]]);export{_ as default};