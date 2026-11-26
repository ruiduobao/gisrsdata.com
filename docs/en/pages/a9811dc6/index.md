---
title: "NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04"
date: 2026-11-03 12:00:00
---

# NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04

Original name: NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04

## What this dataset is

The NOAA Climate Data Record (CDR) of Aerosol Optical Thickness (AOT) is a
collection of global daily 0.1 degree derived data from the PATMOS-x AVHRR
level-2b channel 1 (0.63 micron) orbital clear-sky radiance. The aerosol
product is generated from AVHRR imagery in cloud-free conditions during
daytime over oceans.

Due to the relatively large uncertainties associated with surface
reflectance over water glint area and land surface as well as limited
AVHRR retrieval channels, this dataset only includes retrieval over
non-glint water surface (specifically at the anti-solar side of the orbit
with viewing angle more than 40 degree away from the specular ray). For
more details, see the [Algorithm Description](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Aerosol_Optical_Thickness/AlgorithmDescription_01B-04.pdf).

Image and data processing by NOAA's National Climatic Data Center.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 1981 to 2026; resolution: 11,132 m.
- Time range: 1981-01-01 至 2026-06-30

## Resolution and specifications

- Spatial resolution: about 11,132 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| aot | Atmosphere optical thickness; the degree to which aerosols prevent the transmission of light by absorption or scattering of light. A value of 0.01 corresponds to an extremely clean atmosphere, and a value of 0.4 would correspond to a very hazy condition. An average aerosol optical depth for the U.S. is 0.1 to 0.15. | 11132 |  |

## What you can use it for

- Long-term ocean aerosol monitoring
- Climate data record applications
- Atmospheric environment research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/AOT/V4');
```

- Earth Engine ID: `NOAA/CDR/AVHRR/AOT/V4`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_AOT_V4

## License and citation

- License: proprietary
- Keywords: aerosol, aot, atmosphere, atmospheric, avhrr, cdr, daily, noaa, optical, pollution
- 数据引用：Zhao, Xuepeng; and NOAA CDR Program: NOAA Climate Data Record (CDR)
of AVHRR Daily and Monthly Aerosol Optical Thickness (AOT) over Global
Oceans, Version 4.0. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.25921/w3zj-4y48](https://doi.org/10.25921/w3zj-4y48)
[date accessed].

- DOI：10.25921/w3zj-4y48

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v03 [deprecated]](/en/pages/53ecd31b/)
- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
