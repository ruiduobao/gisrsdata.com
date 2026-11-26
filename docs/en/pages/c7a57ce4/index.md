---
title: "LandScan High Definition Data for Ukraine, January 2022"
date: 2026-11-03 12:00:00
---

# LandScan High Definition Data for Ukraine, January 2022

Original name: LandScan High Definition Data for Ukraine, January 2022

## What this dataset is

[LandScan High Definition (HD)](https://landscan.ornl.gov) provides gridded population estimates at 3 arc-second (~100m) resolution. Values for each LandScan HD cell represent an ambient (i.e. 24 hour average) population count estimate. In this way, the data capture the full potential activity space of people throughout the course of the day and night rather than just a residential location. The LandScan HD model incorporates current land use and infrastructure data from a variety of sources, applies facility occupancy estimates from ORNL's Population Density Tables (PDT) project, and leverages novel image processing algorithms developed at ORNL to rapidly map building structures and neighborhood areas using high-performance computing environments.

The source for subnational population counts used in the development of this data comes from [State Statistics Service of Ukraine](https://ukrstat.org/en/operativ/operativ2021/ds/kn/arh_kn2021_e.html).

These subnational estimates were adjusted to the country total population provided by the [CIA World Factbook](https://www.cia.gov/the-world-factbook/countries/ukraine/#people-and-society).

## Coverage and time range

- Coverage: Ukraine
- Time range: 2022-01-01 至 2022-02-01

## Resolution and specifications

- Spatial resolution: about 100 m (3 arc-second grid)
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| population | 24 hour average population count estimate | 100 |  |

## What you can use it for

- Population distribution analysis for Ukraine (January 2022)
- Humanitarian response and population exposure assessment
- Day/night population activity space studies

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('DOE/ORNL/LandScan_HD/Ukraine_202201');
```

- Earth Engine ID: `DOE/ORNL/LandScan_HD/Ukraine_202201`
- Providers: Oak Ridge National Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/DOE_ORNL_LandScan_HD_Ukraine_202201

## License and citation

- License: CC-BY-4.0
- Keywords: landscan, population, ukraine
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)
- [GPWv4.11: National Identifier Grid](/en/pages/425f6eb9/)
- [GPWv4.11: Basic Demographic Characteristics](/en/pages/012ffc59/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
