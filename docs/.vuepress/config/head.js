// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: 'GIS,RS,webgis,ENVI,postgis,地理信息系统,地信,遥感',
    },
  ],
  // 添加百度推送


  // 添加百度统计
  ['meta', { name: 'baidu-site-verification', content: 'xxx' }], // 百度统计的站长验证
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
