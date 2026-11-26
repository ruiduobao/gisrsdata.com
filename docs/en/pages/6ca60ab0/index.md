---
title: "MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m"
date: 2026-11-03 12:00:00
---

# MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m

Original name: MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m

## What this dataset is

The Terra MODIS Vegetation Continuous Fields (VCF)
product is a sub-pixel-level representation of surface vegetation
cover estimates globally. Designed to continuously represent
Earth's terrestrial surface as a proportion of basic vegetation
traits, it provides a gradation of three surface cover components:
percent tree cover, percent non-tree cover, and percent bare.
VCF products provide a continuous, quantitative portrayal of
land surface cover with improved spatial detail, and hence, are
widely used in environmental modeling and monitoring applications.

Generated yearly, the VCF product is produced using monthly
composites of Terra MODIS 250 and 500 meters Land Surface Reflectance
data, including all seven bands, and Land Surface Temperature.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2025; resolution: 250 m.
- Time range: 2000-03-05 至 2025-03-06

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Percent_Tree_Cover | Percent of a pixel which is covered by tree canopy | 250 |  |
| Percent_NonTree_Vegetation | Percent of a pixel which is covered by non-tree vegetation | 250 |  |
| Percent_NonVegetated | Percent of a pixel which is not vegetated | 250 |  |
| Quality | Describes those inputs that had poor quality (cloudy, high aerosol, cloud shadow, or view zenith >45&deg;). Each bit in the field represents 1 out of 8 input surface reflectance files to the model. | 250 |  |
| Percent_Tree_Cover_SD | Standard deviation (SD) of the 30 models that were used to generate the pixel value in the percent tree cover data layer | 250 |  |
| Percent_NonVegetated_SD | Standard deviation (SD) of the 30 models that were used to generate the pixel value in the percent non-vegetated data layer | 250 |  |
| Cloud | Clarifies the 'Quality' layer to give the user an indication that the 'bad' data refers to cloudy input data. Each bit in the field represents 1 out of 8 input surface reflectance files to the model. | 250 |  |

## What you can use it for

- Vegetation continuous fields mapping
- Forest cover change monitoring
- Environmental modeling

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD44B');
```

- Earth Engine ID: `MODIS/061/MOD44B`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD44B
* [User's Guide](https://lpdaac.usgs.gov/documents/1494/MOD44B_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/113/MOD44B_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/mod44bv061/)

## License and citation

- License: proprietary
- Keywords: annual, geophysical, global, landuse-landcover, mod44b, modis, nasa, terra, tree-cover, vegetation
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG](/en/pages/3c641846/)
- [MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m](/en/pages/676a6522/)
- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m](/en/pages/7a9ce2ed/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
