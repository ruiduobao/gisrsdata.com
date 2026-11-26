---
title: "NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]"
date: 2026-11-03 12:00:00
---

# NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]

Original name: NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]

## What this dataset is

The NOAA Climate Data Record (CDR) of AVHRR Leaf Area Index (LAI) and
Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) dataset
contains derived values that characterize the canopy and photosynthetic
activity of plants. This dataset is derived from the NOAA AVHRR Surface
Reflectance product and is gridded at a resolution of 0.05° on a daily
basis. The values are computed globally over land surfaces, but not over
bare or very sparsely vegetated areas, permanent ice or snow, permanent
wetland, urban areas, or water bodies.

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www1.ncdc.noaa.gov/pub/data/sds/cdr/CDRs/AVHRR%20Surface%20Reflectance/TechNote.pdf).

## Coverage and time range

- Coverage: Coverage: global land; time span: 1981 to 2019; resolution: 5,566 m.
- Time range: 1981-06-24 至 2019-05-16

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LAI | Leaf area index | 5566 |  |
| FAPAR | Fraction of absorbed photosynthetic active radiation | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## What you can use it for

- Long-term vegetation change monitoring
- Climate data record applications
- Plant productivity research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/LAI_FAPAR/V4');
```

- Earth Engine ID: `NOAA/CDR/AVHRR/LAI_FAPAR/V4`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_LAI_FAPAR_V4

## License and citation

- License: proprietary
- Keywords: avhrr, cdr, daily, fapar, lai, land, noaa, plant-productivity
- 数据引用：Martin Claverie, Eric Vermote, and NOAA CDR Program (2014): NOAA Climate
Data Record (CDR) of Leaf Area Index (LAI) and Fraction of Absorbed
Photosynthetically Active Radiation (FAPAR), Version 4. [indicate subset
used]. NOAA National Climatic Data Center.
[doi:10.7289/V5M043BX](https://data.nodc.noaa.gov/cgi-bin/iso?id=gov.noaa.ncdc:C00898)

- DOI：10.7289/V5M043BX

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 5](/en/pages/27c7ed95/)
- [NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5](/en/pages/a0ccef04/)
- [NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1](/en/pages/8b7e1f94/)
- [NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1](/en/pages/ea9a554f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
