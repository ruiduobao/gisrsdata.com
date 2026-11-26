---
title: "VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid [deprecated]"
date: 2026-11-03 12:00:00
---

# VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid [deprecated]

Original name: VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid [deprecated]

## What this dataset is

The Visible Infrared Imaging Radiometer Suite (VIIRS) Leaf Area Index (LAI)
and Fraction of Photosynthetically Active Radiation (FPAR) Version 1 data
product provides information about the vegetative canopy layer at 500 meter
resolution (VNP15A2H). The VIIRS sensor is located onboard the NOAA/NASA
joint Suomi National Polar-Orbiting Partnership (Suomi NPP) satellite. LAI
is an index that quantifies the one-sided leaf area of a canopy, while FPAR
is the fraction of incoming solar energy absorbed through photosynthesis at
400 to 700 nanometers. This product is intentionally designed after the
Terra and Aqua Moderate Resolution Imaging Spectroradiometer (MODIS)
LAI/FPAR operational algorithm to promote the continuity of the Earth
Observation System (EOS) mission.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2012 to 2024 (8-day composites); resolution: 500 m.
- Time range: 2012-01-17 至 2024-06-16

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Fpar | Fraction of Photosynthetically Active Radiation. | 500 |  |
| FparExtra_QC | Pass-through Quality Control (QC) for FPAR | 500 |  |
| FparLai_QC | Quality for LAI and FPAR | 500 |  |
| FparStdDev | Standard deviation of FPAR | 500 |  |
| Lai | Leaf Area Index | 500 |  |
| LaiStdDev | Standard deviation for LAI | 500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP15A2H');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP15A2H`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP15A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/126/VNP15_User_Guide.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/125/VNP15_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp15a2hv001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: land, nasa, noaa, plant-productivity, surface, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP15A2H.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP13A1.001: VIIRS Vegetation Indices 16-Day 500m [deprecated]](/en/pages/e2cab212/)
- [VNP22Q2: Land Surface Phenology Yearly L3 Global 500m SIN Grid [deprecated]](/en/pages/985a7db1/)
- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
