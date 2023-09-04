import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c,a as e,d as t,b as r,e as i}from"./app-f9d961e7.js";const b={},g=i(`<h2 id="前言-废话" tabindex="-1"><a class="header-anchor" href="#前言-废话" aria-hidden="true">#</a> 前言（废话）</h2><p>本来打算在公司偷偷摸摸给星球的用户写一篇编程喵整合 MongoDB 的文章，结果在通过 brew 安装 MongoDB 的时候竟然报错了。原因很简单，公司这台 Mac 上的 homebrew 环境没有配置好。刚好 二哥的Java进阶之路上缺少这样一篇内容。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-c6756a26-8767-4135-be4c-b31d42de2a89.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以我就想，不如趁机水一篇吧，啊，不不不，趁机给小伙伴们普及一下 Homebrew 吧！瞧我这该死的大公无私的心（手动狗头）。</p><p>不会吧？不会还有人用 macOS 没有安装/配置 Homebrew 吧？</p><h2 id="homebrew-能干什么" tabindex="-1"><a class="header-anchor" href="#homebrew-能干什么" aria-hidden="true">#</a> Homebrew 能干什么</h2><blockquote><p>Homebrew 的 Slogan ：The missing package manager for macOS (or Linux)</p></blockquote><p>Homebrew 这款命令行软件管理神器在 GitHub 上已经有 32.5k+ 的 star 了，功能也真心强大，几乎 macOS 上的软件包它都包了。Homebrew 本身没有问题，问题在于。。。。。不说了，你懂的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-726f97d9-4de2-4d23-9973-d1a39951a0f7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Homebrew 除了是 macOS 的包管理器也可以装在 Linux 上成为 Linux 的包管理器，仅需要执行相应的命令，就能下载安装需要的软件包，省去了下载、解压、拖拽等繁琐的步骤。</p><p>用 Homebrew 官方的话来总结就是：安装 Apple（或 Linux 系统）没有预装但你需要的软件。比如说安装 MongoDB，只需要执行以下命令就可以安装，前提条件是环境一定要配置好。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简单一条命令，就可以实现包管理，还不用担心依赖/文件路径等问题。</p><p>Homebrew 主要由四个部分组成: brew、homebrew-core 、homebrew-cask、homebrew-bottles。</p><ul><li>brew：Homebrew 的源代码仓库</li><li>homebrew-core：Homebrew 的核心源</li><li>homebrew-cask：提供 macOS 应用和大型二进制文件的安装</li><li>homebrew-bottles：预编译二进制软件包</li></ul><p>再来了解一下 Homebrew 的接个核心概念，后续会经常用到。</p><ul><li>formula（e），安装包的描述文件，带 e 为复数</li><li>cellar，包安装好后所在的目录</li><li>bottle，预先编译好的包，不需要再下载源码编译，速度会快很多，官方库中的包大多数是通过 bottle 方式安装的</li><li>tap，下载源</li><li>cask（s），安装 macOS native 应用的扩展，可以理解为有图形化界面的应用，带 s 为复数</li><li>bundle，描述 Homebrew 依赖的扩展</li></ul><h2 id="安装配置-homebrew" tabindex="-1"><a class="header-anchor" href="#安装配置-homebrew" aria-hidden="true">#</a> 安装配置 Homebrew</h2><blockquote><p>世上无难事，只要找到 Homebrew 的正确安装方式。</p></blockquote><p>按理说，Homebrew 的安装方式非常简单，只需要执行官方的一句命令就可以完成安装了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但国内开发者命苦就苦在，经常会因为网络的原因安装失败。原因我只能说这是 <code>https://raw.githubusercontent.com</code> 网站的锅，谁让它访问不稳定呢？</p><p>怎么办呢？</p><p>必须换一种高效且科学的安装方式，那就是使用镜像安装。 Gitee 上有开源作者提供了一键安装包，只需要执行以下命令就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装脚本里提供了中科大、清华大学、北京外国语大学、腾讯、阿里巴巴等下载源。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-e7eaf096-7477-4ed0-814a-07ef8d62884f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但过来人告诉你，别选其他镜像源，就选中科大，速度杠杠的，40-50M/s，这速度比其他镜像源快多了，对比起来，其他就是蜗牛🐌。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-f0c3c481-f474-47b2-8b5e-17f8fc2b9a80.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个安装脚本非常的智能，几乎可以一件帮我们搞定所有问题。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-7c539545-d26e-45e8-9f81-bb5b439342eb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次感谢 Gitee 上这位大牛，已经 3k star 了，我把地址贴出来：</p>`,32),l={href:"https://gitee.com/cunkai/HomebrewCN",target:"_blank",rel:"noopener noreferrer"},s=i('<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-aebf4ced-58f4-4d31-892c-4a8382cf3677.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>brew 本体安装成功后，会提示我们配置国内镜像源。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-6866eb09-75fb-4f19-9ff4-b80fd02816e9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>nice，安装完成了。执行下面这几个命令体验下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-33bcd6a1-d843-4a6c-a8ac-0d908095da79.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>brew ls</code> 查看本地命令；</li><li><code>brew search mongodb</code> 查找软件；</li><li><code>brew -v</code> 查看版本；</li><li><code>brew update</code> 更新版本；</li><li><code>brew install --cask firefox</code> 安装图形化界面软件</li><li><code>brew config</code> 查看配置。</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-ac0e141f-301c-46f1-bd80-5375eb50dc4d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="brew-和-brew-cask-的区别" tabindex="-1"><a class="header-anchor" href="#brew-和-brew-cask-的区别" aria-hidden="true">#</a> brew 和 brew cask 的区别</h2><p>这里顺带说一下 brew 和 brew cask 的区别，这也是一开始我使用 brew 时困惑的一个点。</p><p>以前的版本中，是可以直接 <code>brew cask list</code> 这样执行命令的，现在改成了 <code>brew list --cask</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-c5403959-01fd-4610-b08c-4ca4e4cb0a66.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>brew 是从下载源码开始，然后编译（不一定，有些有现成的 bottle）解压，通过 <code>./configure &amp;&amp; make install</code> 进行安装，同时会包含相关的依赖库。环境变量也是自动配置的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-d27ec07e-cf3c-4504-9174-60881d2710fb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>brew cask 是下载解压已经编译好了的软件包（.dmg/.pkg），放在统一的目录中，省去了手动去下载、解压、拖拽等蛋疼步骤。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-566f4437-62de-49e5-89a7-7c666a2ad9c1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过 <code>brew search google</code> 我们也可以看得出两者之间的区别。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-441127b1-f7ae-484e-801b-5b808f8e283c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>「Formulae」一般是那些命令行工具、开发库、字体、插件等不含 GUI 界面的软件。</li><li>「Cask」就会包含一些 GUI 图形化界面的软件，如 Google Chrome、FireFox 、Atom 等</li></ul><h2 id="使用-homebrew" tabindex="-1"><a class="header-anchor" href="#使用-homebrew" aria-hidden="true">#</a> 使用 Homebrew</h2><p>Homebrew安装配置完成后，我们来实操体验两把。</p><p>这里是 homebrew 常用命令的一个清单，可供参考。</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>brew update</td><td>更新 Homebrew</td></tr><tr><td>brew search package</td><td>搜索软件包</td></tr><tr><td>brew install package</td><td>安装软件包</td></tr><tr><td>brew uninstall package</td><td>卸载软件包</td></tr><tr><td>brew upgrade</td><td>升级所有软件包</td></tr><tr><td>brew upgrade package</td><td>升级指定软件包</td></tr><tr><td>brew list</td><td>列出已安装的软件包列表</td></tr><tr><td>brew services command package</td><td>管理 brew 安装软件包</td></tr><tr><td>brew services list</td><td>列出 brew 管理运行的服务</td></tr><tr><td>brew info package</td><td>查看软件包信息</td></tr><tr><td>brew deps package</td><td>列出软件包的依赖关系</td></tr><tr><td>brew help</td><td>查看帮助</td></tr><tr><td>brew cleanup</td><td>清除过时软件包</td></tr><tr><td>brew link package</td><td>创建软件包符号链接</td></tr><tr><td>brew unlink package</td><td>取消软件包符号链接</td></tr><tr><td>brew doctor</td><td>检查系统是否存在问题</td></tr><tr><td>brew tap [user/repo]</td><td>将开源仓库添加到源</td></tr></tbody></table><h3 id="第一把-使用-homebrew-安装-jdk" tabindex="-1"><a class="header-anchor" href="#第一把-使用-homebrew-安装-jdk" aria-hidden="true">#</a> 第一把，使用 Homebrew 安装 JDK</h3><p>作为一名 Java 后端程序员，JDK 是必须要安装的，对吧？</p><p>1）执行 <code>brew search jdk</code> 查找有哪些可供安装的 JDK</p><p>2）执行 <code>brew install openjdk@17</code> 安装 JDK。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-b4d7684b-2db8-4286-bf2e-389c2aed5968.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3）但我们在 macOS 上安装了多个版本的 JDK 后，怎么管理它们呢？可以安装一下 jEnv，一个帮助我们管理 JAVA_HOME 的命令行工具，在 GitHub 上已经收获 4.3k 的 star。</p>',28),p={href:"https://github.com/jenv/jenv",target:"_blank",rel:"noopener noreferrer"},u=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-1034fcfd-22a7-4968-8b6f-fb2e67d22855.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("p",null,"官方文档也非常的简洁大方：",-1),f={href:"https://www.jenv.be/",target:"_blank",rel:"noopener noreferrer"},h=i(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-2e10e772-1944-474a-bbfa-b3ef3e0ec9d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;export PATH=&quot;$HOME/.jenv/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;eval &quot;$(jenv init -)&quot;&#39; &gt;&gt; ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv add /usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-b126c35d-edab-48a9-9543-831cfd0a51c6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>JDK 的安装路径可以通过下图的位置查找。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-a32accec-4044-480c-a8c8-3781bc5048b5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>管理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv versions
jenv global 17.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-cc01fad8-53e9-4474-8923-08e97ac7090a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是不是贼方便？再也不用整这 <code>echo &#39;export PATH=&quot;/usr/local/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</code> 玩意了！爽，实在是爽！</p><h3 id="第二把-使用-homebrew-安装-mongodb" tabindex="-1"><a class="header-anchor" href="#第二把-使用-homebrew-安装-mongodb" aria-hidden="true">#</a> 第二把，使用 Homebrew 安装 MongoDB</h3><p>先看 MongoDB 的官方文档（当前 release 版本是 5.0，我这里就先用上一个稳定版 4.4）：</p>`,16),w={href:"https://www.mongodb.com/docs/v4.4/tutorial/install-mongodb-on-os-x/",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>1）拉取 MongoDB 的源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew tap mongodb/brew
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-4819ca75-01e3-4dea-8859-7c9ddd570142.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2）更新 brew</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）安装 MongoDB</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install mongodb-community@4.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OK，安装成功。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-e934f3f3-c7de-4537-8c30-73c0e9fb41b4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>通过 Homebrew 下载的软件基本上来自于官网，所以大可以放心。而且而且它尽可能地利用了系统自带的各种库，使得软件包的编译时间大大缩短，基本上不会造成冗余。</p><p>这里顺带给大家提一则小故事，教别人学算法的大佬可以拿走了：homebrew 的作者去面 Google，被考算法题: 反转二叉树，结果没通过被拒了，😆</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-8fb73388-ffaf-4241-8584-03e7aa00578b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好了好了，今天这篇文章就先水到这吧，我们下期见~</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,15);function j(x,k){const a=n("ExternalLinkIcon");return d(),c("div",null,[g,e("blockquote",null,[e("p",null,[e("a",l,[t("https://gitee.com/cunkai/HomebrewCN"),r(a)])])]),s,e("blockquote",null,[e("p",null,[t("GitHub 地址："),e("a",p,[t("https://github.com/jenv/jenv"),r(a)])])]),u,m,e("blockquote",null,[e("p",null,[e("a",f,[t("https://www.jenv.be/"),r(a)])])]),h,e("blockquote",null,[e("p",null,[e("a",w,[t("https://www.mongodb.com/docs/v4.4/tutorial/install-mongodb-on-os-x/"),r(a)])])]),v])}const z=o(b,[["render",j],["__file","brew.html.vue"]]);export{z as default};
