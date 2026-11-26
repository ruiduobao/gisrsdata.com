---
title: "NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1"
date: 2026-11-03 12:00:00
---

# NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1

Original name: NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1

## What this dataset is

This dataset contains gridded daily Normalized Difference Vegetation Index
(NDVI) derived from the NOAA Climate Data Record (CDR) of Visible Infrared
Imaging Radiometer Suite (VIIRS) Surface Reflectance. The data record spans
from 2014 onward using data from NOAA polar orbiting
satellites. The data are projected on a 0.05 degree x 0.05 degree global
grid. This dataset is one of the Land Surface CDR products produced by the
NASA Goddard Space Flight Center (GSFC) and the University of Maryland
(UMD).

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Normalized_Difference_Vegetation_Index/VIIRS/AlgorithmDescriptionVIIRS_01B-20b.pdf).

Provider's note: the orbital drift of N-19 (the last NOAA satellite
carrying the AVHRR sensor) began to severely degrade the retrieved
product quality. Therefore, VIIRS is now the primary sensor being used for
these products from 2014-present.

## Coverage and time range

- Coverage: Coverage: global land; time span: 2014 to 2026; resolution: 5,566 m.
- Time range: 2014-01-01 至 2026-10-29

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Normalized difference vegetation index | 5566 |  |
| TIMEOFDAY | Hours since start of day | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## What you can use it for

- Climate data record applications
- Long-term vegetation change monitoring
- Climate change research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/VIIRS/NDVI/V1');
```

- Earth Engine ID: `NOAA/CDR/VIIRS/NDVI/V1`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_VIIRS_NDVI_V1

## License and citation

- License: proprietary
- Keywords: cdr, daily, land, ndvi, noaa, vegetation-indices, viirs
- 数据引用：Cite as: Vermote, Eric; NOAA CDR Program. (2022): NOAA Climate Data Record
(CDR) of VIIRS Normalized Difference Vegetation Index (NDVI), Version 1.
[indicate subset used]. NOAA National Centers for Environmental Information.
[https://doi.org/10.25921/gakh-st76](https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C01677/html)

- DOI：10.25921/gakh-st76

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 5](/en/pages/27c7ed95/)
- [NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5](/en/pages/a0ccef04/)
- [NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1](/en/pages/8b7e1f94/)
- [NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]](/en/pages/18fe53c5/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
