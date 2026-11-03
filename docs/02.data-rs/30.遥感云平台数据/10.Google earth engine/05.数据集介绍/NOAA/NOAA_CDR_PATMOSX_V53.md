---
title: "NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3"
date: 2026-11-03 12:00:00
permalink: /pages/2e70bee4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmospheric"
  - "avhrr"
  - "brightness"
  - "cdr"
  - "climate"
  - "cloud"
  - "metop"
  - "noaa"
  - "optical"
  - "poes"
  - "reflectance"
  - "temperature"
---

# NOAA CDR PATMOSX: Cloud Properties, Reflectance, and Brightness Temperatures, Version 5.3

## 数据集简介

This dataset provides high quality Climate Data Record (CDR) of multiple
cloud properties along with Advanced Very High Resolution Radiometer (AVHRR)
Pathfinder Atmospheres Extended (PATMOS-x) brightness temperatures and
reflectances. These data have been fitted to a 0.1 x 0.1 equal angle-grid
with both ascending and descending assets generated daily from two to ten
NOAA and MetOp satellite passes per day.

This dataset includes 48 bands, 11 of which are deemed CDR quality
(marked with "CDR variable" in the band list).
The cloud products are derived using the ABI (Advanced Baseline Imager)
Cloud Height Algorithm (ACHA), and the Daytime Cloud Optical Properties
(DCOMP) algorithm. For more detail on the processing see the
[Climate Algorithm Theoretical Basis Document (C-ATBD)](
https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/AVHRR-HIRS_Reflectance_PATMOS-x/AlgorithmDescription%20_01B-1c.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/PATMOSX/V53`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1979-01-01 至 2022-01-01
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：atmospheric, avhrr, brightness, cdr, climate, cloud, metop, noaa, optical, poes, reflectance, temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cld_emiss_acha | Cloud emissivity at 11&micro;m, determined from ACHA (CDR variable) | 11132 | 11&micro;m |
| cld_height_acha | Cloud height computed using ACHA | 11132 |  |
| cld_height_uncer_acha | Cloud height uncertainty computed using ACHA | 11132 |  |
| cld_opd_acha | Cloud optical depth at 0.65&micro;m, determined from ACHA | 11132 | 0.65&micro;m |
| cld_opd_dcomp | Cloud optical depth at 0.65&micro;m, determined from DCOMP (CDR variable) | 11132 | 0.65&micro;m |
| cld_opd_dcomp_unc | Uncertainty in the cloud optical depth at 0.65&micro;m, determined from DCOMP | 11132 |  |
| cld_press_acha | Cloud-top pressure computed using ACHA | 11132 |  |
| cld_reff_acha | Effective radius of cloud particles determined from ACHA | 11132 |  |
| cld_reff_dcomp | Effective radius of cloud particles determined from DCOMP (CDR variable) | 11132 |  |
| cld_reff_dcomp_unc | Uncertainty in the effective radius of cloud particle determined from DCOMP | 11132 |  |
| cld_temp_acha | Cloud-top temperature computed using ACHA (CDR variable) | 11132 |  |
| cloud_fraction | Cloud fraction computed over a 3x3 pixel array at the native resolution centered on this pixel | 11132 |  |
| cloud_fraction_uncertainty | Cloud fraction uncertainty computed over a 3x3 array | 11132 |  |
| cloud_probability | Probability of a pixel being cloudy from the Bayesian cloud mask | 11132 |  |
| cloud_transmission_0_65um | Cloud transmission at 0.65&micro;m from DCOMP | 11132 | 0.65&micro;m |
| cloud_type | Integer classification of the cloud type including clear and aerosol type | 11132 |  |
| cloud_water_path | Integrated total cloud water over whole column | 11132 |  |
| land_class | Land classes | 11132 |  |
| refl_0_65um | Top of atmosphere reflectance 0.65&micro;m (CDR variable) | 11132 | 0.65&micro;m |
| refl_0_65um_counts | Instrument counts for the 0.65&micro;m channel | 11132 |  |
| refl_0_65um_stddev_3x3 | Standard deviation of the 0.63&micro;m reflectance computed over a 3x3 pixel array | 11132 |  |
| refl_0_86um | Top of atmosphere reflectance at 0.86&micro;m (CDR variable) | 11132 | 0.86&micro;m |
| refl_0_86um_counts | Instrument counts for the 0.86&micro;m channel | 11132 |  |
| refl_1_60um | Top of atmosphere reflectance at 1.60&micro;m (CDR variable) | 11132 | 1.60&micro;m |
| refl_1_60um_counts | Instrument counts for the 1.60&micro;m channel | 11132 |  |
| refl_3_75um | Top of atmosphere reflectance at 3.75&micro;m (CDR variable) | 11132 | 3.75&micro;m |
| relative_azimuth_angle | Sun-sensor relative azimuth angle; 0 is the principal plane looking towards sun | 11132 |  |
| scan_element_number | Scan element index of the pixel chosen for inclusion in level-2b | 11132 |  |
| scan_line_number | Scan line number | 11132 |  |
| scan_line_time | Scan line time | 11132 |  |
| sensor_zenith_angle | Sensor zenith for each pixel measured in degrees from nadir | 11132 |  |
| snow_class | Snow classes and values | 11132 |  |
| solar_azimuth_angle | Solar azimuth angle in degrees from north, pixel to sun, positive values are clockwise from north | 11132 |  |
| solar_zenith_angle | Solar zenith for each pixel measured in degrees away from the sun (0=looking at sun) | 11132 |  |
| surface_temperature_retrieved | Surface temperature retrieved using atmospherically corrected 11&micro;m radiance | 11132 |  |
| surface_type | UMD surface type | 11132 |  |
| temp_11_0um | Top of atmosphere brightness temperature at 11.0&micro;m (CDR variable) | 11132 | 11.0&micro;m |
| temp_11_0um_clear_sky | Top of atmosphere brightness temperature modeled assuming clear skies at 11.0&micro;m | 11132 |  |
| temp_11_0um_stddev_3x3 | Standard deviation of the 11.0&micro;m brightness temperature computed over a 3x3 pixel array | 11132 |  |
| temp_12_0um | Top of atmosphere brightness temperature 12.0&micro;m (CDR variable) | 11132 | 12.0&micro;m |
| temp_3_75um | Top of atmosphere brightness temperature 3.75&micro;m (CDR variable) | 11132 | 3.75&micro;m |
| acha_info | ACHA processing information bit flags | 11132 |  |
| acha_quality | ACHA quality flags | 11132 |  |
| bad_pixel_mask | Mask that distinguishes good from bad pixels | 11132 |  |
| cloud_mask | Integer classification of the cloud mask | 11132 |  |
| dcomp_info | Processing flags for DCOMP | 11132 |  |
| dcomp_quality | DCOMP processing information bit flags | 11132 |  |
| glint_mask | Glint mask | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/PATMOSX/V53');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_PATMOSX_V53
- 数据引用：For the TOA Reflectances and Brightness Temperatures users must cite:
Andrew K. Heidinger, Michael J. Foster, Andi Walther, Xuepeng Zhao, and
NOAA CDR Program (2014): NOAA Climate Data Record (CDR) of Reflectance
and Brightness Temperatures from AVHRR Pathfinder Atmospheres - Extended
(PATMOS-x), Version 5.3. [indicate subset used]. NOAA National Centers for
Environmental Information.
[doi:10.7289/V56W982J](https://doi.org/10.7289/V56W982J)
[access date].

- DOI：10.7289/V5348HCK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
