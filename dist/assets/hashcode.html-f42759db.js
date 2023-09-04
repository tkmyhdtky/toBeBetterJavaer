const e=JSON.parse('{"key":"v-7c307347","path":"/basic-extra-meal/hashcode.html","title":"Java hashCode方法解析：C++实现的高效本地方法","lang":"zh-CN","frontmatter":{"title":"Java hashCode方法解析：C++实现的高效本地方法","shortTitle":"Java hashCode方法解析","category":["Java核心"],"tag":["Java重要知识点"],"description":"hashCode是Java 所有类都有的方法，它会返回一个整数哈希码，表示对象在内存中的近似位置。相等的对象应具有相同哈希码，因此自定义类时需同时重写hashCode()和equals()方法。","author":"沉默王二","head":[["meta",{"name":"keywords","content":"java,hashcode,equals"}],["meta",{"property":"og:url","content":"https://javabetter.cn/basic-extra-meal/hashcode.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java hashCode方法解析：C++实现的高效本地方法"}],["meta",{"property":"og:description","content":"hashCode是Java 所有类都有的方法，它会返回一个整数哈希码，表示对象在内存中的近似位置。相等的对象应具有相同哈希码，因此自定义类时需同时重写hashCode()和equals()方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java重要知识点"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java hashCode方法解析：C++实现的高效本地方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[],"git":{"createdTime":1647355350000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":10.34,"words":3101},"filePathRelative":"basic-extra-meal/hashcode.md","localizedDate":"2022年3月15日","excerpt":"<h1> 13.5 Java hashCode方法解析</h1>\\n<p>今天我们来谈谈 Java 中的 <code>hashCode()</code> 方法。众所周知，Java 是一门面向对象的编程语言，所有的类都会默认继承自 Object 类，而 Object 的中文意思就是“对象”。</p>\\n<p>Object 类中就包含了 <code>hashCode()</code> 方法：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">native</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
