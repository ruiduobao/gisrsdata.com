---
title: "ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002"
date: 2026-11-03 12:00:00
permalink: /pages/f726b0e6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecostress"
  - "emissivity"
  - "land"
  - "lst"
  - "plant-productivity"
  - "temperature"
---

# ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002

英文原名：ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002

## 这是什么数据

ECOSTRESS 地表温度与发射率（ECO_L2T_LSTE）V002 数据集以 70 米空间分辨率提供地表温度（LST）、LST 误差、质量控制标志、宽波段发射率、云掩膜、地表高度、水体掩膜与观测天顶角数据。本产品源自 ECOSTRESS 观测，对理解地表能量平衡与水分胁迫至关重要。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2018 年至 2026 年；分辨率：70 米。
- 时间范围：2018-07-09 至 2026-11-01

## 分辨率与规格

- 空间分辨率：约 70 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST | 地表温度。 | 70 |  |
| LST_err | 地表温度误差。 | 70 |  |
| QC | LST 与发射率的质量控制标志。 | 70 |  |
| EmisWB | 宽波段发射率。 | 70 |  |
| cloud | 云掩膜。 | 70 |  |
| height | 观测的地表高程。 | 70 |  |
| water | 水体掩膜。 | 70 |  |
| view_zenith | 观测天顶角。 | 70 |  |

## 能拿来做什么

- 地表温度与蒸散研究
- 植物水分胁迫监测
- 城市热环境分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_LSTE/V2');
```

- 数据集编号（Earth Engine ID）：`NASA/ECOSTRESS/L2T_LSTE/V2`
- 提供方：Land Processes Distributed Active Archive Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_LSTE_V2
* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)
* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)
* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## 许可与引用

- 许可：proprietary
- 关键词：ecostress, emissivity, land, lst, plant-productivity, temperature
- 数据引用：Hook, Simon, et al. ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_LSTE.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_LSTE.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_LSTE.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/pages/a7bebe55/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
