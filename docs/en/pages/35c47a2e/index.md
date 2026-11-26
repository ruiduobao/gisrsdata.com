---
title: "PRISM Long-Term Normals Dataset Norm81m [deprecated]"
date: 2026-11-03 12:00:00
---

# PRISM Long-Term Normals Dataset Norm81m [deprecated]

Original name: PRISM Long-Term Normals Dataset Norm81m [deprecated]

## What this dataset is

The PRISM daily and monthly datasets are gridded weather
datasets for the conterminous United States, produced by the
PRISM Group at Oregon State University.

Grids are
developed using PRISM (Parameter-elevation Regressions on Independent
Slopes Model). PRISM interpolation routines simulate how weather
varies with elevation, and account for coastal effects,
temperature inversions, and terrain barriers that can cause rain
shadows. Station data are assimilated from many networks across
the country. For more information, see the [Descriptions of PRISM
Spatial Datasets](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf).

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1981 to 2010 (30-year normals, monthly); resolution: 4,638.3 m.
- Time range: 1981-01-01 至 2010-12-31

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ppt | 30 Year average of monthly total precipitation (including rain and melted snow) | 4638.3 |  |
| tmean | 30 Year average of monthly mean temperature (calculated as (tmin+tmax)/2) | 4638.3 |  |
| tmin | 30 Year average of monthly minimum temperature | 4638.3 |  |
| tmax | 30 Year average of monthly maximum temperature | 4638.3 |  |
| tdmean | 30 Year average of monthly mean dew point temperature | 4638.3 |  |
| vpdmin | 30 Year average of monthly minimum vapor pressure deficit | 4638.3 |  |
| vpdmax | 30 Year average of monthly maximum vapor pressure deficit | 4638.3 |  |

## What you can use it for

- High-resolution climate analysis and agro-meteorological applications for CONUS.
- Precipitation and temperature forcing for hydrological and ecological models.
- Analyse spatial patterns of extreme weather events.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/Norm81m');
```

- Earth Engine ID: `OREGONSTATE/PRISM/Norm81m`
- Providers: PRISM / OREGONSTATE, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_Norm81m

## License and citation

- License: proprietary
- Keywords: 30-year, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate
- 数据引用：Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064
[doi:10.1002/joc.1688](https://doi.org/10.1002/joc.1688)
[pdf](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [PRISM Daily Spatial Dataset ANd](/en/pages/fe60f87e/)
- [PRISM Monthly Spatial Dataset ANm](/en/pages/903cb06d/)
- [PRISM Daily Spatial Dataset AN81d [deprecated]](/en/pages/fd3b947f/)
- [PRISM Monthly Spatial Dataset AN81m [deprecated]](/en/pages/b865a04a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
