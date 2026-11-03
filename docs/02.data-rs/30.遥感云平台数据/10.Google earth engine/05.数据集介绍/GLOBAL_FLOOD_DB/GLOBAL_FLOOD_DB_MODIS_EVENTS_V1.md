---
title: "Global Flood Database v1 (2000-2018)"
date: 2026-11-03 12:00:00
permalink: /pages/e042bdf5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2s"
  - "cloudtostreet"
  - "dartmouth"
  - "dfo"
  - "flood"
  - "gfd"
  - "inundation"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# Global Flood Database v1 (2000-2018)

## 数据集简介

The Global Flood Database contains maps of the extent and
temporal distribution of 913 flood events occurring between 2000-2018. For more
information, see
[the associated journal article](https://doi.org/10.1038/s41586-021-03695-w).

Flood events were collected from
the [Dartmouth Flood Observatory](https://floodobservatory.colorado.edu/)
and used to collect MODIS imagery. The selected
913 events are those that were successfully mapped (passed quality control as
having significant inundation beyond permanent water) using 12,719 scenes from
Terra and Aqua MODIS sensors. Each pixel was classified as water or non-water
at 250-meter resolution during the full date range of each flood event and
subsequent data products were generated including maximum flood extent
("flooded" band) and the duration of inundation in days ("duration" band).
Water and non-water classifications during a flood event include permanent
water (here resampling the 30-meter
[JRC Global Surface Water dataset](https://global-surface-water.appspot.com/)
representing permanent water to 250-meter resolution), which can be
masked out to isolate flood water using the "jrc_perm_water" band.
Extra data quality
bands were added representing cloud conditions during the flood event (e.g.,
"clear_views" representing the number of clear days the flood was observed
between its start and end dates and "clear_perc" representing the percentage of
clear day observation of the total event duration in days).

Each image in the ImageCollection represents the map of an individual flood.
The collection can be filtered
by date, country, or Dartmouth Flood Observatory original ID.

## 基本信息

- 数据集编号（Earth Engine ID）：`GLOBAL_FLOOD_DB/MODIS_EVENTS/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Cloud to Street (C2S) / Dartmouth Flood Observatory (DFO)、Google Earth Engine
- 时间范围：2000-02-17 至 2018-12-10
- 空间分辨率：30 米
- 许可：CC-BY-NC-4.0
- 关键词：c2s, cloudtostreet, dartmouth, dfo, flood, gfd, inundation, surface, surface-ground-water, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| flooded | Maximum extent of flood water during an event.  * 1 - area of surface water * 0 - no water | 30 |  |
| duration | Duration of surface water during an event in days. Pixel values indicate the number of composite days a pixel's area was considered water during an event. 3-day MODIS composites were used.  | 30 |  |
| clear_views | Number of cloud-free observations in days between the start and end day of each event. Cloud coverage is determined by the MODIS Quality Assurance band ('state_1km').  | 30 |  |
| clear_perc | Percentage of clear view observations during a given flood event. This is equivalent to the 'clear_views' band but normalized to the number of MODIS images per flood event.  Cloud coverage is determined by the MODIS Quality Assurance band ('state_1km').  | 30 |  |
| jrc_perm_water | Permanent water determined by the JRC Global Surface Water dataset using the 'transition' band.  Resolution is maintained as the original 30-meter resolution of the JRC dataset.  * 1 - permanent water * 0 - non-water.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GLOBAL_FLOOD_DB/MODIS_EVENTS/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLOBAL_FLOOD_DB_MODIS_EVENTS_V1
- 数据引用：Tellman, B., J.A. Sullivan, C. Kuhn, A.J. Kettner, C.S. Doyle, G.R.
Brakenridge, T. Erickson, D.A. Slayback. (Accepted.)
Satellites observe increasing proportion of population exposed
to floods. Nature.
[doi:10.1038/s41586-021-03695-w](https://doi.org/10.1038/s41586-021-03695-w)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
