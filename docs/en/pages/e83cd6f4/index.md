---
title: "EC JRC global map of forest cover 2020, V2 [deprecated]"
date: 2026-11-03 12:00:00
---

# EC JRC global map of forest cover 2020, V2 [deprecated]

Original name: EC JRC global map of forest cover 2020, V2 [deprecated]

## What this dataset is

The global map of forest cover provides a spatially explicit representation
of forest presence and absence for the year 2020 at 10m spatial resolution.

The year 2020 corresponds to the cut-off date of the Regulation from the
European Union "on the making available on the Union market and the export
from the Union of certain commodities and products associated with
deforestation and forest degradation" (EUDR, Regulation (EU) 2023/1115).
In the context of the EUDR, the global forest cover map can be used as a
non-mandatory, non-exclusive and not legally binding source of information.
Further information about the map and its use can be found on the [EU
Observatory on Deforestation and Forest Degradation](https://forest-observatory.ec.europa.eu/forest/) (EUFO) and namely in
the section on Frequently Asked Questions.

Forest means land spanning more than 0.5 hectares with trees higher than
5 meters and a canopy cover of more than 10%, or trees able to reach those
thresholds in situ, excluding land that is predominantly under agricultural
or urban land use. Agricultural use means the use of land for the purpose of
agriculture, including for agricultural plantations (i.e. tree stands in
agricultural production systems such as fruit tree plantations, oil palm
plantations, olive orchards and agroforestry systems) and set- aside
agricultural areas, and for rearing livestock. All plantations of relevant
commodities other than wood, that is cattle, cocoa, coffee, oil palm,
rubber, soya are excluded from the forest definition.

The global map of forest cover was created by combining existing global
spatial layers (wall-to-wall or global in their scope), e.g. on land cover,
land use, and tree height. The map aims to represent the state of forest
cover by 31 December 2020. The global land cover from the ESA World Cover
project serves as one baseline layer to define the extent of tree cover for
year 2020 at 10 m spatial resolution. In 2024, the global map of forest
cover 2020 was improved by integrating user feedback, and new or revised
spatial data layers.

It now better captures temporally unstocked forests, low-density
tropical forests, and secondary tropical forests that have regrown for at
least five years. Additionally, the exclusion criteria have been enhanced
to more effectively exclude trees in urban areas, mining sites, wetlands,
areas with shifting cultivation, and tree plantations. This is achieved by
utilizing multiple global maps of canopy height, crop area, and specific
crop commodity maps to more accurately distinguish forests from trees
under agricultural use.

For direct access and metadata, please consult the JRC
data catalogue ([JRC 2024](https://data.jrc.ec.europa.eu/dataset/e554d6fb-6340-45d5-9309-332337e5bc26)). A technical report ([Bourgoin et al 2025](https://op.europa.eu/en/publication-detail/-/publication/e2c286ac-14e9-11f0-b1a3-01aa75ed71a1/language-en))
describes the mapping approach for the second version. The accuracy
assessment of the Global Forest Cover map is described in a
[separate report](https://op.europa.eu/en/publication-detail/-/publication/e86f56dd-15b5-11f0-b1a3-01aa75ed71a1/language-en).

The global map of forest cover may be revised if
new information, additional large-scale data layers, or revised global
spatial data layers will be made available for year 2020.

For a list of known issues please refer to [this website](https://forobs.jrc.ec.europa.eu/GFC).

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
var dataset = ee.ImageCollection('JRC/GFC2020/V2');
```

- Earth Engine ID: `JRC/GFC2020/V2`
- Providers: Joint Research Centre, European Commission, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GFC2020_V2

## License and citation

- License: proprietary
- Keywords: eudr, forest, forest-biomass, jrc
- 数据引用：Bourgoin, Clement; Verhegghen, Astrid; Degreve, Lucas; Ameztoy, Iban;
Carboni, Silvia; Colditz, Rene; Achard, Frederic (2024): Global map of
forest cover 2020 - version 2. European Commission, Joint Research
Centre (JRC) [Dataset]
PID: [http://data.europa.eu/89h/e554d6fb-6340-45d5-9309-332337e5bc26](http://data.europa.eu/89h/e554d6fb-6340-45d5-9309-332337e5bc26)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [EC JRC global map of forest cover 2020, V4](/pages/da4e266d/)
- [EC JRC global map of forest cover 2020, V1 [deprecated]](/pages/e8f1e399/)
- [EC JRC global map of forest cover 2020, V3 [deprecated]](/pages/8b874d85/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
