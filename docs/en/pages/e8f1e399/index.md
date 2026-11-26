---
title: "EC JRC global map of forest cover 2020, V1 [deprecated]"
date: 2026-11-03 12:00:00
---

# EC JRC global map of forest cover 2020, V1 [deprecated]

Original name: EC JRC global map of forest cover 2020, V1 [deprecated]

## What this dataset is

The EC JRC global map of forest cover provides a spatially explicit representation
of forest presence and absence for the year 2020 at 10m spatial resolution.

The year 2020 corresponds to the cut-off date of the Regulation from the
European Union "on the making available on the Union market and the export from
the Union of certain commodities and products associated with deforestation and
forest degradation" (EUDR, [Regulation (EU) 2023/1115](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115)). In the context of the
EUDR, the global forest cover map can be used as a non-mandatory, non-exclusive,
and not legally binding source of information. Further information about the
map and its use can be found on the [EU Observatory on Deforestation and Forest
Degradation](https://forest-observatory.ec.europa.eu/forest/) (EUFO) in the section on Frequently Asked Questions.

Forest means land spanning more than 0.5 hectares with trees higher than 5
meters and a canopy cover of more than 10%, or trees able to reach those
thresholds in situ, excluding land that is predominantly under agricultural or
urban land use. Agricultural use means the use of land for the purpose of
agriculture, including for agricultural plantations (i.e. tree stands in
agricultural production systems such as fruit tree plantations, oil palm
plantations, olive orchards and agroforestry systems) and set- aside
agricultural areas, and for rearing livestock. All plantations of relevant
commodities other than wood, that is cattle, cocoa, coffee, oil palm, rubber,
soya, are excluded from the forest definition.

The global map of forest cover was created by combining available global
datasets (wall-to-wall or global in their scope) on tree cover, tree height,
land cover and land use into a single harmonized globally-consistent
representation of where forests existed in 2020.

The workflow consisted in first mapping the global maximum extent of tree
cover circa the year 2020 from the combination of ESA World Cover 2020 and
2021, WRI Tropical Tree Cover 2020, UMD Global land cover and land use 2019,
Global Mangrove Watch 2020, and JRC Tropical Moist Forest 2020 datasets. In the
second step, a series of overlays and decision rules were applied to reduce this
maximum extent of tree cover and align it with the Forest definition using
datasets covering cropland and commodity expansion (ESA World Cereal, UMD
Global land cover and land use 2019, UMD Global Cropland Expansion,
High-resolution global map of smallholder and industrial oil palm plantations,
and WRI Spatial Database of Planted Trees), land use change (UMD global forest
cover loss, JRC Tropical Moist Forest, IIASA Global Forest Management),
built-up (JRC Global Human Settlement), and water (JRC Global Surface Water).

The global input layers, mapping approach, and a preliminary accuracy
assessment are described in a [JRC science for policy report](https://op.europa.eu/en/publication-detail/-/publication/f9baaa45-e73f-11ee-9ea8-01aa75ed71a1).
The JRC will undertake a formal statistically and thematically robust
accuracy assessment in 2024.

Please also refer to the [list of known issues](https://forobs.jrc.ec.europa.eu/GFC) and to the [JRC Data Catalogue entry](https://data.jrc.ec.europa.eu/dataset/10d1b337-b7d1-4938-a048-686c8185b290).

## Coverage and time range

- Coverage: Coverage: global; time: 2020; resolution: 10 m.
- Time range: 2020-12-31 至 2020-12-31

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Map | Global forest cover 2020 | 10 |  |

## What you can use it for

- EUDR compliance and deforestation-free supply chain checks
- Global forest cover mapping
- Deforestation risk assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GFC2020/V1');
```

- Earth Engine ID: `JRC/GFC2020/V1`
- Providers: Joint Research Centre, European Commission, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V1

## License and citation

- License: proprietary
- Keywords: eudr, forest, forest-biomass, jrc
- 数据引用：Bourgoin, Clement; Ameztoy, Iban; Verhegghen, Astrid; Carboni, Silvia;
Colditz, Rene R.; Achard, Frederic (2023): Global map of forest cover 2020 -
version 1. European Commission, Joint Research Centre (JRC) [Dataset] PID:
[http://data.europa.eu/89h/10d1b337-b7d1-4938-a048-686c8185b290](http://data.europa.eu/89h/10d1b337-b7d1-4938-a048-686c8185b290).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [EC JRC global map of forest cover 2020, V4](/pages/da4e266d/)
- [EC JRC global map of forest cover 2020, V2 [deprecated]](/pages/e83cd6f4/)
- [EC JRC global map of forest cover 2020, V3 [deprecated]](/pages/8b874d85/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
