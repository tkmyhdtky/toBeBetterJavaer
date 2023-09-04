const e=JSON.parse('{"key":"v-b827481e","path":"/jvm/zijiema-zhiling.html","title":"JVM字节码指令详解","lang":"zh-CN","frontmatter":{"title":"JVM字节码指令详解","shortTitle":"JVM字节码指令详解","category":["Java核心"],"tag":["Java虚拟机"],"description":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，JVM字节码指令详解","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,字节码"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/zijiema-zhiling.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"JVM字节码指令详解"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，JVM字节码指令详解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM字节码指令详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、加载与存储指令","slug":"_01、加载与存储指令","link":"#_01、加载与存储指令","children":[]},{"level":3,"title":"02、算术指令","slug":"_02、算术指令","link":"#_02、算术指令","children":[]},{"level":3,"title":"03、类型转换指令","slug":"_03、类型转换指令","link":"#_03、类型转换指令","children":[]},{"level":3,"title":"04、对象的创建和访问指令","slug":"_04、对象的创建和访问指令","link":"#_04、对象的创建和访问指令","children":[]},{"level":3,"title":"05、方法调用和返回指令","slug":"_05、方法调用和返回指令","link":"#_05、方法调用和返回指令","children":[]},{"level":3,"title":"06、操作数栈管理指令","slug":"_06、操作数栈管理指令","link":"#_06、操作数栈管理指令","children":[]},{"level":3,"title":"07、控制转移指令","slug":"_07、控制转移指令","link":"#_07、控制转移指令","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":17.42,"words":5227},"filePathRelative":"jvm/zijiema-zhiling.md","localizedDate":"2022年3月27日","excerpt":"<h1> JVM字节码指令详解</h1>\\n<p>大家好，我是二哥呀。Java 字节码指令是 JVM 体系中非常难啃的一块硬骨头，我估计有些读者会有这样的疑惑，“Java 字节码难学吗？我能不能学会啊？”</p>\\n<p>讲良心话，不是我谦虚，一开始学 Java 字节码和 Java 虚拟机方面的知识我也感觉头大！但硬着头皮学了一阵子之后，突然就开窍了，觉得好有意思，尤其是明白了 Java 代码在底层竟然是这样执行的时候，感觉既膨胀又飘飘然，浑身上下散发着自信的光芒！</p>\\n<p>Java 官方的虚拟机 Hotspot 是基于栈的，而不是基于寄存器的。</p>\\n<p>基于栈的优点是可移植性更好、指令更短、实现起来简单，但不能随机访问栈中的元素，完成相同功能所需要的指令数也比寄存器的要多，需要频繁的入栈和出栈。</p>"}');export{e as data};
