---
title: "MYD17A3H.006: Aqua Net Primary Production Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD17A3H.006: Aqua Net Primary Production Yearly Global 500m [deprecated]

Original name: MYD17A3H.006: Aqua Net Primary Production Yearly Global 500m [deprecated]

## What this dataset is

The MYD17A3H V6 product provides information about
annual Net Primary Productivity (NPP) at 500m pixel resolution.
 Annual NPP is derived from the sum of the 45 8-day Net Photosynthesis
(PSN) products (MYD17A2H) from the given year.  The PSN value
is the difference of the GPP and the Maintenance Respiration
(MR) (GPP-MR).

This is a NASA version of this product. Another
version is produced by the Numerical Terradynamic Simulation
Group ([NTSG](https://www.ntsg.umt.edu)), University of Montana
(UMT).  The NTSG version corrects the problem with cloud-contaminated
MODIS LAI-FPAR inputs to the MOD17 algorithm, but its resolution
is 1km. It is ingested into Earth Engine as MODIS/055/MOD17A3.

For further details regarding the differences between the NTSG
and NASA versions of this product, please consult [this document
](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf).

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2014; resolution: 500 m.
- Time range: 2002-01-01 至 2014-01-01

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Npp | Net primary productivity | 500 |  |
| Npp_QC | Quality control bits | 500 |  |

## What you can use it for

- Primary productivity and carbon cycle research
- Ecosystem modeling
- Vegetation productivity monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MYD17A3H');
```

- Earth Engine ID: `MODIS/006/MYD17A3H`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD17A3H

## License and citation

- License: proprietary
- Keywords: aqua, global, gpp, modis, myd17a3, nasa, npp, photosynthesis, plant-productivity, productivity, psn, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD17A3H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
