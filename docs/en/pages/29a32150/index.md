---
title: "Planet SkySat Public Ortho Imagery, Multispectral"
date: 2026-11-03 12:00:00
---

# Planet SkySat Public Ortho Imagery, Multispectral

Original name: Planet SkySat Public Ortho Imagery, Multispectral

## What this dataset is

This data from Planet labs Inc. SkySat satellites was collected for
the experimental \"Skybox for Good Beta\" program in 2015, as well as for
various crisis response events and a few other projects. The data is
available in both a 5-band Multispectral/Pan collection, and a Pansharpened
RGB collection.

Each image's asset ID contains the acquisition date and time, for
example, image s01_20150304T080608Z was acquired on March 4, 2015 at
08:06 Zulu (UTC). For more information, please see the
[Planet Imagery Product Specifications](https://www.planet.com/products/#planet-monitoring)
and visit the
[Planet Imagery and Archive site](https://www.planet.com/latest-satellite-imagery-gallery/)

This Multispectral/Pan collection contains images with five 16-bit bands
shifted up from the original 12-bit data. The B, G, R, and Near-IR bands
have a resolution of approximately 2m per pixel, while the Pan band is
approximately 0.8m resolution (closer to 1m for off-nadir images).

## Coverage and time range

- Coverage: Spatial: selected areas globally; temporal: 2014 to 2016; resolution: ~2 m multispectral, ~0.8 m panchromatic.
- Time range: 2014-07-03 至 2016-12-24

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B | Blue | 2 | 450-515nm |
| G | Green | 2 | 515-595nm |
| R | Red | 2 | 605-695nm |
| N | Near-IR | 2 | 740-900nm |
| P | Panchromatic | 0.8 | 450-900nm |

## What you can use it for

- High-resolution imagery analysis for disaster response and event verification.
- Samples for urban and land-use mapping.
- Cross-validate against other high-resolution imagery.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL');
```

- Earth Engine ID: `SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL`
- Providers: Planet Labs Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/SKYSAT_GEN-A_PUBLIC_ORTHO_MULTISPECTRAL

## License and citation

- License: CC-BY-4.0
- Keywords: highres, multispectral, pansharpened, planet, satellite-imagery, skysat
- 数据引用：© \<year\> Planet Labs Inc.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Planet SkySat Public Ortho Imagery, RGB](/pages/0bb60bdd/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
