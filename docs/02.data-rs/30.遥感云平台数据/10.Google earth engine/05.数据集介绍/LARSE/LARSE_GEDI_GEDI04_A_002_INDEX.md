---
title: "GEDI L4A table index"
date: 2026-11-03 12:00:00
permalink: /pages/e77b757e/
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

# GEDI L4A table index

## 数据集简介

This is a feature collection created from the geometries of L4A tables in
[LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002). Each feature is
a polygon footprint of a source table with its asset id and start/end
timestamps.

Please see [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4A_AGB_Density_V2_1.html)
for more information.

The Global Ecosystem Dynamics Investigation [GEDI](https://gedi.umd.edu/)
mission aims to characterize ecosystem structure and dynamics to enable
radically improved quantification and understanding of the Earth's carbon cycle
and biodiversity. The GEDI instrument, attached to the International Space
Station (ISS), collects data globally between 51.6&deg; N and 51.6&deg; S
latitudes at the highest resolution and densest sampling of the
3-dimensional structure of the Earth. The GEDI instrument consists of three
lasers producing a total of eight beam ground transects, which instantaneously
sample eight ~25 m footprints spaced approximately every 60 m along-track.

Product                 | Description
:---------------------  | :----------------------------------------------
L2A Vector         | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A Monthly raster | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A table index    | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B Vector         | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B Monthly raster | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B table index    | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A Biomass Vector | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A Monthly raster | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A table index    | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B Biomass        | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D Imputed Waveforms | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 基本信息

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_A_002_INDEX`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Indexing: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-04-18 至 2024-11-28
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, table, tree-cover, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| table_id | STRING | GEDI L4A table collection Ids |
| time_start | STRING | GEDI L4A table start time in the ISO 8601 format |
| time_end | STRING | GEDI L4A table end time in the ISO 8601 format |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('LARSE/GEDI/GEDI04_A_002_INDEX');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_A_002_INDEX
- 数据引用：GEDI L4A Footprint Level Aboveground Biomass Density, Version 2.1.
Dubayah, R.O., J. Armston, J.R. Kellner, L. Duncanson, S.P. Healey,
P.L. Patterson, S. Hancock, H. Tang, J. Bruening, M.A. Hofton, J.B. Blair,
and S.B. Luthcke. 2022. ORNL DAAC, Oak Ridge, Tennessee, USA.
[doi:10.3334/ORNLDAAC/2056](https://doi.org/10.3334/ORNLDAAC/2056)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
