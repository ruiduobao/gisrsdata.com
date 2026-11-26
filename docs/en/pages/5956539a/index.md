---
title: "Sentinel-5P OFFL L3 Ozone (O3)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Ozone (O3)

Original name: Sentinel-5P OFFL O3: Offline Ozone

## What this dataset is

This dataset provides offline high-resolution imagery of total column ozone concentrations. See also COPERNICUS/S5P/OFFL/L3_O3_TCL for the tropospheric column data.

In the stratosphere, the ozone layer shields the biosphere from dangerous solar ultraviolet radiation. In the troposphere, it acts as an efficient cleansing agent, but at high concentration it also becomes harmful to the health of humans, animals, and vegetation. Ozone is also an important greenhouse-gas contributor to ongoing climate change. Since the discovery of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol regulating the production of chlorine-containing ozone-depleting substances, ozone has been routinely monitored from the ground and from space.

For this product, there are two algorithms that deliver total ozone: GDP for the near real-time and GODFIT for the offline products. GDP is currently being used for generating the operational total ozone products from GOME, SCIAMACHY and GOME-2, while GODFIT is being used in the ESA CCI and the Copernicus C3S projects. [More information.](https://www.tropomi.eu/data-products/ozone-total-column) [Product user manual](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Total-Column)

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2018-09-08 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| O3_column_number_density | Total atmospheric column of O<sub>3</sub> between the surface and the top of atmosphere, calculated with the [GODfit algorithm](http://adsabs.harvard.edu/full/2005ESASP.572E.204S). | 1113.2 |  |
| O3_effective_temperature | Ozone cross section effective temperature | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220. | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'O3_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__O3_____20181005T225147_20181006T003317_05073_01_010102_20181012T001415.nc
grid_info.h5
```

## What you can use it for

- Total ozone and ozone-hole monitoring
- UV exposure assessment
- Stratospheric ozone trend studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_O3`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_O3

## License and citation

- License: proprietary
- Keywords: air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
