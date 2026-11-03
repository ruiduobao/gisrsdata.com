---
title: "RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06"
date: 2026-11-03 12:00:00
permalink: /pages/3cd62e9c/
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

# RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06

## 数据集简介

The RCMAP (Rangeland Condition Monitoring Assessment and Projection)
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

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS`
- 数据类型：影像（Image）
- 提供方：United States Geological Survey and Bureau of Land Management、Google Earth Engine、Google Earth Engine
- 时间范围：1985-01-01 至 2023-12-31
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：climate-change, disturbance, landsat-derived, landuse-landcover, nlcd, rangeland, trends

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| annual_herbaceous_break_point | Number of structural breaks observed in the annual herbaceous time series | 30 |  |
| bare_ground_break_point | Number of structural breaks observed in the bare ground time series | 30 |  |
| herbaceous_break_point | Number of structural breaks observed in the herbaceous time series | 30 |  |
| litter_break_point | Number of structural breaks observed in the litter time series | 30 |  |
| sagebrush_break_point | Number of structural breaks observed in the sagebrush time series | 30 |  |
| shrub_break_point | Number of structural breaks observed in the shrub time series | 30 |  |
| shrub_height_break_point | Number of structural breaks observed in the shrub height time series | 30 |  |
| non_sagebrush_shrub_break_point | Number of structural breaks observed in the non sagebrush shrub time series | 30 |  |
| perennial_herbaceous_break_point | Number of structural breaks observed in the perennial herbaceous time series | 30 |  |
| tree_break_point | Number of structural breaks observed in the tree time series | 30 |  |
| annual_herbaceous_linear_model_pvalue | P-value of linear trends model for annual herbaceous time series | 30 |  |
| bare_ground_linear_model_pvalue | P-value of linear trends model for bare ground time series | 30 |  |
| herbaceous_linear_model_pvalue | P-value of linear trends model for herbaceous time series | 30 |  |
| litter_linear_model_pvalue | P-value of linear trends model for litter time series | 30 |  |
| sagebrush_linear_model_pvalue | P-value of linear trends model for sagebrush time series | 30 |  |
| shrub_linear_model_pvalue | P-value of linear trends model for shrub time series | 30 |  |
| shrub_height_linear_model_pvalue | P-value of linear trends model for shrub height time series | 30 |  |
| non_sagebrush_shrub_linear_model_pvalue | P-value of linear trends model for non sagebrush shrub time series | 30 |  |
| perennial_herbaceous_linear_model_pvalue | P-value of linear trends model for perennial herbaceous time series | 30 |  |
| tree_linear_model_pvalue | P-value of linear trends model for tree time series | 30 |  |
| annual_herbaceous_linear_model_slope | Slope of linear trends model for annual herbaceous time series | 30 |  |
| bare_ground_linear_model_slope | Slope of linear trends model for bare ground time series | 30 |  |
| herbaceous_linear_model_slope | Slope of linear trends model for herbaceous time series | 30 |  |
| litter_linear_model_slope | Slope of linear trends model for litter time series | 30 |  |
| sagebrush_linear_model_slope | Slope of linear trends model for sagebrush time series | 30 |  |
| shrub_linear_model_slope | Slope of linear trends model for shrub time series | 30 |  |
| shrub_height_linear_model_slope | Slope of linear trends model for shrub height time series | 30 |  |
| non_sagebrush_shrub_linear_model_slope | Slope of linear trends model for non sagebrush shrub time series | 30 |  |
| perennial_herbaceous_linear_model_slope | Slope of linear trends model for perennial herbaceous time series | 30 |  |
| tree_linear_model_slope | Slope of linear trends model for tree time series | 30 |  |
| annual_herbaceous_most_recent_break_point | Year of most recent break in the time-series for each component of annual herbaceous time series | 30 |  |
| bare_ground_most_recent_break_point | Year of most recent break in the time-series for each component of bare ground time series | 30 |  |
| herbaceous_most_recent_break_point | Year of most recent break in the time-series for each component of herbaceous time series | 30 |  |
| litter_most_recent_break_point | Year of most recent break in the time-series for each component of litter time series | 30 |  |
| sagebrush_most_recent_break_point | Year of most recent break in the time-series for each component of sagebrush time series | 30 |  |
| shrub_most_recent_break_point | Year of most recent break in the time-series for each component of shrub time series | 30 |  |
| shrub_height_most_recent_break_point | Year of most recent break in the time-series for each component of shrub height time series | 30 |  |
| non_sagebrush_shrub_most_recent_break_point | Year of most recent break in the time-series for each component of non sagebrush shrub time series | 30 |  |
| perennial_herbaceous_most_recent_break_point | Year of most recent break in the time-series for each component of perennial herbaceous time series | 30 |  |
| tree_most_recent_break_point | Year of most recent break in the time-series for each component of tree time series | 30 |  |
| total_change_intensity_index | Total Change Intensity is a derivative index designed to highlight the total amount of change across primary components (shrub, bare ground, litter, and herbaceous). Change indicates the slope values from the structural change analysis. Values are constructed so that 100 means the maximum observed change across all components and 0 means no change.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/TRENDS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2023_REL_RCMAP_V6_TRENDS
- 数据引用：Rigge, M.B., Bunde, B., Postma, K., and Shi, H., 2024,
Rangeland Condition Monitoring Assessment and Projection (RCMAP)
Fractional Component Time-Series Across the Western U.S. 1985-2023:
U.S. Geological Survey data release,
[doi:10.5066/P9SJXUI1](https://doi.org/10.5066/P9SJXUI1).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
