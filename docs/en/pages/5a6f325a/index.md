---
title: "Accessibility to Healthcare 2019 [deprecated]"
date: 2026-11-03 12:00:00
---

# Accessibility to Healthcare 2019 [deprecated]

Original name: Accessibility to Healthcare 2019 [deprecated]

## What this dataset is

This global accessibility map enumerates land-based travel time (in
minutes) to the nearest hospital or clinic for all areas between 85
degrees north and 60 degrees south for a nominal year 2019. It also
includes "walking-only" travel time, using non-motorized means of
transportation only.

Major data collection efforts underway by OpenStreetMap, Google Maps, and
academic researchers have been harnessed to compile the most complete
collection of healthcare facility locations to date. This map was
produced through a collaboration between MAP (University of Oxford),
Telethon Kids Institute (Perth, Australia), Google, and the University
of Twente, Netherlands.

This project builds on previous work published by Weiss et al 2018
([doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)).
Weiss et al (2018) utilised datasets for roads
(comprising the first ever global-scale use of Open Street Map and Google
roads datasets), railways, rivers, lakes, oceans, topographic conditions
(slope and elevation), landcover types, and national borders. These
datasets were each allocated a speed or speeds of travel in terms of time
to cross each pixel of that type. The datasets were then combined to
produce a "friction surface": a map where every pixel is allocated a
nominal overall speed of travel based on the types occurring within that
pixel. For the current project, an updated friction surface was created to
incorporate recent improvements within OSM roads data.

Least-cost-path algorithms (run in Google Earth Engine and, for
high-latitude areas, in R) were used in conjunction with this friction
surface to calculate the time of travel from all locations to the nearest
(in time) healthcare facility. The healthcare facilities dataset utilized
location data from two of the largest global databases: (1) OSM data that
was collated and made available for download at
[www.healthsites.io](https://www.healthsites.io/); and (2) data
extracted from Google Maps. The global datasets were augmented with
continental-scale facility locations that were recently published for
Africa and Australia. To facilitate comparisons between data sources, only
facilities defined as hospitals and clinics were used. Multiple points
found within the same pixel were merged to match the resolution of the
analysis as defined by the selected gridded representation of the Earth's
surface. Each pixel in the resultant accessibility map thus represents the
modelled shortest time (in minutes) from that location to a hospital or
clinic.

Source dataset credits are as described in the accompanying paper.

## Coverage and time range

- Coverage: Spatial: global land (85°N to 60°S); temporal: 2019; resolution: 927.67 m.
- Time range: 2019-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| accessibility | Travel time to the nearest hospital or clinic. | 927.67 |  |
| accessibility_walking_only | Travel time to the nearest hospital or clinic using non-motorized transport. | 927.67 |  |

## What you can use it for

- Assess healthcare accessibility and equity.
- Inform health-facility siting and emergency planning.
- Analyse care-seeking travel times for vulnerable populations.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('Oxford/MAP/accessibility_to_healthcare_2019');
```

- Earth Engine ID: `Oxford/MAP/accessibility_to_healthcare_2019`
- Providers: Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_accessibility_to_healthcare_2019

## License and citation

- License: CC-BY-4.0
- Keywords: accessibility, jrc, map, oxford, population, twente
- 数据引用：D.J. Weiss, A. Nelson, C.A. Vargas-Ruiz, K. Gligori&cacute;, S. Bavadekar,
E. Gabrilovich, A. Bertozzi-Villa, J. Rozier, H.S. Gibson, T. Shekel,
C. Kamath, A. Lieber, K. Schulman, Y. Shao, V. Qarkaxhija, A.K. Nandi,
S.H. Keddie, S. Rumisha, E. Cameron, K.E. Battle, S. Bhatt, P.W. Gething.
Global maps of travel time to healthcare facilities. Nature Medicine (2020).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Accessibility to Cities 2015 [deprecated]](/pages/17a7017f/)
- [Global Friction Surface 2015 [deprecated]](/pages/b510ae4f/)
- [Global Friction Surface 2019 [deprecated]](/pages/67001827/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
