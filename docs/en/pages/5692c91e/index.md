---
title: "GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]"
date: 2026-11-03 12:00:00
---

# GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]

Original name: GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]

## What this dataset is

The GHSL relies on the design and implementation of new spatial data mining
technologies allowing to automatically process and extract analytics and
knowledge from large amount of heterogeneous data including: global,
fine-scale satellite image data streams, census data, and crowd sources or
volunteered geographic information sources.

These data contain a multitemporal information layer on built-up presence as
derived from Landsat image collections (GLS1975, GLS1990, GLS2000, and
ad-hoc Landsat 8 collection 2013/2014).

The data have been produced by means of [Global Human Settlement Layer
methodology](https://publications.jrc.ec.europa.eu/repository/handle/JRC97705)
in 2015.

For more information visit: [https://ghsl.jrc.ec.europa.eu/ghs_bu.php](https://ghsl.jrc.ec.europa.eu/ghs_bu.php)
and [https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf](https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy. The GHSL produces new global spatial information,
evidence-based analytics, and knowledge describing the human presence in
the planet.

## Coverage and time range

- Coverage: Coverage: global; time: epochs 1975, 1990, 2000 and 2014; resolution: 38 m.
- Time range: 1975-01-01 至 2014-12-31

## Resolution and specifications

- Spatial resolution: about 38 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built | Multitemporal built-up presence | 38 |  |
| cnfd | Gaps-filled confidence grid on the built-up class aggregated for 2014. 0 = 100% confidence of no built-up, 127 = 50% decision cut off, 255 = 100% conficence of yes built-up | 38 |  |
| dm | Mosaic of data availability in the different epochs. | 38 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1');
```

- Earth Engine ID: `JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_BUILT_LDSMT_GLOBE_V1

## License and citation

- License: proprietary
- Keywords: built, builtup, jrc, landsat-derived, population
- 数据引用：Pesaresi, Martino; Ehrilch, Daniele; Florczyk, Aneta J.; Freire,
Sergio; Julea, Andreea; Kemper, Thomas; Soille, Pierre; Syrris, Vasileios
(2015): GHS built-up grid, derived from Landsat, multitemporal (1975, 1990,
2000, 2014). European Commission, Joint Research Centre (JRC) [Dataset]
[PID: https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b](https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
