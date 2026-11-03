---
title: "MethaneSAT L3 Concentration Public Preview V1.0.0"
date: 2026-11-03 12:00:00
permalink: /pages/10eeb031/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "edf"
  - "emissions"
  - "ghg"
  - "methane"
  - "methanesat"
---

# MethaneSAT L3 Concentration Public Preview V1.0.0

## 数据集简介

This early "Public Preview" dataset provides geospatial data for the
column-averaged dry-air mole fraction of methane in the atmosphere, "XCH4",
retrieved from measurements by the MethaneSAT imaging spectrometer. XCH4 is
defined as the total column amount (number of molecules above a unit surface
area) of methane ("CH4") divided by the total amount of air (number of molecules
above a unit surface area, water vapor amount removed) along the line of sight
from the satellite’s spectrometer to the Earth's surface and back up to the Sun.
Additional data layers are provided for reference: observed albedo at 1622 nm,
surface pressure, and terrain height.

The spatial footprint of individual MethaneSAT soundings is 110 m x 400 m when
viewing at nadir, with the long side in the satellite’s flight direction, and
with the short side that can be stretched wider at higher viewing zenith angles
(which is why some targets appear more rectangular than others). At nadir, the
swath width is ~220 km. The data on these native soundings is Level 2 (L2) data.
The precision of the L2 XCH4 is 22-35 ppb (corresponding to 0.7-0.2 surface albedo).
L2 concentrations (XCH4) are retrieved from the measured high resolution (0.08 nm
sampling, 0.24 nm resolution) spectra from the 1.6 micron band using the CO2-Proxy
method ([Chan Miller et al. (2024)](https://doi.org/10.5194/amt-17-5429-2024)).
The Level 3 (L3) dataset is created by regridding the L2 data from the native
sounding locations to a regular 45 m x 45 m grid using the approach detailed in
[Sun et al. (2018)](https://doi.org/10.5194/amt-11-6679-2018).

Not all data products (L3 concentration, L4 area and L4 points) are available for all
collection IDs. Contact the data provider for more information about the project at this link:
[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/).

---

7/2/2025 Important Update: 

As you may be aware, we recently lost contact with the satellite. After exploring all possible  
recovery options, we have now confirmed that it is no longer functioning, due to an
undetermined problem with the outer platform carrying our methane detector. While there is no
question this is a setback, we are undeterred in our efforts to drive down methane pollution.
Please see our official statement here:
[MethaneSAT Loses Contact with Satellite | MethaneSAT](https://www.methanesat.org/project-updates/methanesat-loses-contact-satellite).

What this means for the Public Preview data: The existing datasets will remain accessible on
Google platforms and on our web portal for the foreseeable future. Additionally, over the next
few months, we will release substantial new data collected by MethaneSAT prior to the loss of
contact. This will include hundreds of scenes (of targets that are roughly 200kmx200km). We
hope this will be useful for you. Should there be any changes to data availability, we will
notify you well in advance.

Looking ahead: While we don’t have all the answers yet, we plan to leverage our advanced Data
Processing Platform (DPP) to quantify other streams of satellite and/or aerial data. We will
also take the necessary time to evaluate the best next step in our efforts to enable methane
reductions. To stay up to date with further updates, feel free to sign up for our
[newsletter](https://mailchi.mp/methanesat/methanesat-newsletter-sign-up).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/edf-methanesat-ee/assets/public-preview/L3concentration`
- 数据类型：影像集合（ImageCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2024-05-22 至 2025-06-14
- 空间分辨率：46.38 米
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methanesat

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| XCH4 | Retrieved column-averaged dry-air CH4 mole fraction. | 46.38 |  |
| albedo | Ratio of solar radiance at the ground to observed radiance at the sensor. | 46.38 |  |
| surface_pressure | Air pressure at the surface. | 46.38 |  |
| terrain_height | Elevation with respect to WGS84 reference ellipsoid. | 46.38 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/edf-methanesat-ee/assets/public-preview/L3concentration');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_edf-methanesat-ee_assets_public-preview_L3concentration
- 数据引用：Chulakadabba, A., Sargent, M., Lauvaux, T., Benmergui, J. S., Franklin, J.
E., Chan Miller, C., Wilzewski, J. S., Roche, S., Conway, E., Souri, A. H.,
Sun, K., Luo, B., Hawthrone, J., Samra, J., Daube, B. C., Liu, X., Chance,
K., Li, Y., Gautam, R., Omara, M., Rutherford, J. S., Sherwin, E. D.,
Brandt, A., and Wofsy, S. C. 2023. Methane point source quantification using
MethaneAIR: a new airborne imaging spectrometer, Atmos. Meas. Tech., 16,
5771-5785.
[doi:10.5194/amt-16-5771-2023](https://doi.org/10.5194/amt-16-5771-2023),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
