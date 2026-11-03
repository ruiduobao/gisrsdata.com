---
title: "RCMAP Rangeland Component Timeseries (1985-2023), v06"
date: 2026-11-03 12:00:00
permalink: /pages/6303ae17/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate-change"
  - "disturbance"
  - "landsat-derived"
  - "landuse-landcover"
  - "nlcd"
  - "rangeland"
  - "trends"
---

# RCMAP Rangeland Component Timeseries (1985-2023), v06

## 数据集简介

'The RCMAP (Rangeland Condition Monitoring Assessment and Projection)
dataset quantifies the percent cover of rangeland components across
western North America using Landsat imagery from 1985-2023. The RCMAP
product suite consists of ten fractional components: annual herbaceous,
bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous,
sagebrush, shrub, tree, and shrub height in addition to the temporal
trends of each component. Several enhancements were made to the RCMAP
process relative to prior generations. First, high-resolution training
was revised using an improved neural-net classifier and modelling approach.
These data serve as foundation to the RCMAP approach. The training
database was further improved by incorporating additional datasets. Next,
the Landsat compositing approach was improved to better capture the range
of conditions from across each year and through time. These composites are
based on Collection 2 Landsat data with improved geolocation accuracy and
dynamic range. Finally, the Canadian portion of the sagebrush biome was
included, which expanded the study area by 29,199 km2.

Processing efficiency has been increased using open-source software and
USGS High-Performance Computing (HPC) resources. The mapping area included
eight regions which were subsequently mosaicked. These data can be used to
answer critical questions regarding the influence of climate change and
the suitability of management practices. Component products can be
downloaded at
[Multi-Resolution Land Characteristics Consortium](https://www.mrlc.gov/data).

See also:

* Rigge, M., H. Shi, C. Homer, P. Danielson, and B. Granneman. 2019.
  Long-term trajectories of fractional component change in the Northern
  Great Basin, USA. Ecosphere 10(6):e02762.
  [doi:10.1002/ecs2.2762](https://doi.org/10.1002/ecs2.2762)

* Rigge, M., C. Homer, L. Cleeves, D. K. Meyer, B. Bunde, H. Shi, G. Xian,
  S. Schell, and M. Bobo. 2020. Quantifying western U.S. rangelands as
  fractional components with multi-resolution remote sensing and in situ
  data. Remote Sensing 12.
  [doi:10.3390/rs12030412](https://doi.org/10.3390/rs12030412)

* Rigge, M., C. Homer, H. Shi, D. Meyer, B.
  Bunde, B. Granneman, K. Postma, P. Danielson, A. Case, and G. Xian. 2021.
  Rangeland Fractional Components Across the Western United States
  from 1985 to 2018. Remote Sensing 13:813.
  [doi:10.3390/rs13040813](https://doi.org/10.3390/rs13040813).',

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/COVER`
- 数据类型：影像集合（ImageCollection）
- 提供方：United States Geological Survey and Bureau of Land Management、Google Earth Engine、Google Earth Engine
- 时间范围：1985-01-01 至 2023-12-31
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：climate-change, disturbance, landsat-derived, landuse-landcover, nlcd, rangeland, trends

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| rangeland_annual_herbaceous | Percent of the pixel covered by annual herbaceous vegetation. | 30 |  |
| rangeland_bare_ground | Percent of the pixel covered by bare ground. | 30 |  |
| rangeland_non_sagebrush_shrub | Percent of the pixel covered by non-sagebrush shrubs. | 30 |  |
| rangeland_herbaceous | Percent of the pixel covered by herbaceous vegetation. | 30 |  |
| rangeland_litter | Percent of the pixel covered by litter. | 30 |  |
| rangeland_sagebrush | Percent of the pixel covered by sagebrush (*Artemisia* spp). | 30 |  |
| rangeland_shrub | Percent of the pixel covered by shrub. | 30 |  |
| rangeland_shrub_height | Average height of shrubs in centimeters. | 30 |  |
| rangeland_perennial_herbaceous | Percent of the pixel covered by perennial herbaceous vegetation. | 30 |  |
| rangeland_tree | Percent of the pixel covered by tree. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/COVER');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2023_REL_RCMAP_V6_COVER
- 数据引用：Rigge, M.B., Bunde, B., Postma, K., and Shi, H., 2024,
Rangeland Condition Monitoring Assessment and Projection (RCMAP)
Fractional Component Time-Series Across the Western U.S. 1985-2023:
U.S. Geological Survey data release,
[doi:10.5066/P9SJXUI1](https://doi.org/10.5066/P9SJXUI1).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
