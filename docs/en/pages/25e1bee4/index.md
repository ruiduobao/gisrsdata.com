---
title: "GRACE Monthly Mass Grids - Ocean EOFR"
date: 2026-11-03 12:00:00
---

# GRACE Monthly Mass Grids - Ocean EOFR

Original name: GRACE Monthly Mass Grids - Ocean EOFR

## What this dataset is

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

This dataset is a filtered version of the GRACE Tellus (GRCTellus)
Ocean dataset. The 'EOFR' bottom pressure (OBP) grids are obtained by
projecting the data from the regular GRC Ocean grids product
onto the Empirical Orthogonal Functions (EOFs) of the
Ocean Model for Circulation and Tides (OMCT). This effectively
filters out signals in the GRACE data that are inconsistent
with the physics and OBP variations in the OMCT ocean model.

The EOFR filtered reconstructed OBP fields agree
better with radar altimetric sea surface height,
reduce leakage around ice sheets and glaciers, and reduce
noise in the mid latitudes where OBP variability is lower.
[(Chambers and Willis, 2010)](https://doi.org/10.1175/2010JTECHO738.1)

**Note**

* The GRCTellus Ocean datasets are optimized to examine regional
  ocean bottom pressure, but NOT intended to be spatially
  averaged to determine global mean ocean mass.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2016; resolution: 111,320 m.
- Time range: 2002-12-31 至 2016-12-10

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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/OCEAN_EOFR');
```

- Earth Engine ID: `NASA/GRACE/MASS_GRIDS/OCEAN_EOFR`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_OCEAN_EOFR

## License and citation

- License: proprietary
- Keywords: crs, gfz, grace, gravity, jpl, mass, nasa, oceans, tellus, water
- 数据引用：D.P. Chambers. 2012. GRACE MONTHLY OCEAN MASS GRIDS NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at [doi:10.5067/TEOCN-0N005](https://doi.org/10.5067/TEOCN-0N005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GRACE Monthly Mass Grids Release 06 Version 04 - Ocean](/pages/de20d64c/)
- [GRACE Monthly Mass Grids - Ocean [deprecated]](/pages/bb65f4de/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
