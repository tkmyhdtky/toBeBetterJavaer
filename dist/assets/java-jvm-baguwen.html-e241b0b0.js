const e=JSON.parse('{"key":"v-2d49cfb6","path":"/interview/java-jvm-baguwen.html","title":"Java 虚拟机背诵版八股文必看🍉","lang":"zh-CN","frontmatter":{"title":"Java 虚拟机背诵版八股文必看🍉","shortTitle":"JVM背诵版八股文🍉","category":["求职面试"],"tag":["面试题&八股文"],"description":"二哥的Java进阶之路，小白的零基础Java教程，Java 虚拟机背诵版八股文必看🍉","head":[["meta",{"name":"keywords","content":"Java,java,jvm,面试题,八股文"}],["meta",{"property":"og:url","content":"https://javabetter.cn/interview/java-jvm-baguwen.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java 虚拟机背诵版八股文必看🍉"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，Java 虚拟机背诵版八股文必看🍉"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 虚拟机背诵版八股文必看🍉\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"简述JVM内存模型","slug":"简述jvm内存模型","link":"#简述jvm内存模型","children":[]},{"level":3,"title":"简述程序计数器","slug":"简述程序计数器","link":"#简述程序计数器","children":[]},{"level":3,"title":"简述虚拟机栈","slug":"简述虚拟机栈","link":"#简述虚拟机栈","children":[]},{"level":3,"title":"简述本地方法栈","slug":"简述本地方法栈","link":"#简述本地方法栈","children":[]},{"level":3,"title":"简述JVM中的堆","slug":"简述jvm中的堆","link":"#简述jvm中的堆","children":[]},{"level":3,"title":"简述方法区","slug":"简述方法区","link":"#简述方法区","children":[]},{"level":3,"title":"简述运行时常量池","slug":"简述运行时常量池","link":"#简述运行时常量池","children":[]},{"level":3,"title":"简述直接内存","slug":"简述直接内存","link":"#简述直接内存","children":[]},{"level":3,"title":"简述Java创建对象的过程","slug":"简述java创建对象的过程","link":"#简述java创建对象的过程","children":[]},{"level":3,"title":"简述JVM给对象分配内存的策略","slug":"简述jvm给对象分配内存的策略","link":"#简述jvm给对象分配内存的策略","children":[]},{"level":3,"title":"Java对象内存分配是如何保证线程安全的","slug":"java对象内存分配是如何保证线程安全的","link":"#java对象内存分配是如何保证线程安全的","children":[]},{"level":3,"title":"简述对象的内存布局","slug":"简述对象的内存布局","link":"#简述对象的内存布局","children":[]},{"level":3,"title":"如何判断对象是否是垃圾","slug":"如何判断对象是否是垃圾","link":"#如何判断对象是否是垃圾","children":[]},{"level":3,"title":"简述java的引用类型","slug":"简述java的引用类型","link":"#简述java的引用类型","children":[]},{"level":3,"title":"简述标记清除算法、标记整理算法和标记复制算法","slug":"简述标记清除算法、标记整理算法和标记复制算法","link":"#简述标记清除算法、标记整理算法和标记复制算法","children":[]},{"level":3,"title":"简述分代收集算法","slug":"简述分代收集算法","link":"#简述分代收集算法","children":[]},{"level":3,"title":"简述Serial垃圾收集器","slug":"简述serial垃圾收集器","link":"#简述serial垃圾收集器","children":[]},{"level":3,"title":"简述ParNew垃圾收集器","slug":"简述parnew垃圾收集器","link":"#简述parnew垃圾收集器","children":[]},{"level":3,"title":"简述Parallel Scavenge垃圾收集器","slug":"简述parallel-scavenge垃圾收集器","link":"#简述parallel-scavenge垃圾收集器","children":[]},{"level":3,"title":"简述CMS垃圾收集器","slug":"简述cms垃圾收集器","link":"#简述cms垃圾收集器","children":[]},{"level":3,"title":"简述G1垃圾收集器","slug":"简述g1垃圾收集器","link":"#简述g1垃圾收集器","children":[]},{"level":3,"title":"简述Minor GC","slug":"简述minor-gc","link":"#简述minor-gc","children":[]},{"level":3,"title":"简述Full GC","slug":"简述full-gc","link":"#简述full-gc","children":[]},{"level":3,"title":"常见内存分配策略","slug":"常见内存分配策略","link":"#常见内存分配策略","children":[]},{"level":3,"title":"简述JVM类加载过程","slug":"简述jvm类加载过程","link":"#简述jvm类加载过程","children":[]},{"level":3,"title":"简述JVM中的类加载器","slug":"简述jvm中的类加载器","link":"#简述jvm中的类加载器","children":[]},{"level":3,"title":"简述双亲委派机制","slug":"简述双亲委派机制","link":"#简述双亲委派机制","children":[]},{"level":3,"title":"双亲委派机制的优点","slug":"双亲委派机制的优点","link":"#双亲委派机制的优点","children":[]},{"level":3,"title":"如何构建自定义类加载器","slug":"如何构建自定义类加载器","link":"#如何构建自定义类加载器","children":[]},{"level":3,"title":"JVM常见调优参数","slug":"jvm常见调优参数","link":"#jvm常见调优参数","children":[]}],"git":{"createdTime":1662711378000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":12.75,"words":3824},"filePathRelative":"interview/java-jvm-baguwen.md","localizedDate":"2022年9月9日","excerpt":"<h1> Java 虚拟机八股文（背诵版）必看👍</h1>\\n<h3> 简述JVM内存模型</h3>\\n<p>线程私有的运行时数据区: 程序计数器、Java 虚拟机栈、本地方法栈。</p>\\n<p>线程共享的运行时数据区：Java 堆、方法区。</p>\\n<h3> 简述程序计数器</h3>\\n<p>程序计数器表示当前线程所执行的字节码的行号指示器。</p>\\n<p>程序计数器不会产生StackOverflowError和OutOfMemoryError。</p>\\n<h3> 简述虚拟机栈</h3>\\n<p>Java 虚拟机栈用来描述 Java 方法执行的内存模型。线程创建时就会分配一个栈空间，线程结束后栈空间被回收。</p>"}');export{e as data};