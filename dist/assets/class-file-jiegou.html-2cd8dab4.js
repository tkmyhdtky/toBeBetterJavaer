const e=JSON.parse('{"key":"v-efd40586","path":"/jvm/class-file-jiegou.html","title":"详解Java的类文件（class文件）结构","lang":"zh-CN","frontmatter":{"title":"详解Java的类文件（class文件）结构","shortTitle":"详解class文件结构","category":["Java核心"],"tag":["Java虚拟机"],"description":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，详解Java的类文件（class文件）结构","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,class"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/class-file-jiegou.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"详解Java的类文件（class文件）结构"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，详解Java的类文件（class文件）结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解Java的类文件（class文件）结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、魔数","slug":"_01、魔数","link":"#_01、魔数","children":[]},{"level":3,"title":"02、版本号","slug":"_02、版本号","link":"#_02、版本号","children":[]},{"level":3,"title":"03、常量池","slug":"_03、常量池","link":"#_03、常量池","children":[]},{"level":3,"title":"04、访问标记","slug":"_04、访问标记","link":"#_04、访问标记","children":[]},{"level":3,"title":"05、this_class、super_class、interfaces","slug":"_05、this-class、super-class、interfaces","link":"#_05、this-class、super-class、interfaces","children":[]},{"level":3,"title":"06、字段表","slug":"_06、字段表","link":"#_06、字段表","children":[]},{"level":3,"title":"07、方法表","slug":"_07、方法表","link":"#_07、方法表","children":[]},{"level":3,"title":"08、属性表","slug":"_08、属性表","link":"#_08、属性表","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":12.14,"words":3643},"filePathRelative":"jvm/class-file-jiegou.md","localizedDate":"2022年3月27日","excerpt":"<h1> 详解Java的类文件（class文件）结构</h1>\\n<p>大家好，我是二哥呀，今天我拿了一把小刀，准备解剖一下 Java 的 class 文件。</p>\\n<p>CS 的世界里流行着这么一句话，“计算机科学领域的任何问题都可以通过增加一个中间层来解决”。对于 Java 来说，JVM 就是这么一个产物，“Write once, Run anywhere”之所以能实现，靠得就是 JVM，它能在不同的操作系统下运行同一份源代码编译后的 class 文件。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/class-file-jiegou-dfd7ce0d-1da2-4547-b2d7-57e0350f5911.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};