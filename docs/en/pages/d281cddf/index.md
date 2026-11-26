---
title: "GRACE Monthly Mass Grids Release 06 Version 04 - Land"
date: 2026-11-03 12:00:00
---

# GRACE Monthly Mass Grids Release 06 Version 04 - Land

Original name: GRACE Monthly Mass Grids Release 06 Version 04 - Land

## What this dataset is

The monthly land mass grids contain water mass anomalies given as equivalent
water thickness derived from GRACE & GRACE-FO time-variable gravity
observations during the specified timespan, and relative to the specified
time-mean reference period. The equivalent water thickness represents the
total terrestrial water storage anomalies from soil moisture, snow, surface
water (incl. rivers, lakes, reservoirs etc.), as well as groundwater and
aquifers. A glacial isostatic adjustment (GIA) correction has been applied,
and standard corrections for geocenter (degree-1), C20 (degree-20) and
C30 (degree-30) are incorporated. Post-processing filters have been applied
to reduce correlated errors. Version 04 (v04) of the terrestrial water
storage data uses updated and consistent C20 and Geocenter corrections
(i.e., Technical Notes TN-14 and TN-13), as well as an ellipsoidal
correction to account for the non-spherical shape of the Earth when mapping
gravity anomalies to surface mass change.

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
| uncertainty_csr | Error estimation by CSR. | 111320 |  |
| uncertainty_gfz | Error estimation by GFZ. | 111320 |  |
| uncertainty_jpl | Error estimation by JPL. | 111320 |  |

## What you can use it for

- Terrestrial water storage change monitoring
- Ice sheet and glacier mass balance
- Groundwater and sea level research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/LAND');
```

- Earth Engine ID: `NASA/GRACE/MASS_GRIDS_V04/LAND`
- Providers: NASA Jet Propulsion Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_LAND

## License and citation

- License: proprietary
- Keywords: crs, gfz, grace, gravity, jpl, land, mass, nasa, surface-ground-water, tellus, water
- 数据引用：Felix Landerer. 2021. TELLUS_GRAC_L3_JPL_RL06_LND_v04. Ver. RL06 v04.
PO.DAAC, CA, USA. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-3AJ64](https://doi.org/10.5067/TELND-3AJ64).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)
- [GRACE Monthly Mass Grids - Global Mascons [deprecated]](/pages/5bc9dcc7/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
