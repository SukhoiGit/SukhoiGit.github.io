var posts=["posts/dfa2d520.html","posts/47de4be2.html","posts/b64a7908.html","posts/aa55683f.html","posts/83897b92.html","posts/999a8fe.html","posts/fc4c1a2e.html","posts/f6491cfb.html","posts/5729df21.html","posts/99345e84.html","posts/23a3bd72.html","posts/7da19302.html","posts/6f2612a2.html","posts/9f572938.html","posts/c6e613d8.html","posts/c9a945f0.html","posts/c0c42fb6.html","posts/6bb1d783.html","posts/a42a779d.html","posts/fc933cea.html","posts/a1116f6.html","posts/54d9f3d9.html","posts/9f024484.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Java工程师进阶知识完全扫盲","link":"https://doocs.github.io/advanced-java/#/?id=%e4%ba%92%e8%81%94%e7%bd%91-java-%e5%b7%a5%e7%a8%8b%e5%b8%88%e8%bf%9b%e9%98%b6%e7%9f%a5%e8%af%86%e5%ae%8c%e5%85%a8%e6%89%ab%e7%9b%b2","avatar":"https://ts1.cn.mm.bing.net/th/id/R-C.dc5f7f5f4ee16d1bd089e97d7a13cfab?rik=EuElR1YCDk%2bVRQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f12-16%2f95734%2fwater_95734_698_698_.png&ehk=d2TtqMXLp5FxRzw8iVS0PP%2f%2fkPh2J%2bc5RIQn8sSj7ds%3d&risl=&pid=ImgRaw&r=0","descr":null},{"name":"数据库教程","link":"https://www.sjkjc.com/","avatar":"https://bpic.588ku.com/element_origin_min_pic/19/04/10/a131159e85ab6e3643aa96c00c4402c5.jpg"},{"name":"代码随想录","link":"https://programmercarl.com/","avatar":"https://code-thinking-1253855093.file.myqcloud.com/pics/20210614201246512.png","descr":"帮助大家少走弯路，循序渐进学算法"},{"name":"JavaGuide","link":"https://javaguide.cn/","avatar":"https://javaguide.cn/logo.png","descr":"Java学习+面试指南"},{"name":"NVIDIA","link":"https://www.nvidia.cn/","avatar":"https://ts1.cn.mm.bing.net/th/id/R-C.8af1e6fb90d08c4cb5890663d51c9378?rik=LULahECogNSwQg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2023%2f03-24%2f136687%2fwater_136687_698_698_.png&ehk=hlTwsc63gxW5zKurwx%2fkrT23SLjFqhNLqf7I9PbgDTA%3d&risl=&pid=ImgRaw&r=0","descr":"人工智能计算领域的领导者"},{"name":"AWS云计算","link":"https://aws.amazon.com/cn/","avatar":"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png","descr":"专业的大数据和云计算服务及云解决方案提供商"},{"name":"Alibaba Cloud","link":"https://cn.aliyun.com/","avatar":"https://tse1-mm.cn.bing.net/th/id/OIP-C.GQilyxAvafi49DVzO2YU_AHaHa?rs=1&pid=ImgDetMain","descr":"计算-为了无法计算的价值"},{"name":"Flink","link":"https://flink.apache.org/","avatar":"https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png","descr":"实时计算引擎"},{"name":"Spark","link":"https://spark.apache.ac.cn/","avatar":"https://img.88icon.com/download/jpg/20200807/f1ebb87e0d78294876df6d13731c05c3_512_362.jpg!bg","descr":"大规模数据分析的统一引擎"},{"name":"ChatGpt 3.5","link":"https://origin.eqing.tech/","avatar":"https://ts1.cn.mm.bing.net/th/id/R-C.44f7b44e144c3e62a7bf26d3ed9dbc25?rik=4mNHzi4yH%2fL%2bGQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2023%2f02-09%2f135403%2fwater_135403_698_698_.png&ehk=D%2bT8GsjcmjFS9uaNJ2JvSOP8R8kbzcmFHLdm8GV69lU%3d&risl=&pid=ImgRaw&r=0","descr":"非官方站点","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };