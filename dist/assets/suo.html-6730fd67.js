const e=JSON.parse('{"key":"v-389484f8","path":"/thread/suo.html","title":"公司空降一个美团大佬，彻底把Java中的锁”讲清楚了","lang":"zh-CN","frontmatter":{"title":"公司空降一个美团大佬，彻底把Java中的锁”讲清楚了","shortTitle":"不可不说的Java“锁”事","description":"Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,锁"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/suo.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"公司空降一个美团大佬，彻底把Java中的锁”讲清楚了"}],["meta",{"property":"og:description","content":"Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"公司空降一个美团大佬，彻底把Java中的锁”讲清楚了\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"1. 乐观锁 VS 悲观锁","slug":"_1-乐观锁-vs-悲观锁","link":"#_1-乐观锁-vs-悲观锁","children":[]},{"level":3,"title":"2. 自旋锁 VS 适应性自旋锁","slug":"_2-自旋锁-vs-适应性自旋锁","link":"#_2-自旋锁-vs-适应性自旋锁","children":[]},{"level":3,"title":"3. 无锁 VS 偏向锁 VS 轻量级锁 VS 重量级锁","slug":"_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","link":"#_3-无锁-vs-偏向锁-vs-轻量级锁-vs-重量级锁","children":[]},{"level":3,"title":"4. 公平锁 VS 非公平锁","slug":"_4-公平锁-vs-非公平锁","link":"#_4-公平锁-vs-非公平锁","children":[]},{"level":3,"title":"5. 可重入锁 VS 非可重入锁","slug":"_5-可重入锁-vs-非可重入锁","link":"#_5-可重入锁-vs-非可重入锁","children":[]},{"level":3,"title":"6. 独享锁 VS 共享锁","slug":"_6-独享锁-vs-共享锁","link":"#_6-独享锁-vs-共享锁","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]},{"level":2,"title":"作者简介","slug":"作者简介","link":"#作者简介","children":[]}],"git":{"createdTime":1663295000000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":31.38,"words":9414},"filePathRelative":"thread/suo.md","localizedDate":"2022年9月16日","excerpt":"<h2> 前言</h2>\\n<p>Java提供了种类丰富的锁，每种锁因其特性的不同，在适当的场景下能够展现出非常高的效率。本文旨在对锁相关源码（本文中的源码来自JDK 8和Netty 3.10.6）、使用场景进行举例，为读者介绍主流锁的知识点，以及不同的锁的适用场景。</p>\\n<p>Java中往往是按照是否含有某一特性来定义锁，我们通过特性将锁进行分组归类，再使用对比的方式进行介绍，帮助大家更快捷的理解相关知识。下面给出本文内容的总体分类目录：</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/other-bukfsdjavassmtjstd-b2ded433-defd-4535-b767-fd2e5be0b5b9.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};
