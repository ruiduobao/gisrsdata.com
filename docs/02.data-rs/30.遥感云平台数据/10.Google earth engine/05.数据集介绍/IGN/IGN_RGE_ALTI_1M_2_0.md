---
title: "RGE ALTI: IGN RGE ALTI Digital Elevation 1m"
date: 2026-11-03 12:00:00
permalink: /pages/36cc0dac/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
---

# RGE ALTI: IGN RGE ALTI Digital Elevation 1m

## 数据集简介

The RGE ALTI dataset describes the digital elevation model (DEM) of France
with the pixel size of 1m.  It was created from surveys obtained by airborne
lidar or by correlation of aerial images.

Lidar was deployed for flood-prone, coastal, and large forest
areas. The vertical accuracy of the DEM in these areas is between
0.2m and 0.5m. Radar was used in mountain areas (Alps, Pyrenees,
Cevennes, Corsica). Caution: in areas with steep slopes, the average
vertical accuracy is the order of 7m.

The accuracy of these fields has been checked against various sources:
the road and hydrographic networks of the
[BD TOPO](https://geoservices.ign.fr/bdtopo), geodetic terminals and
points calculated on the ground.

Aerial photo correlation techniques are used in the rest of the territory.
On certain zones treated by correlation, ground measurements are absent
over large extents due to the presence of vegetation
(wooded areas, for example). 1987-2001 altimetry data (BD Alti) are used
to fill these gaps. The vertical accuracy of the DEM on these areas
is between 0.5m and 0.7m.

Currently the collection includes a single image IGN/RGE_ALTI/1M/2_0/FXX
showing metropolitan France.

This dataset was prepared and ingested with the support of Guillaume Attard
and Julien Bardonnet ([AGEOCE](https://www.ageoce.com)).
The preparation process is
[described here](https://medium.com/@gui.attard/pre-processing-the-dem-of-france-rge-alti-5m-for-implementation-into-earth-engine-de9a0778e0d9).

See also:
[user's guide](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`IGN/RGE_ALTI/1M/2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：IGN、Google Earth Engine
- 时间范围：2009-01-01 至 2021-01-01
- 空间分辨率：1 米
- 许可：etalab-2.0
- 关键词：dem, elevation, elevation-topography, geophysical

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MNT | Terrain elevation in meters. | 1 |  |
| SRC | The main source of the data used to calculate the altitude of the node. See Appendix B page 26 in the [user guide](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf).  | 1 |  |
| DST | The distance in meters between the node and the nearest point used to calculate its altitude.  | 1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IGN/RGE_ALTI/1M/2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IGN_RGE_ALTI_1M_2_0
- 数据引用：IGN (2021). RGE ALTI 1m [Data set]. Accessed 2022-07-01 from
[IGN website](https://geoservices.ign.fr/rgealti#telechargement1m)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
