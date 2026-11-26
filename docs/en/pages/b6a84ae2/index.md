---
title: "VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid [deprecated]"
date: 2026-11-03 12:00:00
---

# VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid [deprecated]

Original name: VNP64A1: Burned Area Monthly L4 Global 500m SIN Grid [deprecated]

## What this dataset is

The daily Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Burned Area (VNP64A1) Version 1
data product is a monthly, global gridded 500m product containing per-pixel
burned area and quality information. The VNP64 burned area mapping approach
employs 750m VIIRS imagery coupled with 750m VIIRS active fire
observations.

VIIRS bands that are both sensitive and insensitive to biomass burning are
used to detect changes caused by fire and to differentiate them from other
types of change.

## Coverage and time range

- Coverage: Spatial: global; temporal: 2014 to 2019 (monthly); resolution: 500 m.
- Time range: 2014-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Burn_Date | Ordinal day of burn (1-366) for each 500-m grid cell. | 500 |  |
| Burn_Date_Uncertainty | Estimated uncertainty in date of burn, in days. Unburned, unmapped, and water grid cells are masked out. | 500 |  |
| QA | Quality Assurance Indicators | 500 |  |
| First_Day | First day of the year of reliable change detection | 500 |  |
| Last_Day | Last day of the year of reliable change detection | 500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP64A1');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP64A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP64A1
* [User's Guide](https://lpdaac.usgs.gov/documents/1330/VNP64A1_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/572/VNP64A1_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp64a1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: burn, change-detection, fire, land, nasa, noaa, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP64A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP14A1.001: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid [deprecated]](/en/pages/a3cdde8d/)
- [FIRMS: Fire Information for Resource Management System](/en/pages/4ae50fa9/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/en/pages/2a6e2416/)
- [GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS](/en/pages/fdfe82fc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
