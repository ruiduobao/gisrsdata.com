---
title: "GRACE Monthly Mass Grids - Land [deprecated]"
date: 2026-11-03 12:00:00
---

# GRACE Monthly Mass Grids - Land [deprecated]

Original name: GRACE Monthly Mass Grids - Land [deprecated]

## What this dataset is

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

The GRACE Tellus (GRCTellus) Monthly Mass Grids dataset is produced
by three centers: CSR (U. Texas / Center for Space Research),
GFZ (GeoForschungsZentrum Potsdam), and JPL
(NASA Jet Propulsion Laboratory). Each center is a part
of the GRACE Ground System and generates Level-2 data
(spherical harmonic fields) used in this dataset.
The output includes spherical harmonic coefficients
of the gravity field and of the dealiasing fields used to compute them.
Since each center independently produces the coefficients, the results
may be slightly different. It is recommended for most users to
use the mean of all three datasets. See the provider's [choosing a
solution](https://grace.jpl.nasa.gov/data/choosing-a-solution/) page
for more details.

**Note**

* Due to the sampling and post-processing of GRACE observations,
  surface mass variations at small spatial scales tend to be attenuated.
  Therefore, users should multiply the GRCTellus Land data by the
  scaling grid available at
  [NASA/GRACE/MASS_GRIDS/LAND_AUX_2014](https://code.earthengine.google.com/?asset=NASA/GRACE/MASS_GRIDS/LAND_AUX_2014).

* The GRCTellus Land grids processed from the Spherical Harmonic
  Level-2 data are not suited to accurately quantify ice mass
  changes over Greenland or Antarctica, or glaciers and ice caps.
  For those areas it is recommended to use JPL's mascon
  solution available as the following image collection:
  [NASA/GRACE/MASS_GRIDS/MASCON](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON)

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2017; resolution: 111,320 m.
- Time range: 2002-04-01 至 2017-01-07

## Resolution and specifications

- Spatial resolution: about 111,320 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| lwe_thickness_csr | Equivalent liquid water thickness in centimeters calculated by CSR. | 111320 |  |
| lwe_thickness_gfz | Equivalent liquid water thickness in centimeters calculated by GFZ. | 111320 |  |
| lwe_thickness_jpl | Equivalent liquid water thickness in centimeters calculated by JPL. | 111320 |  |

## What you can use it for

- Terrestrial water storage change monitoring
- Ice sheet and glacier mass balance
- Groundwater and sea level research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/LAND');
```

- Earth Engine ID: `NASA/GRACE/MASS_GRIDS/LAND`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_LAND

## License and citation

- License: proprietary
- Keywords: crs, gfz, grace, gravity, jpl, land, mass, nasa, surface-ground-water, tellus, water
- 数据引用：S.C. Swenson. 2012. GRACE monthly land water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-NC005](https://doi.org/10.5067/TELND-NC005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
