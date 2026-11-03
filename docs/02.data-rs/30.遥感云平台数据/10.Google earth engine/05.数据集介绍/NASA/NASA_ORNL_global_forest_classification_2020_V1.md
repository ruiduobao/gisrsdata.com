---
title: "Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1"
date: 2026-11-03 12:00:00
permalink: /pages/750f4ec5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "biomass"
  - "carbon"
  - "classification"
  - "forest"
  - "forest-biomass"
  - "ipcc"
  - "nasa"
  - "primary-forest"
  - "secondary-forest"
---

# Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1

## 数据集简介

This dataset provides classes of global forests delineated by
status/condition in 2020 at approximately 30m resolution. The data support
generating Tier 1 estimates for Aboveground dry woody Biomass Density (AGBD)
in natural forests in the 2019 Refinement to the 2006 IPCC Guidelines for
National Greenhouse Gas Inventories. Forest classes include primary, young
secondary (<=20 years), and old secondary forests (>20 years). Classification
was based on a Boolean combination of a suite of existing Earth Observation
(EO) products of forest tree cover, height, age, and land use classification
layers representing years 2000 to 2020. This forest status/condition
classification prioritizes the reduction of potential errors of commission in
the delineations by minimizing the inclusion of ambiguous pixels. Hence, it
provides a conservative estimate of global forest area, identifying
approximately 3.26 billion ha of forests worldwide.

### Quality Assessment

These data provide a comprehensive compilation of the latest published
datasets on forest conditions, but the nonexistence of any independent sample
of global data that would enable the validation of these delineations is a
constraint. Hence, the global forest status/condition classification has not
been validated.

### Data Acquisition, Materials, and Methods

The forest status/condition classification is created by conducting a
Boolean analysis of a suite of existing datasets (see Table 1,
[Hunka et al., 2024](https://doi.org/10.1038/s41597-024-03930-9)),
including satellite-derived forest tree cover, height, age,
and land use classification layers. In this approach, layers that
identify a potential forest status/condition class (e.g. primary forests) are
merged, and layers that identify sources of disagreement (e.g. presence of
plantations or deforestation detected in the delineated primary forests) are
used to remove areas of potential commission errors.

The primary forest class is established using datasets identifying
intact/primary forests, with a high forest integrity index, the presence of
tree cover and forest heights ≥5 m and no known forest loss events, planted
forests or plantations.

The young secondary forest class captures pixels that had changes in
forest height or cover between 2000 and 2020, excluding planted forests and
plantations. These forests were identified by heights ≥5 m in 2020 and either
(a) heights <5 m in 2000 or (b) heights ≥5 m in 2000 but having experienced
tree cover loss after 2000.

The old secondary forest class captures the remainder of pixels with
forests after excluding the primary and young secondary forest classes. These
pixels had forest heights ≥5 m in both 2000 and 2020 with no tree cover loss
nor forest disturbances detected after 2000, nor any planted forests or
plantations.

[Schematic of analysis workflow](https://daac.ornl.gov/CMS/guides/CMS_Global_Forest_Age_Fig2.jpg)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ORNL/global_forest_classification_2020/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：2020-01-01 至 2020-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：aboveground, biomass, carbon, classification, forest, forest-biomass, ipcc, nasa, primary-forest, secondary-forest

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Forest Type | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/ORNL/global_forest_classification_2020/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_global_forest_classification_2020_V1
- 数据引用：Hunka, N., L. Duncanson, J. Armston, R.O. Dubayah, S.P. Healey, M.
Santoro, P. May, A. Araza, C. Bourgain, P.M. Montesano, C.S. Neigh, H.
Grantham, V. Potapov, S. Turubanova, A. Tyukavina, J. Richter, N. Harris, M.
Urbazaev, A. Pascual, D. Requena Suarez, M. Herold, B. Poulter, S.N. Wilson,
G. Grassi, S. Federici, M.J. Sanz Sanchez, and J. Melo. 2024. Classification
of Global Forests for IPCC Aboveground Biomass Tier 1 Estimates, 2020. ORNL
DAAC, Oak Ridge, Tennessee, USA.
[https://doi.org/10.3334/ORNLDAAC/2345](https://doi.org/10.3334/ORNLDAAC/2345)

- DOI：10.3334/ORNLDAAC/2345

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
