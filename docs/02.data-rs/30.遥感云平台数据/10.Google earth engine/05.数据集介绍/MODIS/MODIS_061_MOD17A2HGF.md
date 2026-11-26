---
title: "MOD17A2HGF.061 Terra 总初级生产力 8 天全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/bff99888/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "gpp"
  - "modis"
  - "nasa"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "usgs"
---

# MOD17A2HGF.061 Terra 总初级生产力 8 天全球 500 米

英文原名：MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m

## 这是什么数据

MOD17A2HGF 版本 6.1 总初级生产力（GPP）产品是一个像元大小 500 米（m）的值的累积 8 天合成，基于辐射利用效率概念，可潜在地用作数据模型的输入，以计算陆地能量、碳、水循环过程与植被生物地球化学。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2021 年至 2025 年；分辨率：500 米。
- 时间范围：2021-01-01 至 2025-12-27

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | 总初级生产。 | 500 |  |
| PsnNet | 净光合作用；GPP 减去维持呼吸（MR）。 | 500 |  |
| Psn_QC | 质量控制比特。 | 500 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD17A2HGF');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD17A2HGF`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD17A2HGF
* [User's Guide](https://lpdaac.usgs.gov/documents/972/MOD17_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/95/MOD17_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD17A2HGF)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, global, gpp, modis, nasa, photosynthesis, plant-productivity, productivity, psn, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A2HGF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
