---
title: "CSIRO Global Biodiversity Indicators"
date: 2026-11-03 12:00:00
permalink: /pages/5e19a751/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bhi"
  - "biodiversity"
  - "csiro"
  - "ecosystems"
  - "habitat"
  - "species"
---

# CSIRO Global Biodiversity Indicators

## 数据集简介

The CSIRO biodiversity indicators v4 dataset, produced by CSIRO using the BILBI
(Biogeographic Infrastructure for Large-scale Biodiversity Indicators) framework,
models global terrestrial biodiversity indicators at 30 arcsecond (~1 km) resolution
annually from 2000 to 2024. These indicators provide a system-level view of change
in biodiversity protection, expected persistence, and resilience in the face of
climate change.

A complementary static global weighting surface is available as a standalone image
at CSIRO/BHI/v4_weights. It represents summed compositional similarity across
terrestrial pixels, which is used for calculating regional and global geometric
aggregations of the biodiversity indicators.

For more detailed explanations of the indicators and how they are derived, see
[CSIRO Biodiversity Modelling](https://research.csiro.au/biodiversitymodelling/indicators-tracking-progress-for-biodiversity/).

## 基本信息

- 数据集编号（Earth Engine ID）：`CSIRO/BHI/v4`
- 数据类型：影像集合（ImageCollection）
- 提供方：CSIRO、Google Earth Engine
- 时间范围：2000-01-01 至 2025-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：bhi, biodiversity, csiro, ecosystems, habitat, species

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| bhi | Biodiversity Habitat Index: Estimates the proportion of species diversity retained within each pixel as a function of the area, condition, and connectivity of natural ecosystems.  | 1000 |  |
| beri | Bioclimatic Ecosystem Resilience Index: Estimates the capacity of landscapes to retain species diversity in the face of climate change as a function of the area, condition, and connectivity of natural ecosystems across those landscapes.  | 1000 |  |
| parc_rep | Protected Area Representativeness: Estimates the extent to which a system of terrestrial protected areas is ecologically representative of the full range of environmental and biological diversity in any region.  | 1000 |  |
| parc_con | Protected Area Connectedness: Estimates the extent to which protected areas are functionally connected to one another and to other areas of intact natural ecosystems.  | 1000 |  |
| ecosystem_condition | Ecosystem Condition: Estimates the biological integrity of any location compared to undisturbed reference states (0-100%).  | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CSIRO/BHI/v4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIRO_BHI_v4
- 数据引用：Ware, C., Valavi, R., Vickers, M., Giljohann, K., Mokany, K., Purvis, A.,
Walkden, P., De Palma, A., Duffin, C., Contu, S., Harwood, T., Hoskins, A.,
Ferrier, S. (2024). Global biodiversity indicator data for BHI, BERI,
PARC-representativeness, PARC-connectedness and ecosystem condition
(2000-2024). CSIRO. [doi:10.25919/3aka-y730](https://doi.org/10.25919/3aka-y730)

- DOI：10.25919/3aka-y730

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
