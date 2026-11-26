---
title: "OpenET DisALEXI 逐月蒸散发 v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/d4a94ba4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET DisALEXI 逐月蒸散发 v2.0

英文原名：OpenET DisALEXI Monthly Evapotranspiration v2.0

## 这是什么数据

大气-陆地交换反演 / 大气-陆地交换反演的降尺度（ALEXI/DisALEXI）

DisALEXI 作为 OpenET 框架的一部分被移植到 Google Earth Engine。基线 ALEXI/DisALEXI 模型结构由 Anderson 等（2012、2018）描述。ALEXI 蒸散发（ET）模型专门使用来自地球静止或中等分辨率极轨平台的时间差分地表温度（LST）测量生成区域 ET 图。DisALEXI 随后使用 Landsat 数据（30 米；双周）将区域 ALEXI ET 降尺度到更细尺度，以分辨单个农田与其他景观特征。

注：DisALEXI 数据在 2001 年之前不存在，因为源 ALEXI 数据仅从 2001 年起可用。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：2001 年至 2025 年（逐月）；分辨率：30 米。
- 时间范围：2001-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | 实际蒸散发（ET）总量 | 30 |  |
| count | 当月纳入插值的无云观测数 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('projects/openet/assets/disalexi/conus/gridmet/monthly/v2_0');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/disalexi/conus/gridmet/monthly/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_disalexi_conus_gridmet_monthly_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Anderson, M., Gao, F., Knipper, K., Hain, C., Dulaney, W., Baldocchi, D .,
Eichelmann, E., Hemes, K., Yang, Y., Medellin-Azuara, J. and Kustas, W.,
2018. Field-scale assessment of land and water use change over the
California Delta using remote sensing. Remote Sensing, 10(6), p.889.
[doi:10.3390/rs10060889](https://doi.org/10.3390/rs10060889)

- DOI：10.3390/rs10060889

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)
- [OpenET Ensemble Monthly Evapotranspiration v2.1](/pages/e711299d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
