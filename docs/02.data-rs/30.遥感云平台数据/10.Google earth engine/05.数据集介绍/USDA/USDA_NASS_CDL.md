---
title: "USDA NASS Cropland Data Layers"
date: 2026-11-03 12:00:00
permalink: /pages/913a0028/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "cdl"
  - "crop"
  - "landcover"
  - "nass"
  - "usda"
---

# USDA NASS Cropland Data Layers

## 数据集简介

The Cropland Data Layer (CDL) is a crop-specific land cover data layer
created annually for the continental United States using moderate
resolution satellite imagery and extensive agricultural ground truth.
The CDL is created by the USDA, National Agricultural Statistics
Service (NASS), Research and Development Division, Geospatial
Information Branch, Spatial Analysis Research Section.

For detailed FAQ please visit [CropScape and Cropland Data
Layers - FAQs](https://www.nass.usda.gov/Research_and_Science/Cropland/sarsfaqs2.php).

To explore details about the classification accuracies and utility of
the data, see
[state-level omission and commission errors by crop type and year](https://www.nass.usda.gov/Research_and_Science/Cropland/metadata/meta.php).

The asset date is aligned with the calendar year of harvest. For most crops
the planted and harvest year are the same. Some exceptions: winter wheat is
unique, as it is planted in the prior year. A hay crop like alfalfa could
have been planted years prior.

For winter wheat the data also have a class called
"Double Crop Winter Wheat/Soybeans". Some mid-latitude areas of the US have
conditions such that a second crop (usually soybeans) can be planted
immediately after the harvest of winter wheat and itself still be harvested
within the same year. So for mapping winter wheat areas use both classes
(use both values 24 and 26).

While the CDL date is aligned with year of harvest, the map itself is
more representative of what was planted. In other words, a small percentage
of fields on a given year will not be harvested.

Some non-agricultural categories are duplicate due to
[two very different epochs in methodology](https://www.google.com/url?sa=D&q=https%3A%2F%2Fwww.nass.usda.gov%2FResearch_and_Science%2FCropland%2F).

The non-ag codes 63-65 and 81-88 are holdovers from the older
methodology and will only appear in CDLs from 2007 and earlier. The non-ag
codes from 111-195 are from the current methodology which uses the USGS NLCD
as non-ag training and will only appear in CDLs 2007 and newer.

2007 was a transition year so there may be both sets of categories in the
2007 national product but will not appear within the same state.

Note: The 2024 CDL only has the data band. The cultivated and
confidence bands are yet to be released by the provider.

## 基本信息

- 数据集编号（Earth Engine ID）：`USDA/NASS/CDL`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA National Agricultural Statistics Service、Google Earth Engine
- 时间范围：1997-01-01 至 2025-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：agriculture, cdl, crop, landcover, nass, usda

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cropland | Main crop-specific land cover classification. | 30 |  |
| cultivated | Classification layer for identifying cultivated and non-cultivated land cover. Available from 2013 to 2023. | 30 |  |
| confidence | Per-pixel predicted confidence of the given classification, with 0 being the least confident and 100 the most confident. Available from 2008 to 2023 (Note: Confidence for Florida and Washington D.C. is unavailable for 2010).  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USDA/NASS/CDL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USDA_NASS_CDL
- 数据引用：USDA National Agricultural Statistics Service Cropland Data Layer. {YEAR}.
Published crop-specific data layer [Online]. Available at
[https://nassgeodata.gmu.edu/CropScape/](https://nassgeodata.gmu.edu/CropScape/)
(accessed {DATE}; verified {DATE}). USDA-NASS, Washington, DC.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
