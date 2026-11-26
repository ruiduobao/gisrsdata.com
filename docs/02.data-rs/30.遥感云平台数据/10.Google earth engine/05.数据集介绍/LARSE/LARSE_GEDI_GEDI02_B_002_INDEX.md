---
title: "GEDI L2B 表索引"
date: 2026-11-03 12:00:00
permalink: /pages/09847f43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "table"
  - "tree-cover"
  - "usgs"
---

# GEDI L2B 表索引

英文原名：GEDI L2B table index

## 这是什么数据

这是一个要素集合，由 [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002) 中 L2B 表的几何创建。每个要素是源表的一个多边形足印，带有其资产 ID 与开始/结束时间戳。

更多信息见[用户指南](https://lpdaac.usgs.gov/documents/986/GEDI02_UserGuide_V2.pdf)。

全球生态系统动力学调查 [GEDI](https://gedi.umd.edu/) 任务旨在表征生态系统结构与动力学，以实现对地球碳循环与生物多样性的量化与理解的根本改善。GEDI 仪器安装在国际空间站（ISS）上，以最高分辨率与最密集采样在全球北纬 51.6° 与南纬 51.6° 之间收集地球三维结构数据。GEDI 仪器由三台激光器组成，共产生八条波束地面轨迹，瞬时采样八个约 25 米足印，沿轨间隔约 60 米。

产品 | 说明
:--------------------- | :----------------------------------------------
L2A 矢量 | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A 月度栅格 | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A 表索引 | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B 矢量 | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B 月度栅格 | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B 表索引 | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A 生物量矢量 | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A 月度栅格 | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A 表索引 | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B 生物量 | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D 填补波形 | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球北纬 51.6° 至南纬 51.6°；时间范围：2019 年至 2024 年；足印约 25 米。
- 时间范围：2019-03-25 至 2024-11-29

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| table_id | STRING | GEDI L2B 表集合 ID。 |
| time_start | STRING | GEDI L2B 表开始时间（ISO 8601 格式）。 |
| time_end | STRING | GEDI L2B 表结束时间（ISO 8601 格式）。 |

## 能拿来做什么

- 森林冠层高度与结构分析
- 地上生物量与碳储量估计
- 生态系统三维结构研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('LARSE/GEDI/GEDI02_B_002_INDEX');
```

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_B_002_INDEX`
- 提供方：Indexing: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_B_002_INDEX

## 许可与引用

- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, table, tree-cover, usgs
- 数据引用：GEDI L2B Canopy Cover and Vertical Profile Metrics Data Global Footprint
Level - GEDI02_B Dubayah, R., H. Tang, J. Armston, S. Luthcke, M. Hofton,
J. Blair. GEDI L2B Canopy Cover and Vertical Profile Metrics Data Global
Footprint Level V002. 2021, distributed by NASA EOSDIS Land Processes DAAC.
Accessed YYYY-MM-DD.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
