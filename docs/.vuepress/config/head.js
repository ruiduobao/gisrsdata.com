// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '地理信息系统,地信,遥感,GIS,RS,地信遥感数据汇',
    },
  ],
  // [
  //   'meta',
  //   {
  //     name: 'sogou_site_verification',
  //     content: 'y15XLjhNaO',
  //   },
  // ],
  // 添加百度推送


  // 添加百度统计
  // ['meta', { name: 'baidu-site-verification', content: 'xxx' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  
      // 添加百度统计
[
        "script",
        {},
        `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a5d8638f6272059b83cf3287169064ef";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
          `
],
//头条js提交收录
[
  "script",
  {},
  `
  var el = document.createElement("script");
  el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?57b4417e5af27bb556862ddd1035af3b86d25aa934a0544184d9d963cc7f779465e0a2ada1d5e86b11e7de7c1a83287d04743a02fd1ee8dd8558a8cad50e91cb354f8c6f3f78e5fd97613c481f678e6d";
  el.id = "ttzz";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(el, s);
})();
    `
],
//360js提交收录
[
  "script",
  {},
  `
  var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
  document.write('<script src="' + src + '" id="sozz"><\/script>');
  })();
    `
]





  //[
  //  'script',
  //  {
  //    'data-ad-client': 'ca-pub-7828333725993554',
  //    async: 'async',
  //    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //  },
  //], // 网站关联Google AdSense 与 html格式广告支持
]
