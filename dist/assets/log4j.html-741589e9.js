import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,a,d as n,b as c,e as s}from"./app-23957fcb.js";const i={},u=s('<p>空了的时候，我都会在群里偷偷摸摸地潜水，对小伙伴们的一举一动、一言一行筛查诊断。一副班主任的即时感，让我感到非常的快乐，<strong>略微夹带一丝丝的枯燥</strong>。</p><p>这不，我在战国时代读者群里发现了这么一串聊天记录：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-cacd9e88-4a4d-4127-a18b-f99b2e2296a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>竟然有小伙伴不知道“打日志”是什么意思，不知道该怎么学习，还有小伙伴回答说，只知道 Log4j！</p><p>有那么一刻，我遭受到了一万点暴击，内心莫名的伤感，犹如一匹垂头丧气的狗。因为网络上总有一些不怀好意的人不停地攻击我，说我写的文章入门，毫无深度——他们就是我命中注定的黑子，不信你到脉脉上搜“沉默王二”，就能看到他们毫无新意的抨击。</p><p>我就想问一下，怎么了，入门的文章有入门的群体需要，而我恰好帮助了这么一大批初学者，我应该受到褒奖好不好？</p><p>（说好的不在乎，怎么在乎起来了呢？手动狗头）</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-58282c4d-8178-45bd-8ba3-26740f6dd4a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>管他呢，<strong>我行我素</strong>吧，保持初心不改就对了！这篇文章就来说说 Log4j，这个打印日志的鼻祖。Java 中的日志打印其实是个艺术活，我保证，这句话绝不是忽悠。</p><p>事实证明，打印日志绝逼会影响到程序的性能，这是不可否认的，毕竟多做了一项工作。尤其是在交易非常频繁的程序里，涌现大量的日志确实会比较低效。</p>',10),d={href:"https://mp.weixin.qq.com/s/vEt_ypvByKS-oCsuRmpgUw",target:"_blank",rel:"noopener noreferrer"},r=s(`<h3 id="_01、为什么需要在-java-中打印日志" tabindex="-1"><a class="header-anchor" href="#_01、为什么需要在-java-中打印日志" aria-hidden="true">#</a> 01、为什么需要在 Java 中打印日志</h3><p><code>System.out.println()</code> 恐怕是我们在学习 Java 的时候，最常用的一种打印日志的方式了，几乎每个 Java 初学者都这样干过，甚至一些老鸟。</p><p>之所以这样打印日志，是因为很方便，上手难度很低，尤其是在 IDEA 的帮助下，只需在键盘上按下 <code>so</code> 两个字母就可以调出 <code>System.out.println()</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-64dbb12b-8f6b-4ee3-ab5a-60519dd9112f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在本地环境下，使用 <code>System.out.println()</code> 打印日志是没问题的，可以在控制台看到信息。但如果是在生产环境下的话，<code>System.out.println()</code> 就变得毫无用处了。</p><p>控制台打印出的信息并没有保存到日志文件中，只能即时查看，在一屏日志的情况下还可以接受。如果日志量非常大，控制台根本就装不下。所以就需要更高级的日志记录 API（比如 Log4j 和 java.util.logging）。</p><p>它们可以把大量的日志信息保存到文件中，并且控制每个文件的大小，如果满了，就存储到下一个，方便查找。</p><h3 id="_02、选择不同日志级别的重要性" tabindex="-1"><a class="header-anchor" href="#_02、选择不同日志级别的重要性" aria-hidden="true">#</a> 02、选择不同日志级别的重要性</h3><p>使用 Java 日志的时候，一定要注意日志的级别，比如常见的 DEBUG、INFO、WARN 和 ERROR。</p><p>DEBUG 的级别最低，当需要打印调试信息的话，就用这个级别，不建议在生产环境下使用。</p><p>INFO 的级别高一些，当一些重要的信息需要打印的时候，就用这个。</p><p>WARN，用来记录一些警告类的信息，比如说客户端和服务端的连接断开了，数据库连接丢失了。</p><p>ERROR 比 WARN 的级别更高，用来记录错误或者异常的信息。</p><p>FATAL，当程序出现致命错误的时候使用，这意味着程序可能非正常中止了。</p><p>OFF，最高级别，意味着所有消息都不会输出了。</p><p>这个级别是基于 Log4j 的，和 java.util.logging 有所不同，后者提供了更多的日志级别，比如说 SEVERE、FINER、FINEST。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-4919cd20-e524-43a2-8b41-9eab6ac0c1e4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_03、错误的日志记录方式是如何影响性能的" tabindex="-1"><a class="header-anchor" href="#_03、错误的日志记录方式是如何影响性能的" aria-hidden="true">#</a> 03、错误的日志记录方式是如何影响性能的</h3><p>为什么说错误的日志记录方式会影响程序的性能呢？因为日志记录的次数越多，意味着执行文件 IO 操作的次数就越多，这也就意味着会影响到程序的性能，能 get 吧？</p><p>虽然说普通硬盘升级到固态硬盘后，读写速度快了很多，但磁盘相对于内存和 CPU 来说，还是太慢了！就像马车和奔驰之间的速度差距。</p><p>这也就是为什么要选择日志级别的重要性。对于程序来说，记录日志是必选项，所以能控制的就是日志的级别，以及在这个级别上打印的日志。</p><p>对于 DEBUG 级别的日志来说，一定要使用下面的方式来记录：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;DEBUG 是开启的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 DEBUG 级别是开启的时候再打印日志，这种方式在你看很多源码的时候就可以发现，很常见。</p><p>切记，在生产环境下，一定不要开启 DEBUG 级别的日志，否则程序在大量记录日志的时候会变很慢，还有可能在你不注意的情况下，悄悄地把磁盘空间撑爆。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-fd2149c5-2d0c-4c15-897d-d5fa06cce71f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_04、为什么选择-log4j-而不是-java-util-logging" tabindex="-1"><a class="header-anchor" href="#_04、为什么选择-log4j-而不是-java-util-logging" aria-hidden="true">#</a> 04、为什么选择 Log4j 而不是 java.util.logging</h3><p>java.util.logging 属于原生的日志 API，Log4j 属于第三方类库，但我建议使用 Log4j，因为 Log4j 更好用。java.util.logging 的日志级别比 Log4j 更多，但用不着，就变成了多余。</p><p>Log4j 的另外一个好处就是，不需要重新启动 Java 程序就可以调整日志的记录级别，非常灵活。可以通过 log4j.properties 文件来配置 Log4j 的日志级别、输出环境、日志文件的记录方式。</p><p>Log4j 还是线程安全的，可以在多线程的环境下放心使用。</p><p>先来看一下 java.util.logging 的使用方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itwanger</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span></span><span class="token class-name">FileHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span></span><span class="token class-name">SimpleFormatter</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaUtilLoggingDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileHandler</span> fileHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;javautillog.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fileHandler<span class="token punctuation">.</span><span class="token function">setFormatter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>fileHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;细小的信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序运行后会在 target 目录下生成一个名叫 javautillog.txt 的文件，内容如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-222181d4-04ba-4487-8386-69b8737d2d5c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再来看一下 Log4j 的使用方式。</p><p>第一步，在 pom.xml 文件中引入 Log4j 包：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在 resources 目录下创建 log4j.properties 文件，内容如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### 设置###
log4j.rootLogger = debug,stdout,D,E

### 输出信息到控制台 ###
log4j.appender.stdout = org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target = System.out
log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n

### 输出DEBUG 级别以上的日志到=debug.log ###
log4j.appender.D = org.apache.log4j.DailyRollingFileAppender
log4j.appender.D.File = debug.log
log4j.appender.D.Append = true
log4j.appender.D.Threshold = DEBUG 
log4j.appender.D.layout = org.apache.log4j.PatternLayout
log4j.appender.D.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n

### 输出ERROR 级别以上的日志到=error.log ###
log4j.appender.E = org.apache.log4j.DailyRollingFileAppender
log4j.appender.E.File =error.log 
log4j.appender.E.Append = true
log4j.appender.E.Threshold = ERROR 
log4j.appender.E.layout = org.apache.log4j.PatternLayout
log4j.appender.E.layout.ConversionPattern = %d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1）配置根 Logger</strong>，语法如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log4j.rootLogger = [ level ] , appenderName, appenderName, …
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>level 就是日志的优先级，从高到低依次是 ERROR、WARN、INFO、DEBUG。如果这里定义的是 INFO，那么低级别的 DEBUG 日志信息将不会打印出来。</p><p>appenderName 就是指把日志信息输出到什么地方，可以指定多个地方，当前的配置文件中有 3 个地方，分别是 stdout、D、E。</p><p><strong>2）配置日志输出的目的地</strong>，语法如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log4j.appender.appenderName = fully.qualified.name.of.appender.class  
log4j.appender.appenderName.option1 = value1  
…  
log4j.appender.appenderName.option = valueN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Log4j 提供的目的地有下面 5 种：</p><ul><li>org.apache.log4j.ConsoleAppender：控制台</li><li>org.apache.log4j.FileAppender：文件</li><li>org.apache.log4j.DailyRollingFileAppender：每天产生一个文件</li><li>org.apache.log4j.RollingFileAppender：文件大小超过阈值时产生一个新文件</li><li>org.apache.log4j.WriterAppender：将日志信息以流格式发送到任意指定的地方</li></ul><p><strong>3）配置日志信息的格式</strong>，语法如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log4j.appender.appenderName.layout = fully.qualified.name.of.layout.class  
log4j.appender.appenderName.layout.option1 = value1  
…  
log4j.appender.appenderName.layout.option = valueN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Log4j 提供的格式有下面 4 种：</p><ul><li>org.apache.log4j.HTMLLayout：HTML 表格</li><li>org.apache.log4j.PatternLayout：自定义</li><li>org.apache.log4j.SimpleLayout：包含日志信息的级别和信息字符串</li><li>org.apache.log4j.TTCCLayout：包含日志产生的时间、线程、类别等等信息</li></ul><p>自定义格式的参数如下所示：</p><ul><li>%m：输出代码中指定的消息</li><li>%p：输出优先级</li><li>%r：输出应用启动到输出该日志信息时花费的毫秒数</li><li>%c：输出所在类的全名</li><li>%t：输出该日志所在的线程名</li><li>%n：输出一个回车换行符</li><li>%d：输出日志的时间点</li><li>%l：输出日志的发生位置，包括类名、线程名、方法名、代码行数，比如：<code>method:com.itwanger.Log4jDemo.main(Log4jDemo.java:14)</code></li></ul><p>第三步，写个使用 Demo：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itwanger</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">LogManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> 微信搜「沉默王二」，回复关键字 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Log4jDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Log4jDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 记录debug级别的信息</span>
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;debug.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 记录info级别的信息</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;info.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 记录error级别的信息</span>
        logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;error.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1）获取 Logger 对象</strong></p><p>要使用 Log4j 的话，需要先获取到 Logger 对象，它用来负责日志信息的打印。通常的格式如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Log4jDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2）打印日志</strong></p><p>有了 Logger 对象后，就可以按照不同的优先级打印日志了。常见的有以下 4 种：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>  
<span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>  
<span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>  
<span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序运行后会在 target 目录下生成两个文件，一个名叫 debug.log，内容如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-10-20 20:53:27  [ main:0 ] - [ DEBUG ]  debug.
2020-10-20 20:53:27  [ main:3 ] - [ INFO ]  info.
2020-10-20 20:53:27  [ main:3 ] - [ ERROR ]  error.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个名叫 error.log，内容如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2020-10-20 20:53:27  [ main:3 ] - [ ERROR ]  error.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_05、打印日志的-8-个小技巧" tabindex="-1"><a class="header-anchor" href="#_05、打印日志的-8-个小技巧" aria-hidden="true">#</a> 05、打印日志的 8 个小技巧</h3><p>1）在打印 DEBUG 级别的日志时，切记要使用 <code>isDebugEnabled()</code>！那小伙伴们肯定非常好奇，为什么要这样做呢？</p><p>先来看一下 <code>isDebugEnabled()</code> 方法的源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">public</span>
  <span class="token keyword">boolean</span> <span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>repository<span class="token punctuation">.</span><span class="token function">isDisabled</span><span class="token punctuation">(</span> <span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">DEBUG_INT</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">.</span><span class="token function">isGreaterOrEqual</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEffectiveLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内部使用了 <code>isDisabled()</code> 方法进行了日志级别的判断，如果 DEBUG 是禁用的话，就 return false 了。</p><p>再来看一下 <code>debug()</code> 方法的源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">public</span>
  <span class="token keyword">void</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token class-name">Object</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>repository<span class="token punctuation">.</span><span class="token function">isDisabled</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">DEBUG_INT</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">.</span><span class="token function">isGreaterOrEqual</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEffectiveLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">forcedLog</span><span class="token punctuation">(</span><span class="token constant">FQCN</span><span class="token punctuation">,</span> <span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>咦，不是也用 <code>isDisabled()</code> 方法判断吗？难道使用 <code>isDebugEnabled()</code>不是画蛇添足吗？直接用 <code>logger.debug()</code> 不香吗？我来给小伙伴们解释下。</p><p>如果我们在打印日志信息的时候需要附带一个方法去获取参数值，就像下面这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;用户名是：&quot;</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假如 <code>getName()</code> 方法需要耗费的时间长达 6 秒，那完了！尽管配置文件里的日志级别定义的是 INFO，<code>getName()</code> 方法仍然会倔强地执行 6 秒，完事后再 <code>debug()</code>，这就很崩了！</p><p>明明 INFO 的时候 <code>debug()</code> 是不执行的，意味着 <code>getName()</code> 也不需要执行的，偏偏就执行了 6 秒，是不是很傻？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;用户名是：&quot;</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换成上面这种方式，那确定此时 <code>getName()</code> 是不执行的，对吧？</p><p>为了程序性能上的考量，<code>isDebugEnabled()</code> 就变得很有必要了！假如说 <code>debug()</code> 的时候没有传参，确实是不需要判断 DEBUG 是否启用的。</p><p>2）慎重选择日志信息的打印级别，因为这太重要了！如果只能通过日志查看程序发生了什么问题，那必要的信息是必须要打印的，但打印得太多，又会影响到程序的性能。</p><p>所以，该 INFO 的 <code>info()</code>，该 DEBUG 的 <code>debug()</code>，不要随便用。</p><p>3）使用 Log4j 而不是 <code>System.out</code>、<code>System.err</code> 或者 <code>e.printStackTrace()</code> 来打印日志，原因之前讲过了，就不再赘述了。</p><p>4）使用 log4j.properties 文件来配置日志，尽管它不是必须项，使用该文件会让程序变得更灵活，有一种我的地盘我做主的味道。</p><p>5）不要忘记在打印日志的时候带上类的全名和线程名，在多线程环境下，这点尤为重要，否则定位问题的时候就太难了。</p><p>6）打印日志信息的时候尽量要完整，不要太过于缺省，尤其是在遇到异常或者错误的时候（信息要保留两类：案发现场信息和异常堆栈信息，如果不做处理，通过 throws 关键字往上抛），免得在找问题的时候都是一些无用的日志信息。</p><p>7）要对日志信息加以区分，把某一类的日志信息在输出的时候加上前缀，比如说所有数据库级别的日志里添加 <code>DB_LOG</code>，这样的日志非常大的时候可以通过 <code>grep</code> 这样的 Linux 命令快速定位。</p><p>8）不要在日志文件中打印密码、银行账号等敏感信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/log4j-42d3a052-daeb-450a-a775-a32f983dd688.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_06、-总结" tabindex="-1"><a class="header-anchor" href="#_06、-总结" aria-hidden="true">#</a> 06、 总结</h3><p>打印日志真的是一种艺术活，搞不好会严重影响服务器的性能。最可怕的是，记录了日志，但最后发现屁用没有，那简直是苍了个天啊！尤其是在生产环境下，问题没有记录下来，但重现有一定的随机性，到那时候，真的是叫天天不应，叫地地不灵啊！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,92);function g(k,v){const e=t("ExternalLinkIcon");return o(),l("div",null,[u,a("p",null,[n("基于性能上的考量，小伙伴们很有必要认认真真地学习一下如何优雅地打印 Java 日志。毕竟，"),a("a",d,[n("性能"),c(e)]),n("是一个程序员优不优秀的重要考量。")]),r])}const j=p(i,[["render",g],["__file","log4j.html.vue"]]);export{j as default};