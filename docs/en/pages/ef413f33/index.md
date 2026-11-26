---
title: "VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid"
date: 2026-11-03 12:00:00
---

# VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid

Original name: VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid

## What this dataset is

The daily Suomi National Polar-Orbiting Partnership NASA Visible Infrared
Imaging Radiometer Suite (VIIRS) Thermal Anomalies/Fire (VNP14A1) Version 1
data product provides daily information about active fires and other thermal
anomalies. The VNP14A1 data product is a global, 1km gridded composite of
fire pixels detected from VIIRS 750m bands over a daily (24-hour) period.
The VNP14 data products are designed after the Moderate Resolution Imaging
Spectroradiometer (MODIS) Thermal Anomalies/Fire product suite.

## Coverage and time range

- Coverage: Coverage: global; time span: 2012 to 2026; resolution: 1,000 m.
- Time range: 2012-01-19 至 2026-10-30

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| FireMask | Confidence of fire. | 1000 |  |
| MaxFRP | Maximum Fire Radiative Power | 1000 |  |
| QA | Global Land Surface Phenology Quality Control | 1000 |  |
| sample | Sample number within a swath | 1000 |  |

## What you can use it for

- Active fire and thermal anomaly monitoring
- Fire management
- Burned area research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP14A1');
```

- Earth Engine ID: `NASA/VIIRS/002/VNP14A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP14A1
* [User's Guide](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp14a1v002/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: fire, land, nasa, noaa, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP14A1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid](/en/pages/49ac0524/)
- [FIRMS: Fire Information for Resource Management System](/en/pages/4ae50fa9/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/en/pages/2a6e2416/)
- [GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS](/en/pages/fdfe82fc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
