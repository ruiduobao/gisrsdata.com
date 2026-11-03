---
title: "MethaneAIR L4 Point Sources v1"
date: 2026-11-03 12:00:00
permalink: /pages/32e81487/
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

# MethaneAIR L4 Point Sources v1

## 数据集简介

This dataset provides data for high-emitting methane point source detections
(kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New
Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in
the east, plus three urban areas (New York City, Phoenix, and Salt Lake
City).


Methane is a potent greenhouse gas that has more than 80 times the warming power
of carbon dioxide over the first 20 years after it reaches the atmosphere. At
least 30% of today's global warming is driven by methane from human actions.
Cutting methane emissions associated with human activities - including avoidable
emissions from oil and gas operations, agriculture, and waste management - is
the single fastest way to slow the rate of global warming.

Area emissions are estimated from observed XCH4 using a geostatistical inverse
model framework (see ["MethaneAIR L4 Area Sources"](EDF_MethaneSAT_MethaneAIR_L4area) dataset). An atmospheric transport model - 
the Stochastic Time-Inverted Lagrangian Transport model, "STILT";
[Lin et al. (2003)](https://doi.org/10.1029/2002JD003161),
[Fasoli et al. (2018)](https://doi.org/10.5194/gmd-11-2813-2018); driven by
meteorological data from the NOAA High-Resolution Rapid Refresh Model "HRRR" -
is used to link variations in observed XCH4 to potential upwind sources. A
hierarchical approach is used to separate XCH4 variations due to area emissions
from those due to point source emissions or inflow across the domain boundary
(the "background" concentration). Point source emissions are determined
individually (see ["MethaneAIR L4 Point Sources"](EDF_MethaneSAT_MethaneAIR_L4point) dataset) and pre-subtracted from the observed XCH4. An inverse model is then
used to estimate XCH4 inflow across the boundary domain. Finally, area emissions
are estimated using a geostatistical inverse model with an enforced non-negative solution. Total emissions are the sum of area and point source emissions.

This dataset was generated using MethaneAIR measurements taken on flights
between 30 July 2021 and 13 October 2023. MethaneAIR is an airborne precursor of
the MethaneSAT satellite mission, managed by [MethaneSAT LLC](https://www.methanesat.org/),
a wholly owned subsidiary of Environmental Defense Fund. The methane emission fluxes were produced using a point source detection and
emissions quantification framework specialized to exploit the high spatial
resolution, wide spatial coverage, and high precision of MethaneAIR data
(methodology is described in [Chulakdabba et al. (2023)](https://doi.org/10.5194/amt-16-5771-2023).)
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

Contact the data provider for more information about the project at this
link: [https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 基本信息

- 数据集编号（Earth Engine ID）：`EDF/MethaneSAT/MethaneAIR/L4point`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2021-07-30 至 2023-10-13
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| plume_id | INT | Plume id (unique per flight). |
| flux | INT | Methane flux quantification. |
| flux_hi | INT | Higher estimate of methane flux quantification, in kg/h. |
| flux_lo | INT | Lower estimate of methane flux quantification, in kg/h. |
| flux_sd | INT | Standard deviation of methane flux quantification, in kg/h. |
| in_gim_bound | INT | Whether the point source is within the footprint of the L4 GIM area emissions product (0 if false, 1 if true). |
| flight_id | STRING | Research flight identifier. |
| basin | STRING | Oil and Gas basin (e.g. Permian) or area of interest (e.g. New York City). |
| time_coverage_start | STRING | Data collection start time in YYYY-MM-DDThh:mm:ssZ format STRING (ISO 8601). |
| time_coverage_end | STRING | Data collection end time in YYYY-MM-DDThh:mm:ssZ format STRING (ISO 8601). |
| processing_id | STRING | (internal) Processing run identifier that represents the calculations that led to the features. It is not an attribute describing the flight, but the processing pipeline.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('EDF/MethaneSAT/MethaneAIR/L4point');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_L4point
- 数据引用：Chulakadabba, A., Sargent, M., Lauvaux, T., Benmergui, J. S., Franklin, J.
E., Chan Miller, C., Wilzewski, J. S., Roche, S., Conway, E., Souri, A. H.,
Sun, K., Luo, B., Hawthrone, J., Samra, J., Daube, B. C., Liu, X., Chance,
K., Li, Y., Gautam, R., Omara, M., Rutherford, J. S., Sherwin, E. D.,
Brandt, A., and Wofsy, S. C. 2023. Methane point source quantification using
MethaneAIR: a new airborne imaging spectrometer, Atmos. Meas. Tech., 16,
5771-5785.
[doi:10.5194/amt-16-5771-2023](https://doi.org/10.5194/amt-16-5771-2023),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
