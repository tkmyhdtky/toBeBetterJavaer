import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as b,c as l,a as e,d as t,b as i,e as r}from"./app-f9d961e7.js";const c={},p=e("p",null,[t("今天来给大家推荐一款玩转云服务器的神器——"),e("strong",null,"宝塔面板"),t("，有了这玩意，服务器能玩一整年，甚至余生！")],-1),g=e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-ad40a5f7-30a8-4c6c-9671-c389432e16de.png",alt:"https://www.bt.cn/",tabindex:"0",loading:"lazy"},null,-1),s={href:"https://www.bt.cn/",target:"_blank",rel:"noopener noreferrer"},d=r(`<p>--------开始保姆级演示如何安装宝塔面板-------</p><p>为了给大家呈现出保姆级的教程，我自己新下单了一款轻量应用服务器。登录阿里云服务器后台，可以看到这台服务器正在运行当中。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-11df60df-a51c-48d4-a704-343d01d44777.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击「远程链接」的小图标，第一次需要手机验证码，之后进入到在线版的终端窗口。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-1fc16ac7-10b1-4e61-98f5-d48bb09ab626.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以按照提示输入 <code>sudo su root</code> 命令切换到 root 账户。</p><p>切换到宝塔Linux 面板页，可以看到对应的安装命令，如下图所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-ce7e94b5-c90b-422e-a7e3-942c615c2837.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我的云服务器镜像选择的是 CentOS，所以可以直接复制 yum 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y wget &amp;&amp; wget -O install.sh http://download.bt.cn/install/install_6.0.sh &amp;&amp; sh install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到云服务器的「终端」下进行在线安装。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-b7dcf834-294a-4bd0-86f0-7b0b92c5b3fe.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>yum 命令是 CentOS 的优势，可以在线安装和升级软件。当出现上图提示的内容（外网面板地址、用户名和密码）后就表示宝塔面板安装成功了！</p><p>前后大概 2 分钟左右的时间，还是比较快的。记住外网面板地址、用户名和密码，就可以通过宝塔面板访问云服务器了。</p><p>如果无法访问，表示服务器没有开放 8888 端口。选择我的轻量服务器，选择防火墙，选择「添加规则」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-65f67086-cc35-4b7f-89b4-d73e51a859e0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>能看到目前服务器只开放了 HTTP、HTTPS 和 SSH 的端口，8888 端口还没有放行。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-5f7fa1a0-1810-40a0-b371-ae2ee5948f80.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次访问外网面板地址，就可以看到登录页面了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-1233ea14-2e6b-48d9-b278-ab87b3cc3cbd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录成功后（让浏览器帮你记住账号和密码），如果之前有宝塔官方账号，可以选择绑定，如果没有的话，注册一个。之后就可以看到宝塔面板推荐我们安装的服务器软件了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-e618418b-1862-4db2-9d61-61358330b77d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通常来说，直接安装 LNMP 组合包就可以了，包括可以一键安装到 Linux 环境的 Nginx、MySQL、PHP 等成员。</p><p>LNMP 一键安装包能为不会 Linux 的新手提供一个可以使用 Linux 生产的基础环境，无需一个一个的输入命令，无需值守，无需为软件之间的依赖而烦恼。</p>`,24),f={href:"https://lnmp.org",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),u={href:"http://Rambler.ru",target:"_blank",rel:"noopener noreferrer"},j=r('<p>MySQL 基本上是中小型服务器必备的关系型数据库软件；PHP 虽然没落了，但仍然是很多服务器软件的前置环境，比如说最受欢迎的服务器建站工具 WordPress。</p><p>点击「一键安装」，宝塔面板就会帮我们自动安排上了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-036631d0-5160-4b9e-a750-0f15966e1ee3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>到此为止，宝塔面板的基础环境就准备完成了。可以在上面按照左侧的菜单项目对服务器进行操作了，比如说：</p><ul><li>网站</li><li>FTP</li><li>数据库</li><li>监控</li><li>安全</li><li>防火墙</li><li>文件</li><li>终端</li><li>计划任务</li><li>软件商店</li><li>等等</li></ul><p>这里先说一下终端，第一次进来的时候需要进行 SSH 账号验证。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-08cec2c4-0c4d-4b06-aefb-be29ef1052e6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>密码从哪里来的呢？</p><p>在「服务器运维」中选择「远程链接」页面下。有 3 种方式，第一种可以直接使用浏览器，第二种使用密钥，第三种使用账户和密码。</p><p>为了方便演示，这里选择选择「设置密码」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-0560b7fc-4c22-4dd3-be91-d35b631b93e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设置完成后，重启服务器生效。之后在宝塔面板的「终端」面板下填写密码就可以链接了。不过在浏览器的终端里敲命令总感觉有点不太方便，我们最好选择 iterm2、putty、xshell 这样的客户端。</p><p>再说一下软件商店，有付费的有免费的，不过对于我们个人服务器来说，免费版的都足够用了。需要什么安装什么就好了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-6f4f2ed4-74cf-4cc2-af6c-1750f14d3846.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上传下载文件也非常方便。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-beian-aefbcc8e-28c3-48ff-bf66-efdcb8fd57ae.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>---再再割一下------</p><p>讲真，有了宝塔面板后，操作服务器是真特么的方便啊！装了以后可以：</p><ul><li>创建管理网站</li><li>带颜色的终端命令行</li><li>数据库可视化管理</li><li>文件可视化管理</li><li>服务器软件可视化管理</li><li>一键安装 Nginx 反向代理软件</li><li>申请部署网站 SSL 证书</li><li>代理云服务器端口</li><li>更多强大功能，等待大家去解锁</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',20);function v(h,y){const a=o("ExternalLinkIcon");return b(),l("div",null,[p,e("figure",null,[g,e("figcaption",null,[e("a",s,[t("https://www.bt.cn/"),i(a)])])]),d,e("blockquote",null,[e("p",null,[e("a",f,[t("https://lnmp.org"),i(a)])])]),e("p",null,[t("LAMP 和 LNMP 的差别就在于前者提供的是 Apache 的"),m,t(" Web 服务器，后来是 Nginx。Nginx 由 Igor Sysoev 为俄罗斯访问量第二的 "),e("a",u,[t("Rambler.ru"),i(a)]),t(" 站点开发的 Web服务器软件，国内外的门户网站、行业网站也都在使用Nginx，相当的稳定。")]),j])}const z=n(c,[["render",v],["__file","install-baota-mianban.html.vue"]]);export{z as default};
