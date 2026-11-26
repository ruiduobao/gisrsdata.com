---
title: "ESA WorldCereal AEZ v100"
date: 2026-11-03 12:00:00
---

# ESA WorldCereal AEZ v100

Original name: ESA WorldCereal AEZ v100

## What this dataset is

The [European Space Agency (ESA) WorldCereal](https://esa-worldcereal.org/)
classification system aims for product generation within one month after the
end of a particular growing season. Due to the dynamic nature of these
growing seasons across the globe, a global stratification into
Agro-Ecological Zones (AEZ) was performed based on the global crop calendars
created within the project [1]. The feature collection in this dataset
contains the 106 AEZ for which WorldCereal products were generated. Each AEZ
has unique crop calendars, described based on their start of season (SOS)
and end of season (EOS). SOS and EOS are given in day of year (DOY). More
information on the AEZ stratification and the subsequent WorldCereal product
generation is described in [2].

AEZ properties:

- aez_id: the unique ID of each AEZ. WorldCereal products can be filtered
based on this ID
- aez_groupid: the group ID combines several unique AEZ into a group based
on crop calendar similarity.
- tc-annual_sos: SOS of the tc-annual season (DOY)
- tc-annual_eos: EOS of the tc-annual season (DOY)
- tc-wintercereals_sos: SOS of the tc-wintercereals season (DOY)
- tc-wintercereals_eos: EOS of the tc-wintercereals season (DOY)
- tc-springcereals_sos: SOS of the tc-springcereals season (DOY)
- tc-springcereals_eos: EOS of the tc-springcereals season (DOY)
- tc-maize-main_sos: SOS of the tc-maize-main season (DOY)
- tc-maize-main_eos: EOS of the tc-maize-main season (DOY)
- tc-maize-second_sos: SOS of the tc-maize-second season (DOY)
- tc-maize-second_eos: EOS of the tc-maize-second season (DOY)

Missing values of SOS and EOS indicate the absence of the respective growing
season in a particular AEZ.

References:

WorldCereal datasets:

-  Version 100 for year 2021
   -  [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
   -  [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
   -  [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## Coverage and time range

- Coverage: Global
- Time range: 2020-01-01 至 2022-01-01

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| aez_id | INT | The unique ID of an AEZ. |
| aez_groupid | INT | The group ID combines several unique AEZ into a group based on crop calendar similarity. |
| tc-annual_sos | INT | SOS of the tc-annual season (DOY). |
| tc-annual_eos | INT | EOS of the tc-annual season (DOY). |
| tc-wintercereals_sos | INT | SOS of the tc-wintercereals season (DOY). |
| tc-wintercereals_eos | INT | EOS of the tc-wintercereals season (DOY). |
| tc-springcereals_sos | INT | SOS of the tc-springcereals season (DOY). |
| tc-springcereals_eos | INT | EOS of the tc-springcereals season (DOY). |
| tc-maize-main_sos | INT | SOS of the tc-maize-main season (DOY). |
| tc-maize-main_eos | INT | EOS of the tc-maize-main season (DOY). |
| tc-maize-second_sos | INT | SOS of the tc-maize-second season (DOY). |
| tc-maize-second_eos | INT | EOS of the tc-maize-second season (DOY). |

## What you can use it for

- Organizing crop mapping by agro-ecological zone
- Looking up crop calendars (SOS/EOS)
- Regional filtering of WorldCereal products

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('ESA/WorldCereal/AEZ/v100');
```

- Earth Engine ID: `ESA/WorldCereal/AEZ/v100`
- Providers: ESA WorldCereal Consortium, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_AEZ_v100
- [1] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)
- [2] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, boundaries, crop, esa, global, table
- 数据引用：Van Tricht, K., Degerickx, J., Gilliams, S., Zanaga, D., Battude, M., Grosu,
A., Brombacher, J., Lesiv, M., Bayas, J. C. L., Karanam, S., Fritz, S.,
Becker-Reshef, I., Franch, B., Mollà-Bononad, B., Boogaard, H., Pratihast,
A. K., and Szantoi, Z.: WorldCereal: a dynamic open-source system for
global-scale, seasonal, and reproducible crop and irrigation mapping, Earth
Syst. Sci. Data Discuss. [preprint],
[doi:10.5194/essd-2023-184](https://doi.org/10.5194/essd-2023-184), in
review, 2023.,

- DOI：10.5194/essd-2023-184

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [1比100万基础地理信息](/pages/ee94f8/)
- [Designation: USGS GAP PAD-US v2.0](/pages/3a617def/)
- [Easement: USGS GAP PAD-US v2.0](/pages/3311e509/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/pages/6acf3380/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
