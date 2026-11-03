---
title: "Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m"
date: 2026-11-03 12:00:00
permalink: /pages/3d80ca78/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "umd"
---

# Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m

## 数据集简介

The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain
estimates of the percentage of horizontal ground in each 30-m pixel covered
by woody vegetation greater than 5 meters in height. The dataset is available
for four epochs centered on the years 2000, 2005, 2010 and 2015. The dataset
is derived from the GFCC Surface Reflectance product (GFCC30SR), which is
based on enhanced Global Land Survey (GLS) datasets. The GLS datasets are
composed of high-resolution Landsat 5 Thematic Mapper (TM) and Landsat 7
Enhanced Thematic Mapper Plus (ETM+) images at 30 meter resolution.

Tree cover, the proportional, vertically projected area of vegetation
(including leaves, stems, branches, etc.) of woody plants above a given
height, affects terrestrial energy and water exchanges, photosynthesis and
transpiration, net primary production, and carbon and nutrient fluxes. Tree
cover also affects habitat quality and movements of wildlife, residential
property value for humans, and other ecosystem services. The continuous
classification scheme of the VCF product enables better depiction of land
cover gradients than traditional discrete classification schemes.
Importantly for detection and monitoring of forest changes (e.g.,
deforestation and degradation), tree cover provides a measurable attribute
upon which to define forest cover and its changes. Changes in tree cover
over time can be used to monitor and retrieve site-specific histories of
forest change.

The dataset has been produced for four year epochs: 2000, 2005, 2010, and
2015 with an image in the collection for each available WRS2 path/row.

Documentation:

* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

Provider's Note: Due to the end of NASA MEaSUREs funding, free versions of this dataset are no
longer being produced. Interested parties can obtain updated and expanded versions at
www.terraPulse.com.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/MEASURES/GFCC/TC/v3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2015-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：forest, forest-biomass, glcf, landsat-derived, nasa, umd

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tree_canopy_cover | The percentage of pixel area covered by trees. | 30 |  |
| uncertainty | RMSE for tree-canopy_cover | 30 |  |
| source_index | Identity of source image used for the particular pixel. This is an index into the per image metadata array 'sources'. Only available for 2000, 2005, and 2010.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/MEASURES/GFCC/TC/v3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_MEASURES_GFCC_TC_v3
- 数据引用：Paper/Methods Citation: Sexton, J. O., Song, X.-P., Feng, M., Noojipady,
P., Anand, A., Huang, C., Kim, D.-H., Collins, K.M., Channan, S.,
DiMiceli, C., Townshend, J.R.G. (2013). Global, 30-m resolution
continuous fields of tree cover: Landsat-based rescaling of MODIS
Vegetation Continuous Fields with lidar-based estimates of error.
International Journal of Digital Earth, 130321031236007.
[doi:10.1080/17538947.2013.786146](https://doi.org/10.1080/17538947.2013.786146).

- DOI：10.5067/MEaSUREs/GFCC/GFCC30TC.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
