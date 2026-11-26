---
title: "EUCROPMAP"
date: 2026-11-03 12:00:00
---

# EUCROPMAP

Original name: EUCROPMAP

## What this dataset is

European crop type maps based on Sentinel-1 and LUCAS Copernicus 2018 in-situ 
observations for 2018, and a combination of Sentinel-1, Sentinel-2, 
and auxiliary data with LUCAS Copernicus 2022 observations for 2022.

Based on the unique [LUCAS 2018 Copernicus in-situ survey](JRC_LUCAS_HARMO_THLOC_V1), this dataset 
represents the first EU-scale crop type map at 10m resolution, 
which was derived exclusively from S1A and S1B synthetic aperture radar observations. 
The 2022 dataset continues this effort using a multi-source approach that combines 
Sentinel-1 and Sentinel-2 imagery with temperature and elevation data, supported by LUCAS 2022 observations.

## Coverage and time range

- Coverage: Coverage: Europe (EU); time: 2018 and 2022; resolution: 10 m.
- Time range: 2018-01-01 至 2022-01-01

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| classification | Main crop-specific land cover classification. | 10 |  |

## What you can use it for

- European crop type mapping
- Agricultural statistics and yield assessment
- Common Agricultural Policy monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/D5/EUCROPMAP/V1');
```

- Earth Engine ID: `JRC/D5/EUCROPMAP/V1`
- Providers: Joint Research Center (JRC), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_D5_EUCROPMAP_V1

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, crop, eu, jrc, lucas, sentinel1-derived
- 数据引用：d'Andrimont, R., Verhegghen, A., Lemoine, G., Kempeneers, P., Meroni, M.,
& Van der Velde, M. (2021). From parcel to continental scale-A first
European crop type map based on Sentinel-1 and LUCAS Copernicus in-situ
observations. Remote sensing of environment, 266, 112708.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [WAPOR Actual Evapotranspiration and Interception 2.0](/en/pages/f46d014b/)
- [WAPOR Actual Evapotranspiration and Interception 3.0](/en/pages/aca03f09/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
