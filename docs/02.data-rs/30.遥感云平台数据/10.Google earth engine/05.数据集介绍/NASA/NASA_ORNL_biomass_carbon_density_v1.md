---
title: "Global Aboveground and Belowground Biomass Carbon Density Maps"
date: 2026-11-03 12:00:00
permalink: /pages/f5cf8a95/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "belowground"
  - "biomass"
  - "carbon"
  - "density"
  - "forest"
  - "forest-biomass"
  - "nasa"
  - "ornl"
  - "vegetation"
---

# Global Aboveground and Belowground Biomass Carbon Density Maps

## 数据集简介

This dataset provides temporally consistent and harmonized global maps of aboveground and
belowground biomass carbon density for the year 2010 at a 300-m spatial resolution. The
aboveground biomass map integrates land-cover specific, remotely sensed maps of woody,
grassland, cropland, and tundra biomass. Input maps were amassed from the published literature
and, where necessary, updated to cover the focal extent or time period. The belowground biomass
map similarly integrates matching maps derived from each aboveground biomass map and land-cover
specific empirical models. Aboveground and belowground maps were then integrated separately
using ancillary maps of percent tree cover and landcover and a rule-based decision tree. Maps
reporting the accumulated uncertainty of pixel-level estimates are also provided.

Provider's note: The UN Environment Programme World Conservation Monitoring
Centre (UNEP-WCMC) carbon biomass dataset
represents conditions between 1982 and 2010 depending on land cover type. The relative patterns
of carbon stocks are well represented with this dataset. The [NASA/ORNL carbon biomass dataset](https://daac.ornl.gov/VEGETATION/guides/Global_Maps_C_Density_2010.html)
represents biomass conditions for 2010, with uncertainty estimates at the pixel-level.
Additional biomass of non-dominant land cover types are represented within each pixel. For more
detailed information, please refer to the papers describing each dataset: [WCMC](WCMC_biomass_carbon_density_v1_0)
[(Soto-Navarro et al. 2020)](https://royalsocietypublishing.org/doi/full/10.1098/rstb.2019.0128)
and NASA/ORNL [(Spawn et al. 2020)](https://www.nature.com/articles/s41597-020-0444-4).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ORNL/biomass_carbon_density/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：2010-01-01 至 2010-12-31
- 空间分辨率：300 米
- 许可：proprietary
- 关键词：aboveground, belowground, biomass, carbon, density, forest, forest-biomass, nasa, ornl, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| agb | Aboveground living biomass carbon stock density of combined woody and herbaceous cover in 2010. This includes carbon stored in living plant tissues that are located above the earth's surface (stems, bark, branches, twigs). This does not include leaf litter or coarse woody debris that were once attached to living plants but have since been deposited and are no longer living.  | 300 |  |
| agb_uncertainty | Uncertainty of estimated aboveground living biomass carbon density of combined woody and herbaceous cover in 2010. Uncertainty represents the cumulative standard error that has been propagated through the harmonization process using summation in quadrature.  | 300 |  |
| bgb | Belowground living biomass carbon stock density of combined woody and herbaceous cover in 2010. This includes carbon stored in living plant tissues that are located below the earth's surface (roots). This does not include dead and/or dislocated root tissue, nor does it include soil organic matter.  | 300 |  |
| bgb_uncertainty | Uncertainty of estimated belowground living biomass carbon density of combined woody and herbaceous cover in 2010. Uncertainty represents the cumulative standard error that has been propagated through the harmonization process using summation in quadrature.  | 300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/ORNL/biomass_carbon_density/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_biomass_carbon_density_v1
- 数据引用：Spawn, S.A., Sullivan, C.C., Lark, T.J. et al. Harmonized global maps of above and
belowground biomass carbon density in the year 2010. Sci Data 7, 112 (2020).
[doi:10.1038/s41597-020-0444-4](https://doi.org/10.1038/s41597-020-0444-4)

- DOI：10.3334/ORNLDAAC/1763

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
