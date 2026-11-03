---
title: "RCMAP Rangeland Trends Year for Component Timeseries  (1985-2023), v06"
date: 2026-11-03 12:00:00
permalink: /pages/dba91d12/
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

# RCMAP Rangeland Trends Year for Component Timeseries  (1985-2023), v06

## 数据集简介

This collection includes RCMAP yearly products from 1985 through 2023. The RCMAP (Rangeland Condition Monitoring Assessment and Projection)
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

The temporal patterns were assessed in each RCMAP component with two
approaches, 1) linear trends and 2) a breaks and stable states method
with an 8-year temporal moving window based on structural change at the
pixel level. Linear trend products include slope and p-value calculated
from least squares linear regression. The slope represents the average
percent cover change per year over the times-series and the p-value
reflects the confidence of change in each pixel. The structural change
method partitions the time-series into segments of similar slope values,
with statistically significant breakpoints indicating perturbations to the
prior trajectory. The break point trends analysis suite relies on
structural break methods, resulting in the identification of the number
and timing of breaks in the time-series, and the significance of each
segment. The following statistics were produced: 1) for each component,
each year, the presence/absence of breaks, 2) the slope, p-value, and
standard error of the segment occurring in each year, 3) the overall
model R2 (quality of model fit to the temporal profile), and 4) an index,
Total Change Intensity. This index reflects the total amount of change
occurring across components in that pixel. The linear and structural
change methods generally agreed on patterns of change, but the latter
found breaks more often, with at least one break point in most pixels.
The structural change model provides more robust statistics on the
significant minority of pixels with non-monotonic trends, while
detrending some interannual signal potentially superfluous from a
long-term perspective.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS_YEAR`
- 数据类型：影像集合（ImageCollection）
- 提供方：United States Geological Survey and Bureau of Land Management、Google Earth Engine、Google Earth Engine
- 时间范围：1985-01-01 至 2023-12-31
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：climate-change, disturbance, landsat-derived, landuse-landcover, nlcd, rangeland, trends

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| annual_herbaceous_break_point | Annual structural breaks in each component of annual herbaceous present or absent  | 30 |  |
| bare_ground_break_point | Annual structural breaks in each component of bare ground present or absent  | 30 |  |
| herbaceous_break_point | Annual structural breaks in each component of herbaceous present or absent  | 30 |  |
| litter_break_point | Annual structural breaks in each component of litter present or absent  | 30 |  |
| sagebrush_break_point | Annual structural breaks in each component of sagebrush present or absent  | 30 |  |
| shrub_break_point | Annual structural breaks in each component of shrub present or absent  | 30 |  |
| shrub_height_break_point | Annual structural breaks in each component of shrub height present or absent  | 30 |  |
| non_sagebrush_shrub_break_point | Annual structural breaks in each component of non sagebrush shrub present or absent  | 30 |  |
| perennial_herbaceous_break_point | Annual structural breaks in each component of perennial herbaceous present or absent  | 30 |  |
| tree_break_point | Annual structural breaks in each component of tree present or absent  | 30 |  |
| annual_herbaceous_segment_pvalue | P-values of structural break segments within each component of annual herbaceous per year  | 30 |  |
| bare_ground_segment_pvalue | P-values of structural break segments within each component of bare ground per year  | 30 |  |
| herbaceous_segment_pvalue | P-values of structural break segments within each component of herbaceous per year  | 30 |  |
| litter_segment_pvalue | P-values of structural break segments within each component of litter per year  | 30 |  |
| sagebrush_segment_pvalue | P-values of structural break segments within each component of sagebrush per year  | 30 |  |
| shrub_segment_pvalue | P-values of structural break segments within each component of shrub per year  | 30 |  |
| shrub_height_segment_pvalue | P-values of structural break segments within each component of shrub height per year  | 30 |  |
| non_sagebrush_shrub_segment_pvalue | P-values of structural break segments within each component of non sagebrush shrub per year  | 30 |  |
| perennial_herbaceous_segment_pvalue | P-values of structural break segments within each component of perennial herbaceous per year  | 30 |  |
| tree_segment_pvalue | P-values of structural break segments within each component of tree per year  | 30 |  |
| annual_herbaceous_segment_slope | Annual slope of structural break segments within each component of annual herbaceous  | 30 |  |
| bare_ground_segment_slope | Annual slope of structural break segments within each component of bare ground  | 30 |  |
| herbaceous_segment_slope | Annual slope of structural break segments within each component of herbaceous  | 30 |  |
| litter_segment_slope | Annual slope of structural break segments within each component of litter  | 30 |  |
| sagebrush_segment_slope | Annual slope of structural break segments within each component of sagebrush  | 30 |  |
| shrub_segment_slope | Annual slope of structural break segments within each component of shrub  | 30 |  |
| shrub_height_segment_slope | Annual slope of structural break segments within each component of shrub height  | 30 |  |
| non_sagebrush_shrub_segment_slope | Annual slope of structural break segments within each component of non sagebrush shrub  | 30 |  |
| perennial_herbaceous_segment_slope | Annual slope of structural break segments within each component of perennial herbaceous  | 30 |  |
| tree_segment_slope | Annual slope of structural break segments within each component of tree  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS_YEAR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2023_REL_RCMAP_V6_TRENDS_YEAR
- 数据引用：Rigge, M.B., Bunde, B., Postma, K., and Shi, H., 2024,
Rangeland Condition Monitoring Assessment and Projection (RCMAP)
Fractional Component Time-Series Across the Western U.S. 1985-2023:
U.S. Geological Survey data release,
[doi:10.5066/P9SJXUI1](https://doi.org/10.5066/P9SJXUI1).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
