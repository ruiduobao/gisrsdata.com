---
title: "JRC Global River Flood Hazard Maps Version 2.1"
date: 2026-11-03 12:00:00
---

# JRC Global River Flood Hazard Maps Version 2.1

Original name: JRC Global River Flood Hazard Maps Version 2.1

## What this dataset is

The global river flood hazard maps are a gridded data set representing
inundation along the river network, for seven different flood return periods
(from 1-in-10-years to 1-in-500-years). The input river flow data for the
new maps are produced by means of the open-source hydrological model
LISFLOOD, while inundation simulations are performed with the hydrodynamic
model LISFLOOD-FP. The extent comprises the entire world with the exception
of Greenland and Antarctica and small islands with river basins smaller than
500 km^2.

Cell values indicate water depth (in meters). The maps can be used to assess
the exposure of population and economic assets to river floods, and to
perform flood risk assessments. The dataset is created as part of the
Copernicus Emergency Management Service.

This version also includes additional datasets. For each tile, a flood
hazard map is available with water depth categorized according to the GloFAS
"Flood hazard 100 year return period" static layer. Furthermore, the
"spurious_depth_category" band identifies areas where depths greater than
10m are predicted in small channels (less than 3,000km^2) for the 10-year
return period, including a 2km buffer.

Note: The band structure has been updated in this version (v2). Each return
period now has separate bands for depth and depth category. Additionally,
bands for permanent water class and spurious depth category are included.

## Coverage and time range

- Coverage: Coverage: global (excluding Greenland, Antarctica and small islands with river basins smaller than 500 km2); resolution: 90 m.
- Time range: 2024-03-16 至 2024-03-16

## Resolution and specifications

- Spatial resolution: about 90 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| RP10_depth | Flood inundation depth for return period 10 years | 90 |  |
| RP20_depth | Flood inundation depth for return period 20 years | 90 |  |
| RP50_depth | Flood inundation depth for return period 50 years | 90 |  |
| RP75_depth | Flood inundation depth for return period 75 years | 90 |  |
| RP100_depth | Flood inundation depth for return period 100 years | 90 |  |
| RP200_depth | Flood inundation depth for return period 200 years | 90 |  |
| RP500_depth | Flood inundation depth for return period 500 years | 90 |  |
| RP10_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 10 years | 90 |  |
| RP20_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 20 years | 90 |  |
| RP50_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 50 years | 90 |  |
| RP75_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 75 years | 90 |  |
| RP100_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 100 years | 90 |  |
| RP200_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 200 years | 90 |  |
| RP500_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 500 years | 90 |  |
| permanent_water_class | Permanent water bodies used to patch the flood hazard maps | 90 |  |
| spurious_depth_category | Identifies areas where depths >10m are predicted in small channels (<3,000km^2) for the 10-year return period, plus a 2km buffer | 90 |  |

## What you can use it for

- Flood risk assessment
- Population and asset exposure analysis
- Insurance and disaster management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/CEMS_GLOFAS/FloodHazard/v2_1');
```

- Earth Engine ID: `JRC/CEMS_GLOFAS/FloodHazard/v2_1`
- Providers: Joint Research Centre, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1

## License and citation

- License: CC-BY-4.0
- Keywords: flood, monitoring, surface-ground-water, wri
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global River Flood Hazard Maps Version 1 [deprecated]](/pages/a326b13b/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GPWv4.11: Water Mask](/en/pages/d70c6d97/)
- [GPWv4.11: Water Area](/en/pages/0f13e587/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
