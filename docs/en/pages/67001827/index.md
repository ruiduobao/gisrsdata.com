---
title: "Global Friction Surface 2019 [deprecated]"
date: 2026-11-03 12:00:00
---

# Global Friction Surface 2019 [deprecated]

Original name: Global Friction Surface 2019 [deprecated]

## What this dataset is

This global friction surface enumerates land-based travel speed for all land pixels between 85 degrees north and 60 degrees south for a nominal year 2019.  It also includes "walking-only" travel speed, using non-motorized means of transportation only.
This map was produced through a collaboration between MAP (University of Oxford), Telethon Kids Institute (Perth, Australia), Google, and the University of Twente, Netherlands.
This project builds on previous work published by Weiss et al 2018 ([doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)). Weiss et al (2018) utilised datasets for roads (comprising the first ever global-scale use of Open Street Map and Google roads datasets), railways, rivers, lakes, oceans, topographic conditions (slope and elevation), landcover types, and national borders. These datasets were each allocated a speed or speeds of travel in terms of time to cross each pixel of that type. The datasets were then combined to produce a "friction surface"; a map where every pixel is allocated a nominal overall speed of travel based on the types occurring within that pixel. For the current project, an updated friction surface was created to incorporate recent improvements within OSM roads data.
Differences between this friction surface and the 2015 version (Weiss et al. 2018) are not necessarily indicative of changes in infrastructure (e.g., new roads being built). Such discrepancies are far more likely to be associated with improved data quality, in particular updates made to OSM road coverage. As a result, comparisons between the friction surfaces and resulting travel time maps should be done cautiously and generally not interpreted as representing changes in access over time.
This map represents the travel speed from this allocation process, expressed in units of minutes required to travel one meter. It forms the underlying dataset behind the global healthcare accessibility map described in the referenced paper.

Source dataset credits are as described in the accompanying paper.

## Coverage and time range

- Coverage: Spatial: global land (85°N to 60°S); temporal: 2019; resolution: 927.67 m.
- Time range: 2019-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| friction | Land-based travel speed. | 927.67 |  |
| friction_walking_only | Land-based travel speed using non-motorized transport. | 927.67 |  |

## What you can use it for

- Serve as the underlying speed surface for accessibility and travel-time modelling.
- Support accessibility analysis for healthcare, education and other public services.
- Study walking-only accessibility.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('Oxford/MAP/friction_surface_2019');
```

- Earth Engine ID: `Oxford/MAP/friction_surface_2019`
- Providers: Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_friction_surface_2019

## License and citation

- License: CC-BY-4.0
- Keywords: accessibility, friction, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Accessibility to Healthcare 2019 [deprecated]](/pages/5a6f325a/)
- [Global Friction Surface 2015 [deprecated]](/pages/b510ae4f/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
