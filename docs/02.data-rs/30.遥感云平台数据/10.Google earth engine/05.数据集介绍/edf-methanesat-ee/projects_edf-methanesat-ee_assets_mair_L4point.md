---
title: "MethaneAIR L4 Point Sources V1.1.0"
date: 2026-11-03 12:00:00
permalink: /pages/fbd098e5/
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
  - "methaneair"
  - "methanesat"
  - "table"
---

# MethaneAIR L4 Point Sources V1.1.0

## 数据集简介

This dataset provides data for high-emitting methane point source detections
(kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New
Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in
the east, plus three urban areas (New York City, Phoenix, and Salt Lake
City).

This dataset was generated using MethaneAIR measurements taken on flights
between 09 July 2025 and 10 October 2025. MethaneAIR is managed by
[MethaneSAT LLC](https://www.methanesat.org/), a wholly owned subsidiary of
Environmental Defense Fund. The methane emission fluxes were produced using a 
point source detection framework ([described in Zhang et al. (2026)](https://doi.org/10.5194/egusphere-2026-141))
and quantification framework specialized to exploit the high spatial
resolution, wide spatial coverage, and high precision of MethaneAIR data
(described in [Chulakdabba et al. (2023)](https://doi.org/10.5194/amt-16-5771-2023)).
The point source quantification framework was extensively tested in blind
controlled-release experiments as detailed in [Chulakdabba et al. (2023)](https://doi.org/10.5194/amt-16-5771-2023)
and [Abbadi et al. (2024)](https://doi.org/10.1021/acs.est.4c02439). Not all
data products are available for all flights.

For additional information about the MethaneAIR instrument, instrument
calibration and emission detections, please refer to recent publications by
[Loughner et al. (2021)](https://doi.org/10.1175/JAMC-D-20-0158.1),
[Staebell et al. (2021)](https://doi.org/10.5194/amt-14-3737-2021),
[Conway et al. (2023)](https://doi.org/10.5194/amt-2023-111),
[Chulakadabba et al. (2023)](https://doi.org/10.5194/egusphere-2023-822),
[Abbadi et al. (2023)](https://doi.org/10.31223/X51D4C),
[Omara et al. (2023)](https://doi.org/10.5194/essd-15-3761-2023),
and [Miller et al. (2023)](https://doi.org/10.5194/egusphere-2023-1962).

Contact the data provider for more information about the project at this link:
[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/edf-methanesat-ee/assets/mair/L4point`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2025-07-09 至 2025-10-10
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| plume_id | STRING | Plume id (unique per flight). |
| flux | INT | Methane flux quantification. |
| flux_sd | INT | Standard deviation of methane flux quantification, in kg/h. |
| flight_id | STRING | Research flight identifier. |
| basin | STRING | Oil and Gas basin (e.g. Permian) or area of interest (e.g. New York City).  |
| time_coverage_start | STRING | Data collection end time in YYYY-MM-DDThh:mm:ssZ format STRING (ISO 8601). |
| time_coverage_end | STRING | Data collection end time in YYYY-MM-DDThh:mm:ssZ format STRING (ISO 8601). |
| processing_id | STRING | (internal) Processing run identifier that represents the calculations that led to the features. It is not an attribute describing the flight, but the processing pipeline.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('projects/edf-methanesat-ee/assets/mair/L4point');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_edf-methanesat-ee_assets_mair_L4point
- 数据引用：Chulakadabba, A., Sargent, M., Lauvaux, T., Benmergui, J. S., Franklin, J.
E., Chan Miller, C., Wilzewski, J. S., Roche, S., Conway, E., Souri, A. H.,
Sun, K., Luo, B., Hawthrone, J., Samra, J., Daube, B. C., Liu, X., Chance,
K., Li, Y., Gautam, R., Omara, M., Rutherford, J. S., Sherwin, E. D.,
Brandt, A., and Wofsy, S. C. 2023. Methane point source quantification using
MethaneAIR: a new airborne imaging spectrometer, Atmos. Meas. Tech., 16,
5771-5785.
[doi:10.5194/amt-16-5771-2023](https://doi.org/10.5194/amt-16-5771-2023),
Zhang, Z., Sargent, M., Warren, J. D., Chulakadabba, A., Russi, M., Ayvazov,
S., Benmergui, J., Knapp, M., Kyzivat, E., Miller, C. C., Roche, S., Luo, B.,
Miller, D. J., Nasr, M., Sun, K., Williams, J. P., MacKay, K., Omara, M.,
Guanter, L., Gautam, R., Franklin, J., Liu, X., and Wofsy, S. C. 2026. Automatic
Methane Plume Masking Based on Wavelet Transform Image Processing: Application to
MethaneAIR and MethaneSAT data, EGUsphere (preprint),
[doi.org/10.5194/egusphere-2026-141](https://doi.org/10.5194/egusphere-2026-141),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
