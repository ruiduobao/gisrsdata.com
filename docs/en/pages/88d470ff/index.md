---
title: "Earth Surface Mineral Dust Source Investigation- Methane Enhancement"
date: 2026-11-03 12:00:00
---

# Earth Surface Mineral Dust Source Investigation- Methane Enhancement

Original name: Earth Surface Mineral Dust Source Investigation- Methane Enhancement

## What this dataset is

The EMIT Project is part of the Earth Venture-Instrument (EV-I) Program
directed by the Program Director of the NASA Earth Science Division (ESD).
EMIT is comprised of a VSWIR Infrared Dyson imaging spectrometer adapted for
installation on the International Space Station (ISS). EMIT measures
radiance between 380 and 2500 nanometers, with an approximate 7 nm bandpass.
Data are collected in a swath that is approximately 75 km wide at the
equator, with an approximate ground sampling distance of 60 m. See the
provider's [NASA EMIT Overview](https://lpdaac.usgs.gov/documents/1695/EMIT_L2B_GHG_User_Guide_V1.pdf)
for more details.

EMIT was a particularly useful tool for mapping out greenhouse gases,
including methane, carbon dioxide, and water vapor. This is consistent with
previous findings from airborne data, but global nature, revisit frequency
and wide swath of EMIT provided an unprecedented opportunity to investigate
greenhouse gas retrievals.

The EMIT Level 2B Methane Enhancement Data (EMITL2BCH4ENH) Version 1 data
product is a total vertical column enhancement estimate of methane in parts
per million meter (ppm m) based on an adaptive matched filter approach.
EMITL2BCH4ENH provides per-pixel methane enhancement data used to identify
methane plume complexes. The initial release of the EMITL2BCH4ENH data
product will only include granules where methane plume complexes have been
identified.

## Coverage and time range

- Coverage: Coverage: global; time span: 2022 to 2024; resolution: 72,000 m.
- Time range: 2022-08-10 至 2024-11-30

## Resolution and specifications

- Spatial resolution: about 72,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| vertical_column_enhancement | Total vertical column enhancement estimate of methane | 72000 |  |

## What you can use it for

- Greenhouse gas (methane) detection
- Hyperspectral remote sensing research
- Mineral dust source investigation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/EMIT/L2B/CH4ENH');
```

- Earth Engine ID: `NASA/EMIT/L2B/CH4ENH`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2B_CH4ENH

## License and citation

- License: proprietary
- Keywords: atmosphere, daily, emit, methane, nasa
- 数据引用：Green, R., Thorpe, A., Brodrick, P., Chadwick, D., Elder, C.,
Villanueva-Weeks, C., Fahlen, J., Coleman, R., Jensen, D., Olsen-Duvall, W.,
Lundeen, S., Lopez, A., Thompson, D. (2023). EMIT L2B Methane Enhancement
Data 60 m V001 [Data set]. NASA EOSDIS Land Processes Distributed Active
Archive Center. Accessed 2024-02-26 from
[https://doi.org/10.5067/EMIT/EMITL2BCH4ENH.001](https://doi.org/10.5067/EMIT/EMITL2BCH4ENH.001)

- DOI：10.5067/EMIT/EMITL2BCH4ENH.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Earth Surface Mineral Dust Source Investigation- Methane Plume Complexes](/pages/bf7e283f/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)
- [Google Street View Air Quality: High Resolution Air Pollution Mapping in California](/en/pages/4a20302d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
