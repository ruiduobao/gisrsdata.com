---
title: "GRACE Monthly Mass Grids - Ocean [deprecated]"
date: 2026-11-03 12:00:00
---

# GRACE Monthly Mass Grids - Ocean [deprecated]

Original name: GRACE Monthly Mass Grids - Ocean [deprecated]

## What this dataset is

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

The GRACE Tellus (GRCTellus) Monthly Mass Grids Ocean dataset is produced
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

* Land leakage correction: Ocean signals are typically weaker
  than land signals, by factors of 2 and more, on seasonal and
  interannual time scales. To minimize leakage from high land
  signals onto ocean signals, a destriping filter has been applied
  which may cause cause correlations over much larger distances.

* The GRCTellus Ocean datasets are optimized to examine regional
  ocean bottom pressure, but NOT intended to be spatially
  averaged to determine global mean ocean mass.

* A filtered version of the  GRCTellus Ocean dataset is also available
  which uses an alternative filtering method which may reduce leakage
  errors, and have results which agree better with altimetric sea surface
  height. [NASA/GRACE/MASS_GRIDS/OCEAN_EOFR](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_OCEAN_EOFR).

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2016; resolution: 111,320 m.
- Time range: 2002-07-31 至 2016-12-10

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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/OCEAN');
```

- Earth Engine ID: `NASA/GRACE/MASS_GRIDS/OCEAN`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_OCEAN

## License and citation

- License: proprietary
- Keywords: crs, gfz, grace, gravity, jpl, mass, nasa, ocean, oceans, tellus, water
- 数据引用：D.P. Chambers. 2012. GRACE MONTHLY OCEAN MASS GRIDS NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at [https://doi.org/10.5067/TEOCN-0N005](https://doi.org/10.5067/TEOCN-0N005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GRACE Monthly Mass Grids - Ocean EOFR](/pages/25e1bee4/)
- [GRACE Monthly Mass Grids Release 06 Version 04 - Ocean](/pages/de20d64c/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
