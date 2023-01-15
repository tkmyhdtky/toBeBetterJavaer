import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,a as e,d as a,b as i,e as n,r as h}from"./app.53992e11.js";const b={},o=e("p",null,"作者：PetterLiu",-1),p={href:"http://www.cnblogs.com/wintersun/",target:"_blank",rel:"noopener noreferrer"},s=n('<p>支付永远是一个公司的核心领域，因为这是一个有交易属性公司的命脉。那么，支付系统到底长什么样，又是怎么运行交互的呢?抛开带有支付牌照的金融公司的支付架构，下述链路和系统组成基本上符合绝大多数支付场景。其实整体可以看成是交易核心+支付核心 两个大系统。交易系统关联了业务场景和底层支付，而支付系统完成了调用支付工具到对账清算等一系列相关操作。下面我们就来一起看下各个系统的核心组成和交互。</p><h2 id="_1-支付系统总览" tabindex="-1"><a class="header-anchor" href="#_1-支付系统总览" aria-hidden="true">#</a> 1. 支付系统总览</h2><h3 id="核心系统交互" tabindex="-1"><a class="header-anchor" href="#核心系统交互" aria-hidden="true">#</a> 核心系统交互</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-ee5890cb-8ef3-4908-8335-18df948a216d.jpg" alt="" loading="lazy"></p><h3 id="业务图谱" tabindex="-1"><a class="header-anchor" href="#业务图谱" aria-hidden="true">#</a> 业务图谱</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-aa67689b-2f16-4bde-ab04-6ebef087ed9c.jpg" alt="" loading="lazy"></p><h2 id="_2-核心系统解析" tabindex="-1"><a class="header-anchor" href="#_2-核心系统解析" aria-hidden="true">#</a> 2. 核心系统解析</h2><h3 id="交易核心" tabindex="-1"><a class="header-anchor" href="#交易核心" aria-hidden="true">#</a> 交易核心</h3><p>交易核心把公司的业务系统和底层支付关联起来，让业务系统专注于业务，不比关心底层支付。</p><h4 id="交易核心-1" tabindex="-1"><a class="header-anchor" href="#交易核心-1" aria-hidden="true">#</a> 交易核心</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-868070e2-8c52-4c0c-bc18-8f0a46cc6749.jpg" alt="" loading="lazy"></p><h4 id="基础交易类型抽象" tabindex="-1"><a class="header-anchor" href="#基础交易类型抽象" aria-hidden="true">#</a> 基础交易类型抽象</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-4be62336-4cb7-4d00-801d-b507a3f1585f.jpg" alt="" loading="lazy"></p><h4 id="多表聚合-订单关联" tabindex="-1"><a class="header-anchor" href="#多表聚合-订单关联" aria-hidden="true">#</a> 多表聚合 &amp; 订单关联</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-37966263-2e1d-4e2e-9ca1-137d69a21022.jpg" alt="" loading="lazy"></p><h3 id="支付核心" tabindex="-1"><a class="header-anchor" href="#支付核心" aria-hidden="true">#</a> 支付核心</h3><p>支付核心主要负责将多种支付类型进行抽象，变成 <code>充值</code>、<code>提现</code>、<code>退款</code>、<code>转账</code>四种支付形态。同时，还要负责集成多种支付工具，对支付指令进行编排等等。</p><h4 id="支付核心总览" tabindex="-1"><a class="header-anchor" href="#支付核心总览" aria-hidden="true">#</a> 支付核心总览</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-b501d78a-f4a0-459b-863b-9bd2147d90a3.jpg" alt="" loading="lazy"></p><h4 id="支付行为编排" tabindex="-1"><a class="header-anchor" href="#支付行为编排" aria-hidden="true">#</a> 支付行为编排</h4><p>其目的，是实现 <code>插件式开发</code>、<code>支付规则可配置</code>的 灵活开发方式。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-7f43da1d-56e0-4785-9a97-3b235f2e5e2d.jpg" alt="" loading="lazy"></p><h4 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h4><p>异常处理包括了 重复支付、部分支付、金额不一致、其他异常等异常场景。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-0ada08fb-abd5-44d2-a350-47ad2ffe8742.jpg" alt="" loading="lazy"></p><h3 id="渠道网关" tabindex="-1"><a class="header-anchor" href="#渠道网关" aria-hidden="true">#</a> 渠道网关</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-cbecfc3f-48b7-4882-a6e4-2293a3e51fbc.jpg" alt="" loading="lazy"></p><h3 id="资金核算" tabindex="-1"><a class="header-anchor" href="#资金核算" aria-hidden="true">#</a> 资金核算</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-cb51b886-9dd4-42b1-a3ef-5802f02ed6db.jpg" alt="" loading="lazy"></p><h2 id="_3-服务治理" tabindex="-1"><a class="header-anchor" href="#_3-服务治理" aria-hidden="true">#</a> 3. 服务治理</h2><h3 id="平台统一上下文" tabindex="-1"><a class="header-anchor" href="#平台统一上下文" aria-hidden="true">#</a> 平台统一上下文</h3><p>通过确定系统边界、业务建模拆分之后，整个支付平台被拆分几十个服务，而如何保障在服务间流转业务信息不被丢失，是我们需要考虑的问题。平台统一上下文的要素信息（唯一业务标识码），在整个支付平台链路中全程传递，被用来解决这个问题。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-105cfdd6-6a14-4081-bca4-2e7c9f106a90.jpg" alt="" loading="lazy"></p><h3 id="数据一致性治理" tabindex="-1"><a class="header-anchor" href="#数据一致性治理" aria-hidden="true">#</a> 数据一致性治理</h3><p>大型的支付公司，内部都有非常严格和完备的数据一致性方案，比如采用业务侵入性非常大的分布式事务等，以牺牲开发效率来提升数据的稳定，是非常有必要的。而业务公司，如果不采用分布式事务又有哪些应对策略呢？</p><h4 id="cas校验" tabindex="-1"><a class="header-anchor" href="#cas校验" aria-hidden="true">#</a> CAS校验</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-5571b5a7-4658-4a5b-8b9a-f4159ead6fc5.jpg" alt="" loading="lazy"></p><h4 id="幂等-异常补偿" tabindex="-1"><a class="header-anchor" href="#幂等-异常补偿" aria-hidden="true">#</a> 幂等 &amp; 异常补偿</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-1af94494-0dd1-43a9-a9f7-5893f36bbeff.jpg" alt="" loading="lazy"></p><h4 id="对账" tabindex="-1"><a class="header-anchor" href="#对账" aria-hidden="true">#</a> 对账</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-18f1b974-88ab-4aca-a267-566316c436bc.jpg" alt="" loading="lazy"></p><h4 id="准实时对账" tabindex="-1"><a class="header-anchor" href="#准实时对账" aria-hidden="true">#</a> 准实时对账</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-ade34d95-a5b9-496d-a090-2b2119ca3fad.jpg" alt="" loading="lazy"></p><h3 id="db拆分" tabindex="-1"><a class="header-anchor" href="#db拆分" aria-hidden="true">#</a> DB拆分</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-092ebea5-131c-462f-9fa5-0d36f58586ab.jpg" alt="" loading="lazy"></p><h3 id="异步化" tabindex="-1"><a class="header-anchor" href="#异步化" aria-hidden="true">#</a> 异步化</h3><p>支付是整个交易链路的核心环节，那么，怎么兼顾支付系统的稳定性和执行效率呢？是异步化。</p><h4 id="消息异步化" tabindex="-1"><a class="header-anchor" href="#消息异步化" aria-hidden="true">#</a> 消息异步化</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-1fc9773c-1fbe-4b01-b0a3-3fdbae27bab6.jpg" alt="" loading="lazy"></p><h4 id="外部支付调用异步化" tabindex="-1"><a class="header-anchor" href="#外部支付调用异步化" aria-hidden="true">#</a> 外部支付调用异步化</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-79f239cf-a6dd-4b8b-b907-ab3a88890a79.jpg" alt="" loading="lazy"></p><p>在外部支付中，经常需要服务方与第三方支付交互，获取预支付凭证，如上图所示。</p><p>这种同步调用的情况下，由于需要跨外部网络，响应的 RT 会非常长，可能会出现跨秒的情况。由于是同步调用，会阻塞整个支付链路。一旦 RT 很长且 QPS 比较大的情况下，服务会整体 hold 住，甚至会出现拒绝服务的情况。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-be756b9f-3037-4c84-8c49-2e7d673bc0fa.jpg" alt="" loading="lazy"></p><p>因此，可以拆分获取凭证的操作，通过独立网关渠道前置服务，将获取的方式异步化，从前置网关获取内部凭证，然后由前置网关去异步调用第三方。</p><h4 id="异步并行化" tabindex="-1"><a class="header-anchor" href="#异步并行化" aria-hidden="true">#</a> 异步并行化</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-a7251c7a-8842-4ae4-8462-bd218cc4337a.jpg" alt="" loading="lazy"></p><h4 id="资金核算异步化" tabindex="-1"><a class="header-anchor" href="#资金核算异步化" aria-hidden="true">#</a> 资金核算异步化</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-8409e2ae-fb04-49a6-97a3-3d354a34cf0a.jpg" alt="" loading="lazy"></p><h4 id="热点账户账务单独处理" tabindex="-1"><a class="header-anchor" href="#热点账户账务单独处理" aria-hidden="true">#</a> 热点账户账务单独处理</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-5864d7ce-ccb2-4dc5-843f-f073ed05be25.jpg" alt="" loading="lazy"></p><h4 id="记账事务切分" tabindex="-1"><a class="header-anchor" href="#记账事务切分" aria-hidden="true">#</a> 记账事务切分</h4><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-8ebe2a2b-5f8b-4050-863c-31b3cc36f69c.jpg" alt="" loading="lazy"></p><h2 id="_4-生产实践" tabindex="-1"><a class="header-anchor" href="#_4-生产实践" aria-hidden="true">#</a> 4. 生产实践</h2><h3 id="性能压测" tabindex="-1"><a class="header-anchor" href="#性能压测" aria-hidden="true">#</a> 性能压测</h3><p>构建压测模型，模拟现实真实场景；压测数据进影子库，正常业务无侵入；单机性能和集权链路都不能忽视；识别系统稳定性和容量配比。。。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-9ff20432-4769-46da-8447-4decb37686e6.jpg" alt="" loading="lazy"></p><h3 id="稳定性治理" tabindex="-1"><a class="header-anchor" href="#稳定性治理" aria-hidden="true">#</a> 稳定性治理</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-9d113566-a0c1-448a-8e8c-c071052dd000.jpg" alt="" loading="lazy"></p><h3 id="核心链路分离" tabindex="-1"><a class="header-anchor" href="#核心链路分离" aria-hidden="true">#</a> 核心链路分离</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-ebc24f88-90a1-44c9-a065-ff0528fcd86e.jpg" alt="" loading="lazy"></p><h3 id="服务依赖降级" tabindex="-1"><a class="header-anchor" href="#服务依赖降级" aria-hidden="true">#</a> 服务依赖降级</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-1ce53126-64de-4008-aa9c-e81613bdf5f3.jpg" alt="" loading="lazy"></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-zhifxtjgzmsjwntywdyp-d60598b6-341b-4757-9ea8-f43f25cc7c57.jpg" alt="" loading="lazy"></p>',74),l={href:"https://mp.weixin.qq.com/s/e2pWaVaABEEet4k_cplBhw",target:"_blank",rel:"noopener noreferrer"};function g(j,m){const t=h("ExternalLinkIcon");return d(),c("div",null,[e("blockquote",null,[o,e("p",null,[a("来源："),e("a",p,[a("www.cnblogs.com/wintersun/"),i(t)])])]),s,e("blockquote",null,[e("p",null,[a("参考链接："),e("a",l,[a("https://mp.weixin.qq.com/s/e2pWaVaABEEet4k_cplBhw"),i(t)]),a("，出处：我是程序汪，整理：沉默王二")])])])}const x=r(b,[["render",g],["__file","zhifxtjgzmsjwntywdyp.html.vue"]]);export{x as default};
