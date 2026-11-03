---
title: "Hansen Global Forest Change v1.6 (2000-2018) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/bcb36431/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "geophysical"
  - "hansen"
  - "landsat-derived"
  - "umd"
---

# Hansen Global Forest Change v1.6 (2000-2018) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Results from time-series analysis of Landsat images in characterizing
global forest extent and change.

The 'first' and 'last' bands are reference multispectral imagery from the
first and last available years for Landsat spectral bands 3, 4, 5, and 7.
Reference composite imagery represents median observations from a set of
quality-assessed growing-season observations for each of these bands.

Please see the [User Notes](https://earthenginepartners.appspot.com/science-2013-global-forest/download_v1.6.html)
for this Version 1.6 update, as well as the associated journal article:
Hansen, Potapov, Moore, Hancher et al. "High-resolution global maps of
21st-century forest cover change." Science 342.6160 (2013): 850-853.

Note that updated versions of this data are available. The newest version,
Version 1.9 (produced with data through 2021), is available as
UMD/hansen/global_forest_change_2021_v1_9.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMD/hansen/global_forest_change_2018_v1_6`
- 数据类型：影像（Image）
- 提供方：Hansen/UMD/Google/USGS/NASA、Google Earth Engine
- 时间范围：2000-01-01 至 2019-01-01
- 空间分辨率：30.92 米
- 许可：CC-BY-4.0
- 关键词：forest, forest-biomass, geophysical, hansen, landsat-derived, umd

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| treecover2000 | Tree canopy cover for year 2000, defined as canopy closure for all vegetation taller than 5m in height.  | 30.92 |  |
| loss | Forest loss during the study period, defined as a stand-replacement disturbance (a change from a forest to non-forest state).  | 30.92 |  |
| gain | Forest gain during the period 2000-2012, defined as the inverse of loss (a non-forest to forest change entirely within the study period). Note that this has not been updated in subsequent versions.  | 30.92 |  |
| first_b30 | Landsat 7 band 3 (red) cloud-free image composite. Reference multispectral imagery from the first available year, typically 2000.  | 30.92 | 0.63-0.69&micro;m |
| first_b40 | Landsat 7 band 4 (NIR) cloud-free image composite. Reference multispectral imagery from the first available year, typically 2000.  | 30.92 | 0.77-0.90&micro;m |
| first_b50 | Landsat 7 band 5 (SWIR) cloud-free image composite. Reference multispectral imagery from the first available year, typically 2000.  | 30.92 | 1.55-1.75&micro;m |
| first_b70 | Landsat 7 band 7 (SWIR) cloud-free image composite. Reference multispectral imagery from the first available year, typically 2000.  | 30.92 | 2.09-2.35&micro;m |
| last_b30 | Landsat 7 band 3 (red) cloud-free image composite. Reference multispectral imagery from the last available year, typically the last year of the study period.  | 30.92 | 0.63-0.69&micro;m |
| last_b40 | Landsat 7 band 4 (NIR) cloud-free image composite. Reference multispectral imagery from the last available year, typically the last year of the study period.  | 30.92 | 0.77-0.90&micro;m |
| last_b50 | Landsat 7 band 5 (SWIR) cloud-free image composite. Reference multispectral imagery from the last available year, typically the last year of the study period.  | 30.92 | 1.55-1.75&micro;m |
| last_b70 | Landsat 7 band 7 (SWIR) cloud-free image composite. Reference multispectral imagery from the last available year, typically the last year of the study period.  | 30.92 | 2.09-2.35&micro;m |
| datamask | Three values representing areas of no data, mapped land surface, and permanent water bodies. | 30.92 |  |
| lossyear | Year of gross forest cover loss event. Forest loss during the study period, defined as a stand-replacement disturbance, or a change from a forest to non-forest state. Encoded as either 0 (no loss) or else a value in the range 1-18, representing loss detected primarily in the year 2001-2018, respectively.  | 30.92 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('UMD/hansen/global_forest_change_2018_v1_6');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2018_v1_6
- 数据引用：Hansen, M. C., P. V. Potapov, R. Moore, M. Hancher, S. A. Turubanova, A.
Tyukavina, D. Thau, S. V. Stehman, S. J. Goetz, T. R. Loveland, A.
Kommareddy, A. Egorov, L. Chini, C. O. Justice, and J. R. G. Townshend.
2013. "High-Resolution Global Maps of 21st-Century Forest Cover Change."
Science 342 (15 November): 850-53. Data available on-line at:
[https://glad.earthengine.app/view/global-forest-change](https://glad.earthengine.app/view/global-forest-change).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
