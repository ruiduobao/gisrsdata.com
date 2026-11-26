---
title: "ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002"
date: 2026-11-03 12:00:00
permalink: /pages/a7bebe55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "ecostress"
  - "land"
  - "ndvi"
  - "plant-productivity"
---

# ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002

英文原名：ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002

## 这是什么数据

ECOSTRESS 分片辅助 NDVI 与反照率（ECO_L2T_STARS）V002 数据集以 70 米空间分辨率提供归一化差值植被指数（NDVI）与反照率数据。这一对理解植物需水与胁迫至关重要的辅助产品，通过结合可见光红外成像辐射仪套件（VIIRS）与协调 Landsat Sentinel（HLS）数据的数据融合过程创建。融合使用 STARS 算法（一种贝叶斯时间序列方法）执行，以将数据与白天 ECOSTRESS 过境对齐。本产品仅为相应的 ECOSTRESS 地表温度与发射率分片生成。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2018 年至 2026 年；分辨率：70 米。
- 时间范围：2018-07-09 至 2026-10-21

## 分辨率与规格

- 空间分辨率：约 70 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 归一化差值植被指数（NDVI）。 | 70 |  |
| NDVI-UQ | 归一化差值植被指数（NDVI）不确定性。 | 70 |  |
| albedo | 反照率。 | 70 |  |
| albedo-UQ | 反照率不确定性。 | 70 |  |

## 能拿来做什么

- 地表温度与蒸散研究
- 植物水分胁迫监测
- 城市热环境分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_STARS/V2');
```

- 数据集编号（Earth Engine ID）：`NASA/ECOSTRESS/L2T_STARS/V2`
- 提供方：Land Processes Distributed Active Archive Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_STARS_V2
* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)
* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)
* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, ecostress, land, ndvi, plant-productivity
- 数据引用：Hook, Simon, et al. ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_STARS.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_STARS.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_STARS.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/pages/f726b0e6/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
