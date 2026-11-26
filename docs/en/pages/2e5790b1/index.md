---
title: "UN FAO Drained Organic Soils Area (Annual) 1.0"
date: 2026-11-03 12:00:00
---

# UN FAO Drained Organic Soils Area (Annual) 1.0

Original name: UN FAO Drained Organic Soils Area (Annual) 1.0

## What this dataset is

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

## Coverage and time range

- Coverage: Global
- Time range: 1992-01-01 至 2018-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| cropland | Area of cropland organic soils (histosols) | 927.67 |  |
| grassland | Area of grassland organic soils (histosols) | 927.67 |  |

## What you can use it for

- Accounting of drained organic soil area and GHG emissions
- National greenhouse gas inventory compilation
- Peatland conservation and agricultural climate policy analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FAO/GHG/1/DROSA_A');
```

- Earth Engine ID: `FAO/GHG/1/DROSA_A`
- Providers: FAO UN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_GHG_1_DROSA_A

## License and citation

- License: proprietary
- Keywords: agriculture, climate, climate-change, emissions, fao, ghg, organic-soils, weather-and-climate
- 数据引用：FAO 2020. Drained organic soils 1990 - 2019. Global, regional and country
trends.  FAOSTAT Analytical Brief Series No 4, FAO, Rome.
[http://www.fao.org/3/cb0489en/cb0489en.pdf](
  http://www.fao.org/3/cb0489en/cb0489en.pdf)

- DOI：10.5194/essd-12-3113-2020

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Drained Organic Soils Emissions (Annual) 1.0](/pages/664c80e9/)
- [SLGA: Soil and Landscape Grid of Australia (Soil Attributes)](/en/pages/6de4314d/)
- [NLDAS-2: North American Land Data Assimilation System Forcing Fields](/pages/4a88073a/)
- [OpenLandMap Clay Content](/pages/f45c0586/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
