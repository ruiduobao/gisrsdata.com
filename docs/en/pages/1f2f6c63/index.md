---
title: "SPOT Multispectral Pseudo Natural Color Imagery, Brazil"
date: 2026-11-03 12:00:00
---

# SPOT Multispectral Pseudo Natural Color Imagery, Brazil

Original name: SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil

## What this dataset is

This collection contains 2008-era "pseudo natural color" RGB images derived from the native multispectral bands of SPOT 2, 4 and 5 over Brazil. Because the HRV and HRG sensors had no native blue band, the product synthesizes an RGB representation that approximates a natural appearance for visual land-use/land-cover assessment. Spatial resolution stays at the native multispectral scale: 10 m for SPOT 5 and 20 m for SPOT 2/4. See also the [Brazil Forest Imagery Dataset 2008: Visual Basemap](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL).

Google added a cloud mask band: polygons around clouds, wisps and shadows were manually delineated for each image and converted into a mask image added as an extra band. To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## Coverage and time range

- Coverage: Brazil
- Time range: 2007-01-01 至 2009-11-26

## Resolution and specifications

- Spatial resolution: about 20 m (10 m for SPOT 5; 20 m for SPOT 2/4)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red reflectance | 20 |  |
| G | Green reflectance | 20 |  |
| B | Blue reflectance, representing the synthetic blue channel of the pseudo-natural color product for SPOT 2, 4, and 5 | 20 |  |
| cloud_mask | Cloud mask: 0 = cloud/shadow, 1 = clear | 20 |  |

## What you can use it for

- Visually assess land use and forest condition in Brazil around 2008
- A natural-color base map for historical environmental change analysis
- Compliance checks against historical reference dates such as the Brazil Forest Code

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1');
```

- Earth Engine ID: `AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1`
- Providers: Google/CNES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1

## License and citation

- License: proprietary
- Keywords: brazil, forest-code, google, rgb, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [SPOT Panchromatic Imagery, Brazil](/en/pages/1b153ba6/)
- [SPOT Pansharpened Pseudo Natural Color Imagery, Brazil](/en/pages/592f745a/)
- [SPOT Multispectral Imagery, Brazil (Raw)](/en/pages/0f610d9b/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
