---
title: "Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover"
date: 2026-11-03 12:00:00
---

# Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover

Original name: Oxford MAP: Malaria Atlas Project Fractional International Geosphere-Biosphere Programme Landcover

## What this dataset is

The underlying dataset for this landcover product is the IGBP layer found
within the MODIS annual landcover product (MCD12Q1). This data was
converted from its categorical format, which has a &asymp;500 meter resolution,
to a fractional product indicating the integer percentage (0-100) of the
output pixel covered by each of the 17 landcover classes (1 per band).

This dataset was produced by Harry Gibson and Daniel Weiss of the
Malaria Atlas Project (Big Data Institute, University of Oxford,
United Kingdom, [https://malariaatlas.org/](https://malariaatlas.org/)).

## Coverage and time range

- Coverage: Spatial: global; temporal: 2001 to 2013 (annual); resolution: 5,000 m.
- Time range: 2001-01-01 至 2013-01-01

## Resolution and specifications

- Spatial resolution: about 5,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Overall_Class | Dominant class of each resulting pixel | 5000 |  |
| Water | Percentage of water | 5000 |  |
| Evergreen_Needleleaf_Forest | Percentage of evergreen needleleaf forest | 5000 |  |
| Evergreen_Broadleaf_Forest | Percentage of evergreen broadleaf forest | 5000 |  |
| Deciduous_Needleleaf_Forest | Percentage of deciduous needleleaf forest | 5000 |  |
| Deciduous_Broadleaf_Forest | Percentage of deciduous broadleaf forest | 5000 |  |
| Mixed_Forest | Percentage of mixed forest | 5000 |  |
| Closed_Shrublands | Percentage of closed shrublands | 5000 |  |
| Open_Shrublands | Percentage of open shrublands | 5000 |  |
| Woody_Savannas | Percentage of woody savannas | 5000 |  |
| Savannas | Percentage of savannas | 5000 |  |
| Grasslands | Percentage of grasslands | 5000 |  |
| Permanent_Wetlands | Percentage of permanent wetlands | 5000 |  |
| Croplands | Percentage of croplands | 5000 |  |
| Urban_And_Built_Up | Percentage of urban and built up | 5000 |  |
| Cropland_Natural_Vegetation_Mosaic | Percentage of cropland natural vegetation mosaic | 5000 |  |
| Snow_And_Ice | Percentage of snow and ice | 5000 |  |
| Barren_Or_Sparsely_Populated | Percentage of barren or sparsely populated | 5000 |  |
| Unclassified | Percentage of unclassified | 5000 |  |
| No_Data | Percentage of no data | 5000 |  |

## What you can use it for

- Provide long time-series environmental variables for malaria-transmission studies.
- Model disease ecology and vector distributions.
- Combine with other health-geography data.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual');
```

- Earth Engine ID: `Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual`
- Providers: Oxford Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_IGBP_Fractional_Landcover_5km_Annual

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: igbp, landcover, landuse-landcover, map
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Dynamic World V1](/en/pages/a78539ca/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
