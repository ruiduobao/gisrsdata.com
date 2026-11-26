---
title: "England 1m Composite DTM/DSM (Environment Agency)"
date: 2026-11-03 12:00:00
---

# England 1m Composite DTM/DSM (Environment Agency)

Original name: England 1m Composite DTM/DSM (Environment Agency)

## What this dataset is

The LIDAR Composite DTM/DSM is a raster terrain model covering ~99% of
England at 1m spatial resolution, produced by the UK Environment Agency in
2022. The model contains 3 bands of terrain data: a Digital Terrain Model
(DTM), a first return Digital Surface Model (DSM), and a last return DSM.

The DTM is produced from the last or only laser pulse returned to the
sensor. Surface objects are removed from the DSM, using bespoke algorithms
and manual editing of the data, to produce a terrain model of just the
surface. The DTM is derived from a combination of EA Time Stamped archive
and National LIDAR Program surveys, which have been merged and re-sampled
to give the best possible coverage. Where repeat surveys have been
undertaken the newest, best resolution data is used. Where data was
resampled a bilinear interpolation was used before being merged. The 2022
LIDAR Composite contains surveys undertaken between 6th June 2000 and 2nd
April 2022.

The first return DSM is produced from the first or only laser pulse returned
to the sensor and includes heights of objects, such as vehicles, buildings
and vegetation, as well as the terrain surface where the first or only
return was the ground. The first return DSM is derived from data captured as
part of the National LIDAR Program between 11 November 2016 and 5th May
2022. This program divided England into ~300 blocks for survey over
continuous winters from 2016 onwards. These surveys are merged together to
create the first return LIDAR composite using a feathering technique along
the overlaps to remove any small differences in elevation between surveys.
Please refer to the data provider's metadata index catalogs which show for
any location which survey was used in the production of the LIDAR composite.
The first return DSM will not match in coverage or extent of the last return
DSM, as the last return DSM composite is produced from both the National
LIDAR Program and Timeseries surveys.

The last return DSM is produced from the last or only laser pulse returned
to the sensor and includes heights of objects, such as vehicles, buildings
and vegetation, as well as the terrain surface. The last return DTM is
derived from a combination of EA Time Stamped archive and National LIDAR
Program surveys, which have been merged and re-sampled to give the best
possible coverage. Where repeat surveys have been undertaken the newest,
best resolution data is used. Where data was resampled a bilinear
interpolation was used before being merged. The 2022 LIDAR Composite
contains surveys undertaken between 6th June 2000 and 2nd April 2022. Please
refer to the data provider's metadata index catalogs which show for any
location which survey was used in the production of the LIDAR composite.

The data is aligned to the OS National grid and presented in metres,
referenced to Ordinance Survey Newlyn and using the OSTN'15 transformation
method. All individual LIDAR surveys going into the production of the
composites had a vertical accuracy of +/-15cm root-mean-square error.

## Coverage and time range

- Coverage: Spatial: England (about 99%); temporal: surveys 2000 to 2022 composited; resolution: 1 m.
- Time range: 2000-06-06 至 2022-04-02

## Resolution and specifications

- Spatial resolution: about 1 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| dtm | Digital Terrain Model | 1 |  |
| dsm_first | First Return Digital Surface Model | 1 |  |
| dsm_last | Last Return Digital Surface Model | 1 |  |

## What you can use it for

- High-accuracy terrain and flood modelling for England.
- Extract building and vegetation heights.
- A 1 m elevation base for engineering and planning.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('UK/EA/ENGLAND_1M_TERRAIN/2022');
```

- Earth Engine ID: `UK/EA/ENGLAND_1M_TERRAIN/2022`
- Providers: UK Environment Agency, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UK_EA_ENGLAND_1M_TERRAIN_2022

## License and citation

- License: proprietary
- Keywords: dem, elevation, elevation-topography, lidar
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [GHSL: Global building volume 1975-2030 (P2023A)](/en/pages/a37f30e2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
