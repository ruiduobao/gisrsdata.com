---
title: "Global Annual Mangrove Fractional Canopy Cover (1984-2023)"
date: 2026-11-03 12:00:00
permalink: /pages/1d338cf7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "coastal"
  - "forest-biomass"
  - "global"
  - "landsat-derived"
  - "mangrove"
  - "vegetation-indices"
  - "wetland"
---

# Global Annual Mangrove Fractional Canopy Cover (1984-2023)

## 数据集简介

This dataset provides global annual mangrove fractional canopy cover (FCC) at 30-m spatial resolution from 1984 to 2023 to support 
large-scale analyses of long-term mangrove dynamics, including canopy degradation and recovery, blue carbon assessment, and coastal ecosystem monitoring. 
FCC quantifies the proportion of each Landsat pixel occupied by mangrove canopy and is expressed as a percentage ranging from 0% to 100%.

The dataset was generated using time-series Landsat imagery within the Google Earth Engine platform. 
Annual Landsat composites were produced after strict cloud, cloud-shadow, and low-quality observation filtering. 
FCC was then estimated using a linear spectral unmixing approach and spatially constrained to the global mangrove extent for each year. 

The FCC estimates were evaluated against high-resolution Planet imagery across different regions, with root mean square error (RMSE) ranging from 9% to 22%.

Users should note that FCC values are derived from annual median Landsat composites. 
As a result, canopy changes occurring late in a calendar year may be captured in the following year's composite, 
which can introduce a one-year lag in the timing of detected FCC change.
For quick visualization and exploratory analysis, users are encouraged to access 
[the CGMD Earth Engine App](https://zhenzhang.users.earthengine.app/view/globalmangrovedynamic).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/mangrovedatahub2/assets/CGMD-AFCC30`
- 数据类型：影像集合（ImageCollection）
- 提供方：The Mangrove Lab、Google Earth Engine
- 时间范围：1984-01-01 至 2023-12-31
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：annual, coastal, forest-biomass, global, landsat-derived, mangrove, vegetation-indices, wetland

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FCC | Mangrove fractional canopy cover stored as integer percentage cover from 0 to 100 | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/mangrovedatahub2/assets/CGMD-AFCC30');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_mangrovedatahub2_assets_CGMD-AFCC30
- 数据引用：Zhang, Z., Murray, N., Song, X., ... & Friess, D. (2026) Continuous Global Mangrove Dynamics: Annual mangrove fractional canopy cover, 1984-2023 [Data set]. Zenodo. https://doi.org/10.5281/zenodo.18496588



> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
