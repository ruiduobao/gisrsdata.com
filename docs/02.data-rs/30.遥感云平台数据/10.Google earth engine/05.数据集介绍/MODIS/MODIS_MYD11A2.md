---
title: "MYD11A2.005 Land Surface Temperature and Emissivity 8-Day L3 Global 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/d602c2cf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "emissivity"
  - "global"
  - "landuse-landcover"
  - "lst"
  - "modis"
  - "myd11a2"
  - "surface-temperature"
---

# MYD11A2.005 Land Surface Temperature and Emissivity 8-Day L3 Global 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The level-3 MODIS global Land Surface
Temperature (LST) and Emissivity 8-day data are composed from the
daily 1-kilometer LST product (MYD11A1) and stored on a 1-km
Sinusoidal grid as the average values of clear-sky LSTs during an
8-day period.

MYD11A2 is comprised of the following layers for daytime and nighttime
observations:

- LST_Day_1km: Daytime Land Surface Temperatures (K),  Scale 0.02
- QC_Day: Daytime Surface Temperature quality control assessments,
      see QC bit flags
- Day_view_time: Daytime LST Observation Times (Hours), Scale 0.1
- Day_view_angl: Daytime View Zenith Angles (Degrees), Offset -65.0
- LST_Night_1km: Nighttime Land Surface Temperatures (K),  Scale 0.02
- QC_Night: Nighttime Surface Temperature quality control assessments,
      see QC bit flags
- Night_view_time: Nighttime LST Observation Times (Hours), Scale 0.1
- Night_view_angl: Nighttime View Zenith Angles (Degrees), Offset -65.0
- Emis_31: Bands 31 Emissivity, Scale 0.002, Offset 0.49
- Emis_32: Bands 32 Emissivity, Scale 0.002, Offset 0.49
- Clear_sky_days: Clear Sky Day Coverage, see Clear Sky Flags.
- Clear_sky_nights: Clear Sky Nighttime Coverage, see Clear Sky Flags.

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

Clear Sky Flags:

- Clear Sky Flag for each day (bit 0 is day 1, bit 1 is day 2, etc):
   - 0: Day/Night is not clear-sky.
   - 1: Day/Night is clear-sky.

Version-5 MODIS/Aqua Land Surface Temperature/Emissivity products
are Validated Stage 2, meaning that accuracy has been assessed over a
widely distributed set of locations and time periods via several
ground-truth and validation efforts. Although there may be later
improved versions, these data are ready for use in scientific
publications.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MYD11A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2017-03-22
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：8-day, aqua, emissivity, global, landuse-landcover, lst, modis, myd11a2, surface-temperature

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | Day land surface temperature | 1000 |  |
| QC_Day | Daytime LST quality indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angl | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Night land surface temperature | 1000 |  |
| QC_Night | Nighttime LST quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angl | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_sky_days | Days in clear-sky conditions | 1000 |  |
| Clear_sky_nights | Nights in clear-sky conditions | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MYD11A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD11A2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
