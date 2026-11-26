---
title: "Sentinel-5P OFFL L3 Cloud Properties (CLOUD)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Cloud Properties (CLOUD)

Original name: Sentinel-5P OFFL CLOUD: Offline Cloud Properties

## What this dataset is

This dataset provides offline high-resolution imagery of cloud parameters.

The TROPOMI/S5P cloud properties retrieval is based on the OCRA and ROCINN algorithms currently being used in the operational GOME and GOME-2 products. OCRA retrieves the cloud fraction using measurements in the UV/VIS spectral regions and ROCINN retrieves the cloud height (pressure) and optical thickness (albedo) using measurements in and around the oxygen A-band at 760 nm. Version 3.0 of the algorithms are used, which are based on a more realistic treatment of clouds as optically uniform layers of light-scattering particles. Additionally, the cloud parameters are also provided for a cloud model which assumes the cloud to be a Lambertian reflecting boundary. [More information.](http://www.tropomi.eu/data-products/cloud)

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere).

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2018-07-04 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| cloud_fraction | Retrieved effective radiometric cloud fraction | 1113.2 |  |
| cloud_top_pressure | Retrieved atmospheric pressure at the level of cloud top | 1113.2 |  |
| cloud_top_height | Retrieved altitude of the cloud top | 1113.2 |  |
| cloud_base_pressure | Cloud base pressure | 1113.2 |  |
| cloud_base_height | Cloud base height | 1113.2 |  |
| cloud_optical_depth | Retrieved cloud optical depth | 1113.2 |  |
| surface_albedo | Surface albedo | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'cloud_fraction>50;derive(datetime_stop {time})'
S5P_OFFL_L2__CLOUD__20180705T095218_20180705T113348_03760_01_010000_20180712T082510.nc
grid_info.h5
```

## What you can use it for

- Cloud fraction, height and optical depth for atmospheric retrievals
- Screening cloudy pixels in trace-gas analysis
- Cloud climatology at high spatial resolution

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CLOUD');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_CLOUD`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CLOUD

## License and citation

- License: proprietary
- Keywords: atmosphere, cloud, copernicus, dlr, esa, eu, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Tropospheric Ozone (O3_TCL)](/en/pages/469453b0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
