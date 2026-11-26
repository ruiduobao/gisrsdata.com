---
title: "澳大利亚土壤与景观格网（土壤属性）"
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

# 澳大利亚土壤与景观格网（土壤属性）

英文原名：SLGA: Soil and Landscape Grid of Australia (Soil Attributes)

## 这是什么数据

澳大利亚土壤与景观格网（SLGA）是覆盖澳大利亚的综合土壤属性数据集，分辨率 3 角秒（约 90 米像元）。这些表面是建模成果，利用已有土壤数据与环境协变量描述土壤属性的空间分布。详见 [Viscarra Rossel et al (2015)](https://www.publish.csiro.au/sr/SR14366)。SLGA 可用于包气带过程研究，包括溶质运移、地下水与根区以下的养分通量，以及广泛的生态、水文与环境应用。

每个产品包含数字土壤属性图及其上下置信限，代表六个深度的土壤属性：0-5cm、5-15cm、15-30cm、30-60cm、60-100cm 和 100-200cm。这些深度与土壤属性与 [GlobalSoilMap](https://www.isric.org/projects/globalsoilmapnet) 的规范一致。

该集合共有 12 幅影像。其中十幅包含 GSM 主要土壤属性数据，另外两幅包含风化层深度与土壤深度的 GSM 属性。

## 覆盖范围与时间

- 覆盖范围：澳大利亚
- 时间范围：1950-01-01 至 2013-12-31

## 分辨率与规格

- 空间分辨率：约 92.77 米（3 角秒格网）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AWC_000_005_EV | 该土壤属性在深度 0-5cm 的估计值 | 92.77 |  |
| AWC_000_005_05 | 该土壤属性在深度 0-5cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_000_005_95 | 该土壤属性在深度 0-5cm 的第 95 百分位置信上限 | 92.77 |  |
| AWC_005_015_EV | 该土壤属性在深度 5-15cm 的估计值 | 92.77 |  |
| AWC_005_015_05 | 该土壤属性在深度 5-15cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_005_015_95 | 该土壤属性在深度 5-15cm 的第 95 百分位置信上限 | 92.77 |  |
| AWC_015_030_EV | 该土壤属性在深度 15-30cm 的估计值 | 92.77 |  |
| AWC_015_030_05 | 该土壤属性在深度 15-30cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_015_030_95 | 该土壤属性在深度 15-30cm 的第 95 百分位置信上限 | 92.77 |  |
| AWC_030_060_EV | 该土壤属性在深度 30-60cm 的估计值 | 92.77 |  |
| AWC_030_060_05 | 该土壤属性在深度 30-60cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_030_060_95 | 该土壤属性在深度 30-60cm 的第 95 百分位置信上限 | 92.77 |  |
| AWC_060_100_EV | 该土壤属性在深度 60-100cm 的估计值 | 92.77 |  |
| AWC_060_100_05 | 该土壤属性在深度 60-100cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_060_100_95 | 该土壤属性在深度 60-100cm 的第 95 百分位置信上限 | 92.77 |  |
| AWC_100_200_EV | 该土壤属性在深度 100-200cm 的估计值 | 92.77 |  |
| AWC_100_200_05 | 该土壤属性在深度 100-200cm 的第 5 百分位置信下限 | 92.77 |  |
| AWC_100_200_95 | 该土壤属性在深度 100-200cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_000_005_EV | 该土壤属性在深度 0-5cm 的估计值 | 92.77 |  |
| BDW_000_005_05 | 该土壤属性在深度 0-5cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_000_005_95 | 该土壤属性在深度 0-5cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_005_015_EV | 该土壤属性在深度 5-15cm 的估计值 | 92.77 |  |
| BDW_005_015_05 | 该土壤属性在深度 5-15cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_005_015_95 | 该土壤属性在深度 5-15cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_015_030_EV | 该土壤属性在深度 15-30cm 的估计值 | 92.77 |  |
| BDW_015_030_05 | 该土壤属性在深度 15-30cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_015_030_95 | 该土壤属性在深度 15-30cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_030_060_EV | 该土壤属性在深度 30-60cm 的估计值 | 92.77 |  |
| BDW_030_060_05 | 该土壤属性在深度 30-60cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_030_060_95 | 该土壤属性在深度 30-60cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_060_100_EV | 该土壤属性在深度 60-100cm 的估计值 | 92.77 |  |
| BDW_060_100_05 | 该土壤属性在深度 60-100cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_060_100_95 | 该土壤属性在深度 60-100cm 的第 95 百分位置信上限 | 92.77 |  |
| BDW_100_200_EV | 该土壤属性在深度 100-200cm 的估计值 | 92.77 |  |
| BDW_100_200_05 | 该土壤属性在深度 100-200cm 的第 5 百分位置信下限 | 92.77 |  |
| BDW_100_200_95 | 该土壤属性在深度 100-200cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_000_005_EV | 该土壤属性在深度 0-5cm 的估计值 | 92.77 |  |
| CLY_000_005_05 | 该土壤属性在深度 0-5cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_000_005_95 | 该土壤属性在深度 0-5cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_005_015_EV | 该土壤属性在深度 5-15cm 的估计值 | 92.77 |  |
| CLY_005_015_05 | 该土壤属性在深度 5-15cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_005_015_95 | 该土壤属性在深度 5-15cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_015_030_EV | 该土壤属性在深度 15-30cm 的估计值 | 92.77 |  |
| CLY_015_030_05 | 该土壤属性在深度 15-30cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_015_030_95 | 该土壤属性在深度 15-30cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_030_060_EV | 该土壤属性在深度 30-60cm 的估计值 | 92.77 |  |
| CLY_030_060_05 | 该土壤属性在深度 30-60cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_030_060_95 | 该土壤属性在深度 30-60cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_060_100_EV | 该土壤属性在深度 60-100cm 的估计值 | 92.77 |  |
| CLY_060_100_05 | 该土壤属性在深度 60-100cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_060_100_95 | 该土壤属性在深度 60-100cm 的第 95 百分位置信上限 | 92.77 |  |
| CLY_100_200_EV | 该土壤属性在深度 100-200cm 的估计值 | 92.77 |  |
| CLY_100_200_05 | 该土壤属性在深度 100-200cm 的第 5 百分位置信下限 | 92.77 |  |
| CLY_100_200_95 | 该土壤属性在深度 100-200cm 的第 95 百分位置信上限 | 92.77 |  |
| DER_000_200_EV | 风化层深度的估计值 | 92.77 |  |
| DER_000_200_05 | 风化层深度的第 5 百分位置信下限 | 92.77 |  |
| DER_000_200_95 | 风化层深度的第 95 百分位置信上限 | 92.77 |  |
| DES_000_200_EV | 土壤深度的估计值 | 92.77 |  |
| DES_000_200_05 | 土壤深度的第 5 百分位置信下限 | 92.77 |  |
| DES_000_200_95 | 土壤深度的第 5 百分位置信下限 | 92.77 |  |
| ECE_000_005_EV | 该土壤属性在深度 0-5cm 的估计值 | 92.77 |  |
| ECE_000_005_05 | 该土壤属性在深度 0-5cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_000_005_95 | 该土壤属性在深度 0-5cm 的第 95 百分位置信上限 | 92.77 |  |
| ECE_005_015_EV | 该土壤属性在深度 5-15cm 的估计值 | 92.77 |  |
| ECE_005_015_05 | 该土壤属性在深度 5-15cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_005_015_95 | 该土壤属性在深度 5-15cm 的第 95 百分位置信上限 | 92.77 |  |
| ECE_015_030_EV | 该土壤属性在深度 15-30cm 的估计值 | 92.77 |  |
| ECE_015_030_05 | 该土壤属性在深度 15-30cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_015_030_95 | 该土壤属性在深度 15-30cm 的第 95 百分位置信上限 | 92.77 |  |
| ECE_030_060_EV | 该土壤属性在深度 30-60cm 的估计值 | 92.77 |  |
| ECE_030_060_05 | 该土壤属性在深度 30-60cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_030_060_95 | 该土壤属性在深度 30-60cm 的第 95 百分位置信上限 | 92.77 |  |
| ECE_060_100_EV | 该土壤属性在深度 60-100cm 的估计值 | 92.77 |  |
| ECE_060_100_05 | 该土壤属性在深度 60-100cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_060_100_95 | 该土壤属性在深度 60-100cm 的第 95 百分位置信上限 | 92.77 |  |
| ECE_100_200_EV | 该土壤属性在深度 100-200cm 的估计值 | 92.77 |  |
| ECE_100_200_05 | 该土壤属性在深度 100-200cm 的第 5 百分位置信下限 | 92.77 |  |
| ECE_100_200_95 | 该土壤属性在深度 100-200cm 的第 95 百分位置信上限 | 92.77 |  |
| NTO_000_005_EV | 该土壤属性在深度 0-5cm 的估计值 | 92.77 |  |
| NTO_000_005_05 | 该土壤属性在深度 0-5cm 的第 5 百分位置信下限 | 92.77 |  |

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

## 能拿来做什么

- 澳大利亚数字土壤制图与土壤属性空间分析
- 包气带过程、溶质运移与地下水研究
- 生态、水文与环境建模的土壤参数输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CSIRO/SLGA');
```

- 数据集编号（Earth Engine ID）：`CSIRO/SLGA`
- 提供方：CSIRO/SLGA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIRO_SLGA

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：australia, csiro, digital-soil-mapping, globalsoilmap, slga, soil, soil-depth, tern
- 数据引用：Viscarra Rossel, Raphael; Chen, Charlie; Grundy, Mike; Searle, Ross;
Clifford, David; Odgers, Nathan; Holmes, Karen; Griffin, Ted; Liddicoat,
Craig; Kidd, Darren (2014): Soil and Landscape Grid National Soil Attribute
Maps - SOIL ATTRIBUTE Release 1. v2. CSIRO. Data Collection
[doi:10.1071/SR14366](https://doi.org/10.1071/SR14366).

- DOI：10.4225/08/546ED604ADD8A

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Drained Organic Soils Emissions (Annual) 1.0](/pages/664c80e9/)
- [NLDAS-2: North American Land Data Assimilation System Forcing Fields](/pages/4a88073a/)
- [OpenLandMap Clay Content](/pages/f45c0586/)
- [OpenLandMap Predicted Hapludalfs Probability](/pages/ef97e31c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
