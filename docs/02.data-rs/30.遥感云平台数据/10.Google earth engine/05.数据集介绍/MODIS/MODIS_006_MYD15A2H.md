---
title: "MYD15A2H.006 Aqua 叶面积指数/FPAR 8 天全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/fa51d4fa/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "fpar"
  - "global"
  - "lai"
  - "modis"
  - "myd15a2h"
  - "nasa"
  - "plant-productivity"
  - "usgs"
---

# MYD15A2H.006 Aqua 叶面积指数/FPAR 8 天全球 500 米（已弃用）

英文原名：MYD15A2H.006: Aqua Leaf Area Index/FPAR 8-Day Global 500m [deprecated]

## 这是什么数据

MYD15A2H V6 MODIS 组合叶面积指数（LAI）与光合有效辐射分量（FPAR）产品是一个 500 米分辨率的 8 天合成数据集。算法从 8 天时段内 Aqua 传感器的所有获取中选择可用的「最佳」像元。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2023 年；分辨率：500 米。
- 时间范围：2002-07-04 至 2023-02-18

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar_500m | 光合有效辐射分量。 | 500 |  |
| Lai_500m | 叶面积指数。 | 500 |  |
| FparLai_QC | LAI 与 FPAR 的质量。 | 500 |  |
| FparExtra_QC | LAI 与 FPAR 的额外细节质量。 | 500 |  |
| FparStdDev_500m | FPAR 的标准差。 | 500 |  |
| LaiStdDev_500m | LAI 的标准差。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MYD15A2H');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD15A2H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD15A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD15A2H)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, aqua, fpar, global, lai, modis, myd15a2h, nasa, plant-productivity, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD15A2H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
