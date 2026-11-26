---
title: "ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)"
date: 2026-11-03 12:00:00
---

# ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)

Original name: ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)

## What this dataset is

This dataset updated to v6.0 provides estimates of forest above-ground
biomass for the years 2007, 2010, 2015, 2016, 2017, 2018, 2019, 2020,
2021, and 2022. These estimates are derived from a combination of Earth
observation data, depending on the year, obtained from the Copernicus
Sentinel-1 mission, Envisat’s ASAR (Advanced Synthetic Aperture Radar)
instrument, and JAXA's Advanced Land Observing Satellite (ALOS-1 and
ALOS-2), along with additional information from other Earth observation
sources. The dataset has been generated as part of the European Space
Agency's (ESA's) Climate Change Initiative (CCI) program by the Biomass
CCI team.

Compared to version 5, version 6 consists of updated AGB maps for the
years 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 and new AGB maps
for 2007 and 2022. The dataset includes multi-temporal observations
at L-band for all biomes and for each year. The above-ground biomass
(AGB) maps utilize revised allometries, which are now based on a more
extensive collection of spaceborne LiDAR data from the GEDI and ICESat-2
missions. The retrieval algorithm incorporates extended ICESat-2
observations to calibrate retrieval models and a refined cost function
that preserves temporal features as expressed in the remote sensing
data, limiting biases between the 2007-2010 and the 2015+ maps.

## Coverage and time range

- Coverage: Global
- Time range: 2007-01-01 至 2023-01-01
- Cadence: Selected years (2007, 2010, 2015-2022)

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| agb | Above ground biomass (AGB) is defined as the mass, expressed as oven-dry weight of the woody parts (stem, bark, branches and twigs) of all living trees excluding stump and roots. | 100 |  |
| agb_sd | Per-pixel estimates of above-ground biomass uncertainty expressed as the standard deviation. | 100 |  |

## What you can use it for

- Global forest carbon stock estimation
- Monitoring forest biomass change
- Base data for REDD+ and carbon accounting

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ESA/CCI/Above_Ground_Biomass/V6_0');
```

- Earth Engine ID: `ESA/CCI/Above_Ground_Biomass/V6_0`
- Providers: ESA Biomass CCI, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_CCI_Above_Ground_Biomass_V6_0

## License and citation

- License: CC-BY-4.0
- Keywords: biomass, cci, ecosystems, esa, forest
- 数据引用：Santoro, M.; Cartus, O. (2025): ESA Biomass Climate Change Initiative
(Biomass_cci): Global datasets of forest above-ground biomass for the
years 2007, 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 and 2022,
v6.0. NERC EDS Centre for Environmental Data Analysis, 17 April 2025.
doi:10.5285/95913ffb6467447ca72c4e9d8cf30501.

- DOI：10.5285/95913ffb6467447ca72c4e9d8cf30501

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.11](/en/pages/2a1f609f/)
- [Landsat-derived Forest Age for Canada 2019](/en/pages/65b34141/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.10 [deprecated]](/en/pages/9bb9126f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
