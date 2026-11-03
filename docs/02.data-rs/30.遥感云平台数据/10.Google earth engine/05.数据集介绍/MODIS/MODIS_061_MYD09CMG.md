---
title: "MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
permalink: /pages/b472e2a6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "brightness-temperature"
  - "ozone"
  - "satellite-imagery"
  - "surface-reflectance"
---

# MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG

## 数据集简介

The MYD09CMG Version 6.1 product provides an estimate of the surface
spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer
(MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and
corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. The MYD09CMG data product provides 25 layers including MODIS
bands 1 through 7; Brightness Temperature data from thermal bands 20, 21,
31, and 32; along with Quality Assurance (QA) and observation bands.
This product is based on a Climate Modeling Grid (CMG) for use in climate
simulation models.

This dataset has a striping issue originating from Band 5’s dead
detector 20. The MYD09/Band 5 show the dead detector striping in band 5, but
it has been properly flagged in the QA layer. The science team has been
notified and the issue will be addressed in the Collection 7.
More details can be found on
[the known issue page](https://landweb.modaps.eosdis.nasa.gov/displayissue?id=939).

Note that scale factors and offsets described in the MODIS documentation
for MYD09CMG bands are already applied to assets ingested into Earth
Engine.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/925/MOD09_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09CMG)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD09CMG`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2026-10-31
- 空间分辨率：5600 米
- 许可：proprietary
- 关键词：aqua, brightness-temperature, ozone, satellite-imagery, surface-reflectance

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Coarse_Resolution_Surface_Reflectance_Band_1 | Surface reflectance for band 1 | 5600 | 620-670nm |
| Coarse_Resolution_Surface_Reflectance_Band_2 | Surface reflectance for band 2 | 5600 | 841-876nm |
| Coarse_Resolution_Surface_Reflectance_Band_3 | Surface reflectance for band 3 | 5600 | 459-479nm |
| Coarse_Resolution_Surface_Reflectance_Band_4 | Surface reflectance for band 4 | 5600 | 545-565nm |
| Coarse_Resolution_Surface_Reflectance_Band_5 | Surface reflectance for band 5 | 5600 | 1230-1250nm |
| Coarse_Resolution_Surface_Reflectance_Band_6 | Surface reflectance for band 6 | 5600 | 1628-1652nm |
| Coarse_Resolution_Surface_Reflectance_Band_7 | Surface reflectance for band 7 | 5600 | 2105-2155nm |
| Coarse_Resolution_Solar_Zenith_Angle | Solar Zenith Angle | 5600 |  |
| Coarse_Resolution_View_Zenith_Angle | View Zenith Angle | 5600 |  |
| Coarse_Resolution_Relative_Azimuth_Angle | Relative Azimuth Angle | 5600 |  |
| Coarse_Resolution_Ozone | Ozone Resolution | 5600 |  |
| Coarse_Resolution_Brightness_Temperature_Band_20 | Band 20 Brightness Temperature | 5600 | 3.360-3.840&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_21 | Band 21 Brightness Temperature | 5600 | 3.929-3.989&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_31 | Band 31 Brightness Temperature | 5600 | 10.780-11.280&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_32 | Band 32 Brightness Temperature | 5600 | 11.770-12.270&micro;m |
| Coarse_Resolution_Granule_Time | Granule time of day, as HHMM | 5600 |  |
| Coarse_Resolution_Band_3_Path_Radiance | Band 3 Radiance | 5600 |  |
| Coarse_Resolution_QA | Quality Assurance | 5600 |  |
| Coarse_Resolution_Internal_CM | Internal Cloud Mask | 5600 |  |
| Coarse_Resolution_State_QA | State Quality Assurance | 5600 |  |
| Coarse_Resolution_Number_Mapping | Number Mapping Cloud/Snow | 5600 |  |
| number_of_500m_pixels_averaged_b3 | Number of 500m pixels used in average | 5600 |  |
| number_of_500m_rej_detector | Number of 500m pixels rejected for use | 5600 |  |
| number_of_250m_pixels_averaged_b1-2 | Number of 250m pixels used in b1-2 average | 5600 |  |
| n_pixels_averaged | Number of pixels used in average | 5600 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09CMG');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09CMG
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09CMG.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
