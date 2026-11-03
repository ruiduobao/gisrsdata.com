---
title: "SLGA: Soil and Landscape Grid of Australia (Soil Attributes)"
date: 2026-11-03 12:00:00
permalink: /pages/6de4314d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "australia"
  - "csiro"
  - "digital-soil-mapping"
  - "globalsoilmap"
  - "slga"
  - "soil"
  - "soil-depth"
  - "tern"
---

# SLGA: Soil and Landscape Grid of Australia (Soil Attributes)

## 数据集简介

The Soil and Landscape Grid of Australia (SLGA) is a comprehensive dataset
of soil attributes across Australia at 3 arc-second resolution (~90m
pixels). The surfaces are the outcomes from modelling that describe the
spatial distribution of the soil attributes using existing soil data and
environmental covariates. See [Viscarra Rossel et al (2015)](https://www.publish.csiro.au/sr/SR14366)
for further details. The SLGA can be used in studies of vadose zone
processes, including solute transport, groundwater and nutrient fluxes
beyond the root zone, as well as a wide spectrum of ecological,
hydrological, and broader environmental applications.

Each product contains six digital soil attribute maps and their upper and
lower confidence limits, representing the soil attribute at six depths:
0-5cm, 5-15cm, 15-30cm, 30-60cm, 60-100cm, and 100-200cm. These depths and
soil attributes are consistent with the specifications of
[GlobalSoilMap](https://www.isric.org/projects/globalsoilmapnet).

This collection has 12 images. Ten of them contain data for GSM primary
soil attributes; the other two contain regolith depth and soil depth GSM
attributes.

| Attribute                              | Description                                                                                                                   | Code | # of Bands |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|------|------------|
| Bulk Density (whole earth)             | Bulk density of the whole soil (including coarse fragments) in mass per unit volume by a method equivalent to the core method | BDW  | 18         |
| Organic Carbon                         | Mass fraction of carbon by weight in the < 2mm soil material as determined by dry combustion at 900 Celsius                   | SOC  | 18         |
| Clay                                   | < 2&micro;m mass fraction of the <2mm soil material determined using the pipette method                                       | CLY  | 18         |
| Silt                                   | 2-20&micro;m mass fraction of the < 2mm soil material determined using the pipette method                                     | SLT  | 18         |
| Sand                                   | 20&micro;m - 2mm mass fraction of the < 2mm soil material determined using the pipette method                                 | SND  | 18         |
| pH (CaCl2)                             | pH of 1:5 soil/0.01M calcium chloride extract                                                                                 | pHc  | 18         |
| Available Water Capacity               | Available water capacity computed for each of the specified depth increments                                                  | AWC  | 18         |
| Total Nitrogen                         | Mass fraction of total nitrogen in the soil by weight                                                                         | NTO  | 18         |
| Total Phosphorus                       | Mass fraction of total phosphorus in the soil by weight                                                                       | PTO  | 18         |
| Effective Cation Exchange Capacity     | Cations extracted using barium chloride (BaCl2) plus exchangeable H + Al                                                      | ECE  | 18         |
| Depth of Regolith                      | Depth to hard rock. Depth is inclusive of all regolith.                                                                       | DER  | 3          |
| Depth of Soil                          | Depth of soil profile (A & B horizons)                                                                                        | DES  | 3          |

## 基本信息

- 数据集编号（Earth Engine ID）：`CSIRO/SLGA`
- 数据类型：影像集合（ImageCollection）
- 提供方：CSIRO/SLGA、Google Earth Engine
- 时间范围：1950-01-01 至 2013-12-31
- 空间分辨率：92.77 米
- 许可：CC-BY-4.0
- 关键词：australia, csiro, digital-soil-mapping, globalsoilmap, slga, soil, soil-depth, tern

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AWC_000_005_EV | The soil attribute's estimated value at depth 0-5cm | 92.77 |  |
| AWC_000_005_05 | The soil attribute's 5th percentile confidence limit at depth 0-5cm | 92.77 |  |
| AWC_000_005_95 | The soil attribute's 95th percentile confidence limit at depth 0-5cm | 92.77 |  |
| AWC_005_015_EV | The soil attribute's estimated value at depth 5-15cm | 92.77 |  |
| AWC_005_015_05 | The soil attribute's 5th percentile confidence limit at depth 5-15cm | 92.77 |  |
| AWC_005_015_95 | The soil attribute's 95th percentile confidence limit at depth 5-15cm | 92.77 |  |
| AWC_015_030_EV | The soil attribute's estimated value at depth 15-30cm | 92.77 |  |
| AWC_015_030_05 | The soil attribute's 5th percentile confidence limit at depth 15-30cm | 92.77 |  |
| AWC_015_030_95 | The soil attribute's 95th percentile confidence limit at depth 15-30cm | 92.77 |  |
| AWC_030_060_EV | The soil attribute's estimated value at depth 30-60cm | 92.77 |  |
| AWC_030_060_05 | The soil attribute's 5th percentile confidence limit at depth 30-60cm | 92.77 |  |
| AWC_030_060_95 | The soil attribute's 95th percentile confidence limit at depth 30-60cm | 92.77 |  |
| AWC_060_100_EV | The soil attribute's estimated value at depth 60-100cm | 92.77 |  |
| AWC_060_100_05 | The soil attribute's 5th percentile confidence limit at depth 60-100cm | 92.77 |  |
| AWC_060_100_95 | The soil attribute's 95th percentile confidence limit at depth 60-100cm | 92.77 |  |
| AWC_100_200_EV | The soil attribute's estimated value at depth 100-200cm | 92.77 |  |
| AWC_100_200_05 | The soil attribute's 5th percentile confidence limit at depth 100-200cm | 92.77 |  |
| AWC_100_200_95 | The soil attribute's 95th percentile confidence limit at depth 100-200cm | 92.77 |  |
| BDW_000_005_EV | The soil attribute's estimated value at depth 0-5cm | 92.77 |  |
| BDW_000_005_05 | The soil attribute's 5th percentile confidence limit at depth 0-5cm | 92.77 |  |
| BDW_000_005_95 | The soil attribute's 95th percentile confidence limit at depth 0-5cm | 92.77 |  |
| BDW_005_015_EV | The soil attribute's estimated value at depth 5-15cm | 92.77 |  |
| BDW_005_015_05 | The soil attribute's 5th percentile confidence limit at depth 5-15cm | 92.77 |  |
| BDW_005_015_95 | The soil attribute's 95th percentile confidence limit at depth 5-15cm | 92.77 |  |
| BDW_015_030_EV | The soil attribute's estimated value at depth 15-30cm | 92.77 |  |
| BDW_015_030_05 | The soil attribute's 5th percentile confidence limit at depth 15-30cm | 92.77 |  |
| BDW_015_030_95 | The soil attribute's 95th percentile confidence limit at depth 15-30cm | 92.77 |  |
| BDW_030_060_EV | The soil attribute's estimated value at depth 30-60cm | 92.77 |  |
| BDW_030_060_05 | The soil attribute's 5th percentile confidence limit at depth 30-60cm | 92.77 |  |
| BDW_030_060_95 | The soil attribute's 95th percentile confidence limit at depth 30-60cm | 92.77 |  |
| BDW_060_100_EV | The soil attribute's estimated value at depth 60-100cm | 92.77 |  |
| BDW_060_100_05 | The soil attribute's 5th percentile confidence limit at depth 60-100cm | 92.77 |  |
| BDW_060_100_95 | The soil attribute's 95th percentile confidence limit at depth 60-100cm | 92.77 |  |
| BDW_100_200_EV | The soil attribute's estimated value at depth 100-200cm | 92.77 |  |
| BDW_100_200_05 | The soil attribute's 5th percentile confidence limit at depth 100-200cm | 92.77 |  |
| BDW_100_200_95 | The soil attribute's 95th percentile confidence limit at depth 100-200cm | 92.77 |  |
| CLY_000_005_EV | The soil attribute's estimated value at depth 0-5cm | 92.77 |  |
| CLY_000_005_05 | The soil attribute's 5th percentile confidence limit at depth 0-5cm | 92.77 |  |
| CLY_000_005_95 | The soil attribute's 95th percentile confidence limit at depth 0-5cm | 92.77 |  |
| CLY_005_015_EV | The soil attribute's estimated value at depth 5-15cm | 92.77 |  |
| CLY_005_015_05 | The soil attribute's 5th percentile confidence limit at depth 5-15cm | 92.77 |  |
| CLY_005_015_95 | The soil attribute's 95th percentile confidence limit at depth 5-15cm | 92.77 |  |
| CLY_015_030_EV | The soil attribute's estimated value at depth 15-30cm | 92.77 |  |
| CLY_015_030_05 | The soil attribute's 5th percentile confidence limit at depth 15-30cm | 92.77 |  |
| CLY_015_030_95 | The soil attribute's 95th percentile confidence limit at depth 15-30cm | 92.77 |  |
| CLY_030_060_EV | The soil attribute's estimated value at depth 30-60cm | 92.77 |  |
| CLY_030_060_05 | The soil attribute's 5th percentile confidence limit at depth 30-60cm | 92.77 |  |
| CLY_030_060_95 | The soil attribute's 95th percentile confidence limit at depth 30-60cm | 92.77 |  |
| CLY_060_100_EV | The soil attribute's estimated value at depth 60-100cm | 92.77 |  |
| CLY_060_100_05 | The soil attribute's 5th percentile confidence limit at depth 60-100cm | 92.77 |  |
| CLY_060_100_95 | The soil attribute's 95th percentile confidence limit at depth 60-100cm | 92.77 |  |
| CLY_100_200_EV | The soil attribute's estimated value at depth 100-200cm | 92.77 |  |
| CLY_100_200_05 | The soil attribute's 5th percentile confidence limit at depth 100-200cm | 92.77 |  |
| CLY_100_200_95 | The soil attribute's 95th percentile confidence limit at depth 100-200cm | 92.77 |  |
| DER_000_200_EV | The estimated value for the regolith depth | 92.77 |  |
| DER_000_200_05 | The 5th percentile confidence limit for the regolith depth | 92.77 |  |
| DER_000_200_95 | The 95th percentile confidence limit for the regolith depth | 92.77 |  |
| DES_000_200_EV | The estimated value for the soil depth | 92.77 |  |
| DES_000_200_05 | The 5th percentile confidence limit for the soil depth | 92.77 |  |
| DES_000_200_95 | The 5th percentile confidence limit for the soil depth | 92.77 |  |
| ECE_000_005_EV | The soil attribute's estimated value at depth 0-5cm | 92.77 |  |
| ECE_000_005_05 | The soil attribute's 5th percentile confidence limit at depth 0-5cm | 92.77 |  |
| ECE_000_005_95 | The soil attribute's 95th percentile confidence limit at depth 0-5cm | 92.77 |  |
| ECE_005_015_EV | The soil attribute's estimated value at depth 5-15cm | 92.77 |  |
| ECE_005_015_05 | The soil attribute's 5th percentile confidence limit at depth 5-15cm | 92.77 |  |
| ECE_005_015_95 | The soil attribute's 95th percentile confidence limit at depth 5-15cm | 92.77 |  |
| ECE_015_030_EV | The soil attribute's estimated value at depth 15-30cm | 92.77 |  |
| ECE_015_030_05 | The soil attribute's 5th percentile confidence limit at depth 15-30cm | 92.77 |  |
| ECE_015_030_95 | The soil attribute's 95th percentile confidence limit at depth 15-30cm | 92.77 |  |
| ECE_030_060_EV | The soil attribute's estimated value at depth 30-60cm | 92.77 |  |
| ECE_030_060_05 | The soil attribute's 5th percentile confidence limit at depth 30-60cm | 92.77 |  |
| ECE_030_060_95 | The soil attribute's 95th percentile confidence limit at depth 30-60cm | 92.77 |  |
| ECE_060_100_EV | The soil attribute's estimated value at depth 60-100cm | 92.77 |  |
| ECE_060_100_05 | The soil attribute's 5th percentile confidence limit at depth 60-100cm | 92.77 |  |
| ECE_060_100_95 | The soil attribute's 95th percentile confidence limit at depth 60-100cm | 92.77 |  |
| ECE_100_200_EV | The soil attribute's estimated value at depth 100-200cm | 92.77 |  |
| ECE_100_200_05 | The soil attribute's 5th percentile confidence limit at depth 100-200cm | 92.77 |  |
| ECE_100_200_95 | The soil attribute's 95th percentile confidence limit at depth 100-200cm | 92.77 |  |
| NTO_000_005_EV | The soil attribute's estimated value at depth 0-5cm | 92.77 |  |
| NTO_000_005_05 | The soil attribute's 5th percentile confidence limit at depth 0-5cm | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CSIRO/SLGA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIRO_SLGA
- 数据引用：Viscarra Rossel, Raphael; Chen, Charlie; Grundy, Mike; Searle, Ross;
Clifford, David; Odgers, Nathan; Holmes, Karen; Griffin, Ted; Liddicoat,
Craig; Kidd, Darren (2014): Soil and Landscape Grid National Soil Attribute
Maps - SOIL ATTRIBUTE Release 1. v2. CSIRO. Data Collection
[doi:10.1071/SR14366](https://doi.org/10.1071/SR14366).

- DOI：10.4225/08/546ED604ADD8A

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
