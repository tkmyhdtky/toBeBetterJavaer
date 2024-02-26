const e=JSON.parse('{"key":"v-2834f353","path":"/collection/time-complexity.html","title":"时间复杂度，评估ArrayList和LinkedList的执行效率","lang":"zh-CN","frontmatter":{"title":"时间复杂度，评估ArrayList和LinkedList的执行效率","shortTitle":"时间复杂度","category":["Java核心"],"tag":["集合框架（容器）"],"description":"本文详细讲解了时间复杂度的概念、计算方法以及如何评估算法的性能。通过学习本文，您将更好地理解时间复杂度对程序性能的影响，从而在实际编程中做出更优的算法选择。","head":[["meta",{"name":"keywords","content":"Java,时间复杂度,java 时间复杂度,算法性能 大O表示法, 算法评估"}],["meta",{"property":"og:url","content":"https://javabetter.cn/collection/time-complexity.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"时间复杂度，评估ArrayList和LinkedList的执行效率"}],["meta",{"property":"og:description","content":"本文详细讲解了时间复杂度的概念、计算方法以及如何评估算法的性能。通过学习本文，您将更好地理解时间复杂度对程序性能的影响，从而在实际编程中做出更优的算法选择。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-01T07:00:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"集合框架（容器）"}],["meta",{"property":"article:modified_time","content":"2024-02-01T07:00:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"时间复杂度，评估ArrayList和LinkedList的执行效率\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T07:00:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"1）O(1)","slug":"_1-o-1","link":"#_1-o-1","children":[]},{"level":3,"title":"2）O(n)","slug":"_2-o-n","link":"#_2-o-n","children":[]},{"level":3,"title":"3）O(logn)","slug":"_3-o-logn","link":"#_3-o-logn","children":[]},{"level":3,"title":"4）平方时间复杂度 O(n^2)","slug":"_4-平方时间复杂度-o-n-2","link":"#_4-平方时间复杂度-o-n-2","children":[]},{"level":3,"title":"5）指数时间复杂度 O(2^n)","slug":"_5-指数时间复杂度-o-2-n","link":"#_5-指数时间复杂度-o-2-n","children":[]}],"git":{"createdTime":1660724392000,"updatedTime":1706770841000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":10},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":5}]},"readingTime":{"minutes":6.15,"words":1844},"filePathRelative":"collection/time-complexity.md","localizedDate":"2022年8月17日","excerpt":"<h1> 6.11 时间复杂度</h1>\\n<p>“二哥，为什么要讲时间复杂度呀？”三妹问。</p>\\n<p>“因为接下来要用到啊。后面我们学习 <a href=\\"https://javabetter.cn/collection/arraylist.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ArrayList</a>、<a href=\\"https://javabetter.cn/collection/linkedlist.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">LinkedList</a> 的时候，会比较两者在增删改查时的执行效率，而时间复杂度是衡量执行效率的一个重要标准。”我说。</p>"}');export{e as data};