---
title: "MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/a20ec4cb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "atmosphere"
  - "dust"
  - "mass"
  - "merra"
  - "nasa"
  - "sea-salt"
  - "so2"
  - "so4"
---

# MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4

## 数据集简介

M2I3NVAER (or inst3_3d_aer_Nv) is an instantaneous 3-dimensional 3-hourly
data collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of assimilations
of aerosol mixing ratio parameters at 72 model layers, such as dust, sulphur
dioxide, sea salt, black carbon, and organic carbon. The data field is
available every three hour starting from 00:00 UTC, e.g.: 00:00, 03:00,...
,21:00 UTC. Section 4.2 of the
[MERRA-2 File Specification document](https://gmao.gsfc.nasa.gov/pubs/docs/Bosilovich785.pdf)
provides
pressure values nominal for a 1000 hPa surface pressure and refers to the
top edge of the layer. The lev=1 is for the top layer, and lev=72 is for
the bottom (or surface) model layer.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by NASA Global Modeling and Assimilation Office
(GMAO) using the Goddard Earth Observing System Model (GEOS) version 5.12.4.
The dataset covers the period of 1980-present with the latency of ~3 weeks
after the end of a month.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/aer_nv/2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA/MERRA、Google Earth Engine
- 时间范围：1980-01-01 至 2026-10-01
- 空间分辨率：69375 米
- 许可：proprietary
- 关键词：aerosol, atmosphere, dust, mass, merra, nasa, sea-salt, so2, so4

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AIRDENS_1 | Air density | 69375 |  |
| SO2_1 | Sulphur dioxide | 69375 |  |
| DELP_1 | Pressure thickness | 69375 |  |
| SS004_1 | Sea Salt Mixing Ratio (bin 004) | 69375 |  |
| DU005_1 | Dust Mixing Ratio (bin 005) | 69375 |  |
| DU004_1 | Dust Mixing Ratio (bin 004) | 69375 |  |
| SS005_1 | Sea Salt Mixing Ratio (bin 005) | 69375 |  |
| OCPHILIC_1 | Hydrophilic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHOBIC_1 | Hydrophobic Black Carbon | 69375 |  |
| SS002_1 | Sea Salt Mixing Ratio (bin 002) | 69375 |  |
| DU003_1 | Dust Mixing Ratio (bin 003) | 69375 |  |
| DMS_1 | Dimethylsulphide | 69375 |  |
| SO4_1 | Sulphate aerosol | 69375 |  |
| DU002_1 | Dust Mixing Ratio (bin 002) | 69375 |  |
| PS_1 | Surface Pressure | 69375 |  |
| SS003_1 | Sea Salt Mixing Ratio (bin 003) | 69375 |  |
| DU001_1 | Dust Mixing Ratio (bin 001) | 69375 |  |
| OCPHOBIC_1 | Hydrophobic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHILIC_1 | Hydrophilic Black Carbon | 69375 |  |
| MSA_1 | Methanesulphonic acid | 69375 |  |
| SS001_1 | Sea Salt Mixing Ratio (bin 001) | 69375 |  |
| AIRDENS_2 | Air density | 69375 |  |
| SO2_2 | Sulphur dioxide | 69375 |  |
| DELP_2 | Pressure thickness | 69375 |  |
| SS004_2 | Sea Salt Mixing Ratio (bin 004) | 69375 |  |
| DU005_2 | Dust Mixing Ratio (bin 005) | 69375 |  |
| DU004_2 | Dust Mixing Ratio (bin 004) | 69375 |  |
| SS005_2 | Sea Salt Mixing Ratio (bin 005) | 69375 |  |
| OCPHILIC_2 | Hydrophilic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHOBIC_2 | Hydrophobic Black Carbon | 69375 |  |
| SS002_2 | Sea Salt Mixing Ratio (bin 002) | 69375 |  |
| DU003_2 | Dust Mixing Ratio (bin 003) | 69375 |  |
| DMS_2 | Dimethylsulphide | 69375 |  |
| SO4_2 | Sulphate aerosol | 69375 |  |
| DU002_2 | Dust Mixing Ratio (bin 002) | 69375 |  |
| PS_2 | Surface Pressure | 69375 |  |
| SS003_2 | Sea Salt Mixing Ratio (bin 003) | 69375 |  |
| DU001_2 | Dust Mixing Ratio (bin 001) | 69375 |  |
| OCPHOBIC_2 | Hydrophobic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHILIC_2 | Hydrophilic Black Carbon | 69375 |  |
| MSA_2 | Methanesulphonic acid | 69375 |  |
| SS001_2 | Sea Salt Mixing Ratio (bin 001) | 69375 |  |
| AIRDENS_3 | Air density | 69375 |  |
| SO2_3 | Sulphur dioxide | 69375 |  |
| DELP_3 | Pressure thickness | 69375 |  |
| SS004_3 | Sea Salt Mixing Ratio (bin 004) | 69375 |  |
| DU005_3 | Dust Mixing Ratio (bin 005) | 69375 |  |
| DU004_3 | Dust Mixing Ratio (bin 004) | 69375 |  |
| SS005_3 | Sea Salt Mixing Ratio (bin 005) | 69375 |  |
| OCPHILIC_3 | Hydrophilic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHOBIC_3 | Hydrophobic Black Carbon | 69375 |  |
| SS002_3 | Sea Salt Mixing Ratio (bin 002) | 69375 |  |
| DU003_3 | Dust Mixing Ratio (bin 003) | 69375 |  |
| DMS_3 | Dimethylsulphide | 69375 |  |
| SO4_3 | Sulphate aerosol | 69375 |  |
| DU002_3 | Dust Mixing Ratio (bin 002) | 69375 |  |
| PS_3 | Surface Pressure | 69375 |  |
| SS003_3 | Sea Salt Mixing Ratio (bin 003) | 69375 |  |
| DU001_3 | Dust Mixing Ratio (bin 001) | 69375 |  |
| OCPHOBIC_3 | Hydrophobic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHILIC_3 | Hydrophilic Black Carbon | 69375 |  |
| MSA_3 | Methanesulphonic acid | 69375 |  |
| SS001_3 | Sea Salt Mixing Ratio (bin 001) | 69375 |  |
| AIRDENS_4 | Air density | 69375 |  |
| SO2_4 | Sulphur dioxide | 69375 |  |
| DELP_4 | Pressure thickness | 69375 |  |
| SS004_4 | Sea Salt Mixing Ratio (bin 004) | 69375 |  |
| DU005_4 | Dust Mixing Ratio (bin 005) | 69375 |  |
| DU004_4 | Dust Mixing Ratio (bin 004) | 69375 |  |
| SS005_4 | Sea Salt Mixing Ratio (bin 005) | 69375 |  |
| OCPHILIC_4 | Hydrophilic Organic Carbon (Particulate Matter) | 69375 |  |
| BCPHOBIC_4 | Hydrophobic Black Carbon | 69375 |  |
| SS002_4 | Sea Salt Mixing Ratio (bin 002) | 69375 |  |
| DU003_4 | Dust Mixing Ratio (bin 003) | 69375 |  |
| DMS_4 | Dimethylsulphide | 69375 |  |
| SO4_4 | Sulphate aerosol | 69375 |  |
| DU002_4 | Dust Mixing Ratio (bin 002) | 69375 |  |
| PS_4 | Surface Pressure | 69375 |  |
| SS003_4 | Sea Salt Mixing Ratio (bin 003) | 69375 |  |
| DU001_4 | Dust Mixing Ratio (bin 001) | 69375 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/aer_nv/2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_aer_nv_2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
