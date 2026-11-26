---
title: "MYD10A1.061 Aqua 雪盖日产品全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/fb16b7df/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "aqua"
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "modis"
  - "myd10a1"
  - "nasa"
  - "nsidc"
  - "snow"
---

# MYD10A1.061 Aqua 雪盖日产品全球 500 米

英文原名：MYD10A1.061 Aqua Snow Cover Daily Global 500m

## 这是什么数据

MYD10A1 V6 雪盖日产品全球 500 米包含雪盖、雪反照率、分数雪盖与质量评估（QA）数据。雪盖数据基于采用归一化差值雪指数（NDSI）与其他判据检验的雪制图算法。

[通用文档](https://doi.org/10.5067/MODIS/MYD10A1.061)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：500 米。
- 时间范围：2002-07-04 至 2026-10-30

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDSI_Snow_Cover | NDSI 雪盖。此值针对 MYD10_L2 计算，并在选择当日观测时检索。提供方值大于 100 的在此波段被掩膜（可在「NDSI_Snow_Cover_Class」波段中找到）。 | 500 |  |
| NDSI_Snow_Cover_Basic_QA | 算法结果质量的基本估计。此值针对 MYD10_L2 计算，并随当日相应观测检索。 | 500 |  |
| NDSI_Snow_Cover_Algorithm_Flags_QA | 指示筛选结果与内陆水体存在的比特标志。这些标志在生成 MYD10_L2 时设置，并随当日相应观测检索。 | 500 |  |
| NDSI | 原始 NDSI（即筛选前）。此值针对 MYD10_L2 计算，并在选择当日观测时检索。 | 500 |  |
| Snow_Albedo_Daily_Tile | 雪反照率百分比。提供方值大于 100 的在此波段被掩膜（可在「Snow_Albedo_Daily_Tile_Class」波段中找到）。 | 500 |  |
| orbit_pnt | 指向被选为当日观测的条带的轨道编号的指针。该指针按索引引用写入 ArchiveMetadata.0 中 ORBITNUMBERARRAY 元数据对象的轨道编号列表。 | 500 |  |
| granule_pnt | 指向映射到瓦片中的颗粒（条带）的指针。该指针引用写入 ArchiveMetadata.0 中 GRANULEPOINTERARRAY 元数据对象的相应值。 | 500 |  |
| NDSI_Snow_Cover_Class | 来自「NDSI_Snow_Cover」子数据集的土地覆盖类别（提供方值小于或等于 100 的被掩膜）。 | 500 |  |
| Snow_Albedo_Daily_Tile_Class | 来自「Snow_Albedo_Daily_Tile」子数据集的土地覆盖类别（提供方值小于或等于 100 的被掩膜）。 | 500 |  |

## 能拿来做什么

- 雪盖监测与积雪物候
- 水文与融雪径流模拟
- 气候变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD10A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD10A1`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD10A1

## 许可与引用

- 许可：proprietary
- 关键词：albedo, aqua, cryosphere, daily, geophysical, global, modis, myd10a1, nasa, nsidc, snow
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MYD10A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD10A1.061 Terra Snow Cover Daily Global 500m](/pages/63afd45f/)
- [MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m](/pages/cf65a02a/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
