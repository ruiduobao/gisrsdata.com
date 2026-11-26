---
title: "CSIRO Global Biodiversity Indicators"
date: 2026-11-03 12:00:00
---

# CSIRO Global Biodiversity Indicators

Original name: CSIRO Global Biodiversity Indicators

## What this dataset is

The CSIRO biodiversity indicators v4 dataset, produced by CSIRO using the BILBI (Biogeographic Infrastructure for Large-scale Biodiversity Indicators) framework, models global terrestrial biodiversity indicators at 30 arcsecond (~1 km) resolution annually from 2000 to 2024. These indicators provide a system-level view of change in biodiversity protection, expected persistence, and resilience in the face of climate change.

A complementary static global weighting surface is available as a standalone image at CSIRO/BHI/v4_weights. It represents summed compositional similarity across terrestrial pixels, which is used for calculating regional and global geometric aggregations of the biodiversity indicators.

For more detailed explanations of the indicators and how they are derived, see [CSIRO Biodiversity Modelling](https://research.csiro.au/biodiversitymodelling/indicators-tracking-progress-for-biodiversity/).

## Coverage and time range

- Coverage: Global (terrestrial)
- Time range: 2000-01-01 至 2025-01-01
- Cadence: Annual

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| bhi | Biodiversity Habitat Index: Estimates the proportion of species diversity retained within each pixel as a function of the area, condition, and connectivity of natural ecosystems. | 1000 |  |
| beri | Bioclimatic Ecosystem Resilience Index: Estimates the capacity of landscapes to retain species diversity in the face of climate change as a function of the area, condition, and connectivity of natural ecosystems across those landscapes. | 1000 |  |
| parc_rep | Protected Area Representativeness: Estimates the extent to which a system of terrestrial protected areas is ecologically representative of the full range of environmental and biological diversity in any region. | 1000 |  |
| parc_con | Protected Area Connectedness: Estimates the extent to which protected areas are functionally connected to one another and to other areas of intact natural ecosystems. | 1000 |  |
| ecosystem_condition | Ecosystem Condition: Estimates the biological integrity of any location compared to undisturbed reference states (0-100%). | 1000 |  |

## What you can use it for

- Global assessment of biodiversity protection outcomes
- Species persistence and ecosystem resilience under climate change
- Representativeness and connectedness of protected area networks
- Ecosystem condition monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CSIRO/BHI/v4');
```

- Earth Engine ID: `CSIRO/BHI/v4`
- Providers: CSIRO, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CSIRO_BHI_v4

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: bhi, biodiversity, csiro, ecosystems, habitat, species
- 数据引用：Ware, C., Valavi, R., Vickers, M., Giljohann, K., Mokany, K., Purvis, A.,
Walkden, P., De Palma, A., Duffin, C., Contu, S., Harwood, T., Hoskins, A.,
Ferrier, S. (2024). Global biodiversity indicator data for BHI, BERI,
PARC-representativeness, PARC-connectedness and ecosystem condition
(2000-2024). CSIRO. [doi:10.25919/3aka-y730](https://doi.org/10.25919/3aka-y730)

- DOI：10.25919/3aka-y730

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.11](/en/pages/2a1f609f/)
- [Landsat-derived Forest Age for Canada 2019](/en/pages/65b34141/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.10 [deprecated]](/en/pages/9bb9126f/)
- [PML_V2.1.7: Evapotranspiration and GPP (deprecated)](/en/pages/78dca129/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
