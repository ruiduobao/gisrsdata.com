---
title: "NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature"
date: 2026-11-03 12:00:00
---

# NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature

Original name: NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature

## What this dataset is

Note: This dataset has not been updated by the provider since 2024-03-31
due to ongoing infrastructure updates. There is no current timeline for when
dataset updates will resume.

This dataset provides a high quality Climate Data
Record (CDR) of global infrared measurements from geostationary satellites.

The geostationary satellite data (GridSat-B1) provides data from 3
channels: the CDR-quality infrared window (IRWIN) channel (near 11&micro;m),
the visible channel (near 0.6&micro;m) and the infrared water vapor (IRWVP)
channel (near 6.7&micro;m). The GridSat-B1 data is projected onto a global
0.07 degree latitude equal-angle grid with date coverage spanning from
1980-present. This data is sourced from the 3-hourly International Satellite
Cloud Climatology Project (ISCCP) B1 data. The satellites included in this
dataset with their longitudinal coverage over time can be seen [here](https://www.ncdc.noaa.gov/gridsat/images/isccp_coverage_VZA60_nolegend.png).
In regions of overlap the CDR methodology merges satellites by selecting
the nadir-most observations for each grid point.

Notes:

- Mappings from satid to satellite name are contained in the image's
  properties as satid_number: \"satellite_name\", e.g. satid_0: GOES-13,
  satid_1: GOES-15, and satid_2: GOES-16.

- IRWIN data has been corrected for view zenith angle, but this correction
  is not perfect. It also treats all satellites the same way, whereas the
  view zenith angle dependence will vary by satellite. Some VZA residual
  will be apparent.

- IRWVP data has no view zenith angle correction and is not CDR quality.

- VSCHN data has no view zenith angle corrections and is not CDR quality.

- Removing the View Zenigth Angle correction for the IRWIN channels can be
  done with the following:
  Original_temperature_observed = irwin_cdr - irwin_vza_adj

## Coverage and time range

- Coverage: Coverage: global; time span: 1980 to 2024; resolution: 7,792 m.
- Time range: 1980-01-01 至 2024-09-30

## Resolution and specifications

- Spatial resolution: about 7,792 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| irwin_cdr | Brightness temperature near 11&micro;m, nadir-most observation | 7792 |  |
| irwin_2 | Brightness temperature near 11&micro;m, second-best observation (based on view zenith angle) | 7792 |  |
| irwin_3 | Brightness temperature, third-best observation based on view zenith angle | 7792 |  |
| irwvp | Brightness temperature near 6.7&micro;m, nadir-most observation | 7792 |  |
| irwvp_2 | Brightness temperature near 6.7&micro;m, second-best observation based on view zenith angle | 7792 |  |
| vschn | Visible reflectance near 0.6&micro;m, nadir-most observation | 7792 |  |
| vschn_2 | Visible reflectance near 0.6&micro;m, second-best observation based on view zenith angle | 7792 |  |
| irwin_vza_adj | Adjustment made to all IRWIN channels. Provided to allow users to reverse the view zenith correction for the irwin_cdr variable. | 7792 |  |
| satid_ir1 | satid values for irwin_cdr. For this and other satid bands, the mappings of satid to satellite name are given in the properties for each image | 7792 |  |
| satid_ir2 | satid values per pixel for irwin_2 | 7792 |  |
| satid_ir3 | satid values per pixel for irwin_3 | 7792 |  |
| satid_wv1 | satid values per pixel for irwvp | 7792 |  |
| satid_wv2 | satid values per pixel for irwvp2 | 7792 |  |
| satid_vs1 | satid values per pixel for vischn | 7792 |  |
| satid_vs2 | satid values per pixel for vischn2 | 7792 |  |

## What you can use it for

- Geostationary satellite climate records
- Cloud and weather analysis
- Long-term infrared brightness temperature series

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/GRIDSAT-B1/V2');
```

- Earth Engine ID: `NOAA/CDR/GRIDSAT-B1/V2`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2

## License and citation

- License: proprietary
- Keywords: brightness, cdr, climate, fundamental, geostationary, infrared, isccp, noaa, reflectance, sr, weather-and-climate
- 数据引用：Kenneth R. Knapp, and NOAA CDR Program (2014): NOAA Climate Data Record
(CDR) of Gridded Satellite Data from ISCCP B1 (GridSat-B1) 11 micron
Brightness Temperature, Version 2. [indicate subset used]. NOAA National
Climatic Data Center. [doi:10.7289/V59P2ZKR](https://doi.org/10.7289/V59P2ZKR)
[access date].

- DOI：10.7289/V59P2ZKR

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3](/en/pages/2e70bee4/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
