---
title: "WorldPop Global Project Population Data (R2025A): Estimated Residential Population per 100x100m Grid Square"
date: 2026-11-03 12:00:00
permalink: /pages/093b5f8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "demography"
  - "population"
  - "worldpop"
---

# WorldPop Global Project Population Data (R2025A): Estimated Residential Population per 100x100m Grid Square

## 数据集简介

The WorldPop project aims to provide detailed and open-access population
distribution datasets, built using transparent and peer-reviewed approaches,
to facilitate the accurate measurement of the impacts of population growth,
for monitoring changes, and for planning interventions.

Full details on the methods and datasets used in constructing the
data, along with open access publications, are provided on the
[WorldPop website](https://www.worldpop.org/). In brief, recent census-based
population counts matched to their associated administrative units are
disaggregated to ~100x100m grid cells through machine learning approaches
that exploit the relationships between population densities and a range of
geospatial covariate layers. The mapping approach
is Random Forest-based dasymetric redistribution.

This dataset depicts estimated number of people
residing in each grid cell for annual epochs from 2015 through 2030 (Release R2025A, v1).
Individual country rasters are constrained to settlement areas and adjusted to
match national population estimates.

## 基本信息

- 数据集编号（Earth Engine ID）：`WorldPop/GP/100m/R2025A/v1/pop`
- 数据类型：影像集合（ImageCollection）
- 提供方：WorldPop、Google Earth Engine
- 时间范围：2015-01-01 至 2031-01-01
- 空间分辨率：100 米
- 许可：CC-BY-4.0
- 关键词：demography, population, worldpop

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population | Estimated number of people residing in each grid cell | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WorldPop/GP/100m/R2025A/v1/pop');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WorldPop_GP_100m_R2025A_v1_pop
- 数据引用：Bondarenko M., Priyatikanto R., Tejedor-Garavito N., Zhang W., McKeen T., Cunningham A.,
Woods T., Hilton J., Cihan D., Nosatiuk B., Brinkhoff T., Tatem A., Sorichetta A. 2025.
Constrained estimates of 2015-2030 total number of people per grid square at a resolution of 3 arc
(approximately 100m at the equator) R2025A version v1. Global Demographic Data Project - Funded by
The Bill and Melinda Gates Foundation (INV-045237). WorldPop - School of Geography and Environmental
Science, University of Southampton.
[doi:10.5258/SOTON/WP00839](https://doi.org/10.5258/SOTON/WP00839)

- DOI：10.5258/SOTON/WP00839

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
