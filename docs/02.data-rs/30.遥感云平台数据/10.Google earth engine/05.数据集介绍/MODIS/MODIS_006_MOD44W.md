---
title: "MOD44W.006 Terra 陆地水体掩膜（源自 MODIS 与 SRTM）年度全球 250 米"
date: 2026-11-03 12:00:00
permalink: /pages/872cd0aa/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "mod44w"
  - "modis"
  - "nasa"
  - "srtm"
  - "surface-ground-water"
  - "usgs"
  - "water-mask"
---

# MOD44W.006 Terra 陆地水体掩膜（源自 MODIS 与 SRTM）年度全球 250 米

英文原名：MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m

## 这是什么数据

MOD44W V6 陆地/水体掩膜 250 米产品使用以 MODIS 数据训练并用 MOD44W V5 产品验证的决策树分类器推导。应用了一系列掩膜以处理由地形阴影、火烧痕迹、多云或海洋冰覆盖引起的已知问题。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2015 年；分辨率：250 米。
- 时间范围：2000-01-01 至 2015-01-01

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water_mask | 陆地-水体掩膜。 | 250 |  |
| water_mask_QA | 质量保证（QA）。 | 250 |  |

## 能拿来做什么

- 陆地水体掩膜制作
- 水体制图辅助
- 土地覆盖分类辅助

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD44W');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD44W`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, mod44w, modis, nasa, srtm, surface-ground-water, usgs, water-mask
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD44W.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GFPLAIN250 米：全球 250 米洪泛区数据集](/pages/fcae03ea/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [GRIDMET 干旱指数：美国本土干旱指数](/pages/f6533466/)
- [JRC 全球地表水元数据 v1.4](/pages/1f03ce37/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
