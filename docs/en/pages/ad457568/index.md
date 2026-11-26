---
title: "MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km"
date: 2026-11-03 12:00:00
---

# MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km

Original name: MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km

## What this dataset is

The MOD16A2 V105 product provides information about
8-day global terrestrial evapotranspiration at 1km pixel resolution.
Evapotranspiration (ET) is the sum of evaporation and plant transpiration
from the Earth's surface to the atmosphere. With long-term ET
data, the effects of changes in climate, land use, and ecosystems
disturbances can be quantified.

The MOD16A2 product is produced by the Numerical Terradynamic Simulation
Group [NTSG](https://www.ntsg.umt.edu/),
University of Montana (UMT) in conjunction with NASA Earth Observing
System. For more details about the algorithm used see the [algorithm
theoretical basis document](https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1267&context=ntsg_pubs).

* The period of coverage is 8 days with the exception of
the last period at the end of the year which is either 5 or 6 days.
ET/PET units are 0.1mm/5-day for December 27-31 of 2001, 2002,
2003, 2005, 2006, 2007, 2009, 2010, and 0.1mm/6-day for December
26-31 of 2000, 2004, 2008 (leap years).

** For some pixels in African
rainforest, the MODIS albedo data from MCD43B2/MCD43B3 have no
cloud-free data throughout an entire year. As a result, pixels
for that year in all data bands are masked out.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2014; resolution: 1 km.
- Time range: 2000-01-01 至 2014-12-27

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ET | Evapotranspiration, aggregated for period of coverage. | 1000 |  |
| LE | Latent heat flux, averaged daily over the period of coverage. | 1000 |  |
| PET | Potential evapotranspiration, aggregated for period of coverage. | 1000 |  |
| PLE | Potential Latent Heat Flux, averaged daily over the period ofcoverage. | 1000 |  |
| ET_QC | ET quality control. | 1000 |  |

## What you can use it for

- Evapotranspiration and water resources assessment
- Drought monitoring
- Irrigation management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/NTSG/MOD16A2/105');
```

- Earth Engine ID: `MODIS/NTSG/MOD16A2/105`
- Providers: Numerical Terradynamic Simulation Group, The University of Montana, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_NTSG_MOD16A2_105

## License and citation

- License: proprietary
- Keywords: 8-day, evapotranspiration, global, mod16a2, modis, water-vapor
- 数据引用：Qiaozhen Mu, Maosheng Zhao, Steven W. Running and Numerical Terradynamic
Simulation Group (2014): MODIS Global Terrestrial Evapotranspiration
(ET) Product MOD16A2 Collection 5.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
