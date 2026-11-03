---
title: "Drained Organic Soils Emissions (Annual) 1.0"
date: 2026-11-03 12:00:00
permalink: /pages/664c80e9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "climate"
  - "climate-change"
  - "emissions"
  - "fao"
  - "ghg"
  - "organic-soils"
  - "weather-and-climate"
---

# Drained Organic Soils Emissions (Annual) 1.0

## 数据集简介

The two related FAO datasets on Drained Organic Soils provide estimates of:

1. DROSA-A: area of Organic Soils (in hectares) drained for agricultural
activities (cropland and grazed grassland)

2. DROSE-A: carbon (C) and nitrous oxide (N2O) estimates (in gigagrams) from
the agricultural drainage of organic soils under these land uses.

Annual data are available at 0.0083333 X 0.0083333 resolution (~1 km at the
equator), with global coverage for the period 1992 - 2018.

FAOSTAT estimates follow the Intergovernmental Panel on Climate Change
Guidelines (IPCC) and use histosols as proxy for the presence of organic
soils and annual land cover maps as time- dependent component. Additionally,
soils characteristics, land use, and climate information are applied in the
analysis. The carbon emissions can be converted to CO2, multiplying pixel
values by the ratio of the molecular weight of carbon dioxide (CO2) to that
of C (44/12).

Organic soils develop in wet soil ecosystems. They include tropical and
boreal peatlands, high-latitude bogs, ferns, and mires. Organic soils cover
globally a mere 3 percent of the terrestrial land area but represent up to
30 percent of the total soil carbon, thus playing an important role in
maintaining the earth's carbon balance. Agriculture is a major cause of
drainage of organic soils around the world.  Drainage exposes to aerobic
conditions the organic matter of organic soils that oxidizes releasing large
amounts of harmful greenhouse gases (GHG) to the atmosphere.

DROSA-A and DROSE-A are the basis for country and regional statistics on
drained organic soils disseminated in three FAOSTAT datasets (Cultivation of
Organic Soils; Cropland; and Grassland).

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/GHG/1/DROSE_A`
- 数据类型：影像集合（ImageCollection）
- 提供方：FAO UN、Google Earth Engine
- 时间范围：1992-01-01 至 2018-01-01
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：agriculture, climate, climate-change, emissions, fao, ghg, organic-soils, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| croplandc | C emissions from cropland organic soils | 927.67 |  |
| croplandn2o | N2O emissions from cropland organic soils | 927.67 |  |
| grasslandc | C emissions from grassland organic soils | 927.67 |  |
| grasslandn2o | N2O emissions from grassland organic soils | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('FAO/GHG/1/DROSE_A');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GHG_1_DROSE_A
- 数据引用：FAO 2020. Drained organic soils 1990 - 2019. Global, regional and country
trends.  FAOSTAT Analytical Brief Series No 4, FAO, Rome.
[http://www.fao.org/3/cb0489en/cb0489en.pdf](
  http://www.fao.org/3/cb0489en/cb0489en.pdf)

- DOI：10.5194/essd-12-3113-2020

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
