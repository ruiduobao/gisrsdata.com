---
title: "MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m"
date: 2026-11-03 12:00:00
---

# MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m

Original name: MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m

## What this dataset is

MOD10A2 is a snow cover dataset from the MODIS on the Terra satellite.
The dataset reports the maximum snow cover extent during an eight-day
period at the resolution of 500 m.

An eight-day compositing period was chosen because that is the exact ground
track repeat period of the Terra and Aqua platforms. Snow cover over eight
days is mapped as maximum snow extent in one SDS and as a chronology of
observations in the other SDS. Eight-day periods begin on the first day of
the year and extend into the next year. The product can be produced with
two to eight days of input. There may not always be eight days of input,
because of various reasons, so the user should check the attributes to
determine on what days observations were obtained.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 500 m.
- Time range: 2000-02-18 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Maximum_Snow_Extent | Maximum snow extent observed over an eight-day period. | 500 |  |
| Eight_Day_Snow_Cover | Snow chronology bit flags for each day in the eight-day observation period. | 500 |  |

## What you can use it for

- Snow cover monitoring and mapping
- Hydrology and climate research
- Snow albedo analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD10A2');
```

- Earth Engine ID: `MODIS/061/MOD10A2`
- Providers: NASA NSIDC DAAC at CIRES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD10A2
* [General documentation](https://doi.org/10.5067/MODIS/MOD10A2.061)
* [User's Guide]( https://modis-snow-ice.gsfc.nasa.gov/uploads/snow_user_guide_C6.1_final_revised_april.pdf),

## License and citation

- License: proprietary
- Keywords: cryosphere, daily, geophysical, global, modis, nasa, nsidc, snow, terra
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MOD10A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD10A1.061 Terra Snow Cover Daily Global 500m](/pages/63afd45f/)
- [MYD10A1.061 Aqua Snow Cover Daily Global 500m](/pages/fb16b7df/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
