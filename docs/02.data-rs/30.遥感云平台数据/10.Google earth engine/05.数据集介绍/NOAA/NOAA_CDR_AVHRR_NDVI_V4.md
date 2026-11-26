---
title: "NOAA CDR AVHRR NDVI：归一化差值植被指数，版本 4 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/b23fbb86/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "land"
  - "ndvi"
  - "noaa"
  - "vegetation-indices"
---

# NOAA CDR AVHRR NDVI：归一化差值植被指数，版本 4 [已弃用]

英文原名：NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 4 [deprecated]

## 这是什么数据

NOAA AVHRR 归一化差值植被指数（NDVI）气候数据记录（CDR）包含源自 NOAA AVHRR 地表反射率产品的格网逐日 NDVI。它提供地表植被覆盖活动的测量，以 0.05° 分辨率格网化，在全球陆地表面上计算。

本数据集的已知问题包括：

- TIMEOFDAY 变量包含过大 1 天的值

- 纬度值未正确关联到格网单元中心，误差 < 0.002 度

- 经度值未正确关联到格网单元中心，误差 < 0.02 度

见[数据提供方的技术说明](https://www1.ncdc.noaa.gov/pub/data/sds/cdr/CDRs/AVHRR%20Surface%20Reflectance/TechNote.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1981 年至 2019 年；分辨率：5,566 米。
- 时间范围：1981-06-24 至 2019-05-16

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 归一化差值植被指数。 | 5566 |  |
| TIMEOFDAY | 自一天开始的小时数。 | 5566 |  |
| QA | 质量控制位标志。 | 5566 |  |

## 能拿来做什么

- 气候数据记录应用
- 植被长期变化监测
- 气候变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/NDVI/V4');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/NDVI/V4`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_NDVI_V4

## 许可与引用

- 许可：proprietary
- 关键词：avhrr, cdr, daily, land, ndvi, noaa, vegetation-indices
- 数据引用：Eric Vermote, Chris Justice, Ivan Csiszar, Jeff Eidenshink, Ranga Myneni,
Frederic Baret, Ed Masuoka, Robert Wolfe, Martin Claverie and NOAA CDR
Program (2014): NOAA Climate Data Record (CDR) of Normalized Difference
Vegetation Index (NDVI), Version 4. [indicate subset used]. NOAA National
Climatic Data Center.
[doi:10.7289/V5PZ56R6](https://data.nodc.noaa.gov/cgi-bin/iso?id=gov.noaa.ncdc:C00813)

- DOI：10.7289/V5PZ56R6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR AVHRR LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 5](/pages/27c7ed95/)
- [NOAA CDR AVHRR NDVI：归一化差值植被指数，版本 5](/pages/a0ccef04/)
- [NOAA CDR VIIRS LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 1](/pages/8b7e1f94/)
- [NOAA CDR VIIRS NDVI：归一化差值植被指数，版本 1](/pages/ea9a554f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
