---
title: "PRISM Daily Spatial Dataset AN81d [deprecated]"
date: 2026-11-03 12:00:00
---

# PRISM Daily Spatial Dataset AN81d [deprecated]

Original name: PRISM Daily Spatial Dataset AN81d [deprecated]

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

**Note**

* **Warning**: This dataset should not be
  used to calculate century-long trends due to non-weather-related
  variations from station equipment and location changes, openings
  and closings, varying observation times, and the use of relatively
  short-term networks. Please see the [dataset documentation
  ](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf)
  for more details.
* The assets have start time of noon UTC, not midnight UTC.
* It takes time for observation networks to conduct quality control and
  release station data. Therefore,
  PRISM datasets are re-modeled several times until six months
  have elapsed, when they are considered permanent. A [release
  schedule is available](https://www.prism.oregonstate.edu/calendar/).

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1981 to 2020 (daily); resolution: 4,638.3 m.
- Time range: 1981-01-01 至 2020-12-30

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ppt | Daily total precipitation (including rain and melted snow) | 4638.3 |  |
| tmean | Daily mean temperature (calculated as (tmin+tmax)/2) | 4638.3 |  |
| tmin | Daily minimum temperature | 4638.3 |  |
| tmax | Daily maximum temperature | 4638.3 |  |
| tdmean | Daily mean dew point temperature | 4638.3 |  |
| vpdmin | Daily minimum vapor pressure deficit | 4638.3 |  |
| vpdmax | Daily maximum vapor pressure deficit | 4638.3 |  |

## What you can use it for

- High-resolution climate analysis and agro-meteorological applications for CONUS.
- Precipitation and temperature forcing for hydrological and ecological models.
- Analyse spatial patterns of extreme weather events.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/AN81d');
```

- Earth Engine ID: `OREGONSTATE/PRISM/AN81d`
- Providers: PRISM / OREGONSTATE, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_AN81d

## License and citation

- License: proprietary
- Keywords: daily, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate
- 数据引用：[Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [PRISM Daily Spatial Dataset ANd](/en/pages/fe60f87e/)
- [PRISM Monthly Spatial Dataset ANm](/en/pages/903cb06d/)
- [PRISM Monthly Spatial Dataset AN81m [deprecated]](/en/pages/b865a04a/)
- [PRISM Long-Term Normals Dataset Norm81m [deprecated]](/en/pages/35c47a2e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
