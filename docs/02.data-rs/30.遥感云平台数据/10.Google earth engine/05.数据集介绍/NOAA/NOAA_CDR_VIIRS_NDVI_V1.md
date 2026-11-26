---
title: "NOAA CDR VIIRS NDVI：归一化差值植被指数，版本 1"
date: 2026-11-03 12:00:00
permalink: /pages/ea9a554f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "daily"
  - "land"
  - "ndvi"
  - "noaa"
  - "vegetation-indices"
  - "viirs"
---

# NOAA CDR VIIRS NDVI：归一化差值植被指数，版本 1

英文原名：NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1

## 这是什么数据

本数据集包含源自可见光红外成像辐射计套件（VIIRS）地表反射率的 NOAA 气候数据记录（CDR）的格网逐日归一化差值植被指数（NDVI）。数据记录从 2014 年起使用 NOAA 极轨卫星的数据。数据投影在 0.05 度 x 0.05 度全球格网上。本数据集是由 NASA 戈达德航天飞行中心（GSFC）与马里兰大学（UMD）生产的陆地表面 CDR 产品之一。

本数据集的已知问题包括：

- TIMEOFDAY 变量包含过大 1 天的值

- 纬度值未正确关联到格网单元中心，误差 < 0.002 度

- 经度值未正确关联到格网单元中心，误差 < 0.02 度

见[数据提供方的技术说明](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Normalized_Difference_Vegetation_Index/VIIRS/AlgorithmDescriptionVIIRS_01B-20b.pdf)。

提供方注：N-19（最后一颗搭载 AVHRR 传感器的 NOAA 卫星）的轨道漂移开始严重降低反演产品质量。因此，VIIRS 现在是 2014 年至今这些产品使用的主要传感器。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：2014 年至 2026 年；分辨率：5,566 米。
- 时间范围：2014-01-01 至 2026-10-29

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
var dataset = ee.ImageCollection('NOAA/CDR/VIIRS/NDVI/V1');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/VIIRS/NDVI/V1`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_VIIRS_NDVI_V1

## 许可与引用

- 许可：proprietary
- 关键词：cdr, daily, land, ndvi, noaa, vegetation-indices, viirs
- 数据引用：Cite as: Vermote, Eric; NOAA CDR Program. (2022): NOAA Climate Data Record
(CDR) of VIIRS Normalized Difference Vegetation Index (NDVI), Version 1.
[indicate subset used]. NOAA National Centers for Environmental Information.
[https://doi.org/10.25921/gakh-st76](https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C01677/html)

- DOI：10.25921/gakh-st76

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR AVHRR LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 5](/pages/27c7ed95/)
- [NOAA CDR AVHRR NDVI：归一化差值植被指数，版本 5](/pages/a0ccef04/)
- [NOAA CDR VIIRS LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 1](/pages/8b7e1f94/)
- [NOAA CDR AVHRR LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 4 [已弃用]](/pages/18fe53c5/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
