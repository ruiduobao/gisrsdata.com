---
title: "WorldPop Global Project Population Data: Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square"
date: 2026-11-03 12:00:00
permalink: /pages/0b732317/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "demography"
  - "population"
  - "worldpop"
---

# WorldPop Global Project Population Data: Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square

## 数据集简介

Global high-resolution, contemporary data on human population distributions are
a prerequisite for the accurate measurement of the impacts of population
growth, for monitoring changes, and for planning interventions. The WorldPop
project aims to meet these needs through the provision of detailed and open
access population distribution datasets built using transparent and
peer-reviewed approaches.

Full details on the methods and datasets used in constructing the
data, along with open access publications, are provided on the
[WorldPop website](https://www.worldpop.org/). In brief, recent census-based
population counts matched to their associated administrative units are
disaggregated to ~100x100m grid cells through machine learning approaches
that exploit the relationships between population densities and a range of
geospatial covariate layers. The mapping approach
is Random Forest-based dasymetric redistribution.

This dataset contains breakdown of estimated population by age
and gender groups. Currently only 2020 data are present.

[See explanation of constrained vs unconstrained datasets](https://www.worldpop.org/methods/top_down_constrained_vs_unconstrained).

Further WorldPop gridded datasets on population age structures,
poverty, urban growth, and population dynamics are freely available on
the WorldPop website. WorldPop represents a collaboration between
researchers at the University of Southampton, Universite Libre de
Bruxelles, and University of Louisville. The project is principally funded by
the Bill and Melinda Gates Foundation.

## 基本信息

- 数据集编号（Earth Engine ID）：`WorldPop/GP/100m/pop_age_sex`
- 数据类型：影像集合（ImageCollection）
- 提供方：WorldPop、Google Earth Engine
- 时间范围：2020-01-01 至 2021-01-01
- 空间分辨率：92.77 米
- 许可：CC-BY-4.0
- 关键词：demography, population, worldpop

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population | Estimated number of people residing in each grid cell | 92.77 |  |
| M_0 | Estimated number of men between 0 and 1 years old residing in each grid cell | 92.77 |  |
| M_1 | Estimated number of men between 1 and 4 years old residing in each grid cell | 92.77 |  |
| M_5 | Estimated number of men between 5 and 9 years old residing in each grid cell | 92.77 |  |
| M_10 | Estimated number of men between 10 and 14 years old residing in each grid cell | 92.77 |  |
| M_15 | Estimated number of men between 15 and 19 years old residing in each grid cell | 92.77 |  |
| M_20 | Estimated number of men between 20 and 24 years old residing in each grid cell | 92.77 |  |
| M_25 | Estimated number of men between 25 and 29 years old residing in each grid cell | 92.77 |  |
| M_30 | Estimated number of men between 30 and 34 years old residing in each grid cell | 92.77 |  |
| M_35 | Estimated number of men between 35 and 39 years old residing in each grid cell | 92.77 |  |
| M_40 | Estimated number of men between 40 and 44 years old residing in each grid cell | 92.77 |  |
| M_45 | Estimated number of men between 45 and 49 years old residing in each grid cell | 92.77 |  |
| M_50 | Estimated number of men between 50 and 54 years old residing in each grid cell | 92.77 |  |
| M_55 | Estimated number of men between 55 and 59 years old residing in each grid cell | 92.77 |  |
| M_60 | Estimated number of men between 60 and 64 years old residing in each grid cell | 92.77 |  |
| M_65 | Estimated number of men between 65 and 69 years old residing in each grid cell | 92.77 |  |
| M_70 | Estimated number of men between 70 and 74 years old residing in each grid cell | 92.77 |  |
| M_75 | Estimated number of men between 75 and 79 years old residing in each grid cell | 92.77 |  |
| M_80 | Estimated number of men 80 years old or above residing in each grid cell | 92.77 |  |
| F_0 | Estimated number of women between 0 and 1 years old residing in each grid cell | 92.77 |  |
| F_1 | Estimated number of women between 1 and 4 years old residing in each grid cell | 92.77 |  |
| F_5 | Estimated number of women between 5 and 9 years old residing in each grid cell | 92.77 |  |
| F_10 | Estimated number of women between 10 and 14 years old residing in each grid cell | 92.77 |  |
| F_15 | Estimated number of women between 15 and 19 years old residing in each grid cell | 92.77 |  |
| F_20 | Estimated number of women between 20 and 24 years old residing in each grid cell | 92.77 |  |
| F_25 | Estimated number of women between 25 and 29 years old residing in each grid cell | 92.77 |  |
| F_30 | Estimated number of women between 30 and 34 years old residing in each grid cell | 92.77 |  |
| F_35 | Estimated number of women between 35 and 39 years old residing in each grid cell | 92.77 |  |
| F_40 | Estimated number of women between 40 and 44 years old residing in each grid cell | 92.77 |  |
| F_45 | Estimated number of women between 45 and 49 years old residing in each grid cell | 92.77 |  |
| F_50 | Estimated number of women between 50 and 54 years old residing in each grid cell | 92.77 |  |
| F_55 | Estimated number of women between 55 and 59 years old residing in each grid cell | 92.77 |  |
| F_60 | Estimated number of women between 60 and 64 years old residing in each grid cell | 92.77 |  |
| F_65 | Estimated number of women between 65 and 69 years old residing in each grid cell | 92.77 |  |
| F_70 | Estimated number of women between 70 and 74 years old residing in each grid cell | 92.77 |  |
| F_75 | Estimated number of women between 75 and 79 years old residing in each grid cell | 92.77 |  |
| F_80 | Estimated number of women 80 years old or above residing in each grid cell | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WorldPop/GP/100m/pop_age_sex');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WorldPop_GP_100m_pop_age_sex
- 数据引用：Please cite the WorldPop website as the source: [www.worldpop.org]
(https://www.worldpop.org).

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
