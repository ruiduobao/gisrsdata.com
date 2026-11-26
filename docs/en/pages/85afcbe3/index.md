---
title: "NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections"
date: 2026-11-03 12:00:00
---

# NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections

Original name: NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections

## What this dataset is

The NEX-GDDP-CMIP6 dataset is comprised of global downscaled climate
scenarios derived from the General Circulation Model (GCM) runs conducted
under the Coupled Model Intercomparison Project Phase 6 (CMIP6, see
[Thrasher et al. 2022](https://doi.org/10.7917/OFSG3345)) and across two of
the four "Tier 1" greenhouse gas emissions scenarios known as Shared
Socioeconomic Pathways (SSPs).

The CMIP6 GCM runs were developed in support of the Sixth Assessment Report
of the Intergovernmental Panel on Climate Change (IPCC AR6). This dataset
includes downscaled projections from ScenarioMIP model runs for which daily
scenarios were produced and distributed through the Earth System Grid
Federation.

This collection contains 34 different models. One model, "GFDL-CM4," has
data for two different configurations that can be differentiated by further
filtering on the *grid_label* property.

Bands are replaced as new versions become available and the *version*
property is updated with them.

See also
[the provider tech note](https://www.nccs.nasa.gov/wp-content/uploads/2024/03/NEX-GDDP-CMIP6-Tech_Note_4.pdf).

[You can submit data questions about CMIP6 to the provider](https://airtable.com/shr01weJfA7DYq6jf)
and
[see their answers](https://airtable.com/shrX4mj20TLSH0r2y/tblUMAYpCfCCwucSV).

## Coverage and time range

- Coverage: Coverage: global; time span: 1950 to 2100; resolution: 27,830 m.
- Time range: 1950-01-01 至 2100-12-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| hurs | Near-surface relative humidity. Not present in these models: 'BCC-CSM2-MR', 'NESM3', 'KIOST-ESM' (only for scenario 'ssp245' in 2058). | 27830 |  |
| huss | Near-surface specific humidity. Not present in these models: 'IPSL-CM6A-LR', 'MIROC6', 'NESM3'. | 27830 |  |
| pr | Precipitation (mean of the daily precipitation rate) | 27830 |  |
| rlds | Surface downwelling longwave radiation | 27830 |  |
| rsds | Surface downwelling shortwave radiation | 27830 |  |
| sfcWind | Daily-mean near-surface wind speed | 27830 |  |
| tas | Daily near-surface air temperature. Not present in these models: 'NorESM2-LM' (only for scenario 'ssp585' in 2096). | 27830 |  |
| tasmin | Daily minimum near-surface air temperature. Not present in these models: 'CESM2', 'CESM2-WACCM', 'IITM-ESM', 'TaiESM1' (only for scenario 'ssp585' in 2093). | 27830 |  |
| tasmax | Daily maximum near-surface air temperature. Not present in these models: 'CESM2', 'CESM2-WACCM', 'IITM-ESM'. | 27830 |  |

## What you can use it for

- Climate change projection and impact assessment
- Downscaled climate scenario analysis
- Adaptation planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GDDP-CMIP6');
```

- Earth Engine ID: `NASA/GDDP-CMIP6`
- Providers: NASA / Climate Analytics Group, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GDDP-CMIP6

## License and citation

- License: CC0-1.0
- Keywords: cag, climate, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate
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
