---
title: "GRACE Monthly Mass Grids - Global Mascons [deprecated]"
date: 2026-11-03 12:00:00
---

# GRACE Monthly Mass Grids - Global Mascons [deprecated]

Original name: GRACE Monthly Mass Grids - Global Mascons [deprecated]

## What this dataset is

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

The GRACE Tellus (GRCTellus) Global Mascon dataset
is based on Level-1 GRACE observations and processed
at NASA Jet Propulsion Laboratory (JPL).

This dataset uses a-priori constraints in space and time to
estimate global, monthly gravity fields in terms of equal-area
3&deg;x3&deg; spherical cap mass concentration (mascon) functions to minimize the
effect of measurement errors. No additional empirical destriping
filter has been applied to the data. This results in better S/N
ratios of the mascon fields compared to the conventional
spherical-harmonic solutions.

**Note**

* Mascons which lie on coastlines contain mixed land and ocean signals.
  A version of this dataset with the Coastline Resolution Improvement
  (CRI) filter applied to separate the land and ocean portions of mass
  within each land/ocean mascon in a post-processing step. This
  dataset is available at
  [NASA/GRACE/MASS_GRIDS/MASCON_CRI](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON_CRI).

* The data are represented on a 1/2 degree lon-lat grid, but they
  represent the 3x3 degree equal-area caps, which is the current
  native resolution of JPL-RL05M.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2017; resolution: 55,660 m.
- Time range: 2002-03-31 至 2017-05-22

## Resolution and specifications

- Spatial resolution: about 55,660 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| lwe_thickness | Equivalent liquid water thickness in centimeters. | 55660 |  |
| uncertainty | 1-sigma uncertainty for each 3-degree mascon estimate. The provided estimates of uncertainty are regarded to be conservative. See the provider's [Error & Uncertainty Estimates section](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/) | 55660 |  |

## What you can use it for

- Terrestrial water storage change monitoring
- Ice sheet and glacier mass balance
- Groundwater and sea level research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/MASCON');
```

- Earth Engine ID: `NASA/GRACE/MASS_GRIDS/MASCON`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON

## License and citation

- License: proprietary
- Keywords: grace, gravity, jpl, mascon, mass, nasa, surface-ground-water, tellus, water
- 数据引用：D.N. Wiese. 2015. GRACE monthly global water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA.. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-OCL05](https://doi.org/10.5067/TEMSC-OCL05).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
