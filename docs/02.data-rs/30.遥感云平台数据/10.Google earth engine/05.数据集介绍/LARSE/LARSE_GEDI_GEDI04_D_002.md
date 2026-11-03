---
title: "GEDI L4D Imputed Waveforms, Version 2"
date: 2026-11-03 12:00:00
permalink: /pages/174064cf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "canopy"
  - "elevation"
  - "forest"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
---

# GEDI L4D Imputed Waveforms, Version 2

## 数据集简介

The GEDI Level 4D (L4D) product provides a 30-m spatial elaboration of the mission's sample of footprint-level L2A V002, L2B V002, and L4A Version 2.1 products globally between latitudes -51.6 and 51.6 degrees.

A k-nearest neighbors (k-NN) algorithm was used with Landsat time series data to impute high-quality GEDI shots to every 30-m pixel. A different nearest neighbor model was developed for every 10 x 10-km tile, with potential imputed shots drawn from a support area of at least 30 x 30 km centered on the tile. The imputation assigns the single nearest neighbor using Landsat time series imagery centered on the target year 2023.

The most basic 30-m output is the shot number of the imputed pixel (relayed in fragments across five fields), from which any shot-level quantity may be retrieved. Predictions for commonly used waveform attributes are also included, such as relative height (RH) metrics from the L2A product, canopy cover from L2B, and aboveground biomass density (AGBD) from L4A.

See [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4D_Imputed_Waveforms.html) for more information.

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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_D_002`
- 数据类型：影像集合（ImageCollection）
- 提供方：ORNL DAAC、Google Earth Engine
- 时间范围：2019-04-18 至 2023-03-16
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：biomass, canopy, elevation, forest, forest-biomass, gedi, larse, nasa, tree-cover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| rh10 | Relative Height metric (rh10) | 30 |  |
| rh20 | Relative Height metric (rh20) | 30 |  |
| rh30 | Relative Height metric (rh30) | 30 |  |
| rh40 | Relative Height metric (rh40) | 30 |  |
| rh50 | Relative Height metric (rh50) | 30 |  |
| rh60 | Relative Height metric (rh60) | 30 |  |
| rh70 | Relative Height metric (rh70) | 30 |  |
| rh80 | Relative Height metric (rh80) | 30 |  |
| rh90 | Relative Height metric (rh90) | 30 |  |
| rh95 | Relative Height metric (rh95) | 30 |  |
| rh98 | Relative Height metric (rh98) | 30 |  |
| cover_z_000 | Canopy Cover | 30 |  |
| agbd | Aboveground Biomass Density | 30 |  |
| sensitivity_a2 | Sensitivity | 30 |  |
| shot_orbit | Orbit component of shot number | 30 |  |
| shot_beam | Beam component of shot number | 30 |  |
| shot_future | Future component of shot number | 30 |  |
| shot_granule | Granule component of shot number | 30 |  |
| shot_index | Shot Index component of shot number | 30 |  |
| QA | Quality Assessment mask | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_D_002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_D_002
- 数据引用：Seo, E., Healey, S. P., Yang, Z., Dubayah, R. O., De Conto, T., & Armston, J. (2025). GEDI L4D Imputed Waveforms, Version 2 (Version 2). ORNL Distributed Active Archive Center. https://doi.org/10.3334/ORNLDAAC/2455

- DOI：10.3334/ORNLDAAC/2455

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
