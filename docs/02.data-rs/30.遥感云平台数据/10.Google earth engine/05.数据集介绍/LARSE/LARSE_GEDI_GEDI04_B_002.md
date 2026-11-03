---
title: "GEDI L4B Gridded Aboveground Biomass Density (Version 2)"
date: 2026-11-03 12:00:00
permalink: /pages/188c3bdf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
  - "usgs"
---

# GEDI L4B Gridded Aboveground Biomass Density (Version 2)

## 数据集简介

This Global Ecosystem Dynamics Investigation (GEDI) L4B product provides
1 km x 1 km estimates of mean aboveground biomass density (AGBD) based on
observations from mission week 19 starting on 2019-04-18 to mission
week 138 ending on 2021-08-04. The GEDI L4A Footprint Biomass product
converts each high-quality waveform to an AGBD prediction, and the
L4B product uses the sample present within the borders of each 1 km cell to
statistically infer mean AGBD.

Please see [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html)
for more information.

The Global Ecosystem Dynamics Investigation [GEDI](https://gedi.umd.edu/)
mission aims to characterize ecosystem structure and dynamics to enable
radically improved quantification and understanding of the Earth's carbon cycle
and biodiversity. The GEDI instrument, attached to the International Space
Station (ISS), collects data globally between 51.6&deg; N and 51.6&deg; S
latitudes at the highest resolution and densest sampling of the
3-dimensional structure of the Earth. The GEDI instrument consists of three
lasers producing a total of eight beam ground transects, which instantaneously
sample eight ~25 m footprints spaced approximately every 60 m along-track.

Product                 | Description
:---------------------  | :----------------------------------------------
L2A Vector         | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A Monthly raster | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A table index    | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B Vector         | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B Monthly raster | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B table index    | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A Biomass Vector | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A Monthly raster | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A table index    | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B Biomass        | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D Imputed Waveforms | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 基本信息

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_B_002`
- 数据类型：影像（Image）
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-04-18 至 2021-08-04
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MU | Mean aboveground biomass density (MU): Estimated mean AGBD for the 1 km grid cell, including forest and non-forest.  | 1000 |  |
| V1 | Variance component 1 (V1): Uncertainty in the estimate of mean biomass due to the field-to-GEDI model used in L4A.  | 1000 |  |
| V2 | Variance component 2 (V2)  * If Mode of Inference = 1,   this is the uncertainty due to GEDI&apos;s sampling of the 1 km cell. * If Mode of Inference = 2,   this is uncertainty owing to the model predicting biomass using   wall-to-wall data, calibrated with the L4A footprint product.  | 1000 |  |
| SE | Mean aboveground biomass density standard error (SE): Standard Error of the mean estimate, combining sampling and modeling uncertainty.  | 1000 |  |
| PE | Standard error as a fraction of the estimated mean AGBD (PE). If >100%, the cell values are truncated to 100.  | 1000 |  |
| NC | Number of clusters (NC): Number of unique GEDI ground tracks with at least one high-quality waveform intersecting the grid cell.  | 1000 |  |
| NS | Number of samples (NS): Total number of high-quality waveforms across all ground tracks within the grid cell.  | 1000 |  |
| QF | Quality flag (QF)  * 0=Outside the GEDI domain * 1=Land surface * 2=Land surface and meets GEDI mission L1 requirement (Percent standard error <20% or Standard Error < 20 Mg ha-1)  | 1000 |  |
| PS | Prediction stratum (PS) determined by plant functional type and continent. PS is associated with an L4A model parameter covariance matrix that contributes to the Model Error Variance (Table 2).  | 1000 |  |
| MI | Mode of interference (MI): Method used for a particular cell. Until mission completion, only those cells where hybrid inference is possible will be populated with a mean biomass value.  * 0=None applied * 1=Hybrid Model-Based * 2=Generalized Hierarchical Model-Based  | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('LARSE/GEDI/GEDI04_B_002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_B_002
- 数据引用：Dubayah, R.O., J. Armston, S.P. Healey, Z. Yang, P.L. Patterson, S. Saarela,
G. Stahl, L. Duncanson, and J.R. Kellner. 2022. GEDI L4B Gridded Aboveground
Biomass Density, Version 2. ORNL DAAC, Oak Ridge, Tennessee, USA.
[doi:10.3334/ORNLDAAC/2056](https://doi.org/10.3334/ORNLDAAC/2056)

- DOI：10.3334/ORNLDAAC/2056

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
