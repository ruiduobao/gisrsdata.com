---
title: "OpenET DisALEXI 逐月蒸散发 v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/e41f7d19/
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

# OpenET DisALEXI 逐月蒸散发 v2.1

英文原名：OpenET DisALEXI Monthly Evapotranspiration v2.1

## 这是什么数据

大气-陆地交换反演 / 大气-陆地交换反演的降尺度（ALEXI/DisALEXI）

DisALEXI 作为 OpenET 框架的一部分被移植到 Google Earth Engine。基线 ALEXI/DisALEXI 模型结构由 Anderson 等（2012、2018）描述。ALEXI 蒸散发（ET）模型专门使用来自地球静止或中等分辨率极轨平台的时间差分地表温度（LST）测量生成区域 ET 图。DisALEXI 随后使用 Landsat 数据（30 米；双周）将区域 ALEXI ET 降尺度到更细尺度，以分辨单个农田与其他景观特征。

注：DisALEXI 数据在 2001 年之前不存在，因为源 ALEXI 数据仅从 2001 年起可用。**OpenET 集合 v2.1**

OpenET 集合 v2.1 是集合 v2.0 的再处理更新版，主要旨在解决 v2.0 的已知问题，同时纳入小的模型改进与输入数据更新。预计两个集合版本之间的 ET 在某些地点与时间会有明显差异。部分更新与变化包括：

* 额外的云筛查与过滤，跳过含未掩膜云和/或大面积积雪的 Landsat 影像。* 重新处理以纳入 NLDAS-2 与 GRIDMET 输入气象数据集的更新。* 对所有需要土地覆盖信息的模型纳入 USGS 年度 NLCD 产品。* 对所有需要作物类型信息的模型纳入最新 USDA CDL。* 更新插值，使逐月 ET 仅当月中所有天都有插值时才生产（减少多云/多雪或低覆盖时期的「count=0」月份）。* 应用发射率校正，解决 Landsat LST 数据的一个已知问题。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：2015 年至 2026 年（逐月）；分辨率：30 米。
- 时间范围：2015-10-01 至 2026-09-01

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
var dataset = ee.ImageCollection('projects/openet/assets/disalexi/conus/gridmet/monthly/v2_1');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/disalexi/conus/gridmet/monthly/v2_1`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_disalexi_conus_gridmet_monthly_v2_1

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

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)
- [OpenET Ensemble Monthly Evapotranspiration v2.1](/pages/e711299d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
