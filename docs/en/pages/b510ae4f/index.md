---
title: "Global Friction Surface 2015 [deprecated]"
date: 2026-11-03 12:00:00
---

# Global Friction Surface 2015 [deprecated]

Original name: Global Friction Surface 2015 [deprecated]

## What this dataset is

This global friction surface enumerates land-based travel
speed for all land pixels between 85 degrees north and 60 degrees
south for a nominal year 2015.

This map was produced through
a collaboration between the University of Oxford Malaria Atlas
Project (MAP), Google, the European Union Joint Research Centre
(JRC), and the University of Twente, Netherlands. The underlying
datasets used to produce the map include roads (comprising the
first ever global-scale use of Open Street Map and Google roads
datasets), railways, rivers, lakes, oceans, topographic conditions
(slope and elevation), landcover types, and national borders.

These datasets were each allocated a speed or speeds of travel in terms
of time to cross each pixel of that type. The datasets were then
combined to produce this &ldquo;friction surface&rdquo;, a map
where every pixel is allocated a nominal overall speed of travel
based on the types occurring within that pixel, with the fastest
travel mode intersecting the pixel being used to determine the
speed of travel in that pixel (with some exceptions such as national
boundaries, which have the effect of imposing a travel time penalty).

This map represents the travel speed from this allocation process, expressed
in units of minutes required to travel one meter. It forms the
underlying dataset behind the global accessibility map described
in the referenced paper.

'Source dataset credits are as described in the accompanying paper.

## Coverage and time range

- Coverage: Spatial: global land (85°N to 60°S); temporal: 2015; resolution: 927.67 m.
- Time range: 2015-01-01 至 2016-01-01

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| friction | Land-based travel speed. | 927.67 |  |

## What you can use it for

- Serve as the underlying speed surface for accessibility and travel-time modelling.
- Support siting, logistics and emergency-response analysis.
- Compare cautiously with the 2019 friction surface (differences mostly reflect data-quality improvements).

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('Oxford/MAP/friction_surface_2015_v1_0');
```

- Earth Engine ID: `Oxford/MAP/friction_surface_2015_v1_0`
- Providers: Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_friction_surface_2015_v1_0

## License and citation

- License: CC-BY-4.0
- Keywords: accessibility, friction, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, H.S. Gibson, W. Temperley, S. Peedell, A.
Lieber, M. Hancher, E. Poyart, S. Belchior, N. Fullman, B. Mappin,
U. Dalrymple, J. Rozier, T.C.D. Lucas, R.E. Howes, L.S. Tusting,
S.Y. Kang, E. Cameron, D. Bisanzio, K.E. Battle, S. Bhatt, and
P.W. Gething. A global map of travel time to cities to assess inequalities
in accessibility in 2015. Nature (2018).
[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Accessibility to Healthcare 2019 [deprecated]](/pages/5a6f325a/)
- [Global Friction Surface 2019 [deprecated]](/pages/67001827/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
