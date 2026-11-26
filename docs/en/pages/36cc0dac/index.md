---
title: "RGE ALTI: IGN RGE ALTI Digital Elevation 1m"
date: 2026-11-03 12:00:00
---

# RGE ALTI: IGN RGE ALTI Digital Elevation 1m

Original name: RGE ALTI: IGN RGE ALTI Digital Elevation 1m

## What this dataset is

The RGE ALTI dataset describes the digital elevation model (DEM) of France
with the pixel size of 1m.  It was created from surveys obtained by airborne
lidar or by correlation of aerial images.

Lidar was deployed for flood-prone, coastal, and large forest
areas. The vertical accuracy of the DEM in these areas is between
0.2m and 0.5m. Radar was used in mountain areas (Alps, Pyrenees,
Cevennes, Corsica). Caution: in areas with steep slopes, the average
vertical accuracy is the order of 7m.

The accuracy of these fields has been checked against various sources:
the road and hydrographic networks of the
[BD TOPO](https://geoservices.ign.fr/bdtopo), geodetic terminals and
points calculated on the ground.

Aerial photo correlation techniques are used in the rest of the territory.
On certain zones treated by correlation, ground measurements are absent
over large extents due to the presence of vegetation
(wooded areas, for example). 1987-2001 altimetry data (BD Alti) are used
to fill these gaps. The vertical accuracy of the DEM on these areas
is between 0.5m and 0.7m.

Currently the collection includes a single image IGN/RGE_ALTI/1M/2_0/FXX
showing metropolitan France.

This dataset was prepared and ingested with the support of Guillaume Attard
and Julien Bardonnet ([AGEOCE](https://www.ageoce.com)).
The preparation process is
[described here](https://medium.com/@gui.attard/pre-processing-the-dem-of-france-rge-alti-5m-for-implementation-into-earth-engine-de9a0778e0d9).

See also:
[user's guide](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf).

## Coverage and time range

- Coverage: Metropolitan France
- Time range: 2009-01-01 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 1 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| MNT | Terrain elevation in meters. | 1 |  |
| SRC | The main source of the data used to calculate the altitude of the node. See Appendix B page 26 in the [user guide](https://geoservices.ign.fr/sites/default/files/2021-07/DC_RGEALTI_2-0.pdf). | 1 |  |
| DST | The distance in meters between the node and the nearest point used to calculate its altitude. | 1 |  |

## What you can use it for

- 1 m high-resolution terrain analysis
- Flood risk mapping
- Hydrological modelling

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('IGN/RGE_ALTI/1M/2_0');
```

- Earth Engine ID: `IGN/RGE_ALTI/1M/2_0`
- Providers: IGN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IGN_RGE_ALTI_1M_2_0

## License and citation

- License: etalab-2.0
- Keywords: dem, elevation, elevation-topography, geophysical
- 数据引用：IGN (2021). RGE ALTI 1m [Data set]. Accessed 2022-07-01 from
[IGN website](https://geoservices.ign.fr/rgealti#telechargement1m)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [SRTM Digital Elevation Data Version 4](/en/pages/81d193ff/)
- [Global ALOS Topographic Diversity](/en/pages/14e817f0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
