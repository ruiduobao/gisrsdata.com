---
title: "TNC Global Human Modification v3 (Change-Consistent 300m)"
date: 2026-11-03 12:00:00
---

# TNC Global Human Modification v3 (Change-Consistent 300m)

Original name: TNC Global Human Modification v3 (Change-Consistent 300m)

## What this dataset is

The Global Human Modification v3 dataset measures cumulative human pressures on
global terrestrial ecosystems (excluding Antarctica). It tracks data from 1990 to 2022 and is
intended to help quantify human impact for conservation planning, policy-making, and research.
This dataset is the "Change-Consistent" Series ("c" series) covering the years 1990, 1995, 2000,
2005, 2010, 2015, and 2020 at a 300-meter resolution. This series uses consistent input data
to allow for valid temporal change analysis across these years. The modification score per pixel
is calculated using modification = footprint proportion * stressor intensity. The values are
Float32 ranging from 0.0 to 1.0.

## Coverage and time range

- Coverage: Spatial: global land (excluding Antarctica); temporal: 1990 to 2020 (seven years); resolution: 300 m.
- Time range: 1990-01-01 至 2020-12-31

## Resolution and specifications

- Spatial resolution: about 300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| All_threats_combined | All threats combined | 300 |  |
| Agriculture | Agriculture | 300 |  |
| Built_up | Built up or urban areas | 300 |  |
| Energy_production_and_mining | Energy production and mining | 300 |  |
| Biological_resource_use | Biological resource use | 300 |  |
| Human_accessibility | Human accessibility | 300 |  |
| Natural_system_modification | Natural system modification | 300 |  |
| Pollution | Pollution | 300 |  |
| Transportation_and_service_corridors | Transportation and service corridors | 300 |  |

## What you can use it for

- Quantify human pressure on terrestrial ecosystems for conservation planning.
- Analyse change trends in human modification since 1990.
- Provide modification indices for policy-making and ecological research.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('TNC/HM/v3/300m_c');
```

- Earth Engine ID: `TNC/HM/v3/300m_c`
- Providers: The Nature Conservancy, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TNC_HM_v3_300m_c

## License and citation

- License: CC-BY-4.0
- Keywords: fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc
- 数据引用：Theobald, D. M., Oakleaf, J. R., Moncrieff, G., Voigt, M., Kiesecker, J., & Kennedy, C. M. (2025).
Global extent and change in human modification of terrestrial ecosystems from 1990 to 2022.
Scientific Data, 12, 489. [doi:10.1038/s41597-025-04892-2](https://doi.org/10.1038/s41597-025-04892-2)

- DOI：10.1038/s41597-025-04892-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TNC Global Human Modification v3 (Static Snapshot 90m)](/pages/b32eca78/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Dynamic World V1](/en/pages/a78539ca/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
