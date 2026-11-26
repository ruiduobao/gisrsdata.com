---
title: "Tsinghua FROM-GLC Year of Change to Impervious Surface"
date: 2026-11-03 12:00:00
---

# Tsinghua FROM-GLC Year of Change to Impervious Surface

Original name: Tsinghua FROM-GLC Year of Change to Impervious Surface

## What this dataset is

This dataset contains annual change information of global impervious surface area from 1985 to
2018 at a 30m resolution. Change from pervious to impervious was determined using a combined
approach of supervised classification and temporal consistency checking. Impervious pixels are
defined as above 50% impervious. The year of the transition (from pervious to impervious) can
be identified from the pixel value, ranging from 34 (year: 1985) to 1 (year: 2018). For
example, the impervious surface in 1990 can be revealed as the pixel value greater than 29
(see the lookup table). This dataset is temporally consistent, following the conversion from
pervious (e.g., non-urban) to impervious (e.g., urban) monotonically. For more information
about the mapping approach and assessment, see
[Annual maps of global artificial impervious area (GAIA) between 1985 and 2018
(Gong et al. 2020)](https://doi.org/10.1016/j.rse.2019.111510).

## Coverage and time range

- Coverage: Spatial: global; temporal: 1985 to 2018; resolution: 30 m.
- Time range: 1985-01-01 至 2018-12-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| change_year_index | Year of the transition from from pervious to impervious. From 34 (year: 1985) to 1 (year: 2018) | 30 |  |

## What you can use it for

- Time-series analysis of global urban expansion.
- Reconstruct impervious-surface extent for any year.
- Long time-series data for urbanization and land-change studies.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('Tsinghua/FROM-GLC/GAIA/v10');
```

- Earth Engine ID: `Tsinghua/FROM-GLC/GAIA/v10`
- Providers: Tsinghua University, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_FROM-GLC_GAIA_v10

## License and citation

- License: CC-BY-4.0
- Keywords: built, development, impervious, population, tsinghua, urban
- 数据引用：Gong, P., Li, X., Wang, J., Bai, Y., Chen, B., Hu, T., ... & Zhou, Y. (2020).
Annual maps of global artificial impervious area (GAIA) between 1985 and 2018.
Remote Sensing of Environment, 236, 111510.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/en/pages/465f5706/)
- [GHSL: Global built-up surface 10m (P2023A)](/en/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/en/pages/9724c860/)
- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/en/pages/5396cca7/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
