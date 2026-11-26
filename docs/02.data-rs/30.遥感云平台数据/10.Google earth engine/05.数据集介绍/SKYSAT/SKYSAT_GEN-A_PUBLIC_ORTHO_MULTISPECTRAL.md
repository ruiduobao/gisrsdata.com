---
title: "Planet SkySat 公共正射影像，多光谱"
date: 2026-11-03 12:00:00
permalink: /pages/29a32150/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "highres"
  - "multispectral"
  - "pansharpened"
  - "planet"
  - "satellite-imagery"
  - "skysat"
---

# Planet SkySat 公共正射影像，多光谱

英文原名：Planet SkySat Public Ortho Imagery, Multispectral

## 这是什么数据

Planet Labs Inc. SkySat 卫星的这批数据是为 2015 年实验性的「Skybox for Good Beta」计划、以及各种危机响应事件与少数其他项目收集的。数据有两种形式：5 波段多光谱/全色集合与全色融合 RGB 集合。

每幅影像的资产 ID 包含获取日期与时间，例如影像 s01_20150304T080608Z 获取于 2015 年 3 月 4 日 08:06 祖鲁时间（UTC）。更多信息见 [Planet 影像产品规格](https://www.planet.com/products/#planet-monitoring)，并访问 [Planet 影像与档案站](https://www.planet.com/latest-satellite-imagery-gallery/)。

此多光谱/全色集合包含五幅 16 位波段影像，由原始 12 位数据上移得到。B、G、R 与近红外波段的分辨率约为每像元 2 米，全色波段约为 0.8 米分辨率（离底点影像接近 1 米）。

## 覆盖范围与时间

- 覆盖范围：空间：全球选定区域；时间：2014 年至 2016 年；分辨率：多光谱约 2 米、全色约 0.8 米。
- 时间范围：2014-07-03 至 2016-12-24

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B | 蓝 | 2 | 450-515nm |
| G | 绿 | 2 | 515-595nm |
| R | 红 | 2 | 605-695nm |
| N | 近红外 | 2 | 740-900nm |
| P | 全色 | 0.8 | 450-900nm |

## 能拿来做什么

- 做灾害响应与事件核查的高分辨率影像分析。
- 为城市与土地利用制图提供样本。
- 与其他高分辨率影像做对比验证。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL');
```

- 数据集编号（Earth Engine ID）：`SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL`
- 提供方：Planet Labs Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/SKYSAT_GEN-A_PUBLIC_ORTHO_MULTISPECTRAL

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：highres, multispectral, pansharpened, planet, satellite-imagery, skysat
- 数据引用：© \<year\> Planet Labs Inc.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Planet SkySat Public Ortho Imagery, RGB](/pages/0bb60bdd/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
