---
title: "MOD44B.006 Terra Vegetation Continuous Fields Yearly Global 250m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/86fc5ddc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "geophysical"
  - "global"
  - "landuse-landcover"
  - "mod44b"
  - "modis"
  - "nasa"
  - "terra"
  - "tree-cover"
  - "vegetation"
---

# MOD44B.006 Terra Vegetation Continuous Fields Yearly Global 250m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Terra MODIS Vegetation Continuous Fields (VCF)
product is a sub-pixel-level representation of surface vegetation
cover estimates globally. Designed to continuously represent
Earth's terrestrial surface as a proportion of basic vegetation
traits, it provides a gradation of three surface cover components:
percent tree cover, percent non-tree cover, and percent bare.
VCF products provide a continuous, quantitative portrayal of
land surface cover with improved spatial detail, and hence, are
widely used in environmental modeling and monitoring applications.

Generated yearly, the VCF product is produced using monthly
composites of Terra MODIS 250 and 500 meters Land Surface Reflectance
data, including all seven bands, and Land Surface Temperature.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1322/MOD44B_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/113/MOD44B_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD44B)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD44B`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-03-05 至 2023-07-31
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：annual, geophysical, global, landuse-landcover, mod44b, modis, nasa, terra, tree-cover, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Percent_Tree_Cover | Percent of a pixel which is covered by tree canopy | 250 |  |
| Percent_NonTree_Vegetation | Percent of a pixel which is covered by non-tree vegetation | 250 |  |
| Percent_NonVegetated | Percent of a pixel which is not vegetated | 250 |  |
| Quality | Describes those inputs that had poor quality (cloudy, high aerosol, cloud shadow, or view zenith >45&deg;). Each bit in the field represents 1 out of 8 input surface reflectance files to the model.  | 250 |  |
| Percent_Tree_Cover_SD | Standard deviation (SD) of the 30 models that were used to generate the pixel value in the percent tree cover data layer  | 250 |  |
| Percent_NonVegetated_SD | Standard deviation (SD) of the 30 models that were used to generate the pixel value in the percent non-vegetated data layer  | 250 |  |
| Cloud | Clarifies the 'Quality' layer to give the user an indication that the 'bad' data refers to cloudy input data. Each bit in the field represents 1 out of 8 input surface reflectance files to the model.  | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD44B');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44B
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
