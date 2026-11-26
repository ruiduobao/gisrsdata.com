---
title: "Estonia Mono Low Flying Orthophotos"
date: 2026-11-03 12:00:00
---

# Estonia Mono Low Flying Orthophotos

Original name: Estonia mono low flying orthophotos

## What this dataset is

Orthophotos are an aerial photo dataset covering Estonia.

An orthophoto is a processed aerial photo from which distortions caused
by terrain relief, camera tilt relative to the ground at the moment of
exposure and camera central projection are removed. A digital orthophoto
has a certain pixel size or resolution which shows the smallest
indivisible exposed area on the ground (Ground Sampling Distance, GSD).

Orthophotos have a nationwide coverage and correspond to the scale of
1:5000-1:10000 (pixel size 20-40 cm). Orthophotos for densely-populated
areas are produced with the pixel size of 10-16 cm.

The mono_low_flying dataset has a single grayscale band for
densely-populated areas.

For more information, please see the
[Estonia orthophotos documentation](https://geoportaal.maaamet.ee/eng/Spatial-Data/Orthophotos-p309.html)

## Coverage and time range

- Coverage: Estonia, densely-populated areas
- Time range: 1993-01-01 至 2021-06-16

## Resolution and specifications

- Spatial resolution: about 0.4 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| mono | Grayscale | 0.4 |  |

## What you can use it for

- High-resolution aerial imagery base map
- Detailed urban and land use mapping
- Historical imagery comparison (since 1993)

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Estonia/Maamet/orthos/mono_low_flying');
```

- Earth Engine ID: `Estonia/Maamet/orthos/mono_low_flying`
- Providers: Estonia orthophotos, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Estonia_Maamet_orthos_mono_low_flying

## License and citation

- License: proprietary
- Keywords: estonia, low-flying, orthophotos
- 数据引用：Map data: Estonian Land Board

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Estonia RGB low flying orthophotos](/pages/e528fe2f/)
- [Estonia RGB orthophotos](/pages/65b015a5/)
- [Estonia mono orthophotos](/pages/baca66e9/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
