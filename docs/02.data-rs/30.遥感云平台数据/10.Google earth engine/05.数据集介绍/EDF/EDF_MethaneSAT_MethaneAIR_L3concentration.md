---
title: "MethaneAIR L3 Concentration v1"
date: 2026-11-03 12:00:00
permalink: /pages/7172790c/
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
---

# MethaneAIR L3 Concentration v1

## 数据集简介

This dataset provides geospatial data for the total column dry air mole
fraction of methane in the atmosphere, "XCH4", as observed by the MethaneAIR
imaging spectrometer. XCH4 is defined as the total column amount (number of
molecules) of methane ("CH4") divided by the total amount of air (number of
molecules, water vapor amount removed) along the line of sight from the
airborne spectrometer to the earth's surface and back up to the sun.
Additional data layers are provided for reference: observed albedo at 1622
nm, surface pressure, and terrain height.


Methane is a potent greenhouse gas that has more than 80 times the warming power
of carbon dioxide over the first 20 years after it reaches the atmosphere. At
least 30% of today's global warming is driven by methane from human actions.
Cutting methane emissions associated with human activities - including avoidable
emissions from oil and gas operations, agriculture, and waste management - is
the single fastest way to slow the rate of global warming.

The aircraft was flown at 11.5 - 13 km altitude (37,000 - 43,000 feet),
acquiring 10 frames per second with a swath of 4.5 - 4.8 km with a 25 degree
field of view and 896 pixels across track, giving a native pixel size at
nadir of approximately 25m along track and 5 m across track. The
spectroscopic data are aggregated by 5 across track, giving a mean pixel
size of 25m x 25m. Concentrations (XCH4) are retrieved from these high
resolution (0.1 nm sampling, 0.3nm resolution), spatially distributed
spectra ([Chan Miller et al. (2024)](https://doi.org/10.5194/egusphere-2023-1962)),
then gridded on a 0.0001 x 0.0001 degree grid (approximately 10m x 8m over
the US). The precision of the gridded data is approximately 25 parts per
billion (1s, about 1.3%), and a spatial correlation length (1/e) of about
70m. There are some variations from flight-to-flight according to operating
conditions, look angle and surface albedo.

The flight pattern was typically a series of oval swaths in a Zamboni
pattern to cover a region, typically about 70 km x 100 km, over a 2 - 3 hour
interval. The data presented here are averaged where flight tracks overlap,
typically at the edges of each swath and in the urns at the top and bottom
of the Zamboni pattern.


This dataset was generated using MethaneAIR measurements taken on flights
between 30 July 2021 and 13 October 2023. MethaneAIR is an airborne precursor of
the MethaneSAT satellite mission, managed by [MethaneSAT LLC](https://www.methanesat.org/),
a wholly owned subsidiary of Environmental Defense Fund. Methane emission fluxes were produced using a geostatistical inverse
modeling framework on each of these Zamboni swaths.


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

- 数据集编号（Earth Engine ID）：`EDF/MethaneSAT/MethaneAIR/L3concentration`
- 数据类型：影像集合（ImageCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2021-08-06 至 2023-10-14
- 空间分辨率：10.2 米
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| XCH4 | Retrieved column-averaged dry-air CH4 mole fraction. | 10.2 |  |
| albedo | Ratio of solar radiance at the ground to observed radiance at the sensor. | 10.2 |  |
| surface_pressure | Air pressure at the surface. | 10.2 |  |
| terrain_height | Elevation with respect to WGS84 reference ellipsoid. | 10.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('EDF/MethaneSAT/MethaneAIR/L3concentration');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_L3concentration
- 数据引用：Chan Miller, C., Roche, S., Wilzewski, J. S., Liu, X., Chance, K., Souri,
A. H., Conway, E., Luo, B., Samra, J., Hawthorne, J., Sun, K., Staebell, C.,
Chulakadabba, A., Sargent, M., Benmergui, J. S., Franklin, J. E., Daube, B.
C., Li, Y., Laughner, J. L., Baier, B. C., Gautam, R., Omara, M., and Wofsy,
S. C. 2023. Methane retrieval from MethaneAIR using the CO2 Proxy Approach:
A demonstration for the upcoming MethaneSAT mission, EGUsphere [preprint].
[doi:10.5194/egusphere-2023-19623](https://doi.org/10.5194/egusphere-2023-1962),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
