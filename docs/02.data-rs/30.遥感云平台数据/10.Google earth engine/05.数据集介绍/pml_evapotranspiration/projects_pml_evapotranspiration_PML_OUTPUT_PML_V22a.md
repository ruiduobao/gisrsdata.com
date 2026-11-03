---
title: "PML_V2.2a: Coupled Evapotranspiration and Gross Primary Product (MODIS Edition)"
date: 2026-11-03 12:00:00
permalink: /pages/877f8294/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gpp"
  - "plant-productivity"
  - "water-vapor"
---

# PML_V2.2a: Coupled Evapotranspiration and Gross Primary Product (MODIS Edition)

## 数据集简介

The dataset is produced by the Large Scale Hydrology Lab, which specializes in advancing global and 
regional water cycle research by synthesizing multi-source Earth observations with process-based modeling. 

The PML-V2.2a (MODIS Edition) product provides global terrestrial evapotranspiration (ET) and gross 
primary production (GPP) at a 500-m, 8-day resolution from 2000 to 2024. Forced by MSWEP and MSWX data, 
this version features an expanded bottom-up calibration using 208 flux sites and refined parameterizations 
that explicitly distinguish irrigated from rainfed croplands.

Validation confirms high accuracy across plant functional types (NSE > 0.60, absolute bias < 5%) 
and reliable basin-scale water-balance performance (NSE: 0.89–0.91). Optimized for high-resolution 
eco-hydrological monitoring, this MODIS-based record provides a robust historical baseline. Due to 
satellite orbital drift, this asset will no longer be updated post-2024. For near-present monitoring 
and data extending to 2025, please refer to the companion VIIRS Edition asset, which ensures seamless data continuity.

This dataset is part of the broader PML-V2.2 suite, where the description paper is available at [Earth System Science Data](https://doi.org/10.5194/essd-18-5663-2026). 
For the long-term and consolidated record (1982-near present, PML-V2.2a/b/c at 0.1° resolution with different remote sensing forcings), 
please visit the [TPDC data repository](https://doi.org/10.11888/Terre.tpdc.303314).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/pml_evapotranspiration/PML/OUTPUT/PML_V22a`
- 数据类型：影像集合（ImageCollection）
- 提供方：Large Scale Hydrology Lab、PML_V2、Google Earth Engine
- 时间范围：2000-03-05 至 2024-12-26
- 空间分辨率：500 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gpp, plant-productivity, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GPP | Gross primary production | 500 |  |
| ET | Evapotranspiration | 500 |  |
| Ec | Transpiration | 500 |  |
| Es | Soil evaporation | 500 |  |
| Ei | Interception evaporation | 500 |  |
| PET | Potential evapotranspiration (PET) estimated using the Shuttleworth-simplified  Penman equation.  | 500 |  |
| Ew | Evaporation from water bodies, snow, and ice, estimated using the Penman equation with unlimited water supply.  | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/pml_evapotranspiration/PML/OUTPUT/PML_V22a');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_pml_evapotranspiration_PML_OUTPUT_PML_V22a
- 数据引用：Xu, Z., Zhang, Y., Kong, D., Ma, N., and Zhang, X., 2026. Extended global
terrestrial evapotranspiration and gross primary production dataset from
1982 to near present. Earth Syst. Sci. Data, 18, 5663-5695,
[doi:10.5194/essd-18-5663-2026](https://doi.org/10.5194/essd-18-5663-2026)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
