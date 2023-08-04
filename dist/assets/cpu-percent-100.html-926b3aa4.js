const e=JSON.parse('{"key":"v-2781e43c","path":"/jvm/cpu-percent-100.html","title":"一次生产CPU 100%排查优化实践","lang":"zh-CN","frontmatter":{"title":"一次生产CPU 100%排查优化实践","shortTitle":"一次生产CPU 100%排查优化实践","category":["Java核心"],"tag":["Java虚拟机"],"description":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，一次生产CPU 100% 排查优化实践","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,cpu"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/cpu-percent-100.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一次生产CPU 100%排查优化实践"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，从入门到进阶，一次生产CPU 100% 排查优化实践"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一次生产CPU 100%排查优化实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"定位问题","slug":"定位问题","link":"#定位问题","children":[]},{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[{"level":3,"title":"本地模拟","slug":"本地模拟","link":"#本地模拟","children":[]},{"level":3,"title":"优化解决","slug":"优化解决","link":"#优化解决","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1648406568000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":6.07,"words":1822},"filePathRelative":"jvm/cpu-percent-100.md","localizedDate":"2022年3月28日","excerpt":"<h1> 一次生产CPU 100% 排查优化实践</h1>\\n<h2> 前言</h2>\\n<p>最近又收到了运维报警：表示有些服务器负载非常高，让我们定位问题。</p>\\n<h2> 定位问题</h2>\\n<p>拿到问题后首先去服务器上看了看，发现运行的只有我们的 Java 应用。于是先用 <code>ps</code> 命令拿到了应用的 <code>PID</code>。</p>\\n<p>接着使用 <code>top -Hp pid</code> 将这个进程的线程显示出来。输入大写的 P 可以将线程按照 CPU 使用比例排序，于是得到以下结果。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-e9b35104-fce9-40ea-ae91-8bbb7fd8aa96.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};