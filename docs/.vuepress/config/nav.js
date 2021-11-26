// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '地信数据',
    link: '/data-gis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '基础地理信息数据',
      //   items: [
      //     { text: '点矢量', link: '#' },
      //     { text: '线矢量', link: '#' },
      //     { text: '面矢量', link: '#' }
      //     // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
      //   ],
      // },
      // {
      //   text: '栅格数据',
      //   items: [
      //     { text: 'DEM数据', link: '#' },
      //     { text: '土地利用数据', link: '#' },
      //     { text: '人口数据', link: '#' },
      //     { text: '地图资源数据', link: '#' },
      //   ],
      // },
      // {
      //   text: '领域/学科数据',
      //   items: [
      //     { text: '生态', link: '#' },
      //     { text: '经济', link: '#' },
      //     { text: '地质', link: '#' },
      //     { text: '气象', link: '#' },
      //     { text: '环境', link: '#' },
      //     { text: '水文', link: '#' },
      //     { text: '农学', link: '#' }
      //   ],
      // },
    ],
  },
  {
    text: '遥感数据',
    link: '/data-rs/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '卫星数据',
      //   items: [
      //     { text: '普通光学卫星', link: '#' },
      //     { text: '雷达卫星', link: '#' },
      //     { text: '其他卫星', link: '#' }
      //   ],
      // },
      // {
      //   text: '卫星产品数据',
      //   items: [
      //     { text: '土地利用数据', link: '#' },
      //     { text: '植被指数数据', link: '#' },
      //     { text: '土壤数据', link: '#' },
      //     { text: '温度数据', link: '#' },
      //     { text: '天气预报数据', link: '#' },
      //     { text: '气溶胶数据', link: '#' },
      //     { text: 'DEM数据', link: '#' },
      //     { text: '遥感训练数据集', link: '#' },
      //   ],
      // }
    ],
  },
  {
    text: '编程资源',
    link: '/coding/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '地信开发',
      //   items: [
      //     { text: '编程语言', link: '#' },
      //     { text: '在线地图源', link: '#' },
      //     { text: '空间处理包', link: '#' },
      //     { text: '空间数据库', link: '#' },
      //     { text: '在线可视化', link: '#' }
      //   ],
      // },
      // {
      //   text: '遥感开发',
      //   items: [
      //     { text: '编程语言', link: '#' },
      //     { text: '遥感自动化', link: '#' },
      //     { text: '遥感深度学习', link: '#' },
      //     { text: '遥感云开发', link: '#' },
      //     { text: ' - GEE专题', link: '#' },
      //     { text: ' - PIE专题', link: '#' }
      //   ],
      // }
    ],
  },
  {
    text: '软件资源',
    link: '/softs/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
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
  {
    text: '网址导航',
    link: '#',
    items: [
      // { text: '常用网址/论坛导航', link: '#' },
      // { text: '持续更新中...', link: '#'},
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
