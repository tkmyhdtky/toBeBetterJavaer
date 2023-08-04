const t=JSON.parse('{"key":"v-6e15aaf2","path":"/common-tool/StringUtils.html","title":"Apache StringUtils：专为Java字符串而生的工具类","lang":"zh-CN","frontmatter":{"title":"Apache StringUtils：专为Java字符串而生的工具类","shortTitle":"StringUtils工具类","category":["Java核心"],"tag":["常用工具类"],"description":"本文详细介绍了Apache StringUtils工具类，深入分析了它在Java字符串操作中的实际应用和优势。通过具体的代码示例，展示了如何使用StringUtils类处理字符串的常见问题，如判断空白、连接、替换等。掌握Apache StringUtils工具类，让您在Java编程中轻松应对各种字符串操作，提高开发效率。","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,二哥的Java进阶之路,Java进阶之路,Java入门,教程,java,Apache StringUtils,java StringUtils"}],["meta",{"property":"og:url","content":"https://javabetter.cn/common-tool/StringUtils.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Apache StringUtils：专为Java字符串而生的工具类"}],["meta",{"property":"og:description","content":"本文详细介绍了Apache StringUtils工具类，深入分析了它在Java字符串操作中的实际应用和优势。通过具体的代码示例，展示了如何使用StringUtils类处理字符串的常见问题，如判断空白、连接、替换等。掌握Apache StringUtils工具类，让您在Java编程中轻松应对各种字符串操作，提高开发效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"常用工具类"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache StringUtils：专为Java字符串而生的工具类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"字符串判空","slug":"字符串判空","link":"#字符串判空","children":[]},{"level":3,"title":"分隔字符串","slug":"分隔字符串","link":"#分隔字符串","children":[]},{"level":3,"title":"判断是否纯数字","slug":"判断是否纯数字","link":"#判断是否纯数字","children":[]},{"level":3,"title":"将集合拼接成字符串","slug":"将集合拼接成字符串","link":"#将集合拼接成字符串","children":[]},{"level":3,"title":"其他方法","slug":"其他方法","link":"#其他方法","children":[]}],"git":{"createdTime":1680150743000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":4.61,"words":1383},"filePathRelative":"common-tool/StringUtils.md","localizedDate":"2023年3月30日","excerpt":"<h1> 9.3 StringUtils工具类</h1>\\n<p><code>字符串</code>（<a href=\\"https://javabetter.cn/string/immutable.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">String</a>）在我们的日常工作中，用得非常非常非常多。</p>\\n<p>在我们的代码中经常需要对字符串判空，截取字符串、转换大小写、<a href=\\"https://javabetter.cn/string/split.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">分隔字符串</a>、<a href=\\"https://javabetter.cn/string/equals.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">比较字符串</a>、去掉多余空格、<a href=\\"https://javabetter.cn/string/join.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">拼接字符串</a>、使用正则表达式等等。</p>"}');export{t as data};