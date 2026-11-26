---
title: "Allen Coral Atlas Reef Habitat v1.0 [deprecated]"
date: 2026-11-03 12:00:00
---

# Allen Coral Atlas Reef Habitat v1.0 [deprecated]

Original name: Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v1.0 [deprecated]

## What this dataset is

The [Allen Coral Atlas](https://allencoralatlas.org/) dataset maps the geomorphic zonation and benthic habitat of the world's shallow coral reefs at 5 m pixel resolution. The underlying imagery is a temporal composite of [PlanetScope satellite](https://www.planet.com/products/basemap/) data spanning 2018–2020. The habitat maps are produced with a machine-learning approach plus contextual editing, using imagery, bathymetry and derived products as inputs, trained on a globally consistent reference dataset. A global reef mask layer is included for standardizing global reporting statistics. Full methods are described on the [Allen Coral Atlas website](https://allencoralatlas.org/methods/).

The Atlas was funded by [Vulcan Inc.](https://vulcan.com/) and is managed by the [Arizona State University Center for Global Discovery and Conservation Science](https://gdcs.asu.edu/). Partners include [Planet](https://www.planet.com/), the [University of Queensland](https://www.uq.edu.au/) and the [National Geographic Society](https://www.nationalgeographic.org/). Note: this is v1.0, marked deprecated — new work should use v2.0.

Scientific background publications: Lyons et al. (2020), [doi:10.1002/rse2.157](https://doi.org/10.1002/rse2.157); Kennedy et al. (2021), [doi:10.1038/s41597-021-00958-z](https://doi.org/10.1038/s41597-021-00958-z); Roelfsema et al. (2021), [doi:10.3389/fmars.2021.643381](https://doi.org/10.3389/fmars.2021.643381); Li et al. (2021), [doi:10.3390/rs13081469](https://doi.org/10.3390/rs13081469); Li et al. (2020), [doi:10.1007/s00338-020-02005-6](https://doi.org/10.1007/s00338-020-02005-6). Allen Coral Atlas maps, bathymetry and map statistics are © 2020 Allen Coral Atlas Partnership and Vulcan, Inc.

## Coverage and time range

- Coverage: The world's shallow coral reefs
- Time range: 2018-01-01 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 5 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| geomorphic | Classification of geomorphic zonation. | 5 |  |
| benthic | Classification of dominant benthic composition. | 5 |  |
| reef_mask | Globally standardized reef mask using an amalgamation of a global reef classification and bathymetry products. Its intended use is as a mask, not a map, for standardizing global reporting on the global geomorphic/benthic maps. | 5 |  |

## What you can use it for

- Map the distribution and extent of the world's coral reefs for conservation planning
- Analyse reef geomorphic zones and benthic habitat composition
- Provide a consistent base layer for marine protected area design and global reef statistics

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('ACA/reef_habitat/v1_0');
```

- Earth Engine ID: `ACA/reef_habitat/v1_0`
- Providers: Allen Coral Atlas Partnership (ACA), Google Earth Engine, University of Queensland (UQ), Arizona State University Center for Global Discovery and Conservation Science (ASU GDCS), National Geographic Society (NGS), Vulcan Inc. (Vulcan), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v1_0

## License and citation

- License: CC-BY-4.0
- Keywords: coral, ocean, oceans, planet-derived, reef, seagrass, sentinel2-derived
- 数据引用：Allen Coral Atlas (2020). Imagery, maps and monitoring of the world's tropical coral reefs. Zenodo. [doi:10.5281/zenodo.3833242](https://doi.org/10.5281/zenodo.3833242)

- DOI：10.5281/zenodo.3833242

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Allen Coral Atlas Reef Habitat v2.0](/en/pages/8d9d570d/)
- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
