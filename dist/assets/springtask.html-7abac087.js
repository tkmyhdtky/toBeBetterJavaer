import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,d as s,b as t,e as i}from"./app-f9d961e7.js";const l={},u=i(`<p>定时任务的应用场景其实蛮常见的：</p><ul><li>数据备份</li><li>订单未支付则自动取消</li><li>定时爬取数据</li><li>定时推送信息</li><li>定时发布文章</li><li>定时生成报表</li><li>等等（想不到其他场景了，就只能等等来凑，等等也算是一种定时的场景吧！）</li></ul><h3 id="timer" tabindex="-1"><a class="header-anchor" href="#timer" aria-hidden="true">#</a> Timer</h3><p>JDK 1.3 就开始支持的一种定时任务的实现方式。内部通过 TaskQueue 的类来存放定时任务，用起来比较简单，但缺陷比较多，比如说一个 Timer 就会起一个线程，任务多了性能就非常差，再比如说如果执行任务期间某个 TimerTask 耗时比较久，就会影响其他任务的调度。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimerDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TimerTask</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{}线程名称{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{}线程名称{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Timer</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token string">&quot;TimerDemo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码跑起来后的日志如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>13:11:45.268 [main] DEBUG top.springtask.TimerDemo - 当前时间2022-04-27 13:11:45线程名称main
13:11:46.280 [TimerDemo] DEBUG top.springtask.TimerDemo - 当前时间2022-04-27 13:11:46线程名称TimerDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scheduledthreadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#scheduledthreadpoolexecutor" aria-hidden="true">#</a> ScheduledThreadPoolExecutor</h3><p>JDK 1.5 开始提供的的定时任务，它继承了 ThreadPoolExecutor，实现了 ScheduledExecutorService 接口，所以支持并发场景下的任务执行。同时，优化了 Timer 的缺陷。不过，由于使用了队列来实现定时器，就有出入队列、调整堆等操作，所以定时不是非常非常准确（吹毛求疵）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledThreadPoolExecutorDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">TimerTask</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{}线程名称{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{}线程名称{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ScheduledExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executorService<span class="token punctuation">.</span><span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token number">1000L</span><span class="token punctuation">,</span><span class="token number">1000L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token operator">+</span><span class="token number">1000</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>14:43:41.740 [main] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:41线程名称main
14:43:42.752 [pool-1-thread-1] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:42线程名称pool-1-thread-1
14:43:43.748 [pool-1-thread-1] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:43线程名称pool-1-thread-1
14:43:44.749 [pool-1-thread-2] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:44线程名称pool-1-thread-2
14:43:45.749 [pool-1-thread-2] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:45线程名称pool-1-thread-2
14:43:46.749 [pool-1-thread-2] DEBUG top.springtask.ScheduledThreadPoolExecutorDemo - 当前时间2022-04-27 14:43:46线程名称pool-1-thread-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-spring-task" tabindex="-1"><a class="header-anchor" href="#关于-spring-task" aria-hidden="true">#</a> 关于 Spring Task</h3><p>Spring Task 是 Spring 提供的轻量级定时任务工具，也就意味着不需要再添加第三方依赖了，相比其他第三方类库更加方便易用。</p><p>好像关于 Spring Task，没有其他废话可说了，我们来直接上手。</p><p>第一步，新建配置类 SpringTaskConfig，并添加 @EnableScheduling注解开启 Spring Task。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringTaskConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然了，也可以不新建这个配置类，直接在主类上添加 @EnableScheduling 注解。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodingmoreSpringtaskApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">CodingmoreSpringtaskApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，新建定时任务类 CronTask，使用 @Scheduled 注解注册 Cron 表达式执行定时任务。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CronTask</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">&quot;0/1 * * ? * ?&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cron</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;定时执行，时间{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务器端，发现每隔一秒钟会打印一次日志，证明 Spring Task 的 cron 表达式形式已经起效了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/springtask-747c6f2e-66bc-4e3e-b81a-b0416ea4bb9d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>默认情况下，@Scheduled 创建的线程池大小为 1，如果想增加线程池大小的话，可以让 SpringTaskConfig 类实现 SchedulingConfigurer 接口，通过 setPoolSize 增加线程池大小。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringTaskConfig</span> <span class="token keyword">implements</span> <span class="token class-name">SchedulingConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureTasks</span><span class="token punctuation">(</span><span class="token class-name">ScheduledTaskRegistrar</span> taskRegistrar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadPoolTaskScheduler</span> threadPoolTaskScheduler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        threadPoolTaskScheduler<span class="token punctuation">.</span><span class="token function">setPoolSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadPoolTaskScheduler<span class="token punctuation">.</span><span class="token function">setThreadNamePrefix</span><span class="token punctuation">(</span><span class="token string">&quot;my-scheduled-task-pool-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadPoolTaskScheduler<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        taskRegistrar<span class="token punctuation">.</span><span class="token function">setTaskScheduler</span><span class="token punctuation">(</span>threadPoolTaskScheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务热部署完成后，会在控制台看到这样的信息：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/springtask-54773f3f-ad58-44d5-a94a-8543f14f8c57.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以确认自定义线程池大小已经生效了，有的任务用的是线程led-task-pool-3，有的是线程led-task-pool-7，跑时间长了，可以发现 led-task-pool-1 到 led-task-pool-10 的都有。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/springtask-825fd59c-d2cd-471d-a9a9-ee1194cbfc51.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Spring Task 除了支持 Cron 表达式，还有 fixedRate（固定速率执行）、fixedDelay（固定延迟执行）、initialDelay（初始延迟）三种用法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * fixedRate：固定速率执行。每5秒执行一次。
 */</span>
<span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedRate <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reportCurrentTimeWithFixedRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Current Thread : {}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Fixed Rate Task : The time is now {}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * fixedDelay：固定延迟执行。距离上一次调用成功后2秒才执。
 */</span>
<span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedDelay <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reportCurrentTimeWithFixedDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Fixed Delay Task : The time is now {}&quot;</span><span class="token punctuation">,</span><span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * initialDelay:初始延迟。任务的第一次执行将延迟5秒，然后将以5秒的固定间隔执行。
 */</span>
<span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>initialDelay <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">,</span> fixedRate <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reportCurrentTimeWithInitialDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Fixed Rate Task with Initial Delay : The time is now {}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，fixedRate 有个坑，假如某个方法的定时器设定的固定速率是每5秒执行一次，这个方法现在要执行下面四个任务，四个任务的耗时是：6s、6s、 2s、 3s，任务会如何执行呢（单线程环境下）？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2022-04-27 15:25:52.400  INFO 4343 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:25:52
2022-04-27 15:25:58.401  INFO 4343 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:25:58
2022-04-27 15:26:00.407  INFO 4343 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:26:00
2022-04-27 15:26:04.318  INFO 4343 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:26:04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个任务开始的相对时间是第 0 秒，但由于执行了 6 秒，所以原来应该是第 5 秒执行的任务，延迟到第 6 秒才开始执行，第三个任务延迟了 12 秒，原本应该是第 10 秒执行，第三个任务没有延迟，正常 15 秒后执行。</p><p>假如我们使用 @EnableAsync 注解开启多线程环境的话，结果会怎么样呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2022-04-27 15:33:01.385  INFO 4421 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:33:01
2022-04-27 15:33:07.390  INFO 4421 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:33:07
2022-04-27 15:33:09.391  INFO 4421 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:33:09
2022-04-27 15:33:13.295  INFO 4421 --- [led-task-pool-1] c.codingmore.component.PublishPostTask   : Fixed Rate Task : The time is now 2022-04-27 15:33:13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于-cron-表达式" tabindex="-1"><a class="header-anchor" href="#关于-cron-表达式" aria-hidden="true">#</a> 关于 Cron 表达式</h3><p>这里顺带普及一下 Cron 表达式，在定时任务中会经常会遇到。Cron 这个词来源于希腊语 chronos，原意也就是时间。</p><p>Cron 表达式是一个含有时间意义的字符串，以 5 个空格隔开，分成 6 个时间元素。举几个例子就一目了然了。</p><table><thead><tr><th>示例</th><th>说明</th></tr></thead><tbody><tr><td><code>0 15 10 ? * *</code></td><td>每天上午10:15执行任务</td></tr><tr><td><code>0 0 10,14,16 * * ?</code></td><td>每天10 点、14 点、16 点执行任务</td></tr><tr><td><code>0 0 12 ? * 3</code></td><td>每个星期三中午 12 点执行任务</td></tr><tr><td><code>0 15 10 15 * ?</code></td><td>每月 15 日上午 10 点 15 执行任务</td></tr></tbody></table><p>Cron 的语法格式可以总结为：</p><blockquote><p>Seconds Minutes Hours DayofMonth Month DayofWeek</p></blockquote><p>每个时间元素的取值范围，以及可出现的特殊字符如下所示。</p><table><thead><tr><th>时间元素</th><th>取值范围</th><th>可出现的特殊字符</th></tr></thead><tbody><tr><td>秒</td><td><code>[0,59]</code></td><td><code>*,-/</code></td></tr><tr><td>分钟</td><td><code>[0,59]</code></td><td><code>*,-/</code></td></tr><tr><td>小时</td><td><code>[0,59]</code></td><td><code>*,-/</code></td></tr><tr><td>日期</td><td><code>[0,31]</code></td><td><code>*,-/?LW</code></td></tr><tr><td>月份</td><td><code>[1,12]</code></td><td><code>*,-/</code></td></tr><tr><td>星期</td><td><code>[1,7]</code></td><td><code>*,-/?L#</code></td></tr></tbody></table><p>特殊字符的含义和示例如下所示。</p><table><thead><tr><th>特殊字符</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td><code>*</code></td><td>所有可能的值</td><td>很好理解，月域中为每个月，星期域中每个星期几</td></tr><tr><td><code>,</code></td><td>枚举的值</td><td>很好理解，小时域中 <code>10,14,16</code>，就表示这几个小时可选</td></tr><tr><td><code>-</code></td><td>范围</td><td>很好理解，分钟域中 <code>10-19</code>，就表示 10-19 分钟每隔一分钟执行一次</td></tr><tr><td><code>/</code></td><td>指定数值的增量</td><td>很好理解，分钟域中 <code>0/15</code>，就表示每隔 15 分钟执行一次</td></tr><tr><td><code>?</code></td><td>不指定值</td><td>很好理解，日期域指定了星期域就不能指定值，反之亦然，因为日期域和星期域属于冲突关系</td></tr><tr><td><code>L</code></td><td>单词 Last 的首字母</td><td>很好理解，日期域和星期域支持，表示月的最后一天或者星期的最后一天</td></tr><tr><td><code>W</code></td><td>除周末以外的工作日</td><td>很好理解，仅日期域支持</td></tr><tr><td><code>#</code></td><td>每个月的第几个星期几</td><td>很好理解，仅星期域支持，<code>4#2</code>表示某月的第二个星期四</td></tr></tbody></table><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>Spring Task 虽然用起来很方便，但用法过去简单，很多复杂的业务逻辑是没有办法实现的，比如说编程喵的定时发布文章功能，只用 Spring Task 是没办法的。</p><hr>`,49),d={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"编程喵",-1),k=n("hr",null,null,-1),m=n("h3",{id:"源码路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码路径","aria-hidden":"true"},"#"),s(" 源码路径")],-1),v={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-springtask",target:"_blank",rel:"noopener noreferrer"},h=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function g(f,T){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("更多内容，只针对《二哥的Java进阶之路》星球用户开放，需要的小伙伴可以"),n("a",d,[s("戳链接🔗"),t(a)]),s("加入我们的星球，一起学习，一起卷。。"),r,s("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),k,m,n("blockquote",null,[n("ul",null,[n("li",null,[s("编程喵："),n("a",v,[s("https://github.com/itwanger/coding-more"),t(a)])]),n("li",null,[s("codingmore-springtask："),n("a",b,[s("https://github.com/itwanger/codingmore-learning"),t(a)])])])]),h])}const S=e(l,[["render",g],["__file","springtask.html.vue"]]);export{S as default};
