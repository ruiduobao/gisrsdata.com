---
title: "NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections"
date: 2026-11-03 12:00:00
---

# NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections

Original name: NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections

## What this dataset is

The NASA NEX-GDDP dataset is comprised of downscaled climate scenarios
for the globe that are derived from the General Circulation Model (GCM)
runs conducted under the Coupled Model Intercomparison Project Phase 5
(CMIP5, see [Taylor et al. 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1))
and across two of the four greenhouse gas emissions scenarios known as
Representative Concentration Pathways (RCPs, see [Meinshausen et
al. 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1)).
The CMIP5 GCM runs were developed in support of the Fifth Assessment
Report of the Intergovernmental Panel on Climate Change (IPCC AR5).

This dataset was prepared by the Climate Analytics Group and NASA Ames
Research Center using the NASA Earth Exchange, and distributed by the NASA
Center for Climate Simulation (NCCS).

## Coverage and time range

- Coverage: Coverage: global; time span: 1950 to 2100; resolution: 27,830 m.
- Time range: 1950-01-01 至 2100-12-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| pr | Daily mean of precipitation at surface; includes both liquid and solid phases from all types of clouds (both large-scale and convective) | 27830 |  |
| tasmin | Daily mean of the daily-minimum near-surface air temperature | 27830 |  |
| tasmax | Daily mean of the daily-maximum near-surface air temperature | 27830 |  |

## What you can use it for

- Climate change impact assessment
- Downscaled climate projections
- Regional climate research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/NEX-GDDP');
```

- Earth Engine ID: `NASA/NEX-GDDP`
- Providers: NASA /  Climate Analytics Group, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP

## License and citation

- License: proprietary
- Keywords: cag, climate, cmip5, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
- 数据引用：Thrasher, B., Maurer, E. P., McKellar, C., & Duffy, P. B., 2012:
Technical Note: Bias correcting climate model simulated daily temperature
extremes with quantile mapping. Hydrology and Earth System Sciences,
16(9), 3309-3314.
[doi:10.5194/hess-16-3309-2012](https://doi.org/10.5194/hess-16-3309-2012)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V1)](/en/pages/a4b5eab0/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V2)](/en/pages/92e78526/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
