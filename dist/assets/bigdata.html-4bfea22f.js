import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,a,d as e,b as r,e as o}from"./app-f9d961e7.js";const s={},p=o('<h2 id="关于大数据" tabindex="-1"><a class="header-anchor" href="#关于大数据" aria-hidden="true">#</a> 关于大数据</h2><ul><li>1991 年，数据仓库改变诞生</li><li>2005 年，Hadoop 诞生</li><li>2010 年，数据湖的概念出现</li><li>201X 年，大数据平台出现</li><li>2016 年，阿里提出数据中台的概念</li></ul><p>大数据处理框架可以分为：</p><p><strong>数据采集</strong>：大数据处理的第一步，第一种是通过 Sqoop 或者 Cannal 等工具进行定时抽取或者实时同步；第二种是各种埋点日志，通过 Flume 进行实时收集。</p><p><strong>数据存储</strong>：大数据处理的第二步，将数据存储到 HDFS 中，实时日志流情况下通过 Kafka 输出给后面的流式计算引擎。</p><p><strong>数据分析</strong>：大数据的核心环节，包括离线处理和流处理两种方式，对应的计算引擎包括 MapReduce、Spark、Flink 等，处理完的结果会保存到已经提前设计好的数据仓库中，或者 HBase、Redis、RDBMS 等各种存储系统上。</p><p><strong>数据应用</strong>：数据可视化、工 AI 使用等。</p><h2 id="大数据的学习路线" tabindex="-1"><a class="header-anchor" href="#大数据的学习路线" aria-hidden="true">#</a> 大数据的学习路线</h2><h3 id="_1-语言基础" tabindex="-1"><a class="header-anchor" href="#_1-语言基础" aria-hidden="true">#</a> 1）语言基础</h3><p><strong>Java</strong></p><p>大数据框架大多采用 Java 语言开发，并且几乎全部的框架都会提供 Java API。</p>',11),h={href:"https://javabetter.cn/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://book.douban.com/subject/30217317/",target:"_blank",rel:"noopener noreferrer"},b=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-9a3d4c2c-2db4-4d53-9d8f-1bb72f7454b9.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),u=a("p",null,[a("strong",null,"Scala")],-1),g=a("p",null,"Scala 是一门综合了面向对象和函数式编程概念的静态类型的编程语言，运行在 Java 虚拟机上，可以和 Java 类库无缝衔接，Kafka 就是用 Scala 进行开发的。",-1),_=a("p",null,"为什么要学习 Scala？因为 Flink 和 Spark 都提供了 Scala 接口，使用 Scala 开发，比使用 Java 8 更省代码。另外，spark 就是用 Scala 开发的。",-1),f={href:"https://book.douban.com/subject/27093751/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://book.douban.com/subject/27591387/",target:"_blank",rel:"noopener noreferrer"},m=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-d5df6ea5-273a-425c-968e-da07f7ef0777.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),x=a("p",null,"当然了，Scala 不是必学的。也可以放到学完 spark 之后再去学习 Scala。",-1),v=a("h3",{id:"_2-linux-基础",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-linux-基础","aria-hidden":"true"},"#"),e(" 2）Linux 基础")],-1),S={href:"https://book.douban.com/subject/4889838/",target:"_blank",rel:"noopener noreferrer"},j=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-c0180f2c-6445-4881-ab04-90c43ef870f2.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),H=a("p",null,"或者自己装个 Linux 虚拟机/云服务器直接上手实操。",-1),J=a("h3",{id:"_3-构建工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-构建工具","aria-hidden":"true"},"#"),e(" 3）构建工具")],-1),F={href:"https://javabetter.cn/maven/maven.html",target:"_blank",rel:"noopener noreferrer"},z=o('<h3 id="_4-框架学习" tabindex="-1"><a class="header-anchor" href="#_4-框架学习" aria-hidden="true">#</a> 4）框架学习</h3><ul><li>日志收集框架：Flume、Logstash、Filebeat</li><li>分布式文件存储系统：Hadoop HDFS</li><li>数据库系统：Mongodb、HBase</li><li>分布式计算框架： <ul><li>批处理框架：Hadoop MapReduce</li><li>流处理框架：Storm</li><li>混合处理框架：Spark、Flink</li></ul></li><li>查询分析框架：Hive 、Spark SQL 、Flink SQL、 Pig、Phoenix</li><li>集群资源管理器：Hadoop YARN</li><li>分布式协调服务：Zookeeper</li><li>数据迁移工具：Sqoop</li><li>任务调度框架：Azkaban、Oozie</li><li>集群部署和监控：Ambari、Cloudera Manager</li></ul><p>列出的这些主流框架，社区都比较活跃，学习资源也比较丰富。</p><p>先学 Hadoop，这是大数据生态圈的基石。</p><p>接着学习计算框架，spark 和 flink 是目前最主流的两个混合处理框架。</p><p>可以按工作需要学习。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-3feb773b-246b-4dad-9c3b-1a9ef83b6f64.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果学习时间有限的话，初次学习的时候，同一类框架学一种就好。</p><p>学习资料最权威和最全面的学习资料就是官方文档，社区也都非常活跃。</p><p>这里就列一些优质书籍吧。</p>',10),L={href:"https://book.douban.com/subject/27115351/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://book.douban.com/subject/27665114/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://book.douban.com/subject/26292004/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://book.douban.com/subject/26649141/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://book.douban.com/subject/10748460/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://book.douban.com/subject/25791255/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://space.bilibili.com/302417610/search/video?keyword=%E5%A4%A7%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},N=o('<p>这里还给大家准备了一份 GitHub 上星标 12k 的大数据入门指南，来看一下内容吧。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-461d50d4-504d-499c-b8ea-e8d38eb836ad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>直接长按识别/扫描下方二维码，关注后回复 「<strong>00</strong>」 下载这份 PDF 吧：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="扫码关注后回复「00」关键字" tabindex="0" loading="lazy"><figcaption>扫码关注后回复「00」关键字</figcaption></figure><h2 id="学习建议" tabindex="-1"><a class="header-anchor" href="#学习建议" aria-hidden="true">#</a> 学习建议</h2><h3 id="_1、java" tabindex="-1"><a class="header-anchor" href="#_1、java" aria-hidden="true">#</a> 1、Java</h3>',6),Q={href:"https://javabetter.cn/home.html",target:"_blank",rel:"noopener noreferrer"},q=o('<h3 id="_2、mysql" tabindex="-1"><a class="header-anchor" href="#_2、mysql" aria-hidden="true">#</a> 2、MySQL</h3><p>要能写复杂的 SQL 语句，为后面学习 Hive 数仓的 HQL 打好基础。</p><h3 id="_3、linux" tabindex="-1"><a class="header-anchor" href="#_3、linux" aria-hidden="true">#</a> 3、Linux</h3><p>大数据的相关软件都是在 Linux 上运行的，所以 Linux 要学习的扎实一些。</p><p>要能在 Linux 上配置 Hadoop、Hive、HBase、Spark 等大数据软件的运行环境和网络环境配置。</p><h3 id="_4、hadoop-学习" tabindex="-1"><a class="header-anchor" href="#_4、hadoop-学习" aria-hidden="true">#</a> 4、Hadoop 学习</h3><p>包括：</p><ul><li>HDFS：存储数据</li><li>MapReduce： 对数据进行处理计算</li><li>Yarn： Yarn 的全称是 Yet Another Resource Negotiator，意思是“另一种资源调度器”，这种命名和“有间客栈”一样，很妙。这里多说一句，以前 Java 有一个项目编译工具，叫做 Ant，他的命名也是类似的，叫做 “Another Neat Tool”的缩写，翻译过来是”另一种整理工具“。</li></ul><p>第一步，先让 Hadoop 跑起来</p><p>第二步，试着用一用 Hadoop</p><ul><li>上传下载文件</li><li>提交运行 MapReduce 示例程序</li><li>查看 Job 运行状态，查看 Job 运行日志</li></ul><p>第三步，了解原理</p><ul><li>MapReduce：如何分而治之</li><li>HDFS：数据到底在哪里，什么是副本</li><li>Yarn 到底是什么，它能干什么；</li><li>NameNode 到底在干些什么；</li><li>esourceManager 到底在干些什么；</li></ul><p>第四步，自己写一个 MapReduce 程序</p><h3 id="_5、学习-hive" tabindex="-1"><a class="header-anchor" href="#_5、学习-hive" aria-hidden="true">#</a> 5、学习 Hive</h3><p>Hive 就是 SQL On Hadoop，Hive 提供了 SQL 接口，开发人员只需要编写简单易上手的 SQL 语句，Hive 负责把 SQL 翻译成 MapReduce，提交运行。</p><h3 id="_6、学习数据采集-sqoop-flume-datax" tabindex="-1"><a class="header-anchor" href="#_6、学习数据采集-sqoop-flume-datax" aria-hidden="true">#</a> 6、学习数据采集 Sqoop / Flume / DataX</h3><p>Sqoop 主要用于把 MySQL 里的数据导入到 Hadoop 里的。</p><p>Flume 是一个分布式的海量日志采集和传输框架，可以实时的从网络协议、消息系统、文件系统采集日志，并传输到 HDFS 上。</p><p>DataX 是阿里云 DataWorks 数据集成的开源版本。</p><h3 id="_7、学习-spark" tabindex="-1"><a class="header-anchor" href="#_7、学习-spark" aria-hidden="true">#</a> 7、学习 Spark</h3><p>Spark 弥补了 MapReduce 处理数据速度上慢的缺点</p><h3 id="_8、学习-kafka" tabindex="-1"><a class="header-anchor" href="#_8、学习-kafka" aria-hidden="true">#</a> 8、学习 kafka</h3><p>使用 Flume 采集的数据，不是直接到 HDFS 上，而是先到 Kafka，Kafka 中的数据可以由多个消费者同时消费，其中一个消费者，就是将数据同步到 HDFS 上。</p><p>Flume + Kafka，在实时流式日志的处理非常常见，后面再通过 Spark Streaming 等流式处理技术，就可完成日志的实时解析和应用。</p><h3 id="_9、学习任务调度-oozie-azkaban" tabindex="-1"><a class="header-anchor" href="#_9、学习任务调度-oozie-azkaban" aria-hidden="true">#</a> 9、学习任务调度 Oozie / Azkaban</h3><h3 id="_10、学习实时数据的处理-flink-spark-streaming" tabindex="-1"><a class="header-anchor" href="#_10、学习实时数据的处理-flink-spark-streaming" aria-hidden="true">#</a> 10、学习实时数据的处理 Flink / Spark Streaming</h3><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-6652c50b-cda6-46dc-8732-69b10319f0da.png" alt="大数据的技术栈体系" tabindex="0" loading="lazy"><figcaption>大数据的技术栈体系</figcaption></figure><p>再总结一份大数据学习指南的思维导图吧。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/bigdata-99b69697-4804-4113-907b-fbe14ac36964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>',31),O={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},E={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},K=a("p",null,[e("微信搜 "),a("strong",null,"沉默王二"),e(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),e(" 即可免费领取。")],-1),P=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function I(V,Y){const t=i("ExternalLinkIcon");return l(),d("div",null,[p,a("p",null,[e("学 Java 的话，不用多说，直接上《"),a("a",h,[e("二哥的Java进阶之路"),r(t)]),e("》网站就 OK 了。")]),a("p",null,[e("如果想读纸质书的话，推荐《"),a("a",c,[e("on Java 8"),r(t)]),e("》。")]),b,u,g,_,a("p",null,[e("推荐两本书《"),a("a",f,[e("快学 Scala"),r(t)]),e("》和 《"),a("a",k,[e("Scala 编程"),r(t)]),e("》。")]),m,x,v,a("p",null,[e("推荐《"),a("a",S,[e("鸟哥的私房菜"),r(t)]),e("》")]),j,H,J,a("p",null,[e("Maven，二哥的Java进阶之路上有教程："),a("a",F,[e("https://javabetter.cn/maven/maven.html"),r(t)])]),z,a("ul",null,[a("li",null,[e("《"),a("a",L,[e("hadoop 权威指南 (第四版)"),r(t)]),e("》 2017 年")]),a("li",null,[e("《"),a("a",M,[e("Kafka 权威指南"),r(t)]),e("》 2017 年")]),a("li",null,[e("《"),a("a",y,[e("从 Paxos 到 Zookeeper 分布式一致性原理与实践"),r(t)]),e("》 2015 年")]),a("li",null,[e("《"),a("a",D,[e("Spark 技术内幕 深入解析 Spark 内核架构设计与实现原理"),r(t)]),e("》 2015 年")]),a("li",null,[e("《"),a("a",A,[e("HBase 权威指南"),r(t)]),e("》 2012 年")]),a("li",null,[e("《"),a("a",B,[e("Hive 编程指南"),r(t)]),e("》 2013 年")])]),a("p",null,[e("视频的话，"),a("a",R,[e("尚硅谷的大数据相关视频"),r(t)]),e("还不错。")]),N,a("p",null,[e("这个没毛病，看 "),a("a",Q,[e("二哥的Java进阶之路"),r(t)]),e("就好了，Spring Boot 也要能掌握，看星球的《编程喵 🐱 实战项目笔记》就好了。")]),q,a("p",null,[e("GitHub 上标星 9300+ 的开源知识库《"),a("a",O,[e("二哥的 Java 进阶之路"),r(t)]),e("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",E,[e("太赞了，GitHub 上标星 9300+ 的 Java 教程"),r(t)])]),K,P])}const G=n(s,[["render",I],["__file","bigdata.html.vue"]]);export{G as default};