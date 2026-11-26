---
title: "GEDI L4D Imputed Waveforms, Version 2"
date: 2026-11-03 12:00:00
---

# GEDI L4D Imputed Waveforms, Version 2

Original name: GEDI L4D Imputed Waveforms, Version 2

## What this dataset is

The GEDI Level 4D (L4D) product provides a 30-m spatial elaboration of the mission's sample of footprint-level L2A V002, L2B V002, and L4A Version 2.1 products globally between latitudes -51.6 and 51.6 degrees.

A k-nearest neighbors (k-NN) algorithm was used with Landsat time series data to impute high-quality GEDI shots to every 30-m pixel. A different nearest neighbor model was developed for every 10 x 10-km tile, with potential imputed shots drawn from a support area of at least 30 x 30 km centered on the tile. The imputation assigns the single nearest neighbor using Landsat time series imagery centered on the target year 2023.

The most basic 30-m output is the shot number of the imputed pixel (relayed in fragments across five fields), from which any shot-level quantity may be retrieved. Predictions for commonly used waveform attributes are also included, such as relative height (RH) metrics from the L2A product, canopy cover from L2B, and aboveground biomass density (AGBD) from L4A.

See [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4D_Imputed_Waveforms.html) for more information.

The Global Ecosystem Dynamics Investigation [GEDI](https://gedi.umd.edu/)
mission aims to characterize ecosystem structure and dynamics to enable
radically improved quantification and understanding of the Earth's carbon cycle
and biodiversity. The GEDI instrument, attached to the International Space
Station (ISS), collects data globally between 51.6&deg; N and 51.6&deg; S
latitudes at the highest resolution and densest sampling of the
3-dimensional structure of the Earth. The GEDI instrument consists of three
lasers producing a total of eight beam ground transects, which instantaneously
sample eight ~25 m footprints spaced approximately every 60 m along-track.

Product                 | Description
:---------------------  | :----------------------------------------------
L2A Vector         | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A Monthly raster | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A table index    | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B Vector         | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B Monthly raster | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B table index    | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A Biomass Vector | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A Monthly raster | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A table index    | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B Biomass        | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D Imputed Waveforms | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## Coverage and time range

- Coverage: Coverage: 51.6° N to 51.6° S globally; time span: 2019 to 2023; resolution: 30 m.
- Time range: 2019-04-18 至 2023-03-16

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| rh10 | Relative Height metric (rh10) | 30 |  |
| rh20 | Relative Height metric (rh20) | 30 |  |
| rh30 | Relative Height metric (rh30) | 30 |  |
| rh40 | Relative Height metric (rh40) | 30 |  |
| rh50 | Relative Height metric (rh50) | 30 |  |
| rh60 | Relative Height metric (rh60) | 30 |  |
| rh70 | Relative Height metric (rh70) | 30 |  |
| rh80 | Relative Height metric (rh80) | 30 |  |
| rh90 | Relative Height metric (rh90) | 30 |  |
| rh95 | Relative Height metric (rh95) | 30 |  |
| rh98 | Relative Height metric (rh98) | 30 |  |
| cover_z_000 | Canopy Cover | 30 |  |
| agbd | Aboveground Biomass Density | 30 |  |
| sensitivity_a2 | Sensitivity | 30 |  |
| shot_orbit | Orbit component of shot number | 30 |  |
| shot_beam | Beam component of shot number | 30 |  |
| shot_future | Future component of shot number | 30 |  |
| shot_granule | Granule component of shot number | 30 |  |
| shot_index | Shot Index component of shot number | 30 |  |
| QA | Quality Assessment mask | 30 |  |

## What you can use it for

- Forest canopy height and structure analysis
- Aboveground biomass and carbon stock estimation
- Three-dimensional ecosystem structure research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_D_002');
```

- Earth Engine ID: `LARSE/GEDI/GEDI04_D_002`
- Providers: ORNL DAAC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_D_002

## License and citation

- License: proprietary
- Keywords: biomass, canopy, elevation, forest, forest-biomass, gedi, larse, nasa, tree-cover
- 数据引用：Seo, E., Healey, S. P., Yang, Z., Dubayah, R. O., De Conto, T., & Armston, J. (2025). GEDI L4D Imputed Waveforms, Version 2 (Version 2). ORNL Distributed Active Archive Center. https://doi.org/10.3334/ORNLDAAC/2455

- DOI：10.3334/ORNLDAAC/2455

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
