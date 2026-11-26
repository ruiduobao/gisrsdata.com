---
title: "MethaneAIR L4 Area Sources 2021 [deprecated]"
date: 2026-11-03 12:00:00
---

# MethaneAIR L4 Area Sources 2021 [deprecated]

Original name: MethaneAIR L4 Area Sources 2021 [deprecated]

## What this dataset is

**The area emissions model is still in development and not representative of
a final product.**

This dataset provides high-resolution, spatially disaggregated methane
emission fluxes (kg/hr) of the Permian Delaware sub-basin in southern New
Mexico and western Texas as well as for the Uinta basin in Utah.

Methane is a potent greenhouse gas that has more than 80 times the warming
power of carbon dioxide over the first 20 years after it reaches the
atmosphere. At least 30% of today's global warming is driven by methane from
human actions. Cutting methane emissions associated with human activities
- including avoidable emissions from oil and gas operations, agriculture,
and waste management - is the single fastest way to slow the rate of global
warming.

This dataset was generated using MethaneAIR measurements taken on 8 August
2021 (research flight RF06) over the Permian and 11 August 2021 (RF08) over
Uinta. MethaneAIR is an airborne precursor of the MethaneSAT satellite
mission, managed by [MethaneSAT LLC](https://www.methanesat.org/), a wholly
owned subsidiary of Environmental Defense Fund. The methane emission fluxes
were produced using a geostatistical inverse modeling framework specialized
to exploit the high spatial resolution, wide spatial coverage, and high
precision of MethaneAIR data.

For additional information about the MethaneAIR instrument, instrument
calibration and emission detections, please refer to recent publications
by [Staebell et al. (2021)](https://doi.org/10.5194/amt-14-3737-2021),
[Conway et al. (2023)](https://doi.org/10.5194/amt-2023-111), [Chulakadabba
et al. (2023)](https://doi.org/10.5194/egusphere-2023-822), [Abbadi et al.
(2023)](https://doi.org/10.31223/X51D4C), [Omara et al. (2023)](https://doi.org/10.5194/essd-15-3761-2023),
and [Miller et al. (2023)](https://doi.org/10.5194/egusphere-2023-1962).

Contact the data provider for more information about the project at this link:
[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## Coverage and time range

- Coverage: Permian Delaware sub-basin and Uinta Basin, USA
- Time range: 2021-08-07 至 2021-08-11

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| flux | Methane emissions traceable to a 1km^2 area. | 1000 |  |

## What you can use it for

- Area-source methane estimation for the Permian and Uinta basins
- Reviewing emission results from early MethaneAIR flights

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('EDF/MethaneSAT/MethaneAIR/methaneair-L4area-2021');
```

- Earth Engine ID: `EDF/MethaneSAT/MethaneAIR/methaneair-L4area-2021`
- Providers: Environmental Defense Fund - MethaneSAT, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/EDF_MethaneSAT_MethaneAIR_methaneair-L4area-2021

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, edf, emissions, ghg, methane, methaneair, methanesat
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MethaneAIR L3 Concentration v1](/pages/7172790c/)
- [MethaneAIR L4 Area Sources v1](/pages/b2ba5320/)
- [MethaneAIR L4 Point Sources v1](/pages/32e81487/)
- [MethaneAIR L4 Point Sources 2021 [deprecated]](/pages/aafea29a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
