---
title: "科特迪瓦 2020 年土地覆盖图（BNETD）"
date: 2026-11-03 12:00:00
permalink: /pages/ede6637e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "classification"
  - "deforestation"
  - "forest"
  - "landcover"
  - "landuse-landcover"
---

# 科特迪瓦 2020 年土地覆盖图（BNETD）

英文原名：Cote d'Ivoire BNETD 2020 Land Cover Map

## 这是什么数据

这是科特迪瓦 2020 年土地覆盖图，由科特迪瓦政府下属机构 BNETD-CIGN（国家技术研究与发展办公室的地理信息与数字中心）制作，欧盟提供技术与资金支持。制图方法透明、多方参与，符合国际标准。

做法是：在 Google Earth Engine 里处理 2020 年 Sentinel-2 卫星影像镶嵌图，再结合野外实测数据训练随机森林监督分类。全国共开展两次野外调查（2022 年 11 月 10 日–12 月 9 日、2023 年 1 月 26 日–2 月 13 日），多个合作机构共 33 人参与。

在欧盟零毁林法案（EUDR）尽职调查中，可以把相关产品的地块位置与这幅 2020 年森林覆盖叠加，评估地块是否位于 2020 年截止日期之前为森林的区域：本图的类别可以合并成与联合国粮农组织（FAO）森林定义对齐的森林/非森林图。访问 2020 年土地覆盖数据、元数据与方法的平台（基于 Africa GeoPortal 的 ESRI 方案）在 [https://bit.ly/carte-ci-2020](https://bit.ly/carte-ci-2020)。

## 覆盖范围与时间

- 覆盖范围：科特迪瓦
- 时间范围：2020-01-01 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 土地覆盖类别 | 10 |  |

## 能拿来做什么

- EUDR 尽职调查：核查生产地块在 2020 年截止日期前是否为森林
- 科特迪瓦全国土地覆盖与森林监测
- 土地利用规划的 10 米土地覆盖底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('BNETD/land_cover/v1');
```

- 数据集编号（Earth Engine ID）：`BNETD/land_cover/v1`
- 提供方：BNETD-CIGN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BNETD_land_cover_v1
* [Detailed documentation](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/26a717d4c13f4f3db2c6056f7e5c0bab/data)
* [Methodology in French](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/76dc18767b89472eb89e8aa54e08a6c9/data)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：classification, deforestation, forest, landcover, landuse-landcover
- 数据引用：BNETD Land Cover Map 2020.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
