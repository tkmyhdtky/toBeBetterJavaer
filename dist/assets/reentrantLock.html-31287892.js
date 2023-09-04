const e=JSON.parse('{"key":"v-06ad3e4d","path":"/thread/reentrantLock.html","title":"深入理解Java并发重入锁ReentrantLock","lang":"zh-CN","frontmatter":{"title":"深入理解Java并发重入锁ReentrantLock","shortTitle":"重入锁ReentrantLock","description":"重入锁（ReentrantLock）是 Java 并发编程中的一个重要概念。它是一种同步机制，提供了与 synchronized 关键字相同的基本行为，但更灵活，功能也更丰富。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,锁,ReentrantLock"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/reentrantLock.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java并发重入锁ReentrantLock"}],["meta",{"property":"og:description","content":"重入锁（ReentrantLock）是 Java 并发编程中的一个重要概念。它是一种同步机制，提供了与 synchronized 关键字相同的基本行为，但更灵活，功能也更丰富。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java并发重入锁ReentrantLock\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"ReentrantLock 的源码分析","slug":"reentrantlock-的源码分析","link":"#reentrantlock-的源码分析","children":[]},{"level":2,"title":"ReentrantLock 的使用","slug":"reentrantlock-的使用","link":"#reentrantlock-的使用","children":[]},{"level":2,"title":"ReentrantLock 与 synchronized","slug":"reentrantlock-与-synchronized","link":"#reentrantlock-与-synchronized","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":16},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":7.96,"words":2389},"filePathRelative":"thread/reentrantLock.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第十五节：重入锁 ReentrantLock</h1>\\n<p>ReentrantLock 重入锁，是实现<a href=\\"https://javabetter.cn/thread/suo.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lock 接口</a>的一个类，也是在实际编程中使用频率很高的一个锁，<strong>支持重入性，表示能够对共享资源重复加锁，即当前线程获取该锁后再次获取不会被阻塞</strong>。</p>\\n<p>要想支持重入性，就要解决两个问题：</p>\\n<ol>\\n<li>在线程获取锁的时候，如果已经获取锁的线程是当前线程的话则直接再次获取成功；</li>\\n<li>由于锁会被获取 n 次，那么只有锁在被释放同样的 n 次之后，该锁才算是完全释放成功。</li>\\n</ol>"}');export{e as data};
