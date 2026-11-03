---
title: "MOD11A1.005 Terra Land Surface Temperature and Emissivity Daily Global 1 km Grid SIN [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/fbc9aba9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "emissivity"
  - "global"
  - "landuse-landcover"
  - "lst"
  - "mod11a1"
  - "modis"
  - "surface-temperature"
  - "terra"
---

# MOD11A1.005 Terra Land Surface Temperature and Emissivity Daily Global 1 km Grid SIN [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODIS/Terra Land Surface Temperature and
Emissivity (LST/E) product, MOD11A1, provides per-pixel temperature and
emissivity values, which are produced daily using the generalized split-window
LST algorithm.  This algorithm is optimally used to separate ranges of
atmospheric column water vapor and lower boundary air surface temperatures into
tractable sub-ranges. The surface emissivities in bands 31 and 32 are estimated
from land cover types.

The V5 MOD11A1 products are projected in a Sinusoidal grid by mapping the
level-2 LST product (MOD11_L2) on 1-kilometer (precisely 0.928-km) grids. The
MOD11A1 product comprises the following Science Data Set (SDS) layers for
daytime and nighttime observations:

- LST_Day_1km: Daytime Land Surface Temperatures (K),  Scale 0.02
- QC_Day: Daytime Surface Temperature quality control assessments
- Day_view_time: Daytime LST Observation Times (Hours), Scale 0.1
- Day_view_angle: Daytime View Zenith Angles (Degrees), Offset -65.0
- LST_Night_1km: Nighttime Land Surface Temperatures (K),  Scale 0.02
- QC_Night: Nighttime Surface Temperature quality control assessments
- Night_view_time: Nighttime LST Observation Times (Hours), Scale 0.1
- Night_view_angle: Nighttime View Zenith Angles (Degrees), Offset -65.0
- Emis_31: Bands 31 Emissivity, Scale 0.002, Offset 0.49
- Emis_32: Bands 32 Emissivity, Scale 0.002, Offset 0.49
- Clear_night_cov: Nighttime Clear Sky Coverage, Scale 0.0005
- Clear_day_cov: Daytime Clear Sky Coverage, Scale 0.0005

QC bit flags:

- Bits 0-1: Mandatory QC Flag
   - 00: LST produced, good quality, not necessary to examine detailed QC.
   - 01: LST produced, unreliable or unquantifiable quality, recommend examination of more detailed QC.
   - 10: LST not produced due to cloud effects.
   - 11: LST not produced primarily due to reasons other than clouds.
- Bits 2-3: Data Quality Flag
   - 00: Good quality L1B in bands 31 and 32.
   - 01: Other quality data.
   - 10: TBD
   - 11: TBD
- Bits 4-5: Emissivity Error Flag
   - 00: Average emissivity error &le; 0.01
   - 01: Average emissivity error &le; 0.02
   - 10: Average emissivity error &le; 0.04
   - 11: Average emissivity error &gt; 0.04
- Bits 6-7: LST Error Flag
   - 00: Average LST error &le; 1 K
   - 01: Average LST error &le; 2 K
   - 10: Average LST error &le; 3 K
   - 11: Average LST error &gt; 3 K

The V5 Terra/MODIS LST/E products, including MOD11A1, are validated to Stage-2
through field campaigns and radiance-based validation studies.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD11A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-03-05 至 2017-03-30
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：daily, emissivity, global, landuse-landcover, lst, mod11a1, modis, surface-temperature, terra

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | Daytime Land Surface Temperature | 1000 |  |
| QC_Day | Daytime LST Quality Indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angle | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Nighttime Land Surface Temperature | 1000 |  |
| QC_Night | Nighttime LST Quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angle | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_day_cov | Day clear-sky coverage | 1000 |  |
| Clear_night_cov | Night clear-sky coverage | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD11A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD11A1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
