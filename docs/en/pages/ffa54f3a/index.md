---
title: "Finland NRG NLS Orthophotos 50 cm by Mavi"
date: 2026-11-03 12:00:00
---

# Finland NRG NLS Orthophotos 50 cm by Mavi

Original name: Finland NRG NLS orthophotos 50 cm by Mavi

## What this dataset is

NLS Orthophotos are an aerial photo dataset covering the whole of Finland.
This data is provided by [Mavi(Agency for Rural Affairs)](https://maaseutuverkosto.fi/en/).
An orthophoto is a combination of several individual aerial photos. The
aerial photo dataset in orthophoto format is available as the most recent
dataset consisting of the most recent aerial photos available. The most
recent data is usually 1-3 years old. NLS Orthophotos are updated every
3 years (in Northern Lapland 12 years).

In these images, the bands are near-infrared, red, and green.

(In Dataset id, VV stands for "v&auml;&auml;r&auml;v&auml;ri", false color)
For more information, please see the
[NLS orthophotos documentation](https://www.maanmittauslaitos.fi/en/maps-and-spatial-data/expert-users/product-descriptions/orthophotos)

## Coverage and time range

- Coverage: Finland, nationwide
- Time range: 2015-01-01 至 2018-01-01

## Resolution and specifications

- Spatial resolution: about 0.5 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| N | Near-Infrared | 0.5 |  |
| R | Red | 0.5 |  |
| G | Green | 0.5 |  |

## What you can use it for

- High-resolution aerial imagery base map
- Land use and forestry mapping
- Image interpretation and change detection

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Finland/MAVI/VV/50cm');
```

- Earth Engine ID: `Finland/MAVI/VV/50cm`
- Providers: NLS orthophotos, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Finland_MAVI_VV_50cm

## License and citation

- License: CC-BY-4.0
- Keywords: falsecolor, finland, mavi, nrg, orthophotos
- 数据引用：The National Land Survey of Finland

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Landsat 8 Level 2 Surface Reflectance and Surface Temperature](/en/pages/778e3960/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)](/en/pages/07bc7cbd/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)](/en/pages/0620c27d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
