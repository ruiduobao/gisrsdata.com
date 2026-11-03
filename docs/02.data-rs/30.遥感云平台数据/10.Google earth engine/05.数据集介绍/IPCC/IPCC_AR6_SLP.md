---
title: "IPCC AR6 Sea Level Projections Regional (Medium Confidence)"
date: 2026-11-03 12:00:00
permalink: /pages/fd53e731/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ipcc"
  - "oceans"
  - "sea-level-changes"
---

# IPCC AR6 Sea Level Projections Regional (Medium Confidence)

## 数据集简介

The dataset provided by the IPCC features comprehensive global and
regional sea level projections from the IPCC 6th Assessment Report (AR6).
This collection contains assets for the medium confidence sea level
rise projections. The dataset spans from 2020 to 2150 and includes
projections for various future scenarios outlined in the AR6. It offers a
detailed breakdown of individual processes contributing to sea level
changes, alongside globally averaged projections, regional projections on a
regular global grid. These projections align with those in the IPCC AR6
report, ensuring consistency and reliability. (Local projections at specific
tide gauge locations are not included because they are not on a regular
grid.)

The following are summaries of the future scenarios included in the dataset:

- SSP1-1.9 holds warming to approximately 1.5&deg;C above 1850-1900 in 2100
  after slight overshoot (median) and implies net zero CO2 emissions around
  the middle of the century.
- SSP1-2.6 stays below 2.0&deg;C warming relative to 1850-1900 (median) with
  implied net zero emissions in the second half of the century.
- SSP2-4.5 is approximately in line with the upper end of aggregate
  Nationally Determined Contribution emission levels by 2030. SR1.5 assessed
  temperature projections for NDCs to be between 2.7 and 3.4&deg;C by 2100,
  corresponding to the upper half of projected warming under SSP2-4.5.
- SSP3-7.0 is a medium to high reference scenario resulting from no
  additional climate policy under the SSP3 socioeconomic development
  narrative. SSP3-7.0 has particularly high non-CO2 emissions, including
  high aerosols emissions.
- SSP5-8.5 is a high reference scenario with no additional climate policy.
  Emission levels as high as SSP5-8.5 are not obtained by Integrated
  Assessment Models (IAMs) under any of the SSPs other than the fossil
  fueled SSP5 socioeconomic development pathway.

Each component of the sea level projection scenarios is provided as a
separate band, as detailed in the table below.

Component               | Description
:---------------------  | :----------------------------------------------
Total                   | Total integrated over all components
AIS                     | Antarctic Ice Sheet
GIS                     | Greenland Ice Sheet
glaciers                | Glaciers
landwaterstorage        | Land Water Storage
oceandynamics           | Ocean Dynamics (includes Thermal Expansion)
verticallandmotion      | Vertical Land Motion (non-climatic processes)

## 基本信息

- 数据集编号（Earth Engine ID）：`IPCC/AR6/SLP`
- 数据类型：影像集合（ImageCollection）
- 提供方：IPCC、Google Earth Engine
- 时间范围：2020-01-01 至 2120-01-01
- 空间分辨率：111.32 米
- 许可：CC-BY-4.0
- 关键词：ipcc, oceans, sea-level-changes

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| total_rates_quantile_0 | Total rates for the quantile 0 | 111.32 |  |
| total_rates_quantile_0_001 | Total rates for the quantile 0.001 | 111.32 |  |
| total_rates_quantile_0_005 | Total rates for the quantile 0.005 | 111.32 |  |
| total_rates_quantile_0_01 | Total rates for the quantile 0.01 | 111.32 |  |
| total_rates_quantile_0_02 | Total rates for the quantile 0.02 | 111.32 |  |
| total_rates_quantile_0_03 | Total rates for the quantile 0.03 | 111.32 |  |
| total_rates_quantile_0_04 | Total rates for the quantile 0.04 | 111.32 |  |
| total_rates_quantile_0_05 | Total rates for the quantile 0.05 | 111.32 |  |
| total_rates_quantile_0_06 | Total rates for the quantile 0.06 | 111.32 |  |
| total_rates_quantile_0_07 | Total rates for the quantile 0.07 | 111.32 |  |
| total_rates_quantile_0_08 | Total rates for the quantile 0.08 | 111.32 |  |
| total_rates_quantile_0_09 | Total rates for the quantile 0.09 | 111.32 |  |
| total_rates_quantile_0_1 | Total rates for the quantile 0.1 | 111.32 |  |
| total_rates_quantile_0_11 | Total rates for the quantile 0.11 | 111.32 |  |
| total_rates_quantile_0_12 | Total rates for the quantile 0.12 | 111.32 |  |
| total_rates_quantile_0_13 | Total rates for the quantile 0.13 | 111.32 |  |
| total_rates_quantile_0_14 | Total rates for the quantile 0.14 | 111.32 |  |
| total_rates_quantile_0_15 | Total rates for the quantile 0.15 | 111.32 |  |
| total_rates_quantile_0_16 | Total rates for the quantile 0.16 | 111.32 |  |
| total_rates_quantile_0_167 | Total rates for the quantile 0.167 | 111.32 |  |
| total_rates_quantile_0_17 | Total rates for the quantile 0.17 | 111.32 |  |
| total_rates_quantile_0_18 | Total rates for the quantile 0.18 | 111.32 |  |
| total_rates_quantile_0_19 | Total rates for the quantile 0.19 | 111.32 |  |
| total_rates_quantile_0_2 | Total rates for the quantile 0.2 | 111.32 |  |
| total_rates_quantile_0_21 | Total rates for the quantile 0.21 | 111.32 |  |
| total_rates_quantile_0_22 | Total rates for the quantile 0.22 | 111.32 |  |
| total_rates_quantile_0_23 | Total rates for the quantile 0.23 | 111.32 |  |
| total_rates_quantile_0_24 | Total rates for the quantile 0.24 | 111.32 |  |
| total_rates_quantile_0_25 | Total rates for the quantile 0.25 | 111.32 |  |
| total_rates_quantile_0_26 | Total rates for the quantile 0.26 | 111.32 |  |
| total_rates_quantile_0_27 | Total rates for the quantile 0.27 | 111.32 |  |
| total_rates_quantile_0_28 | Total rates for the quantile 0.28 | 111.32 |  |
| total_rates_quantile_0_29 | Total rates for the quantile 0.29 | 111.32 |  |
| total_rates_quantile_0_3 | Total rates for the quantile 0.3 | 111.32 |  |
| total_rates_quantile_0_31 | Total rates for the quantile 0.31 | 111.32 |  |
| total_rates_quantile_0_32 | Total rates for the quantile 0.32 | 111.32 |  |
| total_rates_quantile_0_33 | Total rates for the quantile 0.33 | 111.32 |  |
| total_rates_quantile_0_34 | Total rates for the quantile 0.34 | 111.32 |  |
| total_rates_quantile_0_35 | Total rates for the quantile 0.35 | 111.32 |  |
| total_rates_quantile_0_36 | Total rates for the quantile 0.36 | 111.32 |  |
| total_rates_quantile_0_37 | Total rates for the quantile 0.37 | 111.32 |  |
| total_rates_quantile_0_38 | Total rates for the quantile 0.38 | 111.32 |  |
| total_rates_quantile_0_39 | Total rates for the quantile 0.39 | 111.32 |  |
| total_rates_quantile_0_4 | Total rates for the quantile 0.4 | 111.32 |  |
| total_rates_quantile_0_41 | Total rates for the quantile 0.41 | 111.32 |  |
| total_rates_quantile_0_42 | Total rates for the quantile 0.42 | 111.32 |  |
| total_rates_quantile_0_43 | Total rates for the quantile 0.43 | 111.32 |  |
| total_rates_quantile_0_44 | Total rates for the quantile 0.44 | 111.32 |  |
| total_rates_quantile_0_45 | Total rates for the quantile 0.45 | 111.32 |  |
| total_rates_quantile_0_46 | Total rates for the quantile 0.46 | 111.32 |  |
| total_rates_quantile_0_47 | Total rates for the quantile 0.47 | 111.32 |  |
| total_rates_quantile_0_48 | Total rates for the quantile 0.48 | 111.32 |  |
| total_rates_quantile_0_49 | Total rates for the quantile 0.49 | 111.32 |  |
| total_rates_quantile_0_5 | Total rates for the quantile 0.5 | 111.32 |  |
| total_rates_quantile_0_51 | Total rates for the quantile 0.51 | 111.32 |  |
| total_rates_quantile_0_52 | Total rates for the quantile 0.52 | 111.32 |  |
| total_rates_quantile_0_53 | Total rates for the quantile 0.53 | 111.32 |  |
| total_rates_quantile_0_54 | Total rates for the quantile 0.54 | 111.32 |  |
| total_rates_quantile_0_55 | Total rates for the quantile 0.55 | 111.32 |  |
| total_rates_quantile_0_56 | Total rates for the quantile 0.56 | 111.32 |  |
| total_rates_quantile_0_57 | Total rates for the quantile 0.57 | 111.32 |  |
| total_rates_quantile_0_58 | Total rates for the quantile 0.58 | 111.32 |  |
| total_rates_quantile_0_59 | Total rates for the quantile 0.59 | 111.32 |  |
| total_rates_quantile_0_6 | Total rates for the quantile 0.6 | 111.32 |  |
| total_rates_quantile_0_61 | Total rates for the quantile 0.61 | 111.32 |  |
| total_rates_quantile_0_62 | Total rates for the quantile 0.62 | 111.32 |  |
| total_rates_quantile_0_63 | Total rates for the quantile 0.63 | 111.32 |  |
| total_rates_quantile_0_64 | Total rates for the quantile 0.64 | 111.32 |  |
| total_rates_quantile_0_65 | Total rates for the quantile 0.65 | 111.32 |  |
| total_rates_quantile_0_66 | Total rates for the quantile 0.66 | 111.32 |  |
| total_rates_quantile_0_67 | Total rates for the quantile 0.67 | 111.32 |  |
| total_rates_quantile_0_68 | Total rates for the quantile 0.68 | 111.32 |  |
| total_rates_quantile_0_69 | Total rates for the quantile 0.69 | 111.32 |  |
| total_rates_quantile_0_7 | Total rates for the quantile 0.7 | 111.32 |  |
| total_rates_quantile_0_71 | Total rates for the quantile 0.71 | 111.32 |  |
| total_rates_quantile_0_72 | Total rates for the quantile 0.72 | 111.32 |  |
| total_rates_quantile_0_73 | Total rates for the quantile 0.73 | 111.32 |  |
| total_rates_quantile_0_74 | Total rates for the quantile 0.74 | 111.32 |  |
| total_rates_quantile_0_75 | Total rates for the quantile 0.75 | 111.32 |  |
| total_rates_quantile_0_76 | Total rates for the quantile 0.76 | 111.32 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IPCC/AR6/SLP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IPCC_AR6_SLP
- 数据引用：Garner, G. G., T. Hermans, R. E. Kopp, A. B. A. Slangen, T. L. Edwards,
A. Levermann, S. Nowikci, M. D. Palmer, C. Smith, B. Fox-Kemper,
H. T. Hewitt, C. Xiao, G. Aðalgeirsdóttir, S. S. Drijfhout, T. L. Edwards,
N. R. Golledge, M. Hemer, G. Krinner, A. Mix, D. Notz, S. Nowicki,
I. S. Nurhati, L. Ruiz, J-B. Sallée, Y. Yu, L. Hua, T. Palmer, B. Pearson,
2021. IPCC AR6 Sea Level Projections. Version 20210809. Dataset
accessed [YYYY-MM-DD] at
[10.5281/zenodo.5914709](https://doi.org/10.5281/zenodo.5914709)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
