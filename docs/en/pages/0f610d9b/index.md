---
title: "SPOT Multispectral Imagery, Brazil (Raw)"
date: 2026-11-03 12:00:00
---

# SPOT Multispectral Imagery, Brazil (Raw)

Original name: SPOT Multispectral Imagery 10-20m, Brazil

## What this dataset is

This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4 and 5 satellites over Brazil. These CNES-operated missions were designed to provide high-resolution, wide-area optical imagery for managing Earth's resources: SPOT 2 and 4 used HRV and HRVIR pushbroom sensors with a 60 km swath, while SPOT 5 introduced the HRG instrument with improved 10 m multispectral resolution. The raw collection supports historical environmental analysis, for example in the context of the [Brazil Forest Code](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm). See also the [Brazil Forest Imagery Dataset 2008: Analytic Basemap](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_ANALYTIC).

A cloud mask can be added by linking the [MS_NC collection](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1). To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## Coverage and time range

- Coverage: Brazil
- Time range: 2007-01-01 至 2009-11-26

## Resolution and specifications

- Spatial resolution: about 20 m (10 m for SPOT 5; 20 m for SPOT 2/4)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| G | Green (0.50-0.59 µm) | 20 |  |
| R | Red (0.61-0.68 µm) | 20 |  |
| N | Near-Infrared (NIR) (0.78-0.89 µm) | 20 |  |
| S | Shortwave near-Infrared SWIR (1.53-1.78 µm). Available for SPOT 4/5 | 20 |  |

## What you can use it for

- Historical analysis of Brazilian forests and land cover around 2008
- Deforestation compliance checks against the Brazil Forest Code
- Quantitative analysis such as vegetation indices from the raw multispectral bands

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1');
```

- Earth Engine ID: `AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1`
- Providers: Google/CNES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1

## License and citation

- License: proprietary
- Keywords: brazil, forest-code, google, multispectral, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [SPOT Panchromatic Imagery, Brazil](/en/pages/1b153ba6/)
- [SPOT Pansharpened Pseudo Natural Color Imagery, Brazil](/en/pages/592f745a/)
- [SPOT Multispectral Pseudo Natural Color Imagery, Brazil](/en/pages/1f2f6c63/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
