---
title: "NOAA CDR: Ocean Heat Fluxes, Version 2"
date: 2026-11-03 12:00:00
permalink: /pages/ab47b752/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmospheric"
  - "cdr"
  - "flux"
  - "heat"
  - "hourly"
  - "noaa"
  - "oceans"
  - "osb"
---

# NOAA CDR: Ocean Heat Fluxes, Version 2

## 数据集简介

The Ocean Heat Fluxes dataset is part of the NOAA Ocean Surface Bundle (OSB)
and provides a high quality Climate Data Record (CDR) of the air/ocean heat
fluxes over ice-free oceans.

This dataset is calculated from the OSB CDR parameters of near-surface
atmospheric and sea surface temperature using a neural-network
emulator of the TOGA-COARE Bulk Air-Sea Flux Algorithm.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/HEAT_FLUXES/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1988-01-01 至 2021-08-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：atmospheric, cdr, flux, heat, hourly, noaa, oceans, osb

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| surface_upward_latent_heat_flux | Flux of heat from the Earth's surface to the atmosphere which causes a change in phase of matter, e.g. evaporation of water at the surface and subsequent condensation of water vapor in the troposphere  | 27830 |  |
| surface_upward_sensible_heat_flux | Flux of heat from the Earth's surface to the atmosphere which causes a change in air temperature, primarily through conduction and convection  | 27830 |  |
| fill_missing_qc | Quality control flags | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/HEAT_FLUXES/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_HEAT_FLUXES_V2
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record (CDR) of
Ocean Heat Fluxes, Version 2. [indicate subset used]. NOAA National Climatic
Data Center. [doi:10.7289/V59K4885](https://doi.org/10.7289/V59K4885).

- DOI：10.7289/V59K4885

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
