import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as l,a as n,d as a,b as e,e as t}from"./app-23957fcb.js";const c={},r=n("h2",{id:"关于-swagger",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于-swagger","aria-hidden":"true"},"#"),a(" 关于 Swagger")],-1),u=n("p",null,"Swagger 是一个用于生成、描述和调用 RESTful 接口的 Web 服务。",-1),d=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-febf2633-5b02-425b-a513-c8583e14d621.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),g={href:"https://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"换句话说，Swagger 就是将项目中想要暴露的接口展示在页面上，开发者可以直接进行接口调用和测试，能在很大程度上提升开发的效率。",-1),v=n("p",null,"比如说，一个后端程序员写了一个登录接口，想要测试自己写的接口是否符合预期的话，就得先模拟用户登录的行为，包括正常的行为（输入正确的用户名和密码）和异常的行为（输入错误的用户名和密码），这就要命了。",-1),k=n("p",null,"但有了 Swagger 后，可以通过简单的配置生成接口的展示页面，把接口的请求参数、返回结果通过可视化的形式展示出来，并且提供了便捷的测试服务。",-1),m=n("ul",null,[n("li",null,"前端程序员可以通过接口展示页面查看需要传递的请求参数和返回的数据格式，不需要后端程序员再编写接口文档了；"),n("li",null,"后端程序员可以通过接口展示页面测试验证自己的接口是否符合预期，降低了开发阶段的调试成本。")],-1),f=n("p",null,"前后端分离就可以很完美的落地了，有没有？",-1),h={href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>那在 Swagger 出现之前，局面就比较糟糕。前端经常抱怨后端给的接口文档与实际情况不一致。后端又觉得编写及维护接口文档会耗费不少精力，经常来不及更新。</p><p>大家都被无情地折磨，痛不堪言。。。</p><p>Swagger 定义了一套规范，你只需要按照它的规范去定义接口及接口相关的信息，然后通过 Swagger 衍生出来的一系列工具，就可以生成各种格式的接口文档，甚至还可以生成多种语言的客户端和服务端代码，以及在线接口调试页面等等。</p><p>那只要及时更新 Swagger 的描述文件，就可以自动生成接口文档了，做到调用端代码、服务端代码以及接口文档的一致性。</p><h2 id="整合-swagger-ui" tabindex="-1"><a class="header-anchor" href="#整合-swagger-ui" aria-hidden="true">#</a> 整合 Swagger-UI</h2><p>Swagger-UI 是一套 HTML/CSS/JS 框架，用于渲染 Swagger 文档，以便提供美观的 API 文档界面。</p><p>也就是说，Swagger-UI 是 Swagger 提供的一套可视化渲染组件，支持在线导入描述文件和本地部署UI项目。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-9cb36679-f1f7-469e-925e-2e54090f700f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第一步，在 pom.xml 文件中添加 Swagger 的 starter。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.springfox&lt;/groupId&gt;
    &lt;artifactId&gt;springfox-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;3.0.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>咦，不是说添加 Swagger 的依赖吗？怎么添加的是 springfox-boot-starter 呢？</p><p>这是因为：</p><ul><li>Swagger 是一种规范。</li><li>springfox-swagger 是一个基于 Spring 生态系统的，Swagger 规范的实现。</li><li>springfox-boot-starter 是 springfox 针对 Spring Boot 项目提供的一个 starter，简化 Swagger 依赖的导入，否则我们就需要在 pom.xml 文件中添加 springfox-swagger、springfox-swagger-ui 等多个依赖。</li></ul><p>第二步，添加 Swagger 的 Java 配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableOpenApi</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Docket</span> docket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">OAS_30</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">//apis： 添加swagger接口提取范围</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;top.codingmore.controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> docket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;编程猫实战项目笔记&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;编程喵是一个 Spring Boot+Vue 的前后端分离项目&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">contact</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://codingmore.top&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;www.qing_gee@163.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;v1.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）@Configuration 注解通常用来声明一个 Java 配置类，取代了以往的 xml 配置文件，让配置变得更加的简单和直接。</p><p>2）@EnableOpenApi 注解表明开启 Swagger。</p><p>3）SwaggerConfig 类中包含了一个 @Bean 注解声明的方法 <code>docket()</code>，该方法会被 Spring 的 AnnotationConfigApplicationContext 或 AnnotationConfigWebApplicationContext 类进行扫描，然后添加到 Spring 容器当中。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">AnnotationConfigApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">MyBean</span> myBean <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">MyBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单描述一下 Swagger 的配置内容：</p><ul><li><code>new Docket(DocumentationType.OAS_30)</code>，使用 3.0 版本的 Swagger API。OAS 是 OpenAPI Specification 的简称，翻译成中文就是 OpenAPI 说明书，Swagger 遵循的就是这套规范。</li><li><code>apiInfo(apiInfo())</code>，配置 API 文档基本信息，标题、描述、作者、版本等。</li><li><code>apis(RequestHandlerSelectors.basePackage(&quot;top.codingmore.controller&quot;))</code> 指定 API 的接口范围为 controller 控制器。</li><li><code>paths(PathSelectors.any())</code> 指定匹配所有的 URL。</li></ul><p>第三步，添加控制器类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>tags <span class="token operator">=</span> <span class="token string">&quot;测试 Swagger&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;沉默王二又帅又丑&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）@Api注解，用在类上，该注解将控制器标注为一个 Swagger 资源。该注解有 3 个属性：</p><ul><li>tags，具有相同标签的 API 会被归在一组内展示</li><li>value，如果 tags 没有定义，value 将作为 API 的 tags 使用。</li><li>description，已废弃</li></ul><p>2）@ApiOperation 注解，用在方法上，描述这个方法是做什么用的。该注解有 4 个属性：</p><ul><li>value 操作的简单说明，长度为120个字母，60个汉字。</li><li>notes 对操作的详细说明。</li><li>httpMethod HTTP请求的动作名，可选值有：&quot;GET&quot;, &quot;HEAD&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;DELETE&quot;, &quot;OPTIONS&quot; and &quot;PATCH&quot;。</li><li>code 默认为200，有效值必须符合标准的HTTP Status Code Definitions。</li></ul><p>3）@RestController 注解，用在类上，是@ResponseBody和@Controller的组合注解，如果方法要返回 JSON 的话，可省去 @ResponseBody 注解。</p><p>4）@RequestMapping 注解，可用在类（父路径）和方法（子路径）上，主要用来定义 API 的请求路径和请求类型。该注解有 6 个属性：</p><ul><li>value，指定请求的实际地址</li><li>method，指定请求的method类型， GET、POST、PUT、DELETE等</li><li>consumes，指定处理请求的提交内容类型（Content-Type），例如 application/json, text/html</li><li>produces，指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回</li><li>params，指定request中必须包含某些参数值</li><li>headers，指定request中必须包含某些指定的header值</li></ul><p>第四步，启动服务，在浏览器中输入 <code>http://localhost:8080/swagger-ui/</code> 就可以访问 Swagger 生成的 API 文档了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-25187213-723a-4120-8485-06759a509659.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点开 get 请求的面板，点击「try it out」再点击「excute」可以查看接口返回的数据。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-0f2b9c42-bae4-4712-be29-3771ab3bd3a8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="版本不兼容" tabindex="-1"><a class="header-anchor" href="#版本不兼容" aria-hidden="true">#</a> 版本不兼容</h2><p>在 Spring Boot 整合 Swagger 的过程中，我发现一个大 bug，Spring Boot 2.6.7 版本和 springfox 3.0.0 版本不兼容，启动的时候直接就报错了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-529160e4-aa31-410a-aa04-93e9576322b6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Caused by: java.lang.NullPointerException: Cannot invoke &quot;org.springframework.web.servlet.mvc.condition.PatternsRequestCondition.getPatterns()&quot; because &quot;this.condition&quot; is null</p></blockquote><p>一路跟踪下来，发现 GitHub 上确认有人在 Spring Boot 仓库下提到了这个 bug。</p>`,39),q={href:"https://github.com/spring-projects/spring-boot/issues/28794",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>Spring Boot 说这是 springfox 的 bug。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-d0d336e1-2cba-49f4-bd65-6df7f89a6c9f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>追踪过来一看，确实。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-cb3c15e7-ecfd-4e5e-92b7-673acb966a54.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有人提到的解决方案是切换到 SpringDoc。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-0597f86d-1188-4fe1-8de8-fdb57c5cd524.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样就需要切换注解 <code>@Api → @Tag</code>，<code>@ApiOperation(value = &quot;foo&quot;, notes = &quot;bar&quot;) → @Operation(summary = &quot;foo&quot;, description = &quot;bar&quot;)</code>，对旧项目不是很友好，如果是新项目的话，倒是可以直接尝试 SpringDoc。</p><p>还有人提出的解决方案是：</p><ul><li>先将匹配策略调整为 ant-path-matcher（application.yml）。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  mvc:
    path match:
      matching-strategy: ANT_PATH_MATCHER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后在 Spring 容器中注入下面这个 bean，可以放在 SwaggerConfig 类中。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
public static BeanPostProcessor springfoxHandlerProviderBeanPostProcessor() {
    return new BeanPostProcessor() {

        @Override
        public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
            if (bean instanceof WebMvcRequestHandlerProvider || bean instanceof WebFluxRequestHandlerProvider) {
                customizeSpringfoxHandlerMappings(getHandlerMappings(bean));
            }
            return bean;
        }

        private &lt;T extends RequestMappingInfoHandlerMapping&gt; void customizeSpringfoxHandlerMappings(List&lt;T&gt; mappings) {
            List&lt;T&gt; copy = mappings.stream()
                    .filter(mapping -&gt; mapping.getPatternParser() == null)
                    .collect(Collectors.toList());
            mappings.clear();
            mappings.addAll(copy);
        }

        @SuppressWarnings(&quot;unchecked&quot;)
        private List&lt;RequestMappingInfoHandlerMapping&gt; getHandlerMappings(Object bean) {
            try {
                Field field = ReflectionUtils.findField(bean.getClass(), &quot;handlerMappings&quot;);
                field.setAccessible(true);
                return (List&lt;RequestMappingInfoHandlerMapping&gt;) field.get(bean);
            } catch (IllegalArgumentException | IllegalAccessException e) {
                throw new IllegalStateException(e);
            }
        }
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),S={href:"https://github.com/springfox/springfox/issues/3462",target:"_blank",rel:"noopener noreferrer"},_=t('<p>重新编译项目，就会发现错误消失了，我只能说GitHub 仓库的 issue 区都是大神！</p><p>查看 Swagger 接口文档，发现一切正常。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-05265d24-5242-48ac-9776-58e72798a545.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我只能再强调一次，GitHub 仓库的 issue 区都是大神！大家遇到问题的时候，一定要多到 issue 区看看。</p><p>至于为什么要这样做，问题的解决者给出了自己的答案。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-8b3d90d6-4eac-4db8-ab52-69c55078df36.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>大致的意思就是 springfox 和 Spring 在 pathPatternsCondition 上产生了分歧，这两个步骤就是用来消除这个分歧的。</p><p>除此之外，还有另外一种保守的做法，直接将 Spring Boot 的版本回退到更低的版本，比如说 2.4.5。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/swagger-41096e72-bd7c-4663-b57e-fbc8506ec1cc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Swagger 虽然解决了调用端代码、服务端代码以及接口文档的不一致的问题，但有一说一，Swagger-UI 实在是太丑了。</p><hr>',12),y={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"编程喵",-1),j=n("hr",null,null,-1),P=n("h2",{id:"源码路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码路径","aria-hidden":"true"},"#"),a(" 源码路径")],-1),I={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-swagger",target:"_blank",rel:"noopener noreferrer"},T=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function B(E,H){const s=o("ExternalLinkIcon");return p(),l("div",null,[r,u,d,n("blockquote",null,[n("p",null,[a("想要理解RESTful架构的话，可以戳链接查看阮一峰老师的博客："),n("a",g,[a("https://www.ruanyifeng.com/blog/2011/09/restful.html"),e(s)])])]),b,v,k,m,f,n("blockquote",null,[n("p",null,[a("Swagger 官网地址："),n("a",h,[a("https://swagger.io/"),e(s)])])]),w,n("blockquote",null,[n("p",null,[n("a",q,[a("https://github.com/spring-projects/spring-boot/issues/28794"),e(s)])])]),x,n("blockquote",null,[n("p",null,[a("解决方案地址："),n("a",S,[a("https://github.com/springfox/springfox/issues/3462"),e(s)])])]),_,n("p",null,[a("更多内容，只针对《二哥的Java进阶之路》星球用户开放，需要的小伙伴可以"),n("a",y,[a("戳链接🔗"),e(s)]),a("加入我们的星球，一起学习，一起卷。。"),A,a("🐱是一个 Spring Boot+Vue 的前后端分离项目，融合了市面上绝大多数流行的技术要点。通过学习实战项目，你可以将所学的知识通过实践进行检验、你可以拓宽自己的技术边界，你可以掌握一个真正的实战项目是如何从 0 到 1 的。")]),j,P,n("blockquote",null,[n("ul",null,[n("li",null,[a("编程喵："),n("a",I,[a("https://github.com/itwanger/coding-more"),e(s)])]),n("li",null,[a("codingmore-swagger："),n("a",C,[a("https://github.com/itwanger/codingmore-learning"),e(s)])])])]),T])}const R=i(c,[["render",B],["__file","swagger.html.vue"]]);export{R as default};