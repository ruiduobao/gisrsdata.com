---
title: "NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections"
date: 2026-11-03 12:00:00
---

# NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections

Original name: NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections

## What this dataset is

The NASA NEX-DCP30 dataset is comprised of downscaled climate scenarios
for the conterminous United States that are derived from the General
Circulation Model (GCM) runs conducted under the Coupled Model
Intercomparison Project Phase 5 (CMIP5, see [Taylor et al. 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1))
and across the four greenhouse gas emissions scenarios known as
Representative Concentration Pathways (RCPs, see [Meinshausen et al. 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1))
developed for the Fifth Assessment Report of the Intergovernmental Panel
on Climate Change (IPCC AR5). The purpose of these datasets is to provide
a set of high resolution, bias-corrected climate change projections that
can be used to evaluate climate change impacts on processes that are
sensitive to finer-scale climate gradients and the effects of local
topography on climate conditions.

The dataset contains monthly projections covering the periods from 1950
through 2005 (Retrospective Run) and from 2006 to 2099 (Prospective Run).
It includes downscaled projections from 33 models. Not every
scenario contains projections from every model.

NEX-DCP30 was prepared by the Climate Analytics Group and NASA Ames
Research Center using the NASA Earth Exchange, and distributed by the NASA
Center for Climate Simulation (NCCS).

## Coverage and time range

- Coverage: Coverage: conterminous United States; time span: 1950 to 2099; resolution: 927.67 m.
- Time range: 1950-01-01 至 2099-12-01

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| pr | Monthly mean of the daily precipitation rate at surface; includes both liquid and solid phases from all types of clouds (both large-scale and convective) | 927.67 |  |
| tasmin | Monthly mean of the daily-minimum near-surface air temperature | 927.67 |  |
| tasmax | Monthly mean of the daily-maximum near-surface air temperature | 927.67 |  |

## What you can use it for

- Climate change impact assessment
- Downscaled climate projections
- Regional climate research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/NEX-DCP30');
```

- Earth Engine ID: `NASA/NEX-DCP30`
- Providers: NASA / Climate Analytics Group, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30

## License and citation

- License: proprietary
- Keywords: cag, climate, cmip5, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
- 数据引用：Thrasher, B., J. Xiong, W. Wang, F. Melton, A. Michaelis and R. Nemani
(2013), Downscaled Climate Projections Suitable for Resource Management,
Eos Trans. AGU, 94(37), 321.
[doi:10.1002/2013EO370002](https://doi.org/10.1002/2013EO370002)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V1)](/en/pages/a4b5eab0/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V2)](/en/pages/92e78526/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
