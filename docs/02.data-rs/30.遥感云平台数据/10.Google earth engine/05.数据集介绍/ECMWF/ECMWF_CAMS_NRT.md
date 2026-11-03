---
title: "Copernicus Atmosphere Monitoring Service (CAMS) Global Near-Real-Time"
date: 2026-11-03 12:00:00
permalink: /pages/4ff1abc5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "atmosphere"
  - "climate"
  - "copernicus"
  - "ecmwf"
  - "forecast"
  - "particulate-matter"
---

# Copernicus Atmosphere Monitoring Service (CAMS) Global Near-Real-Time

## 数据集简介

The Copernicus Atmosphere Monitoring Service provides the capacity to
continuously monitor the composition of the Earth's atmosphere at global and
regional scales. The main global near-real-time production system is a data
assimilation and forecasting suite providing two 5-day forecasts per day for
aerosols and chemical compounds that are part of the chemical scheme.

Prior to 2021-07-01 only two parameters were available,
1. Total Aerosol Optical Depth at 550 nm surface
2. Particulate matter d < 25 um surface
Note that system:time_start refers to forecast time.

## 基本信息

- 数据集编号（Earth Engine ID）：`ECMWF/CAMS/NRT`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Centre for Medium-Range Weather Forecasts (ECMWF)、Google Earth Engine
- 时间范围：2016-06-22 至 2026-11-07
- 空间分辨率：44528 米
- 许可：proprietary
- 关键词：aerosol, atmosphere, climate, copernicus, ecmwf, forecast, particulate-matter

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| total_aerosol_optical_depth_at_550nm_surface | Total Aerosol Optical Depth at 550 nm | 44528 |  |
| particulate_matter_d_less_than_25_um_surface | Particulate matter d < 2.5 um | 44528 |  |
| total_column_nitrogen_dioxide_surface | Total column Nitrogen dioxide surface | 44528 |  |
| total_column_sulphur_dioxide_surface | Total column Sulfur dioxide surface | 44528 |  |
| total_column_carbon_monoxide_surface | Total column Carbon monoxide surface | 44528 |  |
| total_column_formaldehyde_surface | Total column Formaldehyde surface | 44528 |  |
| gems_total_column_ozone_surface | Gems Total column ozone surface | 44528 |  |
| sea_salt_aerosol_optical_depth_at_550nm_surface | Sea Salt Aerosol Optical Depth at 550 nm surface | 44528 |  |
| dust_aerosol_optical_depth_at_550nm_surface | Dust Aerosol Optical Depth at 550 nm surface | 44528 |  |
| organic_matter_aerosol_optical_depth_at_550nm_surface | Organic Matter Aerosol Optical Depth at 550 nm surface | 44528 |  |
| black_carbon_aerosol_optical_depth_at_550nm_surface | Black Carbon Aerosol Optical Depth at 550 nm surface | 44528 |  |
| sulphate_aerosol_optical_depth_at_550nm_surface | Sulfate Aerosol Optical Depth at 550 nm surface | 44528 |  |
| total_aerosol_optical_depth_at_469nm_surface | Total Aerosol Optical Depth at 469 nm surface | 44528 |  |
| total_aerosol_optical_depth_at_670nm_surface | Total Aerosol Optical Depth at 670 nm surface | 44528 |  |
| total_aerosol_optical_depth_at_865nm_surface | Total Aerosol Optical Depth at 865nm surface | 44528 |  |
| total_aerosol_optical_depth_at_1240nm_surface | Total Aerosol Optical Depth at 1240 nm surface | 44528 |  |
| var98-0-210-250_surface | Nitrate aerosol optical depth at 550 nm | 44528 |  |
| var98-0-210-251_surface | Ammonium aerosol optical depth at 550 nm | 44528 |  |
| particulate_matter_d_less_than_1_um_surface | Particulate matter d < 1 um surface | 44528 |  |
| particulate_matter_d_less_than_10_um_surface | Particulate matter d < 10 um surface | 44528 |  |
| uv_biologically_effective_dose_surface | UV biologically effective dose surface | 44528 |  |
| total_column__peroxyacetyl_nitrate_surface | Total column peroxyacetyl nitrate surface | 44528 |  |
| total_column__isoprene_surface | Total column isoprene surface | 44528 |  |
| total_column_nitrogen_monoxide_surface | Total column nitrogen monoxide surface | 44528 |  |
| total_column_hydrogen_peroxide_surface | Total column hydrogen peroxide surface | 44528 |  |
| total_column_hydroxyl_radical_surface | Total column hydroxyl radical surface | 44528 |  |
| total_column_methane_surface | Total column methane surface | 44528 |  |
| total_column__ethane_surface | Total column ethane surface | 44528 |  |
| total_column_propane_surface | Total column propane surface | 44528 |  |
| total_column_nitric_acid_surface | Total column nitric acid surface | 44528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ECMWF/CAMS/NRT');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_CAMS_NRT
- 数据引用：Benedetti, A., and Coauthors, 2009: Aerosol analysis and forecast in the
ECMWF Integrated Forecast System. Part II : Data assimilation,
J. Geophys. Res., 114, D13205
[doi:10.1029/2008JD011115](https://doi.org/10.1029/2008JD011115).

- DOI：10.1029/2008JD011115

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
