// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '地信数据',
    link: '/data-gis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: '基础地理信息数据', link: '/data-gis-jichu/' },
        ],
      },
      {
        items: [
          { text: '栅格数据', link: '/data-gis-shange/' },
        ],
      },
      {
        items: [
          { text: '领域/学科数据', link: '/data-gis-lingyu/' },
        ],
      },
    ],
  },
  {
    text: '遥感数据',
    link: '/data-rs/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: '卫星数据', link: '/data-rs-sat/' },

        ],
      },
      {
        items: [
          { text: '卫星产品数据', link: '/data-rs-product/' }
        ],
      }
    ],
  },
  {
    text: '开发/软件',
    link: '/softs/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        items: [
          { text: '地信开发', link: '/coding-GIS/' },
        ],
      },
      {
        items: [
          { text: '遥感开发', link: '/coding-RS/' },
        ],
      },
      {
        items: [
          { text: '地信软件', link: '/soft-GIS/' },
        ],
      },
      {
        items: [
          { text: '遥感软件', link: '/soft-RS/' },
        ],
      }
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '地信软件',
      //   items: [
      //     { text: 'ArcGIS专题', link: '#' },
      //     { text: 'QGIS专题', link: '#' },
      //     { text: 'GeoDa专题', link: '#' },
      //     { text: 'PIE 专题', link: '#' },
      //     { text: '其他', link: '#' }
      //   ],
      // },
      // {
      //   text: '遥感软件',
      //   items: [
      //     { text: '本地软件', link: '#' },
      //     { text: ' - ENVI', link: '#' },
      //     { text: ' - ERDAS', link: '#' },
      //     { text: ' - 其他', link: '#' },
      //     { text: '遥感云平台', link: '#' },
      //     { text: ' - GEE专题', link: '#' },
      //     { text: ' - PIE专题', link: '#' },
      //     { text: ' - world compute', link: '#' }
      //   ],
      // },
      // {
      //   text: '地图辅助',
      //   items: [
      //     { text: 'Google Earth', link: '#' },
      //     { text: '图新地球', link: '#' },
      //     { text: '奥维地图', link: '#' },
      //     { text: '水经注', link: '#' },
      //     { text: 'Bigmap', link: '#' }
      //   ],
      // },
    ],
  },
  // {
  //   text: '编程资源',
  //   link: '/coding/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  //   items: [
  //     // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   items: [
      //     { text: '地信开发', link: '/coding-GIS/' },
      //   ],
      // },
      // {
      //   items: [
      //     { text: '遥感开发', link: '/coding-RS/' },
      //   ],
      // }
  //   ],
  // },
  
  // {
  //   text: '网址导航',
  //   link: '#',
  //   items: [
  //     // { text: '常用网址/论坛导航', link: '#' },
  //     // { text: '持续更新中...', link: '#'},
  //   ],
  // },
  {
    text: '其他',
    link: '/daohang_GISRS/',
    items: [
      { text: '常用网站导航', link: '/daohang_web/' },
      // { text: '内容分类', link: '/categories/' },
      { text: '网站时间线', link: '/archives/' },
      { text: '关于网站', link: '/about/' },
      { text: '遥感论坛', link: 'https://www.rserforum.com/' },
      { text: '我要投稿', link: 'http://pics.landcover100.com/pics//image/20211128020929.png'},
    ],
  },


]
