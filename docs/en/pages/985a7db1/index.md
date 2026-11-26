---
title: "VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid [deprecated]"
date: 2026-11-03 12:00:00
---

# VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid [deprecated]

Original name: VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid [deprecated]

## What this dataset is

The Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Land Cover Dynamics data product
provides global land surface phenology (GLSP) metrics at yearly intervals.
The VNP22Q2 data product is derived from time series of the two-band
Enhanced Vegetation Index (EVI2) calculated from VIIRS Nadir Bidirectional
Reflectance Distribution Function (BRDF)-Adjusted Reflectance (NBAR).
Vegetation phenology metrics at 500 meter spatial resolution are identified
for up to two detected growing cycles per year.

The product contains six phenological transition dates: onset of greenness
increase, onset of greenness maximum, onset of greenness decrease, onset of
greenness minimum, dates of mid-greenup, and senescence phases. The product
also includes the growing season length. The greenness-related metrics
consist of EVI2 onset of greenness increase, EVI2 onset of greenness
maximum, EVI2 growing season, rate of greenness increase, and rate of
greenness decrease. The confidence of phenology detection is provided as
greenness agreement growing season, proportion of good quality (PGQ)
growing season, PGQ onset greenness increase, PGQ onset greenness maximum,
PGQ onset greenness decrease, and PGQ onset greenness minimum.
The final layer is quality control specifying the overall quality of the
product.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2013 to 2022 (yearly); resolution: 500 m.
- Time range: 2013-01-01 至 2022-01-01

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Date_Mid_Greenup_Phase_1 | Date at a mid-greenup phase | 500 |  |
| Date_Mid_Senescence_Phase_1 | Date at a mid-senescence phase | 500 |  |
| EVI2_Growing_Season_Area_1 | Integrated EVI2 during a growing season | 500 |  |
| EVI2_Onset_Greenness_Increase_1 | EVI2 value at greenup onset | 500 |  |
| EVI2_Onset_Greenness_Maximum_1 | EVI2 value at maturity onset | 500 |  |
| GLSP_QC_1 | Global Land Surface Phenology Quality Control | 500 |  |
| Greenness_Agreement_Growing_Season_1 | EVI2 agreement between modeled values and raw observations | 500 |  |
| Growing_Season_Length_1 | Growing Season Length | 500 |  |
| Onset_Greenness_Decrease_1 | Date at which canopy greenness begins to decrease | 500 |  |
| Onset_Greenness_Increase_1 | Date of onset of greenness increase | 500 |  |
| Onset_Greenness_Maximum_1 | Date at which canopy greenness approaches its seasonal maximum | 500 |  |
| Onset_Greenness_Minimum_1 | Date at which canopy greenness reaches a minimum | 500 |  |
| PGQ_Growing_Season_1 | Proportion of good quality of VIIRS observations during a vegetation growing season | 500 |  |
| PGQ_Onset_Greenness_Decrease_1 | Proportion of good quality around senescence onset | 500 |  |
| PGQ_Onset_Greenness_Increase_1 | Proportion of good quality around greenup onset | 500 |  |
| PGQ_Onset_Greenness_Maximum_1 | Proportion of good quality around maturity onset | 500 |  |
| PGQ_Onset_Greenness_Minimum_1 | Proportion of good quality around dormancy onset | 500 |  |
| Rate_Greenness_Decrease_1 | Rates of change in EVI2 values during a senescence phase | 500 |  |
| Rate_Greenness_Increase_1 | Rates of change in EVI2 values during a greenup phase | 500 |  |
| Date_Mid_Greenup_Phase_2 | Date at a mid-greenup phase | 500 |  |
| Date_Mid_Senescence_Phase_2 | Date at a mid-senescence phase | 500 |  |
| EVI2_Growing_Season_Area_2 | Integrated EVI2 during a growing season | 500 |  |
| EVI2_Onset_Greenness_Increase_2 | EVI2 value at greenup onset | 500 |  |
| EVI2_Onset_Greenness_Maximum_2 | EVI2 value at maturity onset | 500 |  |
| GLSP_QC_2 | Global Land Surface Phenology Quality Control | 500 |  |
| Greenness_Agreement_Growing_Season_2 | EVI2 agreement between modeled values and raw observations | 500 |  |
| Growing_Season_Length_2 | Growing Season Length | 500 |  |
| Onset_Greenness_Decrease_2 | Date at which canopy greenness begins to decrease | 500 |  |
| Onset_Greenness_Increase_2 | Date of onset of greenness increase | 500 |  |
| Onset_Greenness_Maximum_2 | Date at which canopy greenness approaches its seasonal maximum | 500 |  |
| Onset_Greenness_Minimum_2 | Date at which canopy greenness reaches a minimum | 500 |  |
| PGQ_Growing_Season_2 | Proportion of good quality of VIIRS observations during a vegetation growing season | 500 |  |
| PGQ_Onset_Greenness_Decrease_2 | Proportion of good quality around senescence onset | 500 |  |
| PGQ_Onset_Greenness_Increase_2 | Proportion of good quality around greenup onset | 500 |  |
| PGQ_Onset_Greenness_Maximum_2 | Proportion of good quality around maturity onset | 500 |  |
| PGQ_Onset_Greenness_Minimum_2 | Proportion of good quality around dormancy onset | 500 |  |
| Rate_Greenness_Decrease_2 | Rates of change in EVI2 values during a senescence phase | 500 |  |
| Rate_Greenness_Increase_2 | Rates of change in EVI2 values during a greenup phase | 500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP22Q2');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP22Q2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP22Q2
* [User's Guide](https://lpdaac.usgs.gov/documents/637/VNP22_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/637/VNP22_User_Guide_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp22q2v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: land, nasa, ndvi, noaa, npp, onset-greenness, phenology, surface, vegetation, vegetation-indices, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP22Q2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP13A1.001: VIIRS Vegetation Indices 16-Day 500m [deprecated]](/en/pages/e2cab212/)
- [VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid [deprecated]](/en/pages/abb03285/)
- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
