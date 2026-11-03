---
title: "Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes"
date: 2026-11-03 12:00:00
permalink: /pages/bf7e283f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "daily"
  - "emit"
  - "methane"
  - "nasa"
---

# Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes

## 数据集简介

The EMIT Project is part of the Earth Venture-Instrument (EV-I) Program
directed by the Program Director of the NASA Earth Science Division (ESD).
EMIT is comprised of a VSWIR Infrared Dyson imaging spectrometer adapted for
installation on the International Space Station (ISS). EMIT measures
radiance between 380 and 2500 nanometers, with an approximate 7 nm bandpass.
Data are collected in a swath that is approximately 75 km wide at the
equator, with an approximate ground sampling distance of 60 m. See the
provider's [NASA EMIT Overview](https://lpdaac.usgs.gov/documents/1695/EMIT_L2B_GHG_User_Guide_V1.pdf)
for more details.

EMIT was a particularly useful tool for mapping out greenhouse gases,
including methane, carbon dioxide, and water vapor. This is consistent with
previous findings from airborne data, but global nature, revisit frequency
and wide swath of EMIT provided an unprecedented opportunity to investigate
greenhouse gas retrievals.

The EMIT Level 2B Estimated Methane Plume Complexes (EMITL2BCH4PLM) Version
1 data product provides estimated methane plume complexes in parts per
million meter (ppm m) along with uncertainty data. The EMITL2BCH4PLM data
product will only be generated where methane plume complexes have been
identified.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/EMIT/L2B/CH4PLM`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2022-08-10 至 2024-10-26
- 空间分辨率：72000 米
- 许可：proprietary
- 关键词：atmosphere, daily, emit, methane, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| methane_plume_complex | Estimated Methane plume complex. | 72000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/EMIT/L2B/CH4PLM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2B_CH4PLM
- 数据引用：Green, R., Thorpe, A., Brodrick, P., Chadwick, D., Elder, C.,
Villanueva-Weeks, C., Fahlen, J., Coleman, R., Jensen, D., Olsen-Duvall, W.,
Lundeen, S., Lopez, A., Thompson, D. (2023). EMIT L2B Estimated Methane
Plume Complexes 60 m V001 [Data set]. NASA EOSDIS Land Processes Distributed
Active Archive Center. Accessed 2024-03-06 from
[https://doi.org/10.5067/EMIT/EMITL2BCH4PLM.001](https://doi.org/10.5067/EMIT/EMITL2BCH4PLM.001)

- DOI：10.5067/EMIT/EMITL2BCH4PLM.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
