---
title: "MethaneSAT L4 Point Sources Public Preview V1.0.0"
date: 2026-11-03 12:00:00
permalink: /pages/efd9f44a/
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
  - "table"
---

# MethaneSAT L4 Point Sources Public Preview V1.0.0

## 数据集简介

This early "Public Preview" dataset provides high precision data for methane emissions from
discrete point sources. These methane emission fluxes were produced using a point source
detection and emissions quantification framework specialized to exploit the high spatial
resolution, wide spatial coverage, and high precision of MethaneSAT data (methodology is
described in [Chulakdabba et al. (2023)](https://doi.org/10.5194/amt-16-5771-2023).)
The point source quantification framework was extensively tested in blind controlled-release
experiments as detailed in
[Chulakdabba et al. (2023)](https://doi.org/10.5194/amt-16-5771-2023) and
[Abbadi et al. (2024)](https://doi.org/10.1021/acs.est.4c02439). 

Total emissions for a scene–from both dispersed area and point source emissions–may be
obtained by summing the area emissions and point source emissions for a given collection ID
(see L4 Area Sources Public Preview).

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
For additional information about the MethaneAIR instrument, instrument
calibration and emission detections, please refer to recent publications by
[Loughner et al. (2021)](https://doi.org/10.1175/JAMC-D-20-0158.1),
[Staebell et al. (2021)](https://doi.org/10.5194/amt-14-3737-2021),
[Conway et al. (2023)](https://doi.org/10.5194/amt-2023-111),
[Chulakadabba et al. (2023)](https://doi.org/10.5194/egusphere-2023-822),
[Abbadi et al. (2023)](https://doi.org/10.31223/X51D4C),
[Omara et al. (2023)](https://doi.org/10.5194/essd-15-3761-2023),
and [Miller et al. (2023)](https://doi.org/10.5194/egusphere-2023-1962).

Contact the data provider for more information about the project at this
link: [https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/edf-methanesat-ee/assets/public-preview/L4point`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2024-06-14 至 2025-01-17
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methanesat, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| collection_id | STRING | Satellite observation identifier. |
| date | STRING | Data collection date format STRING (ISO 8601). |
| flux | INT | Methane flux quantification. Note: this may be null in the case that we're confident in the presence and location of the point but not its flux value.  |
| flux_sd | INT | Standard deviation of methane flux quantification, in kg/h. Note: this may be null in the case that we're confident in the presence and location of the point but not its flux value.  |
| processing_id | STRING | (internal) Processing run identifier that represents the calculations that led to the features. It is not an attribute describing the flight, but the processing pipeline.  |
| plume_id | STRING | Plume id (unique across satellite observations). |
| plume_id_in_scene | INT | Plume id (unique per satellite observation). |
| region | STRING | Region of scene. |
| target_id | INT | Satellite Target ID. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('projects/edf-methanesat-ee/assets/public-preview/L4point');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_edf-methanesat-ee_assets_public-preview_L4point
- 数据引用：Chulakadabba, A., Sargent, M., Lauvaux, T., Benmergui, J. S., Franklin, J.
E., Chan Miller, C., Wilzewski, J. S., Roche, S., Conway, E., Souri, A. H.,
Sun, K., Luo, B., Hawthrone, J., Samra, J., Daube, B. C., Liu, X., Chance,
K., Li, Y., Gautam, R., Omara, M., Rutherford, J. S., Sherwin, E. D.,
Brandt, A., and Wofsy, S. C. 2023. Methane point source quantification using
MethaneAIR: a new airborne imaging spectrometer, Atmos. Meas. Tech., 16,
5771-5785.
[doi:10.5194/amt-16-5771-2023](https://doi.org/10.5194/amt-16-5771-2023),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
