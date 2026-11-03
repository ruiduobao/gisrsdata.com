---
title: "ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)"
date: 2026-11-03 12:00:00
permalink: /pages/e9028b43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "cci"
  - "ecosystems"
  - "esa"
  - "forest"
---

# ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)

## 数据集简介

This dataset updated to v6.0 provides estimates of forest above-ground
biomass for the years 2007, 2010, 2015, 2016, 2017, 2018, 2019, 2020,
2021, and 2022. These estimates are derived from a combination of Earth
observation data, depending on the year, obtained from the Copernicus
Sentinel-1 mission, Envisat’s ASAR (Advanced Synthetic Aperture Radar)
instrument, and JAXA's Advanced Land Observing Satellite (ALOS-1 and
ALOS-2), along with additional information from other Earth observation
sources. The dataset has been generated as part of the European Space
Agency's (ESA's) Climate Change Initiative (CCI) program by the Biomass
CCI team.

Compared to version 5, version 6 consists of updated AGB maps for the
years 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 and new AGB maps
for 2007 and 2022. The dataset includes multi-temporal observations
at L-band for all biomes and for each year. The above-ground biomass
(AGB) maps utilize revised allometries, which are now based on a more
extensive collection of spaceborne LiDAR data from the GEDI and ICESat-2
missions. The retrieval algorithm incorporates extended ICESat-2
observations to calibrate retrieval models and a refined cost function
that preserves temporal features as expressed in the remote sensing
data, limiting biases between the 2007-2010 and the 2015+ maps.

## 基本信息

- 数据集编号（Earth Engine ID）：`ESA/CCI/Above_Ground_Biomass/V6_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：ESA Biomass CCI、Google Earth Engine
- 时间范围：2007-01-01 至 2023-01-01
- 空间分辨率：100 米
- 许可：CC-BY-4.0
- 关键词：biomass, cci, ecosystems, esa, forest

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| agb | Above ground biomass (AGB) is defined as the mass, expressed as oven-dry weight of the woody parts (stem, bark, branches and twigs) of all living trees excluding stump and roots.  | 100 |  |
| agb_sd | Per-pixel estimates of above-ground biomass uncertainty expressed as the standard deviation.  | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ESA/CCI/Above_Ground_Biomass/V6_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_CCI_Above_Ground_Biomass_V6_0
- 数据引用：Santoro, M.; Cartus, O. (2025): ESA Biomass Climate Change Initiative
(Biomass_cci): Global datasets of forest above-ground biomass for the
years 2007, 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 and 2022,
v6.0. NERC EDS Centre for Environmental Data Analysis, 17 April 2025.
doi:10.5285/95913ffb6467447ca72c4e9d8cf30501.

- DOI：10.5285/95913ffb6467447ca72c4e9d8cf30501

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
