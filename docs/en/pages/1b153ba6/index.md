---
title: "SPOT Panchromatic Imagery, Brazil"
date: 2026-11-03 12:00:00
---

# SPOT Panchromatic Imagery, Brazil

Original name: SPOT Panchromatic Imagery 5-10m, Brazil

## What this dataset is

This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4 and 5 satellites for Brazil circa 2008. The panchromatic sensor provides the highest native spatial resolution of these missions, capturing light across a broad visible spectrum (0.51–0.73 µm for SPOT 2, 0.61–0.68 µm for SPOT 4, 0.48–0.71 µm for SPOT 5). The bands are intended for advanced photogrammetric analysis and custom fusion workflows. SPOT 5 assets have a 5 m pixel size; SPOT 2 and 4 assets are 10 m.

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## Coverage and time range

- Coverage: Brazil
- Time range: 2007-01-01 至 2009-11-26

## Resolution and specifications

- Spatial resolution: about 10 m (5 m for SPOT 5; 10 m for SPOT 2/4)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| P | Panchromatic | 10 |  |

## What you can use it for

- Photogrammetric analysis that needs the highest native SPOT resolution
- Fuse with multispectral imagery in custom pansharpening workflows
- Historical mapping of Brazilian land cover around 2008

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1');
```

- Earth Engine ID: `AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1`
- Providers: Google/CNES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1

## License and citation

- License: proprietary
- Keywords: brazil, forest-code, google, imagery, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [SPOT Pansharpened Pseudo Natural Color Imagery, Brazil](/en/pages/592f745a/)
- [SPOT Multispectral Pseudo Natural Color Imagery, Brazil](/en/pages/1f2f6c63/)
- [SPOT Multispectral Imagery, Brazil (Raw)](/en/pages/0f610d9b/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
